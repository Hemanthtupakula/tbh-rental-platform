package com.tbh.security;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tbh.config.ClerkConfig;
import com.tbh.entity.Role;
import com.tbh.entity.User;
import com.tbh.repository.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.math.BigInteger;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.spec.RSAPublicKeySpec;
import java.time.Duration;
import java.time.Instant;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

import com.tbh.service.ClerkService;

@Component
public class ClerkJwtVerifier {

    private static final Logger log = LoggerFactory.getLogger(ClerkJwtVerifier.class);

    private final ClerkConfig clerkConfig;
    private final UserRepository userRepository;
    private final ClerkService clerkService;
    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;

    private final Map<String, PublicKey> keyCache = new ConcurrentHashMap<>();
    private Instant cacheExpiry = Instant.MIN;

    public ClerkJwtVerifier(ClerkConfig clerkConfig, UserRepository userRepository, ClerkService clerkService) {
        this.clerkConfig = clerkConfig;
        this.userRepository = userRepository;
        this.clerkService = clerkService;
        this.httpClient = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();
        this.objectMapper = new ObjectMapper();
    }

    public boolean isClerkToken(String token) {
        if (token == null || token.isBlank()) {
            return false;
        }
        try {
            String[] parts = token.split("\\.");
            if (parts.length != 3) {
                return false;
            }
            String headerJson = new String(Base64.getUrlDecoder().decode(parts[0]));
            JsonNode header = objectMapper.readTree(headerJson);
            if (header.has("kid") && header.path("kid").asText().startsWith("ins_")) {
                return true;
            }
            if (header.has("alg") && "RS256".equalsIgnoreCase(header.path("alg").asText())) {
                String payloadJson = new String(Base64.getUrlDecoder().decode(parts[1]));
                JsonNode payload = objectMapper.readTree(payloadJson);
                String iss = payload.path("iss").asText("");
                if (iss.contains("clerk") || iss.equals(clerkConfig.getIssuer())) {
                    return true;
                }
            }
        } catch (Exception ignored) {}
        return false;
    }

    public Authentication verifyAndAuthenticate(String token) {
        try {
            String[] parts = token.split("\\.");
            if (parts.length != 3) {
                return null;
            }
            String headerJson = new String(Base64.getUrlDecoder().decode(parts[0]));
            JsonNode header = objectMapper.readTree(headerJson);
            String kid = header.path("kid").asText(null);
            if (kid == null) {
                return null;
            }

            PublicKey publicKey = getPublicKey(kid);
            if (publicKey == null) {
                log.warn("[CLERK AUTH] Key ID '{}' not found in Clerk JWKS", kid);
                return null;
            }

            var parserBuilder = Jwts.parser()
                    .verifyWith(publicKey)
                    .clockSkewSeconds(120);
            if (clerkConfig.getIssuer() != null && !clerkConfig.getIssuer().isBlank()) {
                parserBuilder.requireIssuer(clerkConfig.getIssuer());
            }

            Claims claims = parserBuilder.build()
                    .parseSignedClaims(token)
                    .getPayload();

            String clerkUserId = claims.getSubject();
            if (clerkUserId == null || clerkUserId.isBlank()) {
                return null;
            }

            String email = null;
            if (claims.containsKey("email")) {
                email = claims.get("email", String.class);
            } else if (claims.containsKey("email_address")) {
                email = claims.get("email_address", String.class);
            }

            String phoneNumber = null;
            if (claims.containsKey("phone_number")) {
                phoneNumber = claims.get("phone_number", String.class);
            }
            boolean phoneVerified = false;
            if (claims.containsKey("phone_number_verified")) {
                Object pnv = claims.get("phone_number_verified");
                if (pnv instanceof Boolean b) {
                    phoneVerified = b;
                } else if (pnv != null) {
                    phoneVerified = Boolean.parseBoolean(pnv.toString());
                }
            }

            User user = syncUser(clerkUserId, email, phoneNumber, phoneVerified);

            List<SimpleGrantedAuthority> authorities = Collections.singletonList(
                    new SimpleGrantedAuthority(user.getRole().name())
            );

            return new UsernamePasswordAuthenticationToken(user.getEmail(), null, authorities);
        } catch (Exception e) {
            log.error("[CLERK AUTH] Verification failed: {}", e.getMessage());
            return null;
        }
    }

