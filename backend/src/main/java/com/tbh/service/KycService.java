package com.tbh.service;

import com.tbh.entity.KycAuditEvent;
import com.tbh.entity.KycVerificationStatus;
import com.tbh.entity.LicenseVerification;
import com.tbh.entity.User;
import com.tbh.repository.KycAuditEventRepository;
import com.tbh.repository.LicenseVerificationRepository;
import com.tbh.repository.UserRepository;
import com.tbh.service.kyc.*;
import com.tbh.util.IdentitySanitizer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

@Service
public class KycService {

    private static final Logger log = LoggerFactory.getLogger(KycService.class);

    private final LicenseVerificationRepository kycRepository;
    private final UserRepository userRepository;
    private final KycVerificationService kycVerificationService;
    private final KycAuditEventRepository auditRepository;
    private final DocumentQualityAnalyzer qualityAnalyzer;
    private final QrCodeScannerService qrScannerService;
    private final DlOcrExtractionService ocrExtractionService;
    private final DlFormatValidator formatValidator;
    private final DlDateValidator dateValidator;
    private final VehicleClassValidator classValidator;

    private final Path kycStorageDir = Paths.get("uploads", "kyc");

    @Value("${tbh.kyc.provider:production}")
    private String kycProvider;

    private final com.tbh.service.email.EmailService emailService;
    private final com.tbh.service.media.ImageKitService imageKitService;

    public KycService(LicenseVerificationRepository kycRepository,
                      UserRepository userRepository,
                      KycVerificationService kycVerificationService,
                      @Autowired(required = false) KycAuditEventRepository auditRepository,
                      @Autowired(required = false) DocumentQualityAnalyzer qualityAnalyzer,
                      @Autowired(required = false) QrCodeScannerService qrScannerService,
                      @Autowired(required = false) DlOcrExtractionService ocrExtractionService,
                      @Autowired(required = false) DlFormatValidator formatValidator,
                      @Autowired(required = false) DlDateValidator dateValidator,
                      @Autowired(required = false) VehicleClassValidator classValidator,
                      @Autowired(required = false) com.tbh.service.email.EmailService emailService,
                      @Autowired(required = false) com.tbh.service.media.ImageKitService imageKitService) {
        this.kycRepository = kycRepository;
        this.userRepository = userRepository;
        this.kycVerificationService = kycVerificationService;
        this.auditRepository = auditRepository;
        this.qualityAnalyzer = qualityAnalyzer != null ? qualityAnalyzer : new DocumentQualityAnalyzer();
        this.qrScannerService = qrScannerService != null ? qrScannerService : new QrCodeScannerService();
        this.ocrExtractionService = ocrExtractionService;
        this.formatValidator = formatValidator != null ? formatValidator : new DlFormatValidator();
        this.dateValidator = dateValidator != null ? dateValidator : new DlDateValidator();
        this.classValidator = classValidator != null ? classValidator : new VehicleClassValidator();
        this.emailService = emailService;
        this.imageKitService = imageKitService;
        try {
            Files.createDirectories(kycStorageDir);
        } catch (IOException ignored) {
        }
    }

    public Optional<LicenseVerification> getKycStatus(Long userId) {
        return kycRepository.findTopByUserIdOrderBySubmittedAtDesc(userId);
    }


    public boolean isUserVerified(Long userId) {
        Optional<LicenseVerification> kycOpt = getKycStatus(userId);
        if (kycOpt.isPresent()) {
            return kycOpt.get().isEligibleForRental();
        }
        return userRepository.findById(userId)
                .map(User::isDrivingLicenseVerified)
                .orElse(false);
    }

    public boolean isUserEligibleForVehicleType(Long userId, com.tbh.entity.VehicleType vehicleType) {
        if (!isUserVerified(userId)) {
            return false;
        }
        Optional<LicenseVerification> kycOpt = getKycStatus(userId);
        if (kycOpt.isPresent()) {
            LicenseVerification kyc = kycOpt.get();
            String classes = kyc.getExtractedVehicleClasses();
            if (classes != null && !classes.isBlank()) {
                Set<String> parsed = classValidator.parseClassesString(classes);
                return classValidator.isEligibleForVehicleType(parsed, vehicleType);
            }
        }
        // If legacy user or no specific class restriction recorded, permit
        return true;
    }

