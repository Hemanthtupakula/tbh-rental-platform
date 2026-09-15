package com.tbh.service.kyc;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.File;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * DL OCR Extraction Service:
 * Uses an actual DlOcrProvider (e.g. TesseractOcrProvider) to scan the DL image.
 * 
 * CRITICAL ARCHITECTURAL RULE:
 * 1. REAL OCR extracts the text from the image.
 * 2. Regex is ONLY used post-OCR to parse/normalize extracted strings into structured fields.
 * 3. Never claims OCR succeeded when it was unavailable.
 * 4. Sensitive full OCR text is NOT logged or persisted.
 */
@Service
public class DlOcrExtractionService {

    private static final Logger log = LoggerFactory.getLogger(DlOcrExtractionService.class);

    private final DlOcrProvider ocrProvider;

    public static class ExtractedDlData {
        private String rawOcrStatus;
        private String licenseNumber;
        private String name;
        private LocalDate dob;
        private LocalDate issueDate;
        private LocalDate expiryDate;
        private Set<String> vehicleClasses = new TreeSet<>();
        private String issuingState;
        private boolean ocrSuccess;
        private String ocrMessage;

        public String getRawOcrStatus() { return rawOcrStatus; }
        public void setRawOcrStatus(String rawOcrStatus) { this.rawOcrStatus = rawOcrStatus; }

        public String getLicenseNumber() { return licenseNumber; }
        public void setLicenseNumber(String licenseNumber) { this.licenseNumber = licenseNumber; }

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public LocalDate getDob() { return dob; }
        public void setDob(LocalDate dob) { this.dob = dob; }

        public LocalDate getIssueDate() { return issueDate; }
        public void setIssueDate(LocalDate issueDate) { this.issueDate = issueDate; }

        public LocalDate getExpiryDate() { return expiryDate; }
        public void setExpiryDate(LocalDate expiryDate) { this.expiryDate = expiryDate; }

        public Set<String> getVehicleClasses() { return vehicleClasses; }
        public void setVehicleClasses(Set<String> vehicleClasses) { this.vehicleClasses = vehicleClasses; }

        public String getIssuingState() { return issuingState; }
        public void setIssuingState(String issuingState) { this.issuingState = issuingState; }

        public boolean isOcrSuccess() { return ocrSuccess; }
        public void setOcrSuccess(boolean ocrSuccess) { this.ocrSuccess = ocrSuccess; }

        public String getOcrMessage() { return ocrMessage; }
        public void setOcrMessage(String ocrMessage) { this.ocrMessage = ocrMessage; }
    }

    public DlOcrExtractionService(DlOcrProvider ocrProvider) {
        this.ocrProvider = ocrProvider;
    }

    public ExtractedDlData processDocument(File frontImage, File backImage) {
        ExtractedDlData data = new ExtractedDlData();

        if (ocrProvider == null || !ocrProvider.isAvailable()) {
            data.setRawOcrStatus("OCR_UNAVAILABLE");
            data.setOcrSuccess(false);
            data.setOcrMessage("OCR engine (Tesseract) is unavailable in current environment.");
            log.warn("[DL OCR EXTRACTION] OCR engine is unavailable. Marked OCR_UNAVAILABLE.");
            return data;
        }

        // 1. Scan Front Document
        DlOcrProvider.OcrRawResult frontResult = ocrProvider.extractText(frontImage);
        String frontText = (frontResult != null && frontResult.getRawText() != null) ? frontResult.getRawText() : "";

        // 2. Scan Back Document if present
        String backText = "";
        if (backImage != null && backImage.exists()) {
            DlOcrProvider.OcrRawResult backResult = ocrProvider.extractText(backImage);
            if (backResult != null && backResult.getRawText() != null) {
                backText = backResult.getRawText();
            }
        }

        if (frontResult == null || frontResult.getStatus() == DlOcrProvider.OcrStatus.OCR_UNAVAILABLE) {
            data.setRawOcrStatus("OCR_UNAVAILABLE");
            data.setOcrSuccess(false);
            data.setOcrMessage(frontResult != null ? frontResult.getMessage() : "OCR unavailable");
            return data;
        }

        String combinedText = frontText + "\n" + backText;
        if (combinedText.trim().isEmpty()) {
            data.setRawOcrStatus("OCR_INCOMPLETE");
            data.setOcrSuccess(false);
            data.setOcrMessage("No text could be extracted from licence images.");
            return data;
        }

        // Post-OCR parsing (Regex used strictly as a parser for actual OCR output)
        parseOcrText(combinedText, data);

        if (data.getLicenseNumber() != null || data.getName() != null || data.getDob() != null || !data.getVehicleClasses().isEmpty()) {
            data.setRawOcrStatus("OCR_SUCCESS");
            data.setOcrSuccess(true);
            data.setOcrMessage("Fields extracted successfully from OCR text.");
        } else {
            data.setRawOcrStatus("OCR_INCOMPLETE");
            data.setOcrSuccess(false);
            data.setOcrMessage("OCR executed but key fields were illegible or missing.");
        }

        return data;
    }

