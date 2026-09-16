package com.tbh.service.email;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tbh.config.ResendConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.*;

@Component
public class ResendEmailClient {

    private static final Logger log = LoggerFactory.getLogger(ResendEmailClient.class);

    private final ResendConfig resendConfig;
    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;

    public ResendEmailClient(ResendConfig resendConfig) {
        this.resendConfig = resendConfig;
        this.httpClient = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();
        this.objectMapper = new ObjectMapper();
    }

    public String sendEmail(String recipientEmail, String subject, String htmlContent) {
        String apiKey = resendConfig.getApiKey();
        String provider = resendConfig.getProvider();
        boolean isProd = resendConfig.isProduction();

        // If API key is present or provider is explicitly 'resend', execute real API call
        if ((apiKey != null && !apiKey.trim().isEmpty()) || "resend".equalsIgnoreCase(provider)) {
            if (apiKey == null || apiKey.trim().isEmpty()) {
                if (isProd) {
                    throw new IllegalStateException("CRITICAL PRODUCTION CONFIGURATION ERROR: RESEND_API_KEY is required in production when provider=resend. Email cannot be dispatched.");
                } else {
                    log.warn("[RESEND API -> MOCK DEV] Missing RESEND_API_KEY in dev mode. Recording mock delivery for {}", recipientEmail);
                    return "mock_dev_" + UUID.randomUUID();
                }
            }

            try {
                log.info("[RESEND API -> DISPATCH] Recipient: {} | Subject: '{}' | From: {}", recipientEmail, subject, resendConfig.getFromEmail());

                Map<String, Object> payload = new HashMap<>();
                payload.put("from", resendConfig.getFromEmail());
                payload.put("to", Collections.singletonList(recipientEmail));
                payload.put("subject", subject);
                payload.put("html", htmlContent);

                String body = objectMapper.writeValueAsString(payload);

                HttpRequest request = HttpRequest.newBuilder()
                        .uri(URI.create("https://api.resend.com/emails"))
                        .timeout(Duration.ofSeconds(12))
                        .header("Authorization", "Bearer " + apiKey.trim())
                        .header("Content-Type", "application/json")
                        .POST(HttpRequest.BodyPublishers.ofString(body))
                        .build();

                HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
                if (response.statusCode() >= 200 && response.statusCode() < 300) {
                    JsonNode root = objectMapper.readTree(response.body());
                    String resendId = root.path("id").asText("resend_sent_" + UUID.randomUUID());
                    log.info("[RESEND API -> RESULT] SUCCESS HTTP {} | Recipient: {} | Resend ID: {}", response.statusCode(), recipientEmail, resendId);
                    return resendId;
                } else {
                    String errorMsg = String.format("Resend API rejected HTTP %d: %s", response.statusCode(), response.body());
                    log.error("[RESEND API -> RESULT] ERROR HTTP {} | Recipient: {} | Response: {}", response.statusCode(), recipientEmail, response.body());
                    throw new RuntimeException(errorMsg);
                }
            } catch (Exception e) {
                log.error("[RESEND API -> RESULT] EXCEPTION dispatching to {}: {}", recipientEmail, e.getMessage());
                if (e instanceof RuntimeException) {
                    throw (RuntimeException) e;
                }
                throw new RuntimeException("Resend dispatch failed: " + e.getMessage(), e);
            }
        } else {
            if (isProd) {
                throw new IllegalStateException("CRITICAL PRODUCTION CONFIGURATION ERROR: Mock email provider cannot be active in production profile!");
            }
            log.info("[MOCK EMAIL] Generated mock notification for {} -> Subject: '{}'", recipientEmail, subject);
            return "mock_" + UUID.randomUUID();
        }
    }
}