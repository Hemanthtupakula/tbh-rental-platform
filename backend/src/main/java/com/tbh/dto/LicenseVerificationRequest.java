package com.tbh.dto;

public class LicenseVerificationRequest {
    private Long userId;
    private String licenseNumber;
    private String docUrl;

    private String issuingState;
    private String dateOfBirth; // YYYY-MM-DD
    private String expiryDate; // YYYY-MM-DD

    public LicenseVerificationRequest() {}

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getLicenseNumber() { return licenseNumber; }
    public void setLicenseNumber(String licenseNumber) { this.licenseNumber = licenseNumber; }

    public String getDocUrl() { return docUrl; }
    public void setDocUrl(String docUrl) { this.docUrl = docUrl; }

    public String getIssuingState() { return issuingState; }
    public void setIssuingState(String issuingState) { this.issuingState = issuingState; }

    public String getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(String dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public String getExpiryDate() { return expiryDate; }
    public void setExpiryDate(String expiryDate) { this.expiryDate = expiryDate; }
}
