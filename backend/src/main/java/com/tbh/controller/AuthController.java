package com.tbh.controller;

import com.tbh.dto.AuthRequest;
import com.tbh.dto.AuthResponse;
import com.tbh.dto.EmailOtpRequest;
import com.tbh.dto.LicenseVerificationRequest;
import com.tbh.dto.OtpRequest;
import com.tbh.dto.RefreshTokenRequest;
import com.tbh.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import com.tbh.entity.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    @Value("${tbh.otp.provider:mock}")
    private String otpProvider;

    @Value("${tbh.email.provider:mock}")
    private String emailProvider;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthRequest request) {
        try {
            AuthResponse response = authService.register(request);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        try {
            AuthResponse response = authService.login(request);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(@RequestBody RefreshTokenRequest request) {
        try {
            if (request.getRefreshToken() == null || request.getRefreshToken().isBlank()) {
                return ResponseEntity.badRequest().body(Map.of("message", "Refresh token is required"));
            }
            AuthResponse response = authService.refreshToken(request.getRefreshToken());
            return ResponseEntity.ok(response);
        } catch (SecurityException e) {
            return ResponseEntity.status(403).body(Map.of("message", e.getMessage(), "error", "TOKEN_FAMILY_REVOKED"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(401).body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@RequestBody(required = false) RefreshTokenRequest request) {
        if (request != null && request.getRefreshToken() != null) {
            authService.logout(request.getRefreshToken());
        }
        return ResponseEntity.ok(Map.of("message", "Logged out successfully"));
    }

    @PostMapping("/send-otp")
    public ResponseEntity<?> sendOtp(@RequestBody OtpRequest request) {
        try {
            String otpCode = authService.sendOtp(request.getPhoneNumber());
            Map<String, Object> resp = new HashMap<>();
            resp.put("message", "OTP sent successfully to " + request.getPhoneNumber());
            resp.put("expiresInSeconds", 300);
            if ("mock".equalsIgnoreCase(otpProvider)) {
                resp.put("devOtp", otpCode);
            }
            return ResponseEntity.ok(resp);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("message", "Failed to send OTP. Please try again later."));
        }
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody OtpRequest request) {
        try {
            AuthResponse response = authService.verifyOtp(request.getPhoneNumber(), request.getOtp());
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping("/send-email-otp")
    public ResponseEntity<?> sendEmailOtp(@RequestBody EmailOtpRequest request) {
        try {
            String otpCode = authService.sendEmailOtp(request.getEmail());
            Map<String, Object> resp = new HashMap<>();
            resp.put("message", "Verification code sent to " + request.getEmail());
            resp.put("expiresInSeconds", 300);
            if ("mock".equalsIgnoreCase(emailProvider) || emailProvider == null) {
                resp.put("devOtp", otpCode);
            }
            return ResponseEntity.ok(resp);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("message", "Failed to dispatch email OTP: " + e.getMessage()));
        }
    }

    @PostMapping("/verify-email-otp")
    public ResponseEntity<?> verifyEmailOtp(@RequestBody EmailOtpRequest request) {
        try {
            AuthResponse response = authService.verifyEmailOtp(request.getEmail(), request.getOtp(), request.getFullName());
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping("/verify-license")
    public ResponseEntity<?> verifyLicense(@RequestBody LicenseVerificationRequest request, Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated() || "anonymousUser".equals(authentication.getName())) {
            return ResponseEntity.status(401).body(Map.of("message", "Authentication required to verify driving licence."));
        }
        try {
            boolean isAdmin = authentication.getAuthorities().stream()
                    .anyMatch(a -> a.getAuthority().contains("ADMIN"));
            if (!isAdmin) {
                User user = authService.findUserByEmail(authentication.getName())
                        .orElseThrow(() -> new IllegalArgumentException("Authenticated user not found."));
                if (request.getUserId() != null && !request.getUserId().equals(user.getId())) {
                    return ResponseEntity.status(403).body(Map.of("message", "Access Denied: You cannot verify license for another user."));
                }
                request.setUserId(user.getId());
            }
            AuthResponse response = authService.verifyLicense(request);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    public ResponseEntity<?> verifyLicense(LicenseVerificationRequest request) {
        return verifyLicense(request, null);
    }

    @GetMapping("/me")
    public ResponseEntity<?> getMe(org.springframework.security.core.Authentication authentication) {
        if (authentication == null || authentication.getName() == null) {
            return ResponseEntity.status(401).body(Map.of("message", "Unauthenticated session"));
        }
        try {
            AuthResponse response = authService.getCurrentUser(authentication.getName());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(404).body(Map.of("message", e.getMessage()));
        }
    }

    @PatchMapping("/profile")
    public ResponseEntity<?> updateProfile(
            @RequestBody Map<String, String> body,
            org.springframework.security.core.Authentication authentication) {
        if (authentication == null || authentication.getName() == null) {
            return ResponseEntity.status(401).body(Map.of("message", "Unauthenticated session"));
        }
        try {
            String fullName = body.get("fullName");
            if (fullName == null || fullName.trim().isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("message", "Name cannot be empty."));
            }
            AuthResponse response = authService.updateProfile(authentication.getName(), fullName.trim());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }
}


