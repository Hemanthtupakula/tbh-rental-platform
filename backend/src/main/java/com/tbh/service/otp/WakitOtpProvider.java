package com.tbh.service.otp;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.HashMap;
import java.util.Map;

@Service
@ConditionalOnProperty(name = "tbh.otp.provider", havingValue = "wakit")
public class WakitOtpProvider implements OtpProvider {

    private static final Logger log = LoggerFactory.getLogger(WakitOtpProvider.class);
    private static final String WAKIT_ENDPOINT = "https://wakit.in/api/v1/otp/send";

    @Value("${WAKIT_API_KEY:${tbh.wakit.api-key:}}")
    private String apiKey;

    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;

    public WakitOtpProvider() {
        this.httpClient = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();
        this.objectMapper = new ObjectMapper();
    }

    @Override
    public void sendOtp(String phoneNumber, String otpCode) {
        String sanitizedPhone = formatE164(phoneNumber);
        String maskedPhone = maskPhoneNumber(sanitizedPhone);

        if (apiKey == null || apiKey.trim().isEmpty()) {
            log.error("[WAKIT WHATSAPP] OTP dispatch failed: 'WAKIT_API_KEY' is not configured.");
            throw new IllegalStateException("Wakit WhatsApp gateway not configured: Missing WAKIT_API_KEY environment variable.");
        }

        log.info("[WAKIT WHATSAPP] Dispatching WhatsApp OTP to recipient {}", maskedPhone);

        try {
            Map<String, Object> payload = new HashMap<>();
            payload.put("to", sanitizedPhone);
            payload.put("otp", otpCode);

            String requestBody = objectMapper.writeValueAsString(payload);

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(WAKIT_ENDPOINT))
                    .timeout(Duration.ofSeconds(15))
                    .header("Authorization", "Bearer " + apiKey.trim())
                    .header("Content-Type", "application/json")
                    .header("Accept", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            String responseBody = response.body() != null ? response.body() : "";

            if (response.statusCode() >= 200 && response.statusCode() < 300) {
                log.info("[WAKIT WHATSAPP] WhatsApp OTP successfully dispatched to {} (HTTP {})", maskedPhone, response.statusCode());
            } else {
                log.warn("[WAKIT WHATSAPP] Gateway returned status {} for recipient {}: {}", response.statusCode(), maskedPhone, responseBody);
            }

        } catch (IOException e) {
            log.error("[WAKIT WHATSAPP] I/O error communicating with Wakit gateway for {}: {}", maskedPhone, e.getMessage());
            throw new IllegalStateException("Failed to communicate with Wakit WhatsApp carrier gateway.");
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            log.error("[WAKIT WHATSAPP] Dispatch thread interrupted for recipient {}", maskedPhone);
            throw new IllegalStateException("Wakit OTP dispatch request timed out or was interrupted.");
        }
    }

    private String formatE164(String phone) {
        if (phone == null) return "";
        String digits = phone.replaceAll("[^0-9]", "");
        if (digits.length() == 10) {
            return "+91" + digits;
        }
        if (digits.startsWith("91") && digits.length() == 12) {
            return "+" + digits;
        }
        return "+" + digits;
    }

    private String maskPhoneNumber(String phone) {
        if (phone == null || phone.length() < 6) return "••••";
        return phone.substring(0, 4) + "••••" + phone.substring(phone.length() - 4);
    }
}
