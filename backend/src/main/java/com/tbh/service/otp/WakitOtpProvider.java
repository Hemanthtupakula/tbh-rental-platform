package com.tbh.service.otp;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.HashMap;
import java.util.Map;

@Service
@ConditionalOnProperty(name = "tbh.otp.provider", havingValue = "wakit", matchIfMissing = true)
public class WakitOtpProvider implements OtpProvider {

    private static final Logger log = LoggerFactory.getLogger(WakitOtpProvider.class);
    private static final String WAKIT_SEND_ENDPOINT = "https://wakit.in/api/v1/otp/send";
    private static final String WAKIT_VERIFY_ENDPOINT = "https://wakit.in/api/v1/otp/verify";

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
    public OtpSendResult sendOtp(String phoneNumber) {
        String formattedPhone = formatE164(phoneNumber);
        String maskedPhone = maskPhoneNumber(formattedPhone);

        if (apiKey == null || apiKey.trim().isEmpty()) {
            log.error("[WAKIT WHATSAPP] Dispatch failed: WAKIT_API_KEY is not configured.");
            return OtpSendResult.failure("Wakit WhatsApp gateway is not configured. Missing API Key.");
        }

        log.info("[WAKIT WHATSAPP] Dispatching WhatsApp OTP request to {}", maskedPhone);

        try {
            Map<String, Object> payload = new HashMap<>();
            payload.put("to", formattedPhone);

            String requestBody = objectMapper.writeValueAsString(payload);

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(WAKIT_SEND_ENDPOINT))
                    .timeout(Duration.ofSeconds(15))
                    .header("Authorization", "Bearer " + apiKey.trim())
                    .header("Content-Type", "application/json")
                    .header("Accept", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            String responseBody = response.body() != null ? response.body() : "";

            if (response.statusCode() >= 200 && response.statusCode() < 300) {
                JsonNode json = objectMapper.readTree(responseBody);
                boolean isSuccess = json.path("success").asBoolean(false);
                String messageId = json.path("data").path("id").asText(null);

                if (isSuccess && messageId != null && !messageId.isBlank()) {
                    log.info("[WAKIT WHATSAPP] OTP successfully sent to {} (Message ID: {})", maskedPhone, messageId);
                    return OtpSendResult.success(messageId, "WhatsApp OTP dispatched successfully to registered mobile");
                } else {
                    log.warn("[WAKIT WHATSAPP] Gateway response missing success status or message ID for {}: {}", maskedPhone, responseBody);
                    return OtpSendResult.failure("WhatsApp carrier gateway returned unsuccessful status.");
                }
            } else {
                log.warn("[WAKIT WHATSAPP] Gateway returned status {} for recipient {}: {}", response.statusCode(), maskedPhone, responseBody);
                String errorMsg = parseErrorMessage(response.statusCode(), responseBody);
                return OtpSendResult.failure(errorMsg);
            }

        } catch (Exception e) {
            log.error("[WAKIT WHATSAPP] I/O error communicating with Wakit gateway for {}: {}", maskedPhone, e.getMessage());
            return OtpSendResult.failure("Failed to communicate with Wakit WhatsApp carrier gateway.");
        }
    }

    @Override
    public boolean verifyOtp(String providerMessageId, String code) {
        if (providerMessageId == null || providerMessageId.isBlank() || code == null || code.isBlank()) {
            return false;
        }

        if (apiKey == null || apiKey.trim().isEmpty()) {
            log.error("[WAKIT WHATSAPP] Verification failed: WAKIT_API_KEY is not configured.");
            return false;
        }

        log.info("[WAKIT WHATSAPP] Verifying OTP against Wakit gateway for Message ID {}", providerMessageId);

        try {
            Map<String, Object> payload = new HashMap<>();
            payload.put("id", providerMessageId);
            payload.put("code", code.trim());

            String requestBody = objectMapper.writeValueAsString(payload);

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(WAKIT_VERIFY_ENDPOINT))
                    .timeout(Duration.ofSeconds(15))
                    .header("Authorization", "Bearer " + apiKey.trim())
                    .header("Content-Type", "application/json")
                    .header("Accept", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            String responseBody = response.body() != null ? response.body() : "";

            if (response.statusCode() >= 200 && response.statusCode() < 300) {
                JsonNode json = objectMapper.readTree(responseBody);
                boolean success = json.path("success").asBoolean(false);
                boolean verified = json.path("data").path("verified").asBoolean(false);

                if (success && verified) {
                    log.info("[WAKIT WHATSAPP] OTP verification PASSED for Message ID {}", providerMessageId);
                    return true;
                } else {
                    log.warn("[WAKIT WHATSAPP] OTP verification FAILED for Message ID {}: {}", providerMessageId, responseBody);
                    return false;
                }
            } else {
                log.warn("[WAKIT WHATSAPP] Verification gateway returned status {} for Message ID {}: {}", response.statusCode(), providerMessageId, responseBody);
                return false;
            }
        } catch (Exception e) {
            log.error("[WAKIT WHATSAPP] I/O error during OTP verification for Message ID {}: {}", providerMessageId, e.getMessage());
            return false;
        }
    }

    private String parseErrorMessage(int statusCode, String responseBody) {
        return switch (statusCode) {
            case 401 -> "Authentication error with WhatsApp gateway. Invalid API Key.";
            case 402 -> "Insufficient balance on WhatsApp carrier gateway account.";
            case 403 -> "IP address not allowed by WhatsApp gateway.";
            case 422 -> "Validation error or contact blocked by recipient carrier.";
            case 502 -> "Carrier gateway dispatch error. Please try again later.";
            default -> "WhatsApp carrier gateway returned status " + statusCode;
        };
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