    private synchronized User syncUser(String clerkUserId, String email, String phoneNumber, boolean phoneVerified) {
        String resolvedEmail = email;
        if (resolvedEmail == null || resolvedEmail.isBlank() || resolvedEmail.endsWith("@clerk.tbh")) {
            String fetched = clerkService.fetchUserPrimaryEmail(clerkUserId);
            if (fetched != null && !fetched.isBlank()) {
                resolvedEmail = fetched;
            }
        }

        // 1. Match by clerkUserId first
        Optional<User> byClerk = userRepository.findByClerkUserId(clerkUserId);
        if (byClerk.isPresent()) {
            User existing = byClerk.get();
            boolean saveNeeded = false;

            if (resolvedEmail != null && !resolvedEmail.isBlank() && !resolvedEmail.equals(existing.getEmail())) {
                existing.setEmail(resolvedEmail);
                saveNeeded = true;
            }

            if (com.tbh.service.AuthService.isAdminEmail(existing.getEmail()) || "tupakulahemanth828@gmail.com".equalsIgnoreCase(existing.getEmail())) {
                if (existing.getRole() != Role.ROLE_ADMIN) {
                    existing.setRole(Role.ROLE_ADMIN);
                    saveNeeded = true;
                }
            }

            if (phoneVerified) {
                existing.setMobileVerified(true);
                if (phoneNumber != null && !phoneNumber.isBlank()) {
                    existing.setPhoneNumber(phoneNumber);
                }
                saveNeeded = true;
            }
            return saveNeeded ? userRepository.save(existing) : existing;
        }

        // 2. Match by resolved email
        if (resolvedEmail != null && !resolvedEmail.isBlank()) {
            Optional<User> byEmail = userRepository.findByEmail(resolvedEmail);
            if (byEmail.isPresent()) {
                User existing = byEmail.get();
                existing.setClerkUserId(clerkUserId);
                if (com.tbh.service.AuthService.isAdminEmail(existing.getEmail()) || "tupakulahemanth828@gmail.com".equalsIgnoreCase(existing.getEmail())) {
                    existing.setRole(Role.ROLE_ADMIN);
                }
                if (phoneVerified) {
                    existing.setMobileVerified(true);
                    if (phoneNumber != null && !phoneNumber.isBlank()) {
                        existing.setPhoneNumber(phoneNumber);
                    }
                }
                return userRepository.save(existing);
            }
        }

        // 3. Create new user
        String safeEmail = (resolvedEmail != null && !resolvedEmail.isBlank()) ? resolvedEmail : (clerkUserId + "@clerk.tbh");
        User newUser = new User();
        newUser.setFullName("TBH Rider");
        newUser.setEmail(safeEmail);
        newUser.setPhoneNumber(phoneNumber);
        newUser.setMobileVerified(phoneVerified);
        newUser.setPassword(null);
        boolean isOwner = com.tbh.service.AuthService.isAdminEmail(safeEmail) || "tupakulahemanth828@gmail.com".equalsIgnoreCase(safeEmail);
        newUser.setRole(isOwner ? Role.ROLE_ADMIN : Role.ROLE_USER);
        if (isOwner) {
            newUser.setDrivingLicenseVerified(true);
        }
        newUser.setClerkUserId(clerkUserId);
        return userRepository.save(newUser);
    }

    private PublicKey getPublicKey(String kid) {
        refreshJwksIfNeeded();
        PublicKey key = keyCache.get(kid);
        if (key == null) {
            refreshJwksForce();
            key = keyCache.get(kid);
        }
        return key;
    }

    private void refreshJwksIfNeeded() {
        if (Instant.now().isAfter(cacheExpiry) || keyCache.isEmpty()) {
            refreshJwksForce();
        }
    }

    private synchronized void refreshJwksForce() {
        try {
            String uri = clerkConfig.getJwksUri();
            if (uri == null || uri.isBlank()) {
                return;
            }
            HttpRequest req = HttpRequest.newBuilder()
                    .uri(URI.create(uri))
                    .timeout(Duration.ofSeconds(10))
                    .GET()
                    .build();

            HttpResponse<String> resp = httpClient.send(req, HttpResponse.BodyHandlers.ofString());
            if (resp.statusCode() == 200) {
                JsonNode root = objectMapper.readTree(resp.body());
                JsonNode keys = root.path("keys");
                if (keys.isArray()) {
                    for (JsonNode keyNode : keys) {
                        String keyId = keyNode.path("kid").asText();
                        String kty = keyNode.path("kty").asText();
                        if ("RSA".equalsIgnoreCase(kty)) {
                            String nStr = keyNode.path("n").asText();
                            String eStr = keyNode.path("e").asText();
                            byte[] nBytes = Base64.getUrlDecoder().decode(nStr);
                            byte[] eBytes = Base64.getUrlDecoder().decode(eStr);

                            BigInteger modulus = new BigInteger(1, nBytes);
                            BigInteger exponent = new BigInteger(1, eBytes);

                            RSAPublicKeySpec spec = new RSAPublicKeySpec(modulus, exponent);
                            PublicKey pubKey = KeyFactory.getInstance("RSA").generatePublic(spec);
                            keyCache.put(keyId, pubKey);
                        }
                    }
                    cacheExpiry = Instant.now().plus(Duration.ofHours(1));
                    log.info("[CLERK AUTH] Cached {} public keys from Clerk JWKS", keyCache.size());
                }
            }
        } catch (Exception e) {
            log.warn("[CLERK AUTH] Could not refresh JWKS from {}: {}", clerkConfig.getJwksUri(), e.getMessage());
        }
    }

    public void registerKeyForTesting(String kid, PublicKey publicKey) {
        keyCache.put(kid, publicKey);
        cacheExpiry = Instant.now().plus(Duration.ofDays(1));
    }
}