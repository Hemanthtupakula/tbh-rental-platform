package com.tbh.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ClerkConfig {

    @Value("${tbh.clerk.issuer:https://deep-zebra-6151.clerk.accounts.dev}")
    private String issuer;

    @Value("${tbh.clerk.jwks-uri:https://deep-zebra-6151.clerk.accounts.dev/.well-known/jwks.json}")
    private String jwksUri;

    @Value("${tbh.clerk.secret-key:}")
    private String secretKey;

    @Value("${tbh.clerk.publishable-key:pk_test_ZGVlcC16ZWJyYS02MTUxLmNsZXJrLmFjY291bnRzLmRldiQ}")
    private String publishableKey;

    public String getIssuer() { return issuer; }
    public String getJwksUri() { return jwksUri; }
    public String getSecretKey() { return secretKey; }
    public String getPublishableKey() { return publishableKey; }
}