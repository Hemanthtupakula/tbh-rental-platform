package com.tbh.dto;

public class AuthResponse {
    private String token;
    private String refreshToken;
    private Long userId;
    private String fullName;
    private String email;
    private String phoneNumber;
    private String role;
    private boolean drivingLicenseVerified;
    private String drivingLicenseNumber;
    private String aadhaarNumber;

    public AuthResponse() {}

    public AuthResponse(String token, Long userId, String fullName, String email, String phoneNumber, String role, boolean drivingLicenseVerified, String drivingLicenseNumber) {
        this.token = token;
        this.userId = userId;
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.drivingLicenseVerified = drivingLicenseVerified;
        this.drivingLicenseNumber = drivingLicenseNumber;
    }

    public AuthResponse(String token, String refreshToken, Long userId, String fullName, String email, String phoneNumber, String role, boolean drivingLicenseVerified, String drivingLicenseNumber) {
        this.token = token;
        this.refreshToken = refreshToken;
        this.userId = userId;
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.drivingLicenseVerified = drivingLicenseVerified;
        this.drivingLicenseNumber = drivingLicenseNumber;
    }

    public AuthResponse(String token, String refreshToken, Long userId, String fullName, String email, String phoneNumber, String role, boolean drivingLicenseVerified, String drivingLicenseNumber, String aadhaarNumber) {
        this.token = token;
        this.refreshToken = refreshToken;
        this.userId = userId;
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.drivingLicenseVerified = drivingLicenseVerified;
        this.drivingLicenseNumber = drivingLicenseNumber;
        this.aadhaarNumber = aadhaarNumber;
    }

    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }

    public String getRefreshToken() { return refreshToken; }
    public void setRefreshToken(String refreshToken) { this.refreshToken = refreshToken; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public boolean isDrivingLicenseVerified() { return drivingLicenseVerified; }
    public void setDrivingLicenseVerified(boolean drivingLicenseVerified) { this.drivingLicenseVerified = drivingLicenseVerified; }

    public String getDrivingLicenseNumber() { return drivingLicenseNumber; }
    public void setDrivingLicenseNumber(String drivingLicenseNumber) { this.drivingLicenseNumber = drivingLicenseNumber; }

    public String getAadhaarNumber() { return aadhaarNumber; }
    public void setAadhaarNumber(String aadhaarNumber) { this.aadhaarNumber = aadhaarNumber; }
}
