package com.tbh.service.kyc;

import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.Period;

/**
 * Driving Licence Date Validator:
 * Validates DOB, Issue Date, and Expiry Date.
 * 
 * IMPORTANT ARCHITECTURAL RULE:
 * Age >= 18 is a TBH RENTAL AGE ELIGIBILITY check, NOT proof of document authenticity.
 * Do not confuse rental policy with authenticity.
 */
@Component
public class DlDateValidator {

    public enum RentalAgeEligibility {
        ELIGIBLE,
        NOT_ELIGIBLE,
        UNKNOWN
    }

    public enum ExpiryStatus {
        VALID,
        EXPIRED,
        EXPIRING_SOON,
        UNKNOWN
    }

    public static class DateValidationReport {
        private final RentalAgeEligibility ageEligibility;
        private final ExpiryStatus expiryStatus;
        private final boolean datesLogical;
        private final String message;

        public DateValidationReport(RentalAgeEligibility ageEligibility, ExpiryStatus expiryStatus, boolean datesLogical, String message) {
            this.ageEligibility = ageEligibility;
            this.expiryStatus = expiryStatus;
            this.datesLogical = datesLogical;
            this.message = message;
        }

        public RentalAgeEligibility getAgeEligibility() { return ageEligibility; }
        public ExpiryStatus getExpiryStatus() { return expiryStatus; }
        public boolean isDatesLogical() { return datesLogical; }
        public String getMessage() { return message; }
    }

    public DateValidationReport validateDates(LocalDate dob, LocalDate issueDate, LocalDate expiryDate) {
        RentalAgeEligibility ageEligibility = RentalAgeEligibility.UNKNOWN;
        if (dob != null) {
            int age = Period.between(dob, LocalDate.now()).getYears();
            if (age >= 18 && age <= 100) {
                ageEligibility = RentalAgeEligibility.ELIGIBLE;
            } else if (age < 18 && age >= 0) {
                ageEligibility = RentalAgeEligibility.NOT_ELIGIBLE;
            } else {
                ageEligibility = RentalAgeEligibility.UNKNOWN;
            }
        }

        ExpiryStatus expiryStatus = ExpiryStatus.UNKNOWN;
        if (expiryDate != null) {
            LocalDate now = LocalDate.now();
            if (expiryDate.isBefore(now)) {
                expiryStatus = ExpiryStatus.EXPIRED;
            } else if (expiryDate.isBefore(now.plusDays(30))) {
                expiryStatus = ExpiryStatus.EXPIRING_SOON;
            } else {
                expiryStatus = ExpiryStatus.VALID;
            }
        }

        boolean logical = true;
        if (dob != null && issueDate != null && issueDate.isBefore(dob.plusYears(16))) {
            logical = false; // Cannot be issued DL before age 16 in India
        }
        if (issueDate != null && expiryDate != null && expiryDate.isBefore(issueDate)) {
            logical = false; // Expiry cannot precede issue date
        }

        String msg;
        if (expiryStatus == ExpiryStatus.EXPIRED) {
            msg = "Driving licence is expired.";
        } else if (ageEligibility == RentalAgeEligibility.NOT_ELIGIBLE) {
            msg = "Customer does not satisfy TBH rental age eligibility (minimum 18 years).";
        } else if (!logical) {
            msg = "Date inconsistencies detected. Routed to admin review.";
        } else {
            msg = "Dates verified and rental eligibility requirement satisfied.";
        }

        return new DateValidationReport(ageEligibility, expiryStatus, logical, msg);
    }
}





