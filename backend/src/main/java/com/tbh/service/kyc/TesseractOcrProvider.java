package com.tbh.service.kyc;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.imageio.ImageIO;
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.concurrent.TimeUnit;

/**
 * Real Tesseract OCR Provider:
 * Invokes the configured Tesseract CLI binary with image preprocessing
 * (grayscale + contrast normalization).
 * 
 * Supports configurable executable:
 * - Local Windows: C:\Program Files\Tesseract-OCR\tesseract.exe or tesseract
 * - Linux/Docker: /usr/bin/tesseract
 */
@Component
public class TesseractOcrProvider implements DlOcrProvider {

    private static final Logger log = LoggerFactory.getLogger(TesseractOcrProvider.class);

    @Value("${tbh.tesseract.cmd:${TESSERACT_CMD:tesseract}}")
    private String tesseractCmd;

    private String detectedVersion;
    private Boolean available;

    @Override
    public synchronized boolean isAvailable() {
        if (available != null) {
            return available;
        }

        String cmd = resolveCommand();
        try {
            Process process = new ProcessBuilder(cmd, "--version")
                    .redirectErrorStream(true)
                    .start();

            boolean finished = process.waitFor(5, TimeUnit.SECONDS);
            if (finished && process.exitValue() == 0) {
                try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
                    String line = reader.readLine();
                    this.detectedVersion = (line != null) ? line.trim() : "Tesseract (unknown version)";
                }
                this.available = true;
                log.info("[TESSERACT OCR] Detected working OCR engine: {} using command '{}'", detectedVersion, cmd);
                return true;
            }
        } catch (Exception e) {
            log.warn("[TESSERACT OCR] Engine check failed for command '{}': {}", cmd, e.getMessage());
        }

        // Try standard Windows default fallback if 'tesseract' plain command failed
        if (!cmd.contains("Tesseract-OCR")) {
            File winDefault = new File("C:\\Program Files\\Tesseract-OCR\\tesseract.exe");
            if (winDefault.exists() && winDefault.canExecute()) {
                this.tesseractCmd = winDefault.getAbsolutePath();
                this.available = true;
                this.detectedVersion = "Tesseract OCR (Windows Path)";
                log.info("[TESSERACT OCR] Resolved fallback executable at '{}'", tesseractCmd);
                return true;
            }
        }

        this.available = false;
        log.warn("[TESSERACT OCR] Engine is UNAVAILABLE. All OCR requests will fail-closed with OCR_UNAVAILABLE status.");
        return false;
    }

    @Override
    public String getEngineVersion() {
        if (detectedVersion == null) {
            isAvailable();
        }
        return detectedVersion != null ? detectedVersion : "Unavailable";
    }

    @Override
    public OcrRawResult extractText(File imageFile) {
        if (!isAvailable()) {
            return new OcrRawResult(OcrStatus.OCR_UNAVAILABLE, null, "Tesseract", "Tesseract OCR engine is not available in the current environment.");
        }

        if (imageFile == null || !imageFile.exists() || imageFile.length() == 0) {
            return new OcrRawResult(OcrStatus.OCR_UNAVAILABLE, null, "Tesseract", "Invalid image file provided.");
        }

        File preprocessedFile = null;
        File outputFileBase = null;
        File outputTxtFile = null;

        try {
            // Preprocess image (Grayscale & high-contrast normalization)
            preprocessedFile = preprocessImage(imageFile);
            File targetToScan = (preprocessedFile != null && preprocessedFile.exists()) ? preprocessedFile : imageFile;

            Path tempOutputDir = Files.createTempDirectory("tbh_ocr_out_");
            outputFileBase = new File(tempOutputDir.toFile(), "ocr_output");
            outputTxtFile = new File(tempOutputDir.toFile(), "ocr_output.txt");

            String cmd = resolveCommand();
            // Run tesseract: tesseract <image> <output_base> --oem 1 --psm 6
            ProcessBuilder pb = new ProcessBuilder(
                    cmd,
                    targetToScan.getAbsolutePath(),
                    outputFileBase.getAbsolutePath(),
                    "--psm", "3"
            );
            pb.redirectErrorStream(true);

            Process process = pb.start();
            boolean finished = process.waitFor(15, TimeUnit.SECONDS);

            if (!finished) {
                process.destroyForcibly();
                log.warn("[TESSERACT OCR] Execution timed out after 15 seconds.");
                return new OcrRawResult(OcrStatus.OCR_UNAVAILABLE, null, "Tesseract", "OCR execution timed out.");
            }

            if (outputTxtFile.exists()) {
                String extracted = Files.readString(outputTxtFile.toPath());
                if (extracted != null && !extracted.trim().isEmpty()) {
                    log.info("[TESSERACT OCR] Successfully extracted {} characters of text. Length={}", extracted.length(), extracted.length());
                    return new OcrRawResult(OcrStatus.OCR_SUCCESS, extracted, "Tesseract", "Text extracted successfully.");
                } else {
                    return new OcrRawResult(OcrStatus.OCR_INCOMPLETE, "", "Tesseract", "No legible text found on document.");
                }
            } else {
                return new OcrRawResult(OcrStatus.OCR_INCOMPLETE, "", "Tesseract", "OCR completed without text output.");
            }

        } catch (Exception e) {
            log.error("[TESSERACT OCR] Execution error: {}", e.getMessage());
            return new OcrRawResult(OcrStatus.OCR_UNAVAILABLE, null, "Tesseract", "OCR processing failed: " + e.getMessage());
        } finally {
            if (preprocessedFile != null && preprocessedFile.exists()) {
                try { Files.deleteIfExists(preprocessedFile.toPath()); } catch (Exception ignored) {}
            }
            if (outputTxtFile != null && outputTxtFile.exists()) {
                try { Files.deleteIfExists(outputTxtFile.toPath()); } catch (Exception ignored) {}
            }
            if (outputFileBase != null && outputFileBase.getParentFile() != null) {
                try { Files.deleteIfExists(outputFileBase.getParentFile().toPath()); } catch (Exception ignored) {}
            }
        }
    }

    private File preprocessImage(File original) {
        try {
            BufferedImage src = ImageIO.read(original);
            if (src == null) return null;

            // Convert to grayscale & upscale if small
            int w = src.getWidth();
            int h = src.getHeight();
            double scale = (w < 1000) ? 1.5 : 1.0;
            int newW = (int)(w * scale);
            int newH = (int)(h * scale);

            BufferedImage processed = new BufferedImage(newW, newH, BufferedImage.TYPE_BYTE_GRAY);
            Graphics2D g2d = processed.createGraphics();
            g2d.drawImage(src, 0, 0, newW, newH, null);
            g2d.dispose();

            File temp = File.createTempFile("tbh_ocr_pre_", ".png");
            ImageIO.write(processed, "png", temp);
            return temp;
        } catch (Exception e) {
            log.warn("[TESSERACT OCR] Preprocessing failed; falling back to raw image: {}", e.getMessage());
            return null;
        }
    }

    private String resolveCommand() {
        if (tesseractCmd != null && !tesseractCmd.isBlank()) {
            return tesseractCmd.trim();
        }
        return "tesseract";
    }

    public void setTesseractCmd(String tesseractCmd) {
        this.tesseractCmd = tesseractCmd;
        this.available = null; // reset cached state
    }
}


