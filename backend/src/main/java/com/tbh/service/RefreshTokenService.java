package com.tbh.service;

import com.tbh.entity.RefreshToken;
import com.tbh.entity.User;
import com.tbh.repository.RefreshTokenRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.Instant;
import java.util.HexFormat;
import java.util.UUID;

@Service
public class RefreshTokenService {

    @Value("${tbh.jwt.refresh-token-expiration-ms:604800000}")
    private long refreshTokenDurationMs;

    private final RefreshTokenRepository refreshTokenRepository;

    public RefreshTokenService(RefreshTokenRepository refreshTokenRepository) {
        this.refreshTokenRepository = refreshTokenRepository;
    }

    public String hashToken(String rawToken) {
        if (rawToken == null || rawToken.isBlank()) {
            throw new IllegalArgumentException("Refresh token cannot be empty.");
        }
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(rawToken.trim().getBytes(StandardCharsets.UTF_8));
            return HexFormat.of().formatHex(hash);
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException("Cryptographic hash algorithm SHA-256 is unavailable", e);
        }
    }

    @Transactional
    public RefreshToken createRefreshToken(User user) {
        String rawToken = UUID.randomUUID().toString().replace("-", "") + UUID.randomUUID().toString().replace("-", "");
        String hashedToken = hashToken(rawToken);

        RefreshToken refreshToken = new RefreshToken();
        refreshToken.setUser(user);
        refreshToken.setExpiryDate(Instant.now().plusMillis(refreshTokenDurationMs));
        refreshToken.setToken(hashedToken);
        refreshToken.setRawToken(rawToken);
        refreshToken.setTokenFamily(UUID.randomUUID().toString());
        refreshToken.setRevoked(false);

        RefreshToken saved = refreshTokenRepository.save(refreshToken);
        saved.setRawToken(rawToken);
        return saved;
    }

    @Transactional
    public RefreshToken rotateRefreshToken(String requestToken) {
        if (requestToken == null || requestToken.isBlank()) {
            throw new IllegalArgumentException("Refresh token is required.");
        }

        String hashedInput = hashToken(requestToken);
        RefreshToken token = refreshTokenRepository.findByToken(hashedInput)
                .orElseThrow(() -> new IllegalArgumentException("Refresh token not found in records."));

        if (token.isRevoked()) {
            // Compromised token family detected: revoke all tokens belonging to this family
            refreshTokenRepository.revokeAllByTokenFamily(token.getTokenFamily());
            throw new SecurityException("Security violation: Revoked token was re-used. Token family has been invalidated.");
        }

        if (token.getExpiryDate().isBefore(Instant.now())) {
            token.setRevoked(true);
            refreshTokenRepository.save(token);
            throw new IllegalArgumentException("Refresh token was expired. Please make a new signin request.");
        }

        // Revoke the old token
        token.setRevoked(true);
        String newRawToken = UUID.randomUUID().toString().replace("-", "") + UUID.randomUUID().toString().replace("-", "");
        String newHashedToken = hashToken(newRawToken);
        token.setReplacedByToken(newHashedToken);
        refreshTokenRepository.save(token);

        // Issue new token in same family
        RefreshToken newToken = new RefreshToken();
        newToken.setUser(token.getUser());
        newToken.setToken(newHashedToken);
        newToken.setRawToken(newRawToken);
        newToken.setTokenFamily(token.getTokenFamily());
        newToken.setExpiryDate(Instant.now().plusMillis(refreshTokenDurationMs));
        newToken.setRevoked(false);

        RefreshToken saved = refreshTokenRepository.save(newToken);
        saved.setRawToken(newRawToken);
        return saved;
    }

    @Transactional
    public void revokeToken(String rawToken) {
        if (rawToken == null || rawToken.isBlank()) return;
        String hashed = hashToken(rawToken);
        refreshTokenRepository.findByToken(hashed).ifPresent(t -> {
            t.setRevoked(true);
            refreshTokenRepository.save(t);
        });
    }
}