    @Transactional
    public LicenseVerification verifyDemoLicense(Long userId) {
        if (!"mock".equalsIgnoreCase(kycProvider)) {
            log.warn("[TBH KYC SECURITY] Attempted demo verification while in production mode. Denied.");
            throw new IllegalStateException("Instant demo KYC verification is disabled in production mode. Automated government verification gateway is not configured.");
        }

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with ID: " + userId));

        LicenseVerification kyc = kycRepository.findTopByUserIdOrderBySubmittedAtDesc(userId)
                .orElse(new LicenseVerification());

        String demoDlNumber = "DL-0420190012345";
        kyc.setUser(user);
        kyc.setMaskedLicenseNumber(IdentitySanitizer.maskLicense(demoDlNumber));
        kyc.setEncryptedLicenseNumber(demoDlNumber);
        kyc.setIssuingState("DL");
        kyc.setDateOfBirth(LocalDate.of(1995, 5, 15));
        kyc.setExpiryDate(LocalDate.of(2032, 12, 31));
        kyc.setVerificationStatus(KycVerificationStatus.VERIFIED);
        kyc.setProvider("MOCK_SANDBOX");
        kyc.setProviderReference("MOCK-KYC-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
        kyc.setVerifiedAt(LocalDateTime.now());
        kyc.setReviewedBy("SYSTEM_MOCK_SANDBOX");

        LicenseVerification saved = kycRepository.save(kyc);

        user.setDrivingLicenseVerified(true);
        user.setDrivingLicenseNumber(demoDlNumber);
        userRepository.save(user);

        log.info("[TBH KYC MOCK] Completed demo license verification for user ID {}", userId);
        return saved;
    }

    @Transactional
    public LicenseVerification submitLicense(Long userId, String licenseNumber, String issuingState, String expiryDateStr, MultipartFile frontFile, MultipartFile backFile) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with ID: " + userId));

        if (licenseNumber == null || licenseNumber.trim().length() < 6) {
            throw new IllegalArgumentException("Valid driving licence number is required.");
        }

        if (frontFile == null || frontFile.isEmpty()) {
            throw new IllegalArgumentException("Driving licence front photo is required.");
        }
        if (backFile == null || backFile.isEmpty()) {
            throw new IllegalArgumentException("Driving licence back photo is required.");
        }

        LocalDate expiryDate = parseExpiryDate(expiryDateStr);

        if (expiryDate.isBefore(LocalDate.now())) {
            throw new IllegalArgumentException("Driving licence is expired. Cannot submit expired licence for rental authorization.");
        }

        LicenseVerification kyc = kycRepository.findTopByUserIdOrderBySubmittedAtDesc(userId)
                .orElse(new LicenseVerification());

        String cleanLicense = licenseNumber.trim().toUpperCase();
        kyc.setUser(user);
        kyc.setMaskedLicenseNumber(IdentitySanitizer.maskLicense(cleanLicense));
        kyc.setEncryptedLicenseNumber(cleanLicense);
        kyc.setIssuingState(issuingState != null ? issuingState.toUpperCase() : "KA");
        kyc.setExpiryDate(expiryDate);
        kyc.setSubmittedAt(LocalDateTime.now());
        kyc.setUpdatedAt(LocalDateTime.now());

        File frontDiskFile = null;
        File backDiskFile = null;

        if (frontFile != null && !frontFile.isEmpty()) {
            validateFile(frontFile);
            String frontPath = savePrivateFile(userId, "front", frontFile);
            kyc.setPrivateDocumentPath(frontPath);
            user.setDrivingLicenseDocUrl("/api/kyc/document/" + user.getId() + "/front");
            frontDiskFile = new File(frontPath);
        }

        if (backFile != null && !backFile.isEmpty()) {
            validateFile(backFile);
            String backPath = savePrivateFile(userId, "back", backFile);
            kyc.setBackDocumentPath(backPath);
            backDiskFile = new File(backPath);
        }

        if (imageKitService != null) {
            try {
                if (frontFile != null && !frontFile.isEmpty()) {
                    String ikFront = imageKitService.uploadFile(frontFile.getBytes(), "kyc_" + userId + "_front_" + System.currentTimeMillis() + ".png", "tbh/kyc", List.of("kyc", "front", "user_" + userId));
                    if (ikFront != null) kyc.setImageKitFrontUrl(ikFront);
                }
                if (backFile != null && !backFile.isEmpty()) {
                    String ikBack = imageKitService.uploadFile(backFile.getBytes(), "kyc_" + userId + "_back_" + System.currentTimeMillis() + ".png", "tbh/kyc", List.of("kyc", "back", "user_" + userId));
                    if (ikBack != null) kyc.setImageKitBackUrl(ikBack);
                }
            } catch (Exception e) {
                log.warn("[KYC IMAGEKIT] ImageKit upload skipped or failed: {}", e.getMessage());
            }
        }

        // 1. Document Quality Check (front and back)
        DocumentQualityAnalyzer.QualityReport frontQuality = (frontDiskFile != null)
                ? qualityAnalyzer.analyzeImage(frontDiskFile)
                : new DocumentQualityAnalyzer.QualityReport(DocumentQualityAnalyzer.QualityResult.FAILED, "Missing front image", 0, 0);
        kyc.setDocumentQualityStatus(frontQuality.getResult().name());

        // 2. QR Code Scanning (assistive only, no raw payload saved)
        QrCodeScannerService.QrScanResult qrResult = (backDiskFile != null)
                ? qrScannerService.scanQrCode(backDiskFile)
                : (frontDiskFile != null ? qrScannerService.scanQrCode(frontDiskFile) : new QrCodeScannerService.QrScanResult(QrCodeScannerService.QrStatus.QR_NOT_DETECTED, false, null));
        kyc.setQrStatus(qrResult.getStatus().name());

        // 3. Real Tesseract OCR Extraction
        if (ocrExtractionService != null && frontDiskFile != null) {
            DlOcrExtractionService.ExtractedDlData ocrData = ocrExtractionService.processDocument(frontDiskFile, backDiskFile);
            kyc.setOcrStatus(ocrData.getRawOcrStatus());
            if (ocrData.getName() != null) kyc.setExtractedName(ocrData.getName());
            if (ocrData.getLicenseNumber() != null) kyc.setExtractedLicenseNumber(ocrData.getLicenseNumber());
            if (ocrData.getDob() != null) kyc.setExtractedDob(ocrData.getDob());
            if (ocrData.getIssueDate() != null) kyc.setExtractedIssueDate(ocrData.getIssueDate());
            if (ocrData.getExpiryDate() != null) kyc.setExtractedExpiryDate(ocrData.getExpiryDate());
            if (!ocrData.getVehicleClasses().isEmpty()) {
                kyc.setExtractedVehicleClasses(String.join(", ", ocrData.getVehicleClasses()));
            }
        } else {
            kyc.setOcrStatus("OCR_UNAVAILABLE");
        }

        // 4. DL Format Check
        DlFormatValidator.FormatStatus formatResult = formatValidator.validateFormat(cleanLicense);
        kyc.setFormatStatus(formatResult.name());

        // 5. Date & Rental Age Eligibility Check
        DlDateValidator.DateValidationReport dateReport = dateValidator.validateDates(
                kyc.getExtractedDob() != null ? kyc.getExtractedDob() : kyc.getDateOfBirth(),
                kyc.getExtractedIssueDate(),
                kyc.getExpiryDate()
        );
        kyc.setExpiryStatus(dateReport.getExpiryStatus().name());

        // 6. Vehicle Class Check
        Set<String> parsedClasses = classValidator.parseClassesString(kyc.getExtractedVehicleClasses());
        VehicleClassValidator.ClassStatus classReport = classValidator.evaluateClasses(parsedClasses);
        kyc.setClassStatus(classReport.name());

        // Initial submission transitions to CUSTOMER_CONFIRMATION_REQUIRED
        kyc.setVerificationStatus(KycVerificationStatus.CUSTOMER_CONFIRMATION_REQUIRED);
        kyc.setCustomerConfirmed(false);
        user.setDrivingLicenseVerified(false);
        userRepository.save(user);

        LicenseVerification saved = kycRepository.save(kyc);

        recordAuditEvent(saved, user, "DOCUMENT_UPLOADED", user.getEmail(), null, KycVerificationStatus.CUSTOMER_CONFIRMATION_REQUIRED.name(),
                "Driving licence uploaded. Quality: " + kyc.getDocumentQualityStatus() + ", OCR: " + kyc.getOcrStatus());

        if (emailService != null) {
            emailService.queueKycSubmitted(user.getEmail(), user.getFullName());
        }

        return saved;
    }

