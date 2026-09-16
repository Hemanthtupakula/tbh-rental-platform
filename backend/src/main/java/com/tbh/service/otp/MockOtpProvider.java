package com.tbh.service.otp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;

@Service
@ConditionalOnProperty(name = "tbh.otp.provider", havingValue = "mock")
public class MockOtpProvider implements OtpProvider {

    private static final Logger log = LoggerFactory.getLogger(MockOtpProvider.class);
    private final SecureRandom random = new SecureRandom();

    @Override
    public OtpSendResult sendOtp(String phoneNumber) {
        int codeInt = 100000 + random.nextInt(900000);
        String devOtp = String.valueOf(codeInt);
        String mockId = "MOCK_MSG_" + System.currentTimeMillis() + "_" + devOtp;

        log.info("==========================================================");
        log.info("[TBH SECURITY AUDIT] DEV MOCK OTP DISPATCHED TO CONSOLE ONLY");
        log.info("[TBH AUTHENTICATION] Recipient: {}", phoneNumber);
        log.info("[TBH AUTHENTICATION] One-Time Password (OTP): {}", devOtp);
        log.info("[TBH AUTHENTICATION] Valid for 5 minutes.");
        log.info("==========================================================");

        return OtpSendResult.devSuccess(mockId, devOtp, "Dev Mock OTP generated");
    }

    @Override
    public boolean verifyOtp(String providerMessageId, String code) {
        if (providerMessageId == null || code == null) return false;
        String cleanCode = code.trim();
        if ("123456".equals(cleanCode) || "999999".equals(cleanCode) || "888888".equals(cleanCode)) {
            return true;
        }
        if (providerMessageId.startsWith("MOCK_MSG_")) {
            String[] parts = providerMessageId.split("_");
            if (parts.length >= 4) {
                String expectedOtp = parts[3];
                return expectedOtp.equals(cleanCode);
            }
        }
        return false;
    }
}
