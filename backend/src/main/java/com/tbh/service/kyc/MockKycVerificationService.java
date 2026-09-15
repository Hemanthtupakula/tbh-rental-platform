package com.tbh.service.kyc;

import com.tbh.util.IdentitySanitizer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.UUID;
import java.util.regex.Pattern;

@Service
@ConditionalOnProperty(name = "tbh.kyc.provider", havingValue = "mock")
public class MockKycVerificationService implements KycVerificationService {

    private static final Logger log = LoggerFactory.getLogger(MockKycVerificationService.class);

    // Standard Indian DL: 2-letter state code, 2-digit RTO, 4-digit year, 7-digit sequential
    private static final Pattern DL_PATTERN = Pattern.compile("^[A-Z]{2}[- ]?[0-9]{2}[- ]?[0-9]{4}[- ]?[0-9]{7}$");

    @Override
    public KycVerificationResult verifyDrivingLicense(String licenseNumber, String issuingState, LocalDate dob, LocalDate expiryDate) {
        log.info("[TBH KYC MOCK] Simulating driving license verification in test/dev mock mode (NOT a government verification)");

        if (licenseNumber == null || licenseNumber.trim().isEmpty()) {
            return KycVerificationResult.rejected("MOCK_SANDBOX", "EMPTY_LICENSE", "Driving license number cannot be empty.");
        }

        String cleaned = licenseNumber.trim().toUpperCase();
        if (!DL_PATTERN.matcher(cleaned).matches()) {
            log.warn("[TBH KYC MOCK] Driving license format invalid: {}", IdentitySanitizer.maskLicense(cleaned));
            return KycVerificationResult.rejected("MOCK_SANDBOX", "INVALID_FORMAT",
                    "Invalid driving license format. Must match standard Indian DL format (e.g., KA0120200001234 or DL-1420110012345).");
        }

        if (expiryDate != null && expiryDate.isBefore(LocalDate.now())) {
            log.warn("[TBH KYC MOCK] Driving license expired on {}", expiryDate);
            return KycVerificationResult.rejected("MOCK_SANDBOX", "EXPIRED_LICENSE",
                    "Driving license is expired. An active, valid license is required for rental.");
        }

        String ref = "MOCK-DL-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
        log.info("[TBH KYC MOCK] Mock license verification SUCCESS: ref={}, masked={}", ref, IdentitySanitizer.maskLicense(cleaned));
        return KycVerificationResult.verified("MOCK_SANDBOX", ref, IdentitySanitizer.maskLicense(cleaned),
                "Simulated mock verification passed (Test Environment).");
    }

    @Override
    public String getProviderName() {
        return "MOCK_SANDBOX";
    }
}
