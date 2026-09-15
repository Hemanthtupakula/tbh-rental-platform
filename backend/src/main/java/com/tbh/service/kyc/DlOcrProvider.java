package com.tbh.service.kyc;

import java.io.File;

/**
 * Pluggable OCR Provider Interface:
 * Allows swapping OCR backends (Tesseract CLI, Native Lib, Cloud OCR, etc.)
 */
public interface DlOcrProvider {

    enum OcrStatus {
        OCR_SUCCESS,
        OCR_INCOMPLETE,
        OCR_UNAVAILABLE
    }

    class OcrRawResult {
        private final OcrStatus status;
        private final String rawText;
        private final String engineName;
        private final String message;

        public OcrRawResult(OcrStatus status, String rawText, String engineName, String message) {
            this.status = status;
            this.rawText = rawText;
            this.engineName = engineName;
            this.message = message;
        }

        public OcrStatus getStatus() { return status; }
        public String getRawText() { return rawText; }
        public String getEngineName() { return engineName; }
        public String getMessage() { return message; }
    }

    OcrRawResult extractText(File imageFile);

    boolean isAvailable();

    String getEngineVersion();
}