    /**
     * Parses fields from actual OCR text using flexible pattern matching
     */
    public void parseOcrText(String ocrText, ExtractedDlData data) {
        if (ocrText == null || ocrText.isBlank()) return;

        String[] lines = ocrText.split("\\r?\\n");

        // 1. DL Number Pattern: 2-letter state code + 2 digits (or space/hyphen) + 4-digit year + 7 digits
        // e.g. KA0120200001234, DL-14 20110012345, MH12 20180001234, etc.
        Pattern dlPattern = Pattern.compile("([A-Z]{2}[- ]?[0-9]{2}[- ]?(?:19|20)[0-9]{2}[- ]?[0-9]{7})", Pattern.CASE_INSENSITIVE);
        Matcher dlMatcher = dlPattern.matcher(ocrText);
        if (dlMatcher.find()) {
            String rawDl = dlMatcher.group(1).replaceAll("[^A-Za-z0-9]", "").toUpperCase();
            data.setLicenseNumber(rawDl);
            if (rawDl.length() >= 2) {
                data.setIssuingState(rawDl.substring(0, 2));
            }
        }

        // 2. Dates Pattern (DOB, Issue, Valid Till / Expiry)
        // Matches DD/MM/YYYY or DD-MM-YYYY
        Pattern datePattern = Pattern.compile("(\\b[0-3]?[0-9][/-][0-1]?[0-9][/-](?:19|20)[0-9]{2}\\b)");
        
        for (String line : lines) {
            String cleanLine = line.trim().toUpperCase();

            // Date of Birth
            if ((cleanLine.contains("DOB") || cleanLine.contains("BIRTH") || cleanLine.contains("D.O.B")) && data.getDob() == null) {
                Matcher m = datePattern.matcher(cleanLine);
                if (m.find()) {
                    data.setDob(parseDate(m.group(1)));
                }
            }

            // Expiry / Valid Till
            if ((cleanLine.contains("VALID") || cleanLine.contains("EXPIR") || cleanLine.contains("NT") || cleanLine.contains("TILL")) && data.getExpiryDate() == null) {
                Matcher m = datePattern.matcher(cleanLine);
                if (m.find()) {
                    data.setExpiryDate(parseDate(m.group(1)));
                }
            }

            // Issue Date
            if ((cleanLine.contains("ISSUE") || cleanLine.contains("DOI") || cleanLine.contains("ISSUED")) && data.getIssueDate() == null) {
                Matcher m = datePattern.matcher(cleanLine);
                if (m.find()) {
                    data.setIssueDate(parseDate(m.group(1)));
                }
            }

            // Name
            if ((cleanLine.startsWith("NAME") || cleanLine.contains("NAME:")) && data.getName() == null) {
                String candidate = cleanLine.replaceFirst(".*NAME[:\\s]*", "").trim();
                candidate = candidate.replaceAll("[^A-Z\\s]", "").replaceAll("\\s+", " ").trim();
                if (candidate.length() >= 3 && !candidate.contains("UNION") && !candidate.contains("DRIVING") && !candidate.contains("LICENCE")) {
                    data.setName(candidate);
                }
            }

            // Vehicle Classes (MCWG, LMV, MCWOG, HGMV, TRANS, etc.)
            if (cleanLine.contains("MCWG") || cleanLine.contains("MC W G") || cleanLine.contains("MOTOR CYCLE")) {
                data.getVehicleClasses().add("MCWG");
            }
            if (cleanLine.contains("LMV") || cleanLine.contains("L M V") || cleanLine.contains("LIGHT MOTOR")) {
                data.getVehicleClasses().add("LMV");
            }
            if (cleanLine.contains("MCWOG")) {
                data.getVehicleClasses().add("MCWOG");
            }
            if (cleanLine.contains("TRANS") || cleanLine.contains("TRANSPORT")) {
                data.getVehicleClasses().add("TRANS");
            }
        }

        // Fallback Date scan if keyword matching missed
        if (data.getDob() == null || data.getExpiryDate() == null) {
            Matcher m = datePattern.matcher(ocrText);
            List<LocalDate> allDates = new ArrayList<>();
            while (m.find()) {
                LocalDate d = parseDate(m.group(1));
                if (d != null) allDates.add(d);
            }
            Collections.sort(allDates);
            if (!allDates.isEmpty()) {
                if (data.getDob() == null && allDates.get(0).isBefore(LocalDate.now().minusYears(16))) {
                    data.setDob(allDates.get(0));
                }
                LocalDate latest = allDates.get(allDates.size() - 1);
                if (data.getExpiryDate() == null && latest.isAfter(LocalDate.now().minusYears(2))) {
                    data.setExpiryDate(latest);
                }
            }
        }
    }

    private LocalDate parseDate(String dateStr) {
        if (dateStr == null) return null;
        String clean = dateStr.replace('-', '/').trim();
        String[] parts = clean.split("/");
        if (parts.length != 3) return null;
        try {
            int d = Integer.parseInt(parts[0]);
            int m = Integer.parseInt(parts[1]);
            int y = Integer.parseInt(parts[2]);
            return LocalDate.of(y, m, d);
        } catch (Exception e) {
            return null;
        }
    }
}



