package com.tbh.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ResendConfig {

    @Value("${tbh.email.provider:resend}")
    private String provider;

    @Value("${tbh.email.api-key:}")
    private String apiKey;

    @Value("${tbh.email.from:TBH Rentals <onboarding@resend.dev>}")
    private String fromEmail;

    @Value("${tbh.email.admin-email:${ADMIN_EMAIL:admin@tbhrentals.in}}")
    private String adminEmail;

    @Value("${spring.profiles.active:dev}")
    private String activeProfile;

    public String getProvider() { return provider; }
    public String getApiKey() { return apiKey; }
    public String getFromEmail() { return fromEmail; }
    public String getAdminEmail() { return adminEmail; }
    public String getActiveProfile() { return activeProfile; }
    public boolean isProduction() { return "prod".equalsIgnoreCase(activeProfile); }
}