package com.tbh.service.otp;

public interface OtpProvider {
    void sendOtp(String phoneNumber, String otpCode);
}
