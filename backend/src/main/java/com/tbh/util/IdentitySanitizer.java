package com.tbh.util;

import java.util.regex.Pattern;

public class IdentitySanitizer {

    private static final Pattern AADHAAR_PATTERN = Pattern.compile("^[2-9][0-9]{11}$");
    private static final Pattern DL_PATTERN = Pattern.compile("^[A-Z]{2}[- ]?[0-9]{2}[- ]?[0-9]{4}[- ]?[0-9]{7}$");

    public static String maskLicense(String license) {
        if (license == null || license.length() < 6) return "DL••••";
        String clean = license.replaceAll("[^a-zA-Z0-9]", "").toUpperCase();
        if (clean.length() >= 8) {
            return clean.substring(0, 4) + "••••" + clean.substring(clean.length() - 4);
        }
        return clean.substring(0, 2) + "••••" + clean.substring(clean.length() - 2);
    }

    public static String maskAadhaar(String aadhaar) {
        if (aadhaar == null || aadhaar.isBlank()) return null;
        String clean = aadhaar.replaceAll("[^0-9]", "");
        if (clean.length() == 12) {
            return "•••• •••• " + clean.substring(8);
        } else if (clean.length() >= 4) {
            return "•••• " + clean.substring(clean.length() - 4);
        }
        return "••••";
    }

    public static boolean isValidAadhaar(String aadhaar) {
        if (aadhaar == null || aadhaar.isBlank()) return false;
        String clean = aadhaar.replaceAll("[^0-9]", "");
        return AADHAAR_PATTERN.matcher(clean).matches();
    }

    public static boolean isValidIndianDl(String dl) {
        if (dl == null || dl.isBlank()) return false;
        return DL_PATTERN.matcher(dl.trim().toUpperCase()).matches();
    }
}