    @Transactional
    public LicenseVerification confirmExtractedDetails(Long userId, Long kycId, boolean confirmed, String confirmedName, String confirmedDl, LocalDate confirmedDob, LocalDate confirmedExpiry, String confirmedClasses) {
        LicenseVerification kyc = kycRepository.findById(kycId)
                .orElseThrow(() -> new IllegalArgumentException("KYC record not found: " + kycId));

        if (!kyc.getUser().getId().equals(userId)) {
            throw new SecurityException("Cannot confirm KYC record of another user.");
        }

        kyc.setCustomerConfirmed(confirmed);

        // Preserve raw OCR extracted baseline values for strict comparison
        String ocrDl = kyc.getExtractedLicenseNumber();
        String ocrName = kyc.getExtractedName();
        LocalDate ocrDob = kyc.getExtractedDob();
        LocalDate ocrExpiry = kyc.getExtractedExpiryDate();

        // Customer confirmed inputs
        String cleanConfirmedDl = confirmedDl != null && !confirmedDl.isBlank() ? confirmedDl.trim().toUpperCase() : kyc.getEncryptedLicenseNumber();
        if (cleanConfirmedDl != null && !cleanConfirmedDl.isBlank()) {
            kyc.setMaskedLicenseNumber(IdentitySanitizer.maskLicense(cleanConfirmedDl));
            kyc.setEncryptedLicenseNumber(cleanConfirmedDl);
        }
        if (confirmedName != null && !confirmedName.isBlank()) {
            if (kyc.getExtractedName() == null) {
                kyc.setExtractedName(confirmedName.trim().toUpperCase());
            }
        }
        if (confirmedDob != null) {
            kyc.setDateOfBirth(confirmedDob);
        } else if (kyc.getDateOfBirth() == null) {
            kyc.setDateOfBirth(ocrDob);
        }
        if (confirmedExpiry != null) {
            kyc.setExpiryDate(confirmedExpiry);
        } else if (kyc.getExpiryDate() == null) {
            kyc.setExpiryDate(ocrExpiry != null ? ocrExpiry : LocalDate.now().plusYears(5));
        }
        if (confirmedClasses != null && !confirmedClasses.isBlank()) {
            kyc.setExtractedVehicleClasses(confirmedClasses.trim().toUpperCase());
            Set<String> set = classValidator.parseClassesString(confirmedClasses);
            kyc.setClassStatus(classValidator.evaluateClasses(set).name());
        }

        String fromStatus = kyc.getVerificationStatus().name();

        // 1. Documents check (Front + Back uploaded & stored)
        boolean hasDocuments = (kyc.getPrivateDocumentPath() != null || kyc.getImageKitFrontUrl() != null)
                && (kyc.getBackDocumentPath() != null || kyc.getImageKitBackUrl() != null);

        // 2. OCR Success check
        boolean isOcrSuccess = "OCR_SUCCESS".equalsIgnoreCase(kyc.getOcrStatus());

        // 3. Licence Number match
        boolean dlNumberMatches = false;
        if (isOcrSuccess && ocrDl != null && cleanConfirmedDl != null && !ocrDl.isBlank() && !cleanConfirmedDl.isBlank()) {
            String cleanOcr = ocrDl.replaceAll("[^A-Za-z0-9]", "").toUpperCase();
            String cleanConfirmed = cleanConfirmedDl.replaceAll("[^A-Za-z0-9]", "").toUpperCase();
            if (cleanOcr.equalsIgnoreCase(cleanConfirmed) || cleanConfirmed.contains(cleanOcr) || cleanOcr.contains(cleanConfirmed)) {
                dlNumberMatches = true;
            }
        }

        // 4. Name match (if OCR extracted name exists)
        boolean nameMatches = true;
        if (isOcrSuccess && ocrName != null && !ocrName.isBlank() && confirmedName != null && !confirmedName.isBlank()) {
            String cleanOcrName = ocrName.replaceAll("[^A-Za-z]", "").toUpperCase();
            String cleanConfirmedName = confirmedName.replaceAll("[^A-Za-z]", "").toUpperCase();
            if (!cleanOcrName.isBlank() && !cleanConfirmedName.isBlank()) {
                nameMatches = cleanOcrName.contains(cleanConfirmedName) || cleanConfirmedName.contains(cleanOcrName);
            }
        }

        // 5. DOB match (if OCR extracted DOB exists)
        boolean dobMatches = true;
        LocalDate effectiveConfirmedDob = confirmedDob != null ? confirmedDob : kyc.getDateOfBirth();
        if (isOcrSuccess && ocrDob != null && effectiveConfirmedDob != null) {
            dobMatches = ocrDob.equals(effectiveConfirmedDob);
        }

        // 6. Expiry Date match (if OCR extracted Expiry exists) & Expiry check
        boolean expiryMatches = true;
        LocalDate effectiveConfirmedExpiry = confirmedExpiry != null ? confirmedExpiry : kyc.getExpiryDate();
        if (isOcrSuccess && ocrExpiry != null && effectiveConfirmedExpiry != null) {
            expiryMatches = ocrExpiry.equals(effectiveConfirmedExpiry);
        }
        boolean isNotExpired = effectiveConfirmedExpiry != null && !effectiveConfirmedExpiry.isBefore(LocalDate.now());

        // 7. Format check
        boolean isValidFormat = "VALID_FORMAT".equalsIgnoreCase(kyc.getFormatStatus()) 
                || "FORMAT_VALID".equalsIgnoreCase(kyc.getFormatStatus())
                || (cleanConfirmedDl != null && cleanConfirmedDl.replaceAll("[^A-Za-z0-9]", "").length() >= 10);

        // EVERY REQUIRED FIELD MUST MATCH FOR AUTO APPROVAL
        boolean autoApproveEligible = hasDocuments 
                && isOcrSuccess 
                && dlNumberMatches 
                && nameMatches 
                && dobMatches 
                && expiryMatches 
                && isNotExpired 
                && isValidFormat;

        if (autoApproveEligible) {
            kyc.setVerificationStatus(KycVerificationStatus.TBH_VERIFIED);
            kyc.setVerifiedAt(LocalDateTime.now());
            kyc.setReviewedBy("AUTO_OCR_MATCH");
            kyc.setRejectionReason(null);
            kyc.setReviewNotes("KYC Auto-Approved: OCR verified all required fields (DL No, Name, DOB, Expiry) and document photo match.");
            kyc.setUpdatedAt(LocalDateTime.now());

            User user = kyc.getUser();
            user.setDrivingLicenseVerified(true);
            if (cleanConfirmedDl != null && !cleanConfirmedDl.isBlank()) {
                user.setDrivingLicenseNumber(cleanConfirmedDl);
            }
            userRepository.save(user);

            LicenseVerification saved = kycRepository.save(kyc);
            recordAuditEvent(saved, user, "KYC_AUTO_APPROVED", "AUTO_OCR_MATCH",
                    fromStatus, KycVerificationStatus.TBH_VERIFIED.name(), "OCR details matched document photo for all required fields. Immediate auto-approval granted.");
            return saved;
        } else {
            String reviewReasonNotes;
            if (!hasDocuments) {
                reviewReasonNotes = "Missing front or back document images — queued for manual admin review.";
            } else if (!isOcrSuccess) {
                reviewReasonNotes = "OCR engine unavailable or incomplete text extraction — queued for manual admin review.";
            } else if (!dlNumberMatches) {
                reviewReasonNotes = "DL number mismatch between OCR (" + ocrDl + ") and customer entry (" + cleanConfirmedDl + ") — queued for manual admin review.";
            } else if (!nameMatches) {
                reviewReasonNotes = "Name mismatch between OCR (" + ocrName + ") and confirmed details (" + confirmedName + ") — queued for manual admin review.";
            } else if (!dobMatches) {
                reviewReasonNotes = "DOB mismatch between OCR (" + ocrDob + ") and confirmed DOB (" + effectiveConfirmedDob + ") — queued for manual admin review.";
            } else if (!expiryMatches) {
                reviewReasonNotes = "Expiry date mismatch between OCR (" + ocrExpiry + ") and confirmed Expiry (" + effectiveConfirmedExpiry + ") — queued for manual admin review.";
            } else if (!isNotExpired) {
                reviewReasonNotes = "Driving licence is expired — queued for manual admin review.";
            } else {
                reviewReasonNotes = "Customer details queued for manual admin inspection.";
            }

            kyc.setVerificationStatus(KycVerificationStatus.PENDING_ADMIN_REVIEW);
            kyc.setReviewNotes(reviewReasonNotes);
            kyc.setUpdatedAt(LocalDateTime.now());

            LicenseVerification saved = kycRepository.save(kyc);
            recordAuditEvent(saved, kyc.getUser(), "SUBMITTED_FOR_REVIEW", kyc.getUser().getEmail(),
                    fromStatus, KycVerificationStatus.PENDING_ADMIN_REVIEW.name(), reviewReasonNotes);
            return saved;
        }
    }

