package com.tbh.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tbh.config.ClerkConfig;
import com.tbh.entity.User;
import com.tbh.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

@Service
public class ClerkService {

    private static final Logger log = LoggerFactory.getLogger(ClerkService.class);

    private final ClerkConfig clerkConfig;
    private final UserRepository userRepository;
    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;

    public ClerkService(ClerkConfig clerkConfig, UserRepository userRepository) {
        this.clerkConfig = clerkConfig;
        this.userRepository = userRepository;
        this.httpClient = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();
        this.objectMapper = new ObjectMapper();
    }

    /**
     * Authoritatively synchronizes mobile verification state from Clerk REST API.
     * Checks if user has a verified phone number in Clerk.
     * The frontend cannot directly set mobileVerified=true.
     */
    public boolean syncUserMobileVerification(User user) {
        if (user == null) return false;
        String clerkUserId = user.getClerkUserId();
        if (clerkUserId == null || clerkUserId.isBlank()) {
            return user.isMobileVerified();
        }

        String secretKey = clerkConfig.getSecretKey();
        if (secretKey == null || secretKey.isBlank()) {
            log.warn("[CLERK SERVICE] Secret key not configured; skipping remote sync");
            return user.isMobileVerified();
        }

        try {
            HttpRequest req = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.clerk.com/v1/users/" + clerkUserId))
                    .header("Authorization", "Bearer " + secretKey)
                    .header("Accept", "application/json")
                    .timeout(Duration.ofSeconds(10))
                    .GET()
                    .build();

            HttpResponse<String> resp = httpClient.send(req, HttpResponse.BodyHandlers.ofString());
            if (resp.statusCode() == 200) {
                JsonNode root = objectMapper.readTree(resp.body());
                JsonNode phoneNumbers = root.path("phone_numbers");
                boolean verified = false;
                String verifiedPhone = null;

                if (phoneNumbers.isArray()) {
                    for (JsonNode pn : phoneNumbers) {
                        String phone = pn.path("phone_number").asText(null);
                        String status = pn.path("verification").path("status").asText("");
                        if ("verified".equalsIgnoreCase(status)) {
                            verified = true;
                            verifiedPhone = phone;
                            break;
                        }
                    }
                }

                if (verified) {
                    user.setMobileVerified(true);
                    if (verifiedPhone != null) {
                        user.setPhoneNumber(verifiedPhone);
                    }
                    userRepository.save(user);
                    log.info("[CLERK SERVICE] User {} mobile authoritatively verified: {}", user.getEmail(), verifiedPhone);
                    return true;
                } else {
                    user.setMobileVerified(false);
                    userRepository.save(user);
                    log.info("[CLERK SERVICE] User {} mobile verification status is false", user.getEmail());
                    return false;
                }
            } else {
                log.warn("[CLERK SERVICE] Clerk API returned status {} for user {}", resp.statusCode(), clerkUserId);
            }
        } catch (Exception e) {
            log.warn("[CLERK SERVICE] Failed to authoritatively sync mobile status from Clerk: {}", e.getMessage());
        }
        return user.isMobileVerified();
    }
}
