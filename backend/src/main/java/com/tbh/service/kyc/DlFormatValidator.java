package com.tbh.service.kyc;

import org.springframework.stereotype.Component;

import java.util.Set;
import java.util.regex.Pattern;

/**
 * Flexible Indian Driving Licence Format Validator:
 * Validates against known Indian state codes and variable formats
 * without rejecting valid edge cases (marks FORMAT_SUSPICIOUS or FORMAT_UNKNOWN for admin review).
 */
@Component
public class DlFormatValidator {

    public enum FormatStatus {
        FORMAT_VALID,
        FORMAT_SUSPICIOUS,
        FORMAT_UNKNOWN
    }

    private static final Set<String> INDIAN_STATE_CODES = Set.of(
            "AN", "AP", "AR", "AS", "BR", "CH", "CG", "DD", "DL", "DN", "GA", "GJ", "HR", "HP", "JH",
            "JK", "KA", "KL", "LA", "LD", "MH", "ML", "MN", "MP", "MZ", "NL", "OD", "PB", "PY", "RJ",
            "SK", "TN", "TR", "TS", "UK", "UP", "WB"
    );

    // Standard modern format: 2-char state + 2-digit RTO + 4-digit year + 7 digits (15 chars total)
    private static final Pattern STANDARD_PATTERN = Pattern.compile("^[A-Z]{2}[0-9]{2}(?:19|20)[0-9]{2}[0-9]{7}$");

    // Older format: 2-char state + variable numeric digits (9 to 16 chars)
    private static final Pattern LEGACY_PATTERN = Pattern.compile("^[A-Z]{2}[0-9A-Z]{7,15}$");

    public FormatStatus validateFormat(String dlNumber) {
        if (dlNumber == null || dlNumber.trim().isEmpty()) {
            return FormatStatus.FORMAT_UNKNOWN;
        }

        String clean = dlNumber.replaceAll("[^A-Za-z0-9]", "").toUpperCase();
        if (clean.length() < 8 || clean.length() > 20) {
            return FormatStatus.FORMAT_SUSPICIOUS;
        }

        String statePrefix = clean.substring(0, 2);
        if (!INDIAN_STATE_CODES.contains(statePrefix)) {
            return FormatStatus.FORMAT_SUSPICIOUS;
        }

        if (STANDARD_PATTERN.matcher(clean).matches()) {
            return FormatStatus.FORMAT_VALID;
        }

        if (LEGACY_PATTERN.matcher(clean).matches()) {
            return FormatStatus.FORMAT_VALID;
        }

        return FormatStatus.FORMAT_SUSPICIOUS;
    }
}




