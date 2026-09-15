package com.tbh.entity;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "refresh_tokens")
public class RefreshToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false, unique = true, length = 500)
    private String token;

    @Column(nullable = false)
    private String tokenFamily;

    @Column(nullable = false)
    private Instant expiryDate;

    private boolean revoked = false;

    private String replacedByToken;

    @Transient
    private String rawToken;

    private Instant createdAt = Instant.now();

    public RefreshToken() {}

    public RefreshToken(User user, String token, String tokenFamily, Instant expiryDate) {
        this.user = user;
        this.token = token;
        this.tokenFamily = tokenFamily;
        this.expiryDate = expiryDate;
        this.revoked = false;
        this.createdAt = Instant.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }

    public String getTokenFamily() { return tokenFamily; }
    public void setTokenFamily(String tokenFamily) { this.tokenFamily = tokenFamily; }

    public Instant getExpiryDate() { return expiryDate; }
    public void setExpiryDate(Instant expiryDate) { this.expiryDate = expiryDate; }

    public boolean isRevoked() { return revoked; }
    public void setRevoked(boolean revoked) { this.revoked = revoked; }

    public String getReplacedByToken() { return replacedByToken; }
    public void setReplacedByToken(String replacedByToken) { this.replacedByToken = replacedByToken; }

    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }

    public String getRawToken() { return rawToken; }
    public void setRawToken(String rawToken) { this.rawToken = rawToken; }
}