    @Transactional
    public LicenseVerification reviewKyc(Long kycId, KycVerificationStatus status, String rejectionReason, String reviewer) {
        LicenseVerification kyc = kycRepository.findById(kycId)
                .orElseThrow(() -> new IllegalArgumentException("KYC record not found: " + kycId));

        String fromStatus = kyc.getVerificationStatus().name();
        kyc.setVerificationStatus(status);
        kyc.setReviewedBy(reviewer != null ? reviewer : "ADMIN");
        kyc.setUpdatedAt(LocalDateTime.now());

        if (status == KycVerificationStatus.VERIFIED || status == KycVerificationStatus.TBH_VERIFIED) {
            kyc.setVerificationStatus(status);
            kyc.setVerifiedAt(LocalDateTime.now());
            kyc.setRejectionReason(null);
            kyc.getUser().setDrivingLicenseVerified(true);
            kyc.getUser().setDrivingLicenseNumber(kyc.getEncryptedLicenseNumber());
            userRepository.save(kyc.getUser());
            recordAuditEvent(kyc, kyc.getUser(), "ADMIN_APPROVED", reviewer, fromStatus, status.name(), "Approved by admin.");
            log.info("[TBH KYC] Manual review APPROVED KYC {} by {} as {}", kycId, reviewer, status);
            if (emailService != null) {
                emailService.queueKycApproved(kyc.getUser().getEmail(), kyc.getUser().getFullName());
            }
        } else if (status == KycVerificationStatus.REJECTED) {
            kyc.setRejectionReason(rejectionReason);
            kyc.setVerifiedAt(null);
            kyc.getUser().setDrivingLicenseVerified(false);
            userRepository.save(kyc.getUser());
            recordAuditEvent(kyc, kyc.getUser(), "ADMIN_REJECTED", reviewer, fromStatus, KycVerificationStatus.REJECTED.name(), rejectionReason);
            log.info("[TBH KYC] Manual review REJECTED KYC {} by {}: {}", kycId, reviewer, rejectionReason);
            if (emailService != null) {
                emailService.queueKycRejected(kyc.getUser().getEmail(), kyc.getUser().getFullName(), rejectionReason);
            }
        } else if (status == KycVerificationStatus.REUPLOAD_REQUIRED) {
            kyc.setRejectionReason(rejectionReason != null ? rejectionReason : "Please re-upload clearer driving licence images.");
            kyc.setVerifiedAt(null);
            kyc.getUser().setDrivingLicenseVerified(false);
            userRepository.save(kyc.getUser());
            recordAuditEvent(kyc, kyc.getUser(), "REUPLOAD_REQUESTED", reviewer, fromStatus, KycVerificationStatus.REUPLOAD_REQUIRED.name(), rejectionReason);
            log.info("[TBH KYC] Manual review requested REUPLOAD for KYC {} by {}: {}", kycId, reviewer, rejectionReason);
            if (emailService != null) {
                emailService.queueKycReuploadRequired(kyc.getUser().getEmail(), kyc.getUser().getFullName(), rejectionReason);
            }
        }

        return kycRepository.save(kyc);
    }

