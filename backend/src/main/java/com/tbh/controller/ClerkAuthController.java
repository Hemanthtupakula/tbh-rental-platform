package com.tbh.controller;

import com.tbh.entity.User;
import com.tbh.repository.UserRepository;
import com.tbh.service.ClerkService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping({"/api/auth/clerk", "/api/v1/auth/clerk"})
public class ClerkAuthController {

    private final UserRepository userRepository;
    private final ClerkService clerkService;

    public ClerkAuthController(UserRepository userRepository, ClerkService clerkService) {
        this.userRepository = userRepository;
        this.clerkService = clerkService;
    }

    @GetMapping("/me")
    public ResponseEntity<Map<String, Object>> getCurrentClerkUser(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            Map<String, Object> unauth = new HashMap<>();
            unauth.put("authenticated", false);
            return ResponseEntity.status(401).body(unauth);
        }

        String email = authentication.getName();
        Optional<User> userOpt = userRepository.findByEmail(email);

        Map<String, Object> resp = new HashMap<>();
        resp.put("authenticated", true);
        resp.put("email", email);

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if (user.getClerkUserId() != null && !user.getClerkUserId().isBlank()) {
                clerkService.syncUserMobileVerification(user);
            }
            resp.put("id", user.getId());
            resp.put("fullName", user.getFullName());
            resp.put("phoneNumber", user.getPhoneNumber());
            resp.put("mobileVerified", user.isMobileVerified());
            resp.put("role", user.getRole().name());
            resp.put("clerkUserId", user.getClerkUserId());
            resp.put("kycVerified", user.isDrivingLicenseVerified());
        }

        return ResponseEntity.ok(resp);
    }

    @PostMapping("/sync-mobile")
    public ResponseEntity<Map<String, Object>> syncMobileVerification(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            Map<String, Object> unauth = new HashMap<>();
            unauth.put("error", "Unauthorized");
            return ResponseEntity.status(401).body(unauth);
        }

        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + email));

        boolean verified = clerkService.syncUserMobileVerification(user);

        Map<String, Object> resp = new HashMap<>();
        resp.put("mobileVerified", verified);
        resp.put("phoneNumber", user.getPhoneNumber());
        resp.put("email", user.getEmail());
        return ResponseEntity.ok(resp);
    }
}