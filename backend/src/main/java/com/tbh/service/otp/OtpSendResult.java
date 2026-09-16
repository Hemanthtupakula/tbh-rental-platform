package com.tbh.service.otp;

public record OtpSendResult(
        boolean success,
        String providerMessageId,
        String message,
        String devOtp
) {
    public static OtpSendResult success(String providerMessageId, String message) {
        return new OtpSendResult(true, providerMessageId, message, null);
    }

    public static OtpSendResult devSuccess(String providerMessageId, String devOtp, String message) {
        return new OtpSendResult(true, providerMessageId, message, devOtp);
    }

    public static OtpSendResult failure(String message) {
        return new OtpSendResult(false, null, message, null);
    }
}
