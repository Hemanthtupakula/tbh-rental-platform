package com.tbh.controller;

import com.tbh.dto.KycStatusResponse;
import com.tbh.entity.LicenseVerification;
import com.tbh.entity.User;
import com.tbh.repository.UserRepository;
import com.tbh.service.KycService;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/kyc")
public class KycController {

    private final KycService kycService;
    private final UserRepository userRepository;
    private final com.tbh.service.email.EmailService emailService;

    public KycController(KycService kycService, UserRepository userRepository) {
        this(kycService, userRepository, null);
    }

    @org.springframework.beans.factory.annotation.Autowired
    public KycController(KycService kycService, UserRepository userRepository,
                         @org.springframework.beans.factory.annotation.Autowired(required = false) com.tbh.service.email.EmailService emailService) {
        this.kycService = kycService;
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    @GetMapping("/status")
    public ResponseEntity<?> getStatus(@RequestParam(required = false) Long userId, Authentication authentication) {
        Long targetUserId = resolveUserId(userId, authentication);
        if (targetUserId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Authentication required to view KYC status."));
        }

        Optional<LicenseVerification> kycOpt = kycService.getKycStatus(targetUserId);
        if (kycOpt.isEmpty()) {
            return ResponseEntity.ok(Map.of(
                    "status", "NOT_SUBMITTED",
                    "verified", false,
                    "message", "No driving licence uploaded yet."
            ));
        }

        LicenseVerification kyc = kycOpt.get();
        Map<String, Object> resp = buildStatusMap(kyc);
        return ResponseEntity.ok(resp);
    }

    @GetMapping("/me")
    public ResponseEntity<?> getMyKycStatus(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated() || "anonymousUser".equals(authentication.getName())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Authentication required to view your KYC status."));
        }

        User authUser = userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + authentication.getName()));

        Optional<LicenseVerification> kycOpt = kycService.getKycStatus(authUser.getId());
        if (kycOpt.isEmpty()) {
            return ResponseEntity.ok(Map.of(
                    "status", "NOT_SUBMITTED",
                    "verified", false,
                    "message", "No driving licence uploaded yet."
            ));
        }

        return ResponseEntity.ok(buildStatusMap(kycOpt.get()));
    }

    @PostMapping("/demo-verify")
    public ResponseEntity<?> demoVerify(@RequestParam(required = false) Long userId, Authentication authentication) {
        Long targetUserId = resolveUserId(userId, authentication);
        if (targetUserId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Authentication required."));
        }

        try {
            LicenseVerification kyc = kycService.verifyDemoLicense(targetUserId);
            return ResponseEntity.ok(Map.of(
                    "status", kyc.getVerificationStatus().name(),
                    "verified", true,
                    "maskedLicenseNumber", kyc.getMaskedLicenseNumber(),
                    "issuingState", kyc.getIssuingState(),
                    "expiryDate", kyc.getExpiryDate().toString(),
                    "message", "Driving licence verified in test/mock environment."
            ));
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(Map.of("error", e.getMessage(), "code", "DEMO_VERIFY_DISABLED"));
        }
    }

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> uploadKyc(
            @RequestParam("licenseNumber") String licenseNumber,
            @RequestParam(value = "issuingState", required = false) String issuingState,
            @RequestParam(value = "expiryDate", required = false) String expiryDate,
            @RequestParam(value = "frontDocument", required = false) MultipartFile frontDocument,
            @RequestParam(value = "backDocument", required = false) MultipartFile backDocument,
            @RequestParam(value = "userId", required = false) Long userId,
            Authentication authentication
    ) {
        Long targetUserId = resolveUserId(userId, authentication);
        if (targetUserId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Authentication required."));
        }

        if (frontDocument == null || frontDocument.isEmpty() || backDocument == null || backDocument.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Both front and back photos of your driving licence are required."));
        }

        try {
            LicenseVerification kyc = kycService.submitLicense(targetUserId, licenseNumber, issuingState, expiryDate, frontDocument, backDocument);

            Map<String, Object> resp = buildStatusMap(kyc);
            resp.put("message", "Driving licence uploaded. Please review extracted information and confirm to submit for admin review.");
            return ResponseEntity.ok(resp);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/confirm")
    public ResponseEntity<?> confirmKyc(
            @RequestBody Map<String, Object> body,
            Authentication authentication
    ) {
        if (authentication == null || !authentication.isAuthenticated() || "anonymousUser".equals(authentication.getName())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Authentication required."));
        }

        User authUser = userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + authentication.getName()));

        Long kycId = body.get("kycId") != null ? Long.valueOf(body.get("kycId").toString()) : null;
        if (kycId == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "KYC ID is required."));
        }

        boolean confirmed = body.get("confirmed") != null && Boolean.parseBoolean(body.get("confirmed").toString());
        String confirmedName = (String) body.get("name");
        String confirmedDl = (String) body.get("licenseNumber");
        String confirmedClasses = (String) body.get("vehicleClasses");
        java.time.LocalDate confirmedDob = null;
        java.time.LocalDate confirmedExpiry = null;

        if (body.get("dob") != null && !body.get("dob").toString().isBlank()) {
            try { confirmedDob = java.time.LocalDate.parse(body.get("dob").toString()); } catch (Exception ignored) {}
        }
        if (body.get("expiryDate") != null && !body.get("expiryDate").toString().isBlank()) {
            try { confirmedExpiry = java.time.LocalDate.parse(body.get("expiryDate").toString()); } catch (Exception ignored) {}
        }

        try {
            LicenseVerification updated = kycService.confirmExtractedDetails(
                    authUser.getId(), kycId, confirmed, confirmedName, confirmedDl, confirmedDob, confirmedExpiry, confirmedClasses
            );

            if (emailService != null && authUser.getEmail() != null) {
                try { emailService.queueKycSubmitted(authUser.getEmail(), authUser.getFullName()); } catch (Exception ignored) {}
            }

            Map<String, Object> resp = buildStatusMap(updated);
            resp.put("message", "Driving licence confirmed and queued for TBH administrator review.");
            return ResponseEntity.ok(resp);
        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("error", e.getMessage()));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/document/{kycId}/{side}")
    public ResponseEntity<?> getDocument(
            @PathVariable Long kycId,
            @PathVariable String side,
            @RequestParam(required = false) Long userId,
            Authentication authentication
    ) {
        Long targetUserId = resolveUserId(userId, authentication);
        if (targetUserId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Authentication required to access documents."));
        }

        boolean isAdmin = authentication != null && authentication.getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        try {
            Resource doc = kycService.getPrivateDocument(kycId, targetUserId, isAdmin, "back".equalsIgnoreCase(side));
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"document\"")
                    .body(doc);
        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("error", e.getMessage()));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", e.getMessage()));
        }
    }

    private Map<String, Object> buildStatusMap(LicenseVerification kyc) {
        Map<String, Object> resp = new HashMap<>();
        resp.put("id", kyc.getId());
        resp.put("status", kyc.getVerificationStatus().name());
        resp.put("verified", kyc.isEligibleForRental());
        resp.put("maskedLicenseNumber", kyc.getMaskedLicenseNumber());
        resp.put("issuingState", kyc.getIssuingState());
        resp.put("dateOfBirth", kyc.getDateOfBirth() != null ? kyc.getDateOfBirth().toString() : null);
        resp.put("expiryDate", kyc.getExpiryDate() != null ? kyc.getExpiryDate().toString() : null);
        resp.put("submittedAt", kyc.getSubmittedAt() != null ? kyc.getSubmittedAt().toString() : null);
        resp.put("verifiedAt", kyc.getVerifiedAt() != null ? kyc.getVerifiedAt().toString() : null);
        resp.put("rejectionReason", kyc.getRejectionReason());
        resp.put("provider", kyc.getProvider());

        // Automated Check & Extracted Fields
        resp.put("extractedName", kyc.getExtractedName());
        resp.put("extractedLicenseNumber", kyc.getExtractedLicenseNumber());
        resp.put("extractedDob", kyc.getExtractedDob() != null ? kyc.getExtractedDob().toString() : null);
        resp.put("extractedIssueDate", kyc.getExtractedIssueDate() != null ? kyc.getExtractedIssueDate().toString() : null);
        resp.put("extractedExpiryDate", kyc.getExtractedExpiryDate() != null ? kyc.getExtractedExpiryDate().toString() : null);
        resp.put("extractedVehicleClasses", kyc.getExtractedVehicleClasses());
        resp.put("ocrStatus", kyc.getOcrStatus());
        resp.put("qrStatus", kyc.getQrStatus());
        resp.put("documentQualityStatus", kyc.getDocumentQualityStatus());
        resp.put("formatStatus", kyc.getFormatStatus());
        resp.put("expiryStatus", kyc.getExpiryStatus());
        resp.put("classStatus", kyc.getClassStatus());
        resp.put("customerConfirmed", kyc.isCustomerConfirmed());
        resp.put("reviewNotes", kyc.getReviewNotes());

        return resp;
    }

    private Long resolveUserId(Long paramUserId, Authentication auth) {
        if (auth == null || !auth.isAuthenticated() || "anonymousUser".equals(auth.getName())) {
            return null;
        }
        User authUser = userRepository.findByEmail(auth.getName()).orElse(null);
        if (authUser == null) {
            return null;
        }
        boolean isAdmin = auth.getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        if (paramUserId != null && !paramUserId.equals(authUser.getId())) {
            if (!isAdmin) {
                throw new SecurityException("Access Denied: Cannot access KYC data of another user.");
            }
            return paramUserId;
        }
        return authUser.getId();
    }
}
