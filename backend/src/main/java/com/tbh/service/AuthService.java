package com.tbh.service;

import com.tbh.dto.AuthRequest;
import com.tbh.dto.AuthResponse;
import com.tbh.dto.LicenseVerificationRequest;
import com.tbh.entity.RefreshToken;
import com.tbh.entity.Role;
import com.tbh.entity.User;
import com.tbh.repository.UserRepository;
import com.tbh.security.JwtTokenProvider;
import com.tbh.service.email.EmailService;
import com.tbh.service.otp.OtpProvider;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.tbh.service.kyc.KycVerificationResult;
import com.tbh.service.kyc.KycVerificationService;
import com.tbh.util.IdentitySanitizer;
import java.time.LocalDate;

import java.security.SecureRandom;
import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider tokenProvider;
    private final OtpProvider otpProvider;
    private final RefreshTokenService refreshTokenService;
    private final EmailService emailService;
    private final KycVerificationService kycVerificationService;

    public static class OtpSession {
        private final String code;
        private final Instant expiresAt;
        private final Instant createdAt;
        private int attempts = 0;

        public OtpSession(String code, Instant expiresAt) {
            this.code = code;
            this.expiresAt = expiresAt;
            this.createdAt = Instant.now();
        }

        public String getCode() { return code; }
        public boolean isExpired() { return Instant.now().isAfter(expiresAt); }
        public boolean canResend() { return Instant.now().isAfter(createdAt.plusSeconds(60)); }
        public int incrementAttempts() { return ++attempts; }
        public int getAttempts() { return attempts; }
    }

    private final Map<String, OtpSession> otpStorage = new ConcurrentHashMap<>();
    private final Map<String, OtpSession> emailOtpStorage = new ConcurrentHashMap<>();
    private final SecureRandom secureRandom = new SecureRandom();

    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       JwtTokenProvider tokenProvider,
                       OtpProvider otpProvider,
                       RefreshTokenService refreshTokenService,
                       EmailService emailService,
                       KycVerificationService kycVerificationService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
        this.otpProvider = otpProvider;
        this.refreshTokenService = refreshTokenService;
        this.emailService = emailService;
        this.kycVerificationService = kycVerificationService;
    }

    public AuthResponse register(AuthRequest request) {
        if (request.getEmail() == null || request.getEmail().isBlank()) {
            throw new IllegalArgumentException("Email address is required.");
        }
        if (request.getPassword() == null || request.getPassword().length() < 6) {
            throw new IllegalArgumentException("Password must be at least 6 characters.");
        }
        if (userRepository.existsByEmail(request.getEmail().trim().toLowerCase())) {
            throw new IllegalArgumentException("Account with this email already exists.");
        }

        String hashedPassword = passwordEncoder.encode(request.getPassword());
        User user = new User(
                request.getFullName() != null ? request.getFullName().trim() : "TBH Rider",
                request.getEmail().trim().toLowerCase(),
                request.getPhoneNumber() != null ? request.getPhoneNumber().trim() : null,
                hashedPassword,
                Role.ROLE_USER
        );
        user = userRepository.save(user);

        String token = tokenProvider.generateToken(user.getId(), user.getEmail(), user.getRole().name());
        RefreshToken refreshToken = refreshTokenService.createRefreshToken(user);

        return toAuthResponse(user, token, refreshToken);
    }

    public AuthResponse login(AuthRequest request) {
        if (request.getEmail() == null || request.getPassword() == null) {
            throw new IllegalArgumentException("Email and password are required.");
        }

        User user = userRepository.findByEmail(request.getEmail().trim().toLowerCase())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new IllegalArgumentException("Invalid email or password.");
        }

        String token = tokenProvider.generateToken(user.getId(), user.getEmail(), user.getRole().name());
        RefreshToken refreshToken = refreshTokenService.createRefreshToken(user);

        return toAuthResponse(user, token, refreshToken);
    }

    public String sendOtp(String phoneNumber) {
        String sanitizedPhone = sanitizePhone(phoneNumber);
        if (sanitizedPhone.length() < 10) {
            throw new IllegalArgumentException("Please provide a valid 10-digit Indian mobile number.");
        }

        OtpSession existing = otpStorage.get(sanitizedPhone);
        if (existing != null && !existing.canResend()) {
            throw new IllegalArgumentException("Please wait 60 seconds before requesting another OTP.");
        }

        int randomPin = 100000 + secureRandom.nextInt(900000);
        String otpCode = String.valueOf(randomPin);

        Instant expiresAt = Instant.now().plusSeconds(300);
        otpStorage.put(sanitizedPhone, new OtpSession(otpCode, expiresAt));

        otpProvider.sendOtp(sanitizedPhone, otpCode);
        return otpCode;
    }

    public AuthResponse verifyOtp(String phoneNumber, String otp) {
        String sanitizedPhone = sanitizePhone(phoneNumber);
        OtpSession session = otpStorage.get(sanitizedPhone);

        if (session == null) {
            throw new IllegalArgumentException("No active OTP found. Please request a new OTP.");
        }

        if (session.isExpired()) {
            otpStorage.remove(sanitizedPhone);
            throw new IllegalArgumentException("OTP has expired. Please request a new OTP.");
        }

        if (session.getAttempts() >= 3) {
            otpStorage.remove(sanitizedPhone);
            throw new IllegalArgumentException("Maximum verification attempts exceeded. Please request a new OTP.");
        }

        if (!session.getCode().equals(otp.trim())) {
            int attempts = session.incrementAttempts();
            int remaining = 3 - attempts;
            if (remaining <= 0) {
                otpStorage.remove(sanitizedPhone);
                throw new IllegalArgumentException("Maximum attempts exceeded. Please request a new OTP.");
            }
            throw new IllegalArgumentException("Incorrect OTP. " + remaining + " attempts remaining.");
        }

        otpStorage.remove(sanitizedPhone);

        User user = userRepository.findByPhoneNumber(sanitizedPhone)
                .orElseGet(() -> {
                    User newUser = new User(
                            "TBH Rider " + sanitizedPhone.substring(Math.max(0, sanitizedPhone.length() - 4)),
                            "rider_" + sanitizedPhone + "@tbhrentals.in",
                            sanitizedPhone,
                            passwordEncoder.encode("OTP_AUTH_" + secureRandom.nextLong()),
                            Role.ROLE_USER
                    );
                    return newUser;
                });

        user.setMobileVerified(true);
        user = userRepository.save(user);

        String token = tokenProvider.generateToken(user.getId(), user.getEmail(), user.getRole().name());
        RefreshToken refreshToken = refreshTokenService.createRefreshToken(user);

        return toAuthResponse(user, token, refreshToken);
    }

    public String sendEmailOtp(String email) {
        if (email == null || email.isBlank() || !email.contains("@")) {
            throw new IllegalArgumentException("Please enter a valid email address.");
        }
        String normalizedEmail = email.trim().toLowerCase();

        OtpSession existing = emailOtpStorage.get(normalizedEmail);
        if (existing != null && !existing.canResend()) {
            throw new IllegalArgumentException("Please wait 60 seconds before requesting another OTP.");
        }

        int randomPin = 100000 + secureRandom.nextInt(900000);
        String otpCode = String.valueOf(randomPin);

        Instant expiresAt = Instant.now().plusSeconds(300);
        emailOtpStorage.put(normalizedEmail, new OtpSession(otpCode, expiresAt));

        emailService.sendOtpEmail(normalizedEmail, otpCode);
        return otpCode;
    }

    public AuthResponse verifyEmailOtp(String email, String otp, String fullName) {
        if (email == null || email.isBlank() || !email.contains("@")) {
            throw new IllegalArgumentException("Valid email address is required.");
        }
        String normalizedEmail = email.trim().toLowerCase();
        OtpSession session = emailOtpStorage.get(normalizedEmail);

        if (session == null) {
            throw new IllegalArgumentException("No active OTP found for this email. Please request a new OTP.");
        }

        if (session.isExpired()) {
            emailOtpStorage.remove(normalizedEmail);
            throw new IllegalArgumentException("OTP has expired. Please request a new OTP.");
        }

        if (session.getAttempts() >= 3) {
            emailOtpStorage.remove(normalizedEmail);
            throw new IllegalArgumentException("Maximum verification attempts exceeded. Please request a new OTP.");
        }

        if (!session.getCode().equals(otp != null ? otp.trim() : "")) {
            int attempts = session.incrementAttempts();
            int remaining = 3 - attempts;
            if (remaining <= 0) {
                emailOtpStorage.remove(normalizedEmail);
                throw new IllegalArgumentException("Maximum attempts exceeded. Please request a new OTP.");
            }
            throw new IllegalArgumentException("Incorrect OTP. " + remaining + " attempts remaining.");
        }

        emailOtpStorage.remove(normalizedEmail);

        User user = userRepository.findByEmail(normalizedEmail)
                .orElseGet(() -> {
                    String name = (fullName != null && !fullName.isBlank()) ? fullName.trim() : "TBH Rider " + normalizedEmail.split("@")[0];
                    User newUser = new User(
                            name,
                            normalizedEmail,
                            null,
                            passwordEncoder.encode("EMAIL_OTP_" + secureRandom.nextLong()),
                            Role.ROLE_USER
                    );
                    return userRepository.save(newUser);
                });

        String token = tokenProvider.generateToken(user.getId(), user.getEmail(), user.getRole().name());
        RefreshToken refreshToken = refreshTokenService.createRefreshToken(user);

        return toAuthResponse(user, token, refreshToken);
    }

    public AuthResponse refreshToken(String refreshTokenStr) {
        RefreshToken newRefreshToken = refreshTokenService.rotateRefreshToken(refreshTokenStr);
        User user = newRefreshToken.getUser();
        String newAccessToken = tokenProvider.generateToken(user.getId(), user.getEmail(), user.getRole().name());

        return toAuthResponse(user, newAccessToken, newRefreshToken);
    }

    public void logout(String refreshTokenStr) {
        if (refreshTokenStr != null && !refreshTokenStr.isBlank()) {
            refreshTokenService.revokeToken(refreshTokenStr);
        }
    }

    public AuthResponse verifyLicense(LicenseVerificationRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User not found."));

        if (request.getLicenseNumber() == null || request.getLicenseNumber().trim().isEmpty()) {
            throw new IllegalArgumentException("Valid driving license number is required.");
        }

        String cleanDl = request.getLicenseNumber().trim().toUpperCase();
        KycVerificationResult result = kycVerificationService.verifyDrivingLicense(
                cleanDl, "KA", null, LocalDate.now().plusYears(5));

        if (result.isVerified()) {
            user.setDrivingLicenseNumber(cleanDl);
            user.setDrivingLicenseVerified(true);
            if (request.getDocUrl() != null) {
                user.setDrivingLicenseDocUrl(request.getDocUrl());
            }
            user = userRepository.save(user);
        } else {
            user.setDrivingLicenseVerified(false);
            userRepository.save(user);
            throw new IllegalArgumentException(result.getMessage() != null
                    ? result.getMessage()
                    : "License verification failed. Automated government gateway is not configured.");
        }

        String token = tokenProvider.generateToken(user.getId(), user.getEmail(), user.getRole().name());
        RefreshToken refreshToken = refreshTokenService.createRefreshToken(user);

        return toAuthResponse(user, token, refreshToken);
    }

    public AuthResponse getCurrentUser(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found for email: " + email));
        String token = tokenProvider.generateToken(user.getId(), user.getEmail(), user.getRole().name());
        RefreshToken refreshToken = refreshTokenService.createRefreshToken(user);

        return toAuthResponse(user, token, refreshToken);
    }

    public java.util.Optional<User> findUserByEmail(String email) {
        if (email == null) return java.util.Optional.empty();
        return userRepository.findByEmail(email.trim().toLowerCase());
    }

    private AuthResponse toAuthResponse(User user, String token, RefreshToken refreshToken) {
        String maskedDl = user.getDrivingLicenseNumber() != null
                ? IdentitySanitizer.maskLicense(user.getDrivingLicenseNumber())
                : null;
        String maskedAadhaar = user.getAadhaarNumber() != null
                ? IdentitySanitizer.maskAadhaar(user.getAadhaarNumber())
                : null;
        String rawRefresh = refreshToken != null
                ? (refreshToken.getRawToken() != null ? refreshToken.getRawToken() : refreshToken.getToken())
                : null;

        return new AuthResponse(
                token,
                rawRefresh,
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getPhoneNumber(),
                user.getRole().name(),
                user.isDrivingLicenseVerified(),
                maskedDl,
                maskedAadhaar
        );
    }

    private String sanitizePhone(String phone) {
        if (phone == null) return "";
        String digits = phone.replaceAll("[^0-9]", "");
        if (digits.length() > 10) {
            return digits.substring(digits.length() - 10);
        }
        return digits;
    }
}