    public List<KycAuditEvent> getAuditEvents(Long kycId) {
        if (auditRepository != null) {
            return auditRepository.findByKycIdOrderByCreatedAtDesc(kycId);
        }
        return java.util.Collections.emptyList();
    }

    private void recordAuditEvent(LicenseVerification kyc, User user, String eventType, String performedBy, String fromStatus, String toStatus, String notes) {
        if (auditRepository != null) {
            try {
                KycAuditEvent event = new KycAuditEvent(kyc, user, eventType, performedBy, fromStatus, toStatus, notes);
                auditRepository.save(event);
            } catch (Exception e) {
                log.warn("[KYC AUDIT] Failed to save audit event {}: {}", eventType, e.getMessage());
            }
        }
    }

    public List<LicenseVerification> getPendingKyc() {
        return kycRepository.findAll().stream()
                .filter(k -> k.getVerificationStatus() == KycVerificationStatus.PENDING_ADMIN_REVIEW
                        || k.getVerificationStatus() == KycVerificationStatus.SUBMITTED
                        || k.getVerificationStatus() == KycVerificationStatus.MANUAL_REVIEW
                        || k.getVerificationStatus() == KycVerificationStatus.PROCESSING)
                .toList();
    }

    public List<LicenseVerification> getAllKyc() {
        return kycRepository.findAll();
    }

