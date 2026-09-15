package com.tbh.dto;

import com.tbh.entity.KycVerificationStatus;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class KycStatusResponse {
    private Long id;
    private KycVerificationStatus status;
    private boolean verified;
    private String maskedLicenseNumber;
    private String issuingState;
    private LocalDate expiryDate;
    private String provider;
    private String providerReference;
    private LocalDateTime submittedAt;
    private LocalDateTime verifiedAt;
    private String rejectionReason;
    private String message;

    public KycStatusResponse() {}

    public KycStatusResponse(Long id, KycVerificationStatus status, boolean verified,
                             String maskedLicenseNumber, String issuingState,
                             LocalDate expiryDate, String provider, String providerReference,
                             LocalDateTime submittedAt, LocalDateTime verifiedAt,
                             String rejectionReason, String message) {
        this.id = id;
        this.status = status;
        this.verified = verified;
        this.maskedLicenseNumber = maskedLicenseNumber;
        this.issuingState = issuingState;
        this.expiryDate = expiryDate;
        this.provider = provider;
        this.providerReference = providerReference;
        this.submittedAt = submittedAt;
        this.verifiedAt = verifiedAt;
        this.rejectionReason = rejectionReason;
        this.message = message;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public KycVerificationStatus getStatus() { return status; }
    public void setStatus(KycVerificationStatus status) { this.status = status; }

    public boolean isVerified() { return verified; }
    public void setVerified(boolean verified) { this.verified = verified; }

    public String getMaskedLicenseNumber() { return maskedLicenseNumber; }
    public void setMaskedLicenseNumber(String maskedLicenseNumber) { this.maskedLicenseNumber = maskedLicenseNumber; }

    public String getIssuingState() { return issuingState; }
    public void setIssuingState(String issuingState) { this.issuingState = issuingState; }

    public LocalDate getExpiryDate() { return expiryDate; }
    public void setExpiryDate(LocalDate expiryDate) { this.expiryDate = expiryDate; }

    public String getProvider() { return provider; }
    public void setProvider(String provider) { this.provider = provider; }

    public String getProviderReference() { return providerReference; }
    public void setProviderReference(String providerReference) { this.providerReference = providerReference; }

    public LocalDateTime getSubmittedAt() { return submittedAt; }
    public void setSubmittedAt(LocalDateTime submittedAt) { this.submittedAt = submittedAt; }

    public LocalDateTime getVerifiedAt() { return verifiedAt; }
    public void setVerifiedAt(LocalDateTime verifiedAt) { this.verifiedAt = verifiedAt; }

    public String getRejectionReason() { return rejectionReason; }
    public void setRejectionReason(String rejectionReason) { this.rejectionReason = rejectionReason; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
