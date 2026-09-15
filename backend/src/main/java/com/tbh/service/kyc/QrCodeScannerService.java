package com.tbh.service.kyc;

import com.google.zxing.BinaryBitmap;
import com.google.zxing.MultiFormatReader;
import com.google.zxing.NotFoundException;
import com.google.zxing.Result;
import com.google.zxing.client.j2se.BufferedImageLuminanceSource;
import com.google.zxing.common.HybridBinarizer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;

/**
 * QR Code Scanner Service:
 * Assistive QR detection and decoding using ZXing.
 * 
 * CRITICAL PRIVACY & SECURITY RULES:
 * - Assistive check only.
 * - Raw QR payload is NEVER stored in database.
 * - Raw QR payload is NEVER returned to frontend.
 * - Never claims QR decoding proves authenticity.
 */
@Service
public class QrCodeScannerService {

    private static final Logger log = LoggerFactory.getLogger(QrCodeScannerService.class);

    public enum QrStatus {
        QR_DETECTED,
        QR_NOT_DETECTED,
        QR_UNREADABLE,
        QR_CHECK_NOT_AVAILABLE
    }

    public static class QrScanResult {
        private final QrStatus status;
        private final boolean detected;
        private final String barcodeFormat;

        public QrScanResult(QrStatus status, boolean detected, String barcodeFormat) {
            this.status = status;
            this.detected = detected;
            this.barcodeFormat = barcodeFormat;
        }

        public QrStatus getStatus() { return status; }
        public boolean isDetected() { return detected; }
        public String getBarcodeFormat() { return barcodeFormat; }
    }

    public QrScanResult scanQrCode(File imageFile) {
        if (imageFile == null || !imageFile.exists() || imageFile.length() == 0) {
            return new QrScanResult(QrStatus.QR_NOT_DETECTED, false, null);
        }

        try {
            BufferedImage bufferedImage = ImageIO.read(imageFile);
            if (bufferedImage == null) {
                return new QrScanResult(QrStatus.QR_UNREADABLE, false, null);
            }

            BufferedImageLuminanceSource source = new BufferedImageLuminanceSource(bufferedImage);
            BinaryBitmap bitmap = new BinaryBitmap(new HybridBinarizer(source));
            MultiFormatReader reader = new MultiFormatReader();

            Result result = reader.decode(bitmap);
            if (result != null) {
                String format = result.getBarcodeFormat() != null ? result.getBarcodeFormat().name() : "QR_CODE";
                log.info("[QR SERVICE] Assistive QR code detected on document (Format: {}). Raw payload discarded per privacy policy.", format);
                return new QrScanResult(QrStatus.QR_DETECTED, true, format);
            }
        } catch (NotFoundException e) {
            // QR code not found on this image side (normal for many Indian DL cards or front side)
            return new QrScanResult(QrStatus.QR_NOT_DETECTED, false, null);
        } catch (Exception e) {
            log.warn("[QR SERVICE] QR scanning encountered an unreadable block: {}", e.getMessage());
            return new QrScanResult(QrStatus.QR_UNREADABLE, false, null);
        }

        return new QrScanResult(QrStatus.QR_NOT_DETECTED, false, null);
    }
}