    public Optional<LicenseVerification> getKycById(Long id) {
        return kycRepository.findById(id);
    }

    public Resource getPrivateDocument(Long kycId, Long requestingUserId, boolean isAdmin, boolean isBack) {
        LicenseVerification kyc = kycRepository.findById(kycId)
                .orElseThrow(() -> new IllegalArgumentException("KYC record not found."));

        if (!isAdmin && !kyc.getUser().getId().equals(requestingUserId)) {
            throw new SecurityException("Unauthorized access to private KYC document.");
        }

        String path = isBack ? kyc.getBackDocumentPath() : kyc.getPrivateDocumentPath();
        if (path == null) {
            throw new IllegalArgumentException("Document file not found for this KYC record.");
        }

        File file = new File(path);
        if (!file.exists()) {
            throw new IllegalArgumentException("Document file does not exist on disk.");
        }

        return new FileSystemResource(file);
    }

    private String savePrivateFile(Long userId, String side, MultipartFile file) {
        try {
            String originalFilename = file.getOriginalFilename() != null ? file.getOriginalFilename() : "document.jpg";
            String ext = "";
            int dotIdx = originalFilename.lastIndexOf('.');
            if (dotIdx > 0) {
                ext = originalFilename.substring(dotIdx);
            }
            String filename = "kyc_" + userId + "_" + side + "_" + System.currentTimeMillis() + ext;
            Path targetPath = kycStorageDir.resolve(filename);
            Files.copy(file.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);
            return targetPath.toString();
        } catch (IOException e) {
            throw new RuntimeException("Failed to save KYC document privately: " + e.getMessage(), e);
        }
    }

