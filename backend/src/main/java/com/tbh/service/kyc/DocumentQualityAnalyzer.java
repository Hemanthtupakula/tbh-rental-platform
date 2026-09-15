package com.tbh.service.kyc;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;

/**
 * Document Quality Check:
 * Analyzes uploaded driving licence image quality characteristics:
 * - valid image readability
 * - minimum acceptable dimensions
 * - corruption check
 * - non-blank / contrast indicators
 * 
 * IMPORTANT: Named "Document Quality Check", NOT "Authenticity Check".
 */
@Component
public class DocumentQualityAnalyzer {

    private static final Logger log = LoggerFactory.getLogger(DocumentQualityAnalyzer.class);

    public enum QualityResult {
        GOOD,
        WARNING,
        FAILED
    }

    public static class QualityReport {
        private final QualityResult result;
        private final String message;
        private final int width;
        private final int height;

        public QualityReport(QualityResult result, String message, int width, int height) {
            this.result = result;
            this.message = message;
            this.width = width;
            this.height = height;
        }

        public QualityResult getResult() { return result; }
        public String getMessage() { return message; }
        public int getWidth() { return width; }
        public int getHeight() { return height; }
    }

    public QualityReport analyzeImage(File file) {
        if (file == null || !file.exists() || file.length() == 0) {
            return new QualityReport(QualityResult.FAILED, "Image file does not exist or is empty.", 0, 0);
        }

        try {
            BufferedImage image = ImageIO.read(file);
            if (image == null) {
                return new QualityReport(QualityResult.FAILED, "Unsupported or corrupted image format.", 0, 0);
            }
            return evaluateBufferedImage(image);
        } catch (Exception e) {
            log.warn("[QUALITY CHECK] Failed to inspect image file: {}", e.getMessage());
            return new QualityReport(QualityResult.FAILED, "Image reading error: " + e.getMessage(), 0, 0);
        }
    }

    public QualityReport analyzeImage(MultipartFile multipartFile) {
        if (multipartFile == null || multipartFile.isEmpty()) {
            return new QualityReport(QualityResult.FAILED, "No file uploaded.", 0, 0);
        }

        try {
            byte[] bytes = multipartFile.getBytes();
            BufferedImage image = ImageIO.read(new ByteArrayInputStream(bytes));
            if (image == null) {
                return new QualityReport(QualityResult.FAILED, "Unsupported or corrupted image format.", 0, 0);
            }
            return evaluateBufferedImage(image);
        } catch (Exception e) {
            log.warn("[QUALITY CHECK] Failed to inspect multipart file: {}", e.getMessage());
            return new QualityReport(QualityResult.FAILED, "Image reading error: " + e.getMessage(), 0, 0);
        }
    }

    private QualityReport evaluateBufferedImage(BufferedImage image) {
        int width = image.getWidth();
        int height = image.getHeight();

        // Minimum dimensions: at least 200x150 for basic readability
        if (width < 200 || height < 150) {
            return new QualityReport(QualityResult.FAILED, "Image resolution is too low (" + width + "x" + height + "). Minimum 200x150 required.", width, height);
        }

        if (width < 400 || height < 300) {
            return new QualityReport(QualityResult.WARNING, "Image resolution is relatively low (" + width + "x" + height + "). Extraction may be difficult.", width, height);
        }

        // Basic blank image detection (sampling pixel luminance)
        long totalLuminance = 0;
        int sampleStep = Math.max(1, Math.min(width, height) / 20);
        int sampleCount = 0;

        for (int y = 0; y < height; y += sampleStep) {
            for (int x = 0; x < width; x += sampleStep) {
                int rgb = image.getRGB(x, y);
                int r = (rgb >> 16) & 0xFF;
                int g = (rgb >> 8) & 0xFF;
                int b = rgb & 0xFF;
                int lum = (r * 299 + g * 587 + b * 114) / 1000;
                totalLuminance += lum;
                sampleCount++;
            }
        }

        if (sampleCount > 0) {
            double avgLum = (double) totalLuminance / sampleCount;
            // Extremely dark (< 10) or completely bleached white (> 250)
            if (avgLum < 10) {
                return new QualityReport(QualityResult.FAILED, "Image is excessively dark / unreadable.", width, height);
            }
            if (avgLum > 250) {
                return new QualityReport(QualityResult.FAILED, "Image is completely washed out / white.", width, height);
            }
        }

        return new QualityReport(QualityResult.GOOD, "Document image quality check passed.", width, height);
    }
}
