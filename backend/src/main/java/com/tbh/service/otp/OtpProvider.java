package com.tbh.service.otp;

public interface OtpProvider {
    /**
     * Sends/dispatches an OTP request to the specified phone number.
     * @param phoneNumber recipient phone number
     * @return OtpSendResult containing success status, providerMessageId (Wakit message ID), and message
     */
    OtpSendResult sendOtp(String phoneNumber);

    /**
     * Verifies the 6-digit user-entered code against the provider gateway.
     * @param providerMessageId stored carrier message ID (e.g. Wakit message ID)
     * @param code 6-digit OTP code entered by user
     * @return true if carrier gateway confirms verification success, false otherwise
     */
    boolean verifyOtp(String providerMessageId, String code);
}
