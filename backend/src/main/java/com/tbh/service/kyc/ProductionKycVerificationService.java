package com.tbh.service.kyc;

import com.tbh.util.IdentitySanitizer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@ConditionalOnProperty(name = "tbh.kyc.provider", havingValue = "production", matchIfMissing = true)
public class ProductionKycVerificationService implements KycVerificationService {

    private static final Logger log = LoggerFactory.getLogger(ProductionKycVerificationService.class);

    @Override
    public KycVerificationResult verifyDrivingLicense(String licenseNumber, String issuingState, LocalDate dob, LocalDate expiryDate) {
        log.warn("[TBH KYC PRODUCTION] Government KYC verification gateway is not commercially configured. Failing closed safely.");

        if (licenseNumber == null || licenseNumber.trim().isEmpty()) {
            return KycVerificationResult.rejected("PRODUCTION_FAIL_CLOSED", "EMPTY_LICENSE", "Driving license number cannot be empty.");
        }

        if (expiryDate != null && expiryDate.isBefore(LocalDate.now())) {
            return KycVerificationResult.rejected("PRODUCTION_FAIL_CLOSED", "EXPIRED_LICENSE",
                    "Driving license is expired. Cannot submit expired license.");
        }

        return KycVerificationResult.manualReview("MANUAL_ADMIN",
                "Automated government verification gateway is not configured for production. Submission queued for manual review.");
    }

    @Override
    public String getProviderName() {
        return "PRODUCTION_FAIL_CLOSED";
    }
}
