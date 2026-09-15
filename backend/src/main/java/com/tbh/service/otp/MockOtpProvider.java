package com.tbh.service.otp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

@Service
@ConditionalOnProperty(name = "tbh.otp.provider", havingValue = "mock", matchIfMissing = true)
public class MockOtpProvider implements OtpProvider {

    private static final Logger log = LoggerFactory.getLogger(MockOtpProvider.class);

    @Override
    public void sendOtp(String phoneNumber, String otpCode) {
        log.info("==========================================================");
        log.info("[TBH SECURITY AUDIT] DEV OTP DISPATCHED TO CONSOLE ONLY");
        log.info("[TBH AUTHENTICATION] Recipient: {}", phoneNumber);
        log.info("[TBH AUTHENTICATION] One-Time Password (OTP): {}", otpCode);
        log.info("[TBH AUTHENTICATION] Valid for 5 minutes. Never share this with anyone.");
        log.info("==========================================================");
        System.out.println(">>> [TBH OTP CONSOLE LOG] Phone: " + phoneNumber + " | CODE: " + otpCode + " <<<");
    }
}
