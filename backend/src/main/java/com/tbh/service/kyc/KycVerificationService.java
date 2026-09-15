package com.tbh.service.kyc;

import java.time.LocalDate;

public interface KycVerificationService {
    KycVerificationResult verifyDrivingLicense(String licenseNumber, String issuingState, LocalDate dob, LocalDate expiryDate);
    String getProviderName();
}
