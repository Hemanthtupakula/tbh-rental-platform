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
@ConditionalOnProperty(name = "tbh.otp.provider", havingValue = "sms")
public class SmsOtpProvider implements OtpProvider {

    private static final Logger log = LoggerFactory.getLogger(SmsOtpProvider.class);
    private static final String FAST2SMS_ENDPOINT = "https://www.fast2sms.com/dev/bulkV2";

    @Value("${tbh.sms.api-key:}")
    private String apiKey;

    @Value("${tbh.sms.sender-id:TBHIND}")
    private String senderId;

    @Value("${tbh.sms.route:otp}")
    private String route;

    @Value("${tbh.sms.dlt-template-id:}")
    private String dltTemplateId;

    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;

    public SmsOtpProvider() {
        this.httpClient = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();
        this.objectMapper = new ObjectMapper();
    }

    @Override
    public void sendOtp(String phoneNumber, String otpCode) {
        String sanitizedPhone = sanitizePhoneNumber(phoneNumber);
        String maskedPhone = maskPhoneNumber(sanitizedPhone);

        if (apiKey == null || apiKey.trim().isEmpty()) {
            log.error("[FAST2SMS] SMS dispatch failed: 'tbh.sms.api-key' is not configured. Set TBH_SMS_API_KEY in .env.");
            throw new IllegalStateException("SMS gateway not configured: Missing API key. Use TBH_OTP_PROVIDER=mock for local development.");
        }

        if (sanitizedPhone.length() != 10) {
            log.warn("[FAST2SMS] Rejected dispatch: Phone number {} is not a valid 10-digit Indian mobile number", maskedPhone);
            throw new IllegalArgumentException("Invalid Indian mobile number. Exactly 10 digits required.");
        }

        log.info("[FAST2SMS] Dispatching OTP via route '{}' to recipient {}", route, maskedPhone);

        try {
            // Build Fast2SMS JSON payload
            Map<String, Object> payload = new HashMap<>();
            payload.put("numbers", sanitizedPhone);

            if ("dlt".equalsIgnoreCase(route)) {
                payload.put("route", "dlt");
                payload.put("sender_id", senderId);
                payload.put("message", dltTemplateId);
                payload.put("variables_values", otpCode);
            } else {
                // Default Quick OTP route (Standard pre-approved OTP template in Fast2SMS)
                payload.put("route", "otp");
                payload.put("variables_values", otpCode);
            }

            String requestBody = objectMapper.writeValueAsString(payload);

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(FAST2SMS_ENDPOINT))
                    .timeout(Duration.ofSeconds(15))
                    .header("authorization", apiKey.trim())
                    .header("Content-Type", "application/json")
                    .header("Accept", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            String responseBody = response.body() != null ? response.body() : "";

            // Evaluate Fast2SMS response without exposing the OTP code in logs
            boolean isSuccessful = false;
            String gatewayMessage = "No response message";

            try {
                JsonNode json = objectMapper.readTree(responseBody);
                if (json.has("return") && json.get("return").asBoolean()) {
                    isSuccessful = true;
                }
                if (json.has("message")) {
                    if (json.get("message").isArray() && !json.get("message").isEmpty()) {
                        gatewayMessage = json.get("message").get(0).asText();
                    } else {
                        gatewayMessage = json.get("message").asText();
                    }
                }
            } catch (Exception ex) {
                gatewayMessage = "Non-JSON response received from gateway";
            }

            if (response.statusCode() == 200 && isSuccessful) {
                log.info("[FAST2SMS] OTP successfully accepted by gateway for recipient {} (HTTP {})",
                        maskedPhone, response.statusCode());
            } else {
                log.error("[FAST2SMS] Gateway delivery failure for recipient {}: HTTP status {}, gateway response: {}",
                        maskedPhone, response.statusCode(), gatewayMessage);
                throw new IllegalStateException("SMS delivery failure: " + gatewayMessage);
            }

        } catch (IOException e) {
            log.error("[FAST2SMS] I/O failure while contacting gateway for recipient {}: {}", maskedPhone, e.getMessage());
            throw new IllegalStateException("Failed to communicate with SMS carrier gateway.");
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            log.error("[FAST2SMS] SMS dispatch thread interrupted for recipient {}", maskedPhone);
            throw new IllegalStateException("SMS dispatch request timed out or interrupted.");
        }
    }

    private String sanitizePhoneNumber(String phone) {
        if (phone == null) return "";
        String digits = phone.replaceAll("[^0-9]", "");
        if (digits.startsWith("91") && digits.length() == 12) {
            return digits.substring(2);
        }
        if (digits.startsWith("0") && digits.length() == 11) {
            return digits.substring(1);
        }
        return digits;
    }

    private String maskPhoneNumber(String phone) {
        if (phone == null || phone.length() < 6) return "••••";
        return phone.substring(0, 2) + "••••" + phone.substring(phone.length() - 4);
    }
}
