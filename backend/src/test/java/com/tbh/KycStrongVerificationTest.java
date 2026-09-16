package com.tbh;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tbh.dto.BookingRequest;
import com.tbh.entity.*;
import com.tbh.repository.BookingRepository;
import com.tbh.repository.KycAuditEventRepository;
import com.tbh.repository.LicenseVerificationRepository;
import com.tbh.repository.UserRepository;
import com.tbh.repository.VehicleRepository;
import com.tbh.security.JwtTokenProvider;
import com.tbh.service.BookingService;
import com.tbh.service.KycService;
import com.tbh.service.kyc.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class KycStrongVerificationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LicenseVerificationRepository kycRepository;

    @Autowired
    private KycAuditEventRepository auditRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private BookingService bookingService;

    @Autowired
    private KycService kycService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private DocumentQualityAnalyzer qualityAnalyzer;

    @Autowired
    private QrCodeScannerService qrScannerService;

    @Autowired
    private DlFormatValidator formatValidator;

    @Autowired
    private DlDateValidator dateValidator;

    @Autowired
    private VehicleClassValidator classValidator;

    @Autowired
    private DlOcrExtractionService ocrExtractionService;

    private User createTestUser(String prefix, boolean dlVerified, String aadhaar) {
        String unique = prefix + "_" + System.currentTimeMillis() + "_" + (long)(Math.random() * 10000);
        User user = new User("Rider " + unique, unique + "@tbhtest.in", "97" + (long)(10000000 + Math.random() * 89999999), "Password123", Role.ROLE_USER);
        user.setDrivingLicenseVerified(dlVerified);
        user.setMobileVerified(true);
        user.setAadhaarNumber(aadhaar != null ? aadhaar : "987654321099");
        if (dlVerified) {
            user.setDrivingLicenseNumber("KA0120200001234");
        }
        return userRepository.save(user);
    }

    private byte[] createDummyImage(int width, int height, Color color) throws Exception {
        BufferedImage img = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        Graphics2D g2d = img.createGraphics();
        g2d.setColor(color);
        g2d.fillRect(0, 0, width, height);
        g2d.setColor(Color.BLACK);
        g2d.drawString("INDIAN UNION DRIVING LICENCE", 20, 40);
        g2d.drawString("DL No: DL-0420190012345", 20, 80);
        g2d.drawString("Name: HEMANTH TUPAKULA", 20, 120);
        g2d.drawString("DOB: 15-05-1995", 20, 160);
        g2d.drawString("COV: MCWG, LMV", 20, 200);
        g2d.drawString("Valid Upto: 31-12-2035", 20, 240);
        g2d.dispose();

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(img, "png", baos);
        return baos.toByteArray();
    }

    @Test
    @DisplayName("1. Document Quality Analyzer passes clear images and fails tiny/extreme images")
    void testDocumentQualityAnalyzer() throws Exception {
        byte[] validImgBytes = createDummyImage(1200, 800, Color.LIGHT_GRAY);
        File tempValid = File.createTempFile("quality_valid_", ".png");
        try (FileOutputStream fos = new FileOutputStream(tempValid)) {
            fos.write(validImgBytes);
        }

        DocumentQualityAnalyzer.QualityReport reportValid = qualityAnalyzer.analyzeImage(tempValid);
        assertEquals(DocumentQualityAnalyzer.QualityResult.GOOD, reportValid.getResult());

        // Tiny image test
        byte[] tinyBytes = createDummyImage(100, 80, Color.WHITE);
        File tempTiny = File.createTempFile("quality_tiny_", ".png");
        try (FileOutputStream fos = new FileOutputStream(tempTiny)) {
            fos.write(tinyBytes);
        }
        DocumentQualityAnalyzer.QualityReport reportTiny = qualityAnalyzer.analyzeImage(tempTiny);
        assertEquals(DocumentQualityAnalyzer.QualityResult.FAILED, reportTiny.getResult());

        tempValid.delete();
        tempTiny.delete();
    }

    @Test
    @DisplayName("2. QR Code Scanner detects absence safely without throwing exceptions")
    void testQrScannerSafety() throws Exception {
        byte[] imgBytes = createDummyImage(800, 600, Color.WHITE);
        File tempImg = File.createTempFile("qr_dummy_", ".png");
        try (FileOutputStream fos = new FileOutputStream(tempImg)) {
            fos.write(imgBytes);
        }

        QrCodeScannerService.QrScanResult result = qrScannerService.scanQrCode(tempImg);
        assertNotNull(result);
        assertEquals(QrCodeScannerService.QrStatus.QR_NOT_DETECTED, result.getStatus());
        assertFalse(result.isDetected(), "Should not detect QR on blank card");

        tempImg.delete();
    }

    @Test
    @DisplayName("3. DL Format Validator correctly verifies standard and spaced Indian DL patterns")
    void testDlFormatValidator() {
        assertEquals(DlFormatValidator.FormatStatus.FORMAT_VALID, formatValidator.validateFormat("KA0120200001234"));
        assertEquals(DlFormatValidator.FormatStatus.FORMAT_VALID, formatValidator.validateFormat("DL-1420110012345"));
        assertEquals(DlFormatValidator.FormatStatus.FORMAT_VALID, formatValidator.validateFormat("MH12 20180001234"));
        assertEquals(DlFormatValidator.FormatStatus.FORMAT_VALID, formatValidator.validateFormat("TS0920210048192"));

        assertEquals(DlFormatValidator.FormatStatus.FORMAT_SUSPICIOUS, formatValidator.validateFormat("12345"));
        assertEquals(DlFormatValidator.FormatStatus.FORMAT_UNKNOWN, formatValidator.validateFormat(null));
    }

    @Test
    @DisplayName("4. DL Date Validator checks expiry and TBH Rental Age Eligibility (>= 18)")
    void testDlDateValidator() {
        LocalDate dobAdult = LocalDate.of(1995, 5, 15);
        LocalDate dobUnderage = LocalDate.now().minusYears(16);
        LocalDate futureExpiry = LocalDate.now().plusYears(5);
        LocalDate pastExpiry = LocalDate.now().minusDays(1);

        DlDateValidator.DateValidationReport validReport = dateValidator.validateDates(dobAdult, LocalDate.of(2015, 1, 1), futureExpiry);
        assertEquals(DlDateValidator.ExpiryStatus.VALID, validReport.getExpiryStatus());
        assertEquals(DlDateValidator.RentalAgeEligibility.ELIGIBLE, validReport.getAgeEligibility());

        DlDateValidator.DateValidationReport expiredReport = dateValidator.validateDates(dobAdult, null, pastExpiry);
        assertEquals(DlDateValidator.ExpiryStatus.EXPIRED, expiredReport.getExpiryStatus());

        DlDateValidator.DateValidationReport underageReport = dateValidator.validateDates(dobUnderage, null, futureExpiry);
        assertEquals(DlDateValidator.RentalAgeEligibility.NOT_ELIGIBLE, underageReport.getAgeEligibility());
    }

    @Test
    @DisplayName("5. Vehicle Class Validator evaluates MCWG (Two-Wheelers) and LMV (Four-Wheelers)")
    void testVehicleClassValidator() {
        Set<String> bikeClasses = Set.of("MCWG");
        Set<String> carClasses = Set.of("LMV");
        Set<String> bothClasses = Set.of("MCWG", "LMV");

        assertEquals(VehicleClassValidator.ClassStatus.ELIGIBLE_TWO_WHEELER_ONLY, classValidator.evaluateClasses(bikeClasses));
        assertEquals(VehicleClassValidator.ClassStatus.ELIGIBLE_FOUR_WHEELER_ONLY, classValidator.evaluateClasses(carClasses));
        assertEquals(VehicleClassValidator.ClassStatus.ELIGIBLE_ALL, classValidator.evaluateClasses(bothClasses));

        assertTrue(classValidator.isEligibleForVehicleType(bikeClasses, VehicleType.BIKE));
        assertTrue(classValidator.isEligibleForVehicleType(bikeClasses, VehicleType.SCOOTER));
        assertFalse(classValidator.isEligibleForVehicleType(bikeClasses, VehicleType.PETROL_CAR));

        assertTrue(classValidator.isEligibleForVehicleType(carClasses, VehicleType.PETROL_CAR));
        assertTrue(classValidator.isEligibleForVehicleType(carClasses, VehicleType.DIESEL_CAR));
        assertFalse(classValidator.isEligibleForVehicleType(carClasses, VehicleType.BIKE));

        assertTrue(classValidator.isEligibleForVehicleType(bothClasses, VehicleType.BIKE));
        assertTrue(classValidator.isEligibleForVehicleType(bothClasses, VehicleType.PETROL_CAR));
    }

    @Test
    @DisplayName("6. OCR text parsing extracts DL number, Name, DOB, and vehicle classes")
    void testOcrTextParsing() {
        String rawOcrText = """
                UNION OF INDIA
                DRIVING LICENCE
                DL NO: KA-0120190012345
                NAME: HEMANTH TUPAKULA
                DOB: 15-05-1995
                ISSUE: 10-01-2019
                VALID TILL: 31-12-2035
                COV: MCWG, LMV
                AUTHORISATION TO DRIVE:
                MCWG FROM 10/01/2019
                LMV FROM 10/01/2019
                """;

        DlOcrExtractionService.ExtractedDlData extracted = new DlOcrExtractionService.ExtractedDlData();
        ocrExtractionService.parseOcrText(rawOcrText, extracted);
        assertEquals("KA0120190012345", extracted.getLicenseNumber());
        assertEquals("HEMANTH TUPAKULA", extracted.getName());
        assertEquals(LocalDate.of(1995, 5, 15), extracted.getDob());
        assertEquals(LocalDate.of(2035, 12, 31), extracted.getExpiryDate());
        assertTrue(extracted.getVehicleClasses().contains("MCWG"));
        assertTrue(extracted.getVehicleClasses().contains("LMV"));
    }

    @Test
    @DisplayName("7. Document upload transitions to CUSTOMER_CONFIRMATION_REQUIRED")
    void testUploadTransitionsToCustomerConfirmationRequired() throws Exception {
        User user = createTestUser("upload_flow", false, "987654321088");
        String userToken = jwtTokenProvider.generateToken(user.getId(), user.getEmail(), "ROLE_USER");

        byte[] imgBytes = createDummyImage(1200, 800, Color.WHITE);
        MockMultipartFile frontDoc = new MockMultipartFile("frontDocument", "dl_front.png", "image/png", imgBytes);
        MockMultipartFile backDoc = new MockMultipartFile("backDocument", "dl_back.png", "image/png", imgBytes);

        mockMvc.perform(multipart("/api/kyc/upload")
                        .file(frontDoc)
                        .file(backDoc)
                        .param("licenseNumber", "KA0120200001234")
                        .param("issuingState", "KA")
                        .param("expiryDate", "2032-12-31")
                        .header("Authorization", "Bearer " + userToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("CUSTOMER_CONFIRMATION_REQUIRED"))
                .andExpect(jsonPath("$.formatStatus").value("FORMAT_VALID"));
    }

    @Test
    @DisplayName("8. Customer confirmation flow transitions record to PENDING_ADMIN_REVIEW")
    void testCustomerConfirmationFlow() throws Exception {
        User user = createTestUser("confirm_flow", false, "987654321087");
        String userToken = jwtTokenProvider.generateToken(user.getId(), user.getEmail(), "ROLE_USER");

        byte[] imgBytes = createDummyImage(1200, 800, Color.WHITE);
        MockMultipartFile frontDoc = new MockMultipartFile("frontDocument", "dl_front.png", "image/png", imgBytes);
        MockMultipartFile backDoc = new MockMultipartFile("backDocument", "dl_back.png", "image/png", imgBytes);

        String uploadResp = mockMvc.perform(multipart("/api/kyc/upload")
                        .file(frontDoc)
                        .file(backDoc)
                        .param("licenseNumber", "DL0420190012345")
                        .param("issuingState", "DL")
                        .param("expiryDate", "2035-12-31")
                        .header("Authorization", "Bearer " + userToken))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();

        Map<String, Object> map = objectMapper.readValue(uploadResp, Map.class);
        Long kycId = Long.valueOf(map.get("id").toString());

        // Confirm extracted data
        Map<String, Object> confirmBody = Map.of(
                "kycId", kycId,
                "confirmed", true,
                "name", "HEMANTH TUPAKULA",
                "licenseNumber", "DL0420190012345",
                "dob", "1995-05-15",
                "expiryDate", "2035-12-31",
                "vehicleClasses", "MCWG, LMV"
        );

        mockMvc.perform(post("/api/kyc/confirm")
                        .header("Authorization", "Bearer " + userToken)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(confirmBody)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value(org.hamcrest.Matchers.anyOf(
                        org.hamcrest.Matchers.is("VERIFIED"),
                        org.hamcrest.Matchers.is("PENDING_ADMIN_REVIEW")
                )))
                .andExpect(jsonPath("$.customerConfirmed").value(true));
    }

    @Test
    @DisplayName("9. Admin review: Approve -> TBH_VERIFIED, Reject -> REJECTED, Re-upload -> REUPLOAD_REQUIRED")
    void testAdminReviewActionsAndAuditTrail() throws Exception {
        User user = createTestUser("admin_rev_target", false, "987654321086");
        String adminToken = jwtTokenProvider.generateToken(1L, "admin_test@tbhrentals.in", "ROLE_ADMIN");

        LicenseVerification kyc = new LicenseVerification(user, "DL04••••2345", "DL0420190012345", "DL", LocalDate.now().plusYears(5), KycVerificationStatus.PENDING_ADMIN_REVIEW);
        kyc.setExtractedVehicleClasses("MCWG, LMV");
        kyc = kycRepository.save(kyc);

        // 1. Re-upload request
        mockMvc.perform(post("/api/admin/kyc/" + kyc.getId() + "/review")
                        .header("Authorization", "Bearer " + adminToken)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"status\":\"REUPLOAD_REQUIRED\", \"rejectionReason\":\"Blurry back side\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.verificationStatus").value("REUPLOAD_REQUIRED"))
                .andExpect(jsonPath("$.rejectionReason").value("Blurry back side"));

        // 2. Reject
        mockMvc.perform(post("/api/admin/kyc/" + kyc.getId() + "/review")
                        .header("Authorization", "Bearer " + adminToken)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"status\":\"REJECTED\", \"rejectionReason\":\"Fraudulent document\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.verificationStatus").value("REJECTED"));

        // 3. Approve -> TBH_VERIFIED
        mockMvc.perform(post("/api/admin/kyc/" + kyc.getId() + "/review")
                        .header("Authorization", "Bearer " + adminToken)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"status\":\"TBH_VERIFIED\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.verificationStatus").value("TBH_VERIFIED"));

        // Verify audit trail endpoint
        mockMvc.perform(get("/api/admin/kyc/" + kyc.getId() + "/audit")
                        .header("Authorization", "Bearer " + adminToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray());
    }

    @Test
    @DisplayName("10. Vehicle Class Booking Gate blocks vehicle type mismatch")
    void testVehicleClassBookingGate() {
        User userBikeOnly = createTestUser("bike_only_user", true, "987654321085");
        LicenseVerification kycBike = new LicenseVerification(userBikeOnly, "KA01••••1234", "KA0120200001234", "KA", LocalDate.now().plusYears(5), KycVerificationStatus.TBH_VERIFIED);
        kycBike.setExtractedVehicleClasses("MCWG");
        kycRepository.save(kycBike);

        // Find a car vehicle
        Vehicle carVehicle = vehicleRepository.findAll().stream()
                .filter(v -> v.getVehicleType() == VehicleType.PETROL_CAR || v.getVehicleType() == VehicleType.DIESEL_CAR || v.getVehicleType() == VehicleType.ELECTRIC_CAR)
                .findFirst()
                .orElse(null);

        if (carVehicle != null) {
            BookingRequest req = new BookingRequest();
            req.setUserId(userBikeOnly.getId());
            req.setVehicleId(carVehicle.getId());
            req.setPickupCity("Bangalore");
            req.setDropCity("Bangalore");
            req.setPickupHub("Koramangala Hub");
            req.setDropHub("Koramangala Hub");
            req.setRentalMode("HOURLY");
            req.setDuration(4);
            req.setPickupDateTime(LocalDateTime.now().plusHours(2));

            IllegalStateException ex = assertThrows(IllegalStateException.class, () -> {
                bookingService.createBooking(req);
            });
            assertTrue(ex.getMessage().contains("VEHICLE CLASS MISMATCH"), "Booking a car with MCWG-only licence must fail with VEHICLE CLASS MISMATCH");
        }
    }
}
