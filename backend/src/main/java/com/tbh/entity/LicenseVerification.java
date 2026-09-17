package com.tbh.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "license_verifications")
public class LicenseVerification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String documentType = "DRIVING_LICENSE";

    @Column(nullable = false)
    private String maskedLicenseNumber;

    @JsonIgnore
    private String encryptedLicenseNumber;

    private String issuingState;

    private LocalDate dateOfBirth;

    @Column(nullable = false)
    private LocalDate expiryDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private KycVerificationStatus verificationStatus = KycVerificationStatus.SUBMITTED;

    @JsonIgnore
    private String privateDocumentPath;

    @JsonIgnore
    private String backDocumentPath;

    private String imageKitFrontUrl;

    private String imageKitBackUrl;

    private String provider = "MANUAL_ADMIN";

    private String providerReference;

    private LocalDateTime submittedAt = LocalDateTime.now();

    private LocalDateTime verifiedAt;

    private String rejectionReason;

    private String reviewedBy;

    private String extractedName;
    private String extractedLicenseNumber;
    private LocalDate extractedDob;
    private LocalDate extractedIssueDate;
    private LocalDate extractedExpiryDate;
    private String extractedVehicleClasses;

    private String ocrStatus = "NOT_ATTEMPTED";
    private String qrStatus = "NOT_ATTEMPTED";
    private String documentQualityStatus = "NOT_CHECKED";
    private String formatStatus = "NOT_CHECKED";
    private String expiryStatus = "NOT_CHECKED";
    private String classStatus = "NOT_CHECKED";

    private boolean customerConfirmed = false;

    @Column(columnDefinition = "TEXT")
    private String reviewNotes;

    private LocalDateTime updatedAt = LocalDateTime.now();

    public LicenseVerification() {}

    public LicenseVerification(User user, String maskedLicenseNumber, String encryptedLicenseNumber, String issuingState, LocalDate expiryDate, KycVerificationStatus status) {
        this.user = user;
        this.maskedLicenseNumber = maskedLicenseNumber;
        this.encryptedLicenseNumber = encryptedLicenseNumber;
        this.issuingState = issuingState;
        this.expiryDate = expiryDate;
        this.verificationStatus = status;
        this.submittedAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    public boolean isEligibleForRental() {
        return (verificationStatus == KycVerificationStatus.VERIFIED || verificationStatus == KycVerificationStatus.TBH_VERIFIED) && 
               expiryDate != null && 
               expiryDate.isAfter(LocalDate.now());
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public String getDocumentType() { return documentType; }
    public void setDocumentType(String documentType) { this.documentType = documentType; }

    public String getMaskedLicenseNumber() { return maskedLicenseNumber; }
    public void setMaskedLicenseNumber(String maskedLicenseNumber) { this.maskedLicenseNumber = maskedLicenseNumber; }

    public String getEncryptedLicenseNumber() { return encryptedLicenseNumber; }
    public void setEncryptedLicenseNumber(String encryptedLicenseNumber) { this.encryptedLicenseNumber = encryptedLicenseNumber; }

    public String getIssuingState() { return issuingState; }
    public void setIssuingState(String issuingState) { this.issuingState = issuingState; }

    public LocalDate getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(LocalDate dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public LocalDate getExpiryDate() { return expiryDate; }
    public void setExpiryDate(LocalDate expiryDate) { this.expiryDate = expiryDate; }

    public KycVerificationStatus getVerificationStatus() { return verificationStatus; }
    public void setVerificationStatus(KycVerificationStatus verificationStatus) { this.verificationStatus = verificationStatus; }

    public String getPrivateDocumentPath() { return privateDocumentPath; }
    public void setPrivateDocumentPath(String privateDocumentPath) { this.privateDocumentPath = privateDocumentPath; }

    public String getBackDocumentPath() { return backDocumentPath; }
    public void setBackDocumentPath(String backDocumentPath) { this.backDocumentPath = backDocumentPath; }

    public String getImageKitFrontUrl() { return imageKitFrontUrl; }
    public void setImageKitFrontUrl(String imageKitFrontUrl) { this.imageKitFrontUrl = imageKitFrontUrl; }

    public String getImageKitBackUrl() { return imageKitBackUrl; }
    public void setImageKitBackUrl(String imageKitBackUrl) { this.imageKitBackUrl = imageKitBackUrl; }

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

    public String getReviewedBy() { return reviewedBy; }
    public void setReviewedBy(String reviewedBy) { this.reviewedBy = reviewedBy; }

    public String getExtractedName() { return extractedName; }
    public void setExtractedName(String extractedName) { this.extractedName = extractedName; }

    public String getExtractedLicenseNumber() { return extractedLicenseNumber; }
    public void setExtractedLicenseNumber(String extractedLicenseNumber) { this.extractedLicenseNumber = extractedLicenseNumber; }

    public LocalDate getExtractedDob() { return extractedDob; }
    public void setExtractedDob(LocalDate extractedDob) { this.extractedDob = extractedDob; }

    public LocalDate getExtractedIssueDate() { return extractedIssueDate; }
    public void setExtractedIssueDate(LocalDate extractedIssueDate) { this.extractedIssueDate = extractedIssueDate; }

    public LocalDate getExtractedExpiryDate() { return extractedExpiryDate; }
    public void setExtractedExpiryDate(LocalDate extractedExpiryDate) { this.extractedExpiryDate = extractedExpiryDate; }

    public String getExtractedVehicleClasses() { return extractedVehicleClasses; }
    public void setExtractedVehicleClasses(String extractedVehicleClasses) { this.extractedVehicleClasses = extractedVehicleClasses; }

    public String getOcrStatus() { return ocrStatus; }
    public void setOcrStatus(String ocrStatus) { this.ocrStatus = ocrStatus; }

    public String getQrStatus() { return qrStatus; }
    public void setQrStatus(String qrStatus) { this.qrStatus = qrStatus; }

    public String getDocumentQualityStatus() { return documentQualityStatus; }
    public void setDocumentQualityStatus(String documentQualityStatus) { this.documentQualityStatus = documentQualityStatus; }

    public String getFormatStatus() { return formatStatus; }
    public void setFormatStatus(String formatStatus) { this.formatStatus = formatStatus; }

    public String getExpiryStatus() { return expiryStatus; }
    public void setExpiryStatus(String expiryStatus) { this.expiryStatus = expiryStatus; }

    public String getClassStatus() { return classStatus; }
    public void setClassStatus(String classStatus) { this.classStatus = classStatus; }

    public boolean isCustomerConfirmed() { return customerConfirmed; }
    public void setCustomerConfirmed(boolean customerConfirmed) { this.customerConfirmed = customerConfirmed; }

    public String getReviewNotes() { return reviewNotes; }
    public void setReviewNotes(String reviewNotes) { this.reviewNotes = reviewNotes; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}

