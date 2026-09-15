package com.tbh.dto;

public class EmailOtpRequest {
    private String email;
    private String otp;
    private String fullName;

    public EmailOtpRequest() {}

    public EmailOtpRequest(String email, String otp) {
        this.email = email;
        this.otp = otp;
    }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getOtp() { return otp; }
    public void setOtp(String otp) { this.otp = otp; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
}
