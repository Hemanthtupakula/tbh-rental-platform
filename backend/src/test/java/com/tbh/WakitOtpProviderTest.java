package com.tbh;

import com.tbh.service.otp.OtpSendResult;
import com.tbh.service.otp.WakitOtpProvider;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import static org.junit.jupiter.api.Assertions.*;

public class WakitOtpProviderTest {

    private WakitOtpProvider wakitOtpProvider;

    @BeforeEach
    void setUp() {
        wakitOtpProvider = new WakitOtpProvider();
    }

    @Test
    @DisplayName("1. WakitOtpProvider rejects sendOtp when WAKIT_API_KEY is missing")
    void testSendOtpFailsWhenApiKeyMissing() {
        ReflectionTestUtils.setField(wakitOtpProvider, "apiKey", "");
        OtpSendResult result = wakitOtpProvider.sendOtp("9876543210");
        assertFalse(result.success());
        assertTrue(result.message().contains("Missing API Key"));
    }

    @Test
    @DisplayName("2. WakitOtpProvider rejects verifyOtp when WAKIT_API_KEY is missing")
    void testVerifyOtpFailsWhenApiKeyMissing() {
        ReflectionTestUtils.setField(wakitOtpProvider, "apiKey", "");
        boolean verified = wakitOtpProvider.verifyOtp("wakit_msg_123", "123456");
        assertFalse(verified);
    }

    @Test
    @DisplayName("3. WakitOtpProvider rejects null or blank inputs")
    void testRejectsNullOrBlankInputs() {
        ReflectionTestUtils.setField(wakitOtpProvider, "apiKey", "test_key");
        assertFalse(wakitOtpProvider.verifyOtp(null, "123456"));
        assertFalse(wakitOtpProvider.verifyOtp("wakit_msg_123", ""));
        assertFalse(wakitOtpProvider.verifyOtp("", "123456"));
    }
}
