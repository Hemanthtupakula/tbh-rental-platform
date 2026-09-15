package com.tbh.service.kyc;

import com.tbh.entity.KycVerificationStatus;

import java.time.LocalDateTime;

public class KycVerificationResult {

    private final boolean verified;
    private final KycVerificationStatus status;
    private final String provider;
    private final String verificationId;
    private final String maskedLicenseNumber;
    private final String errorCode;
    private final String message;
    private final LocalDateTime timestamp;

    public KycVerificationResult(boolean verified, KycVerificationStatus status, String provider,
                                 String verificationId, String maskedLicenseNumber,
                                 String errorCode, String message) {
        this.verified = verified;
        this.status = status;
        this.provider = provider;
        this.verificationId = verificationId;
        this.maskedLicenseNumber = maskedLicenseNumber;
        this.errorCode = errorCode;
        this.message = message;
        this.timestamp = LocalDateTime.now();
    }

    public static KycVerificationResult verified(String provider, String verificationId, String maskedLicenseNumber, String message) {
        return new KycVerificationResult(true, KycVerificationStatus.VERIFIED, provider,
                verificationId, maskedLicenseNumber, null, message);
    }

    public static KycVerificationResult manualReview(String provider, String message) {
        return new KycVerificationResult(false, KycVerificationStatus.MANUAL_REVIEW, provider,
                null, null, "MANUAL_REVIEW_REQUIRED", message);
    }

    public static KycVerificationResult rejected(String provider, String errorCode, String message) {
        return new KycVerificationResult(false, KycVerificationStatus.REJECTED, provider,
                null, null, errorCode, message);
    }

    public boolean isVerified() {
        return verified;
    }

    public KycVerificationStatus getStatus() {
        return status;
    }

    public String getProvider() {
        return provider;
    }

    public String getVerificationId() {
        return verificationId;
    }

    public String getMaskedLicenseNumber() {
        return maskedLicenseNumber;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public String getMessage() {
        return message;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }
}