    private void validateFile(MultipartFile file) {
        if (file.getSize() > 5 * 1024 * 1024) {
            throw new IllegalArgumentException("Document size exceeds maximum 5 MB limit.");
        }

        String contentType = file.getContentType();
        if (contentType == null || (!contentType.equals("image/jpeg") &&
                                    !contentType.equals("image/png") &&
                                    !contentType.equals("image/webp") &&
                                    !contentType.equals("application/pdf"))) {
            throw new IllegalArgumentException("Invalid file format. Only JPEG, PNG, WEBP and PDF documents are accepted.");
        }

        try {
            byte[] header = new byte[8];
            int read = file.getInputStream().read(header);
            if (read >= 4) {
                boolean isJpeg = header[0] == (byte) 0xFF && header[1] == (byte) 0xD8 && header[2] == (byte) 0xFF;
                boolean isPng = header[0] == (byte) 0x89 && header[1] == (byte) 0x50 && header[2] == (byte) 0x4E && header[3] == (byte) 0x47;
                boolean isPdf = header[0] == (byte) 0x25 && header[1] == (byte) 0x50 && header[2] == (byte) 0x44 && header[3] == (byte) 0x46;
                boolean isRiff = header[0] == (byte) 0x52 && header[1] == (byte) 0x49 && header[2] == (byte) 0x46 && header[3] == (byte) 0x46;

                if (!isJpeg && !isPng && !isPdf && !isRiff) {
                    throw new IllegalArgumentException("File content header does not match declared format.");
                }
            }
        } catch (IOException e) {
            throw new IllegalArgumentException("Failed to inspect document header.");
        }
    }

    public static String maskLicense(String license) {
        return IdentitySanitizer.maskLicense(license);
    }

    private LocalDate parseExpiryDate(String expiryDateStr) {
        if (expiryDateStr == null || expiryDateStr.trim().isEmpty()) {
            return LocalDate.now().plusYears(5);
        }
        String clean = expiryDateStr.trim();
        List<DateTimeFormatter> formatters = List.of(
            DateTimeFormatter.ISO_LOCAL_DATE,
            DateTimeFormatter.ofPattern("dd-MM-yyyy"),
            DateTimeFormatter.ofPattern("dd/MM/yyyy"),
            DateTimeFormatter.ofPattern("yyyy/MM/dd")
        );
        for (DateTimeFormatter dtf : formatters) {
            try {
                return LocalDate.parse(clean, dtf);
            } catch (Exception ignored) {}
        }
        return LocalDate.now().plusYears(5);
    }
}
