package com.tbh;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tbh.dto.BookingRequest;
import com.tbh.dto.LicenseVerificationRequest;
import com.tbh.entity.*;
import com.tbh.repository.BookingRepository;
import com.tbh.repository.LicenseVerificationRepository;
import com.tbh.repository.UserRepository;
import com.tbh.repository.VehicleRepository;
import com.tbh.security.JwtTokenProvider;
import com.tbh.service.BookingService;
import com.tbh.service.KycService;
import com.tbh.service.kyc.KycVerificationResult;
import com.tbh.service.kyc.MockKycVerificationService;
import com.tbh.service.kyc.ProductionKycVerificationService;
import com.tbh.util.IdentitySanitizer;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class KycSecurityTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LicenseVerificationRepository kycRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private BookingService bookingService;

    @Autowired
    private KycService kycService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    private User createTestUser(String prefix, boolean dlVerified, String aadhaar) {
        String unique = prefix + "_" + System.currentTimeMillis() + "_" + (long)(Math.random() * 10000);
        User user = new User("User " + unique, unique + "@tbhtest.in", "98" + (long)(10000000 + Math.random() * 89999999), "Password123", Role.ROLE_USER);
        user.setDrivingLicenseVerified(dlVerified);
        user.setMobileVerified(true);
        user.setAadhaarNumber(aadhaar);
        if (dlVerified) {
            user.setDrivingLicenseNumber("KA0120200001234");
        }
        return userRepository.save(user);
    }

    @Test
    @DisplayName("1. Unauthenticated request to /api/kyc/status returns 401")
    void testKycStatusUnauthenticatedReturns401() throws Exception {
        mockMvc.perform(get("/api/kyc/status"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @DisplayName("2. Unauthenticated request to /api/kyc/me returns 401")
    void testKycMeUnauthenticatedReturns401() throws Exception {
        mockMvc.perform(get("/api/kyc/me"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @DisplayName("3. Cross-user KYC access (IDOR) returns 403 Forbidden")
    void testKycStatusCrossUserIdForbidden() throws Exception {
        User userA = createTestUser("kyc_idor_a", false, "987654321012");
        User userB = createTestUser("kyc_idor_b", false, "987654321013");
        String tokenA = jwtTokenProvider.generateToken(userA.getId(), userA.getEmail(), "ROLE_USER");

        mockMvc.perform(get("/api/kyc/status")
                        .param("userId", userB.getId().toString())
                        .header("Authorization", "Bearer " + tokenA))
                .andExpect(status().isForbidden());
    }

    @Test
    @DisplayName("4. Cross-user KYC upload returns 403 Forbidden")
    void testKycUploadCrossUserIdForbidden() throws Exception {
        User userA = createTestUser("upload_idor_a", false, "987654321014");
        User userB = createTestUser("upload_idor_b", false, "987654321015");
        String tokenA = jwtTokenProvider.generateToken(userA.getId(), userA.getEmail(), "ROLE_USER");

        mockMvc.perform(multipart("/api/kyc/upload")
                        .param("licenseNumber", "KA0120200009999")
                        .param("issuingState", "KA")
                        .param("expiryDate", "2030-12-31")
                        .param("userId", userB.getId().toString())
                        .header("Authorization", "Bearer " + tokenA))
                .andExpect(status().isForbidden());
    }

    @Test
    @DisplayName("5. Regular user accessing another user's private document returns 403")
    void testCrossUserDocumentAccessForbidden() throws Exception {
        User userA = createTestUser("doc_owner", true, "987654321016");
        User userB = createTestUser("doc_attacker", false, "987654321017");

        LicenseVerification kyc = new LicenseVerification(userA, "KA01••••1234", "KA0120200001234", "KA", LocalDate.now().plusYears(5), KycVerificationStatus.VERIFIED);
        kyc.setPrivateDocumentPath("uploads/kyc/fake_doc.jpg");
        kyc = kycRepository.save(kyc);

        String tokenB = jwtTokenProvider.generateToken(userB.getId(), userB.getEmail(), "ROLE_USER");

        mockMvc.perform(get("/api/kyc/document/" + kyc.getId() + "/front")
                        .header("Authorization", "Bearer " + tokenB))
                .andExpect(status().isForbidden());
    }

    @Test
    @DisplayName("6. Non-admin forbidden from reviewing KYC (403)")
    void testNonAdminForbiddenFromKycReview() throws Exception {
        User user = createTestUser("non_admin_reviewer", false, "987654321018");
        String userToken = jwtTokenProvider.generateToken(user.getId(), user.getEmail(), "ROLE_USER");

        mockMvc.perform(post("/api/admin/kyc/1/review")
                        .header("Authorization", "Bearer " + userToken)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"status\":\"VERIFIED\"}"))
                .andExpect(status().isForbidden());
    }

    @Test
    @DisplayName("7. Non-admin forbidden from viewing pending KYC list (403)")
    void testNonAdminForbiddenFromPendingKycList() throws Exception {
        User user = createTestUser("non_admin_pending", false, "987654321019");
        String userToken = jwtTokenProvider.generateToken(user.getId(), user.getEmail(), "ROLE_USER");

        mockMvc.perform(get("/api/admin/kyc/pending")
                        .header("Authorization", "Bearer " + userToken))
                .andExpect(status().isForbidden());
    }

    @Test
    @DisplayName("8. Admin can access pending KYC list")
    void testAdminCanAccessPendingKycList() throws Exception {
        String adminToken = jwtTokenProvider.generateToken(1L, "admin_kyc@tbhrentals.in", "ROLE_ADMIN");

        mockMvc.perform(get("/api/admin/kyc/pending")
                        .header("Authorization", "Bearer " + adminToken))
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("9. Authenticated user can query their own KYC status via /api/kyc/me")
    void testUserCanQueryOwnKycViaMe() throws Exception {
        User user = createTestUser("kyc_me_user", false, "987654321020");
        String token = jwtTokenProvider.generateToken(user.getId(), user.getEmail(), "ROLE_USER");

        mockMvc.perform(get("/api/kyc/me")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("NOT_SUBMITTED"))
                .andExpect(jsonPath("$.verified").value(false));
    }

    @Test
    @DisplayName("10. Mock KYC verification passes for valid Indian DL format and future expiry")
    void testMockKycVerificationValidDlFormat() {
        MockKycVerificationService mockKyc = new MockKycVerificationService();
        KycVerificationResult res = mockKyc.verifyDrivingLicense(
                "KA0120200001234", "KA", null, LocalDate.now().plusYears(5));

        assertTrue(res.isVerified());
        assertEquals(KycVerificationStatus.VERIFIED, res.getStatus());
        assertEquals("MOCK_SANDBOX", res.getProvider());
        assertNotNull(res.getVerificationId());
        assertTrue(res.getMaskedLicenseNumber().contains("••••"));
    }

    @Test
    @DisplayName("11. Mock KYC verification rejects invalid DL format")
    void testMockKycVerificationInvalidDlFormat() {
        MockKycVerificationService mockKyc = new MockKycVerificationService();

        KycVerificationResult res1 = mockKyc.verifyDrivingLicense(
                "INVALID-DL-123", "KA", null, LocalDate.now().plusYears(5));
        assertFalse(res1.isVerified());
        assertEquals(KycVerificationStatus.REJECTED, res1.getStatus());
        assertEquals("INVALID_FORMAT", res1.getErrorCode());

        KycVerificationResult res2 = mockKyc.verifyDrivingLicense(
                "", "KA", null, LocalDate.now().plusYears(5));
        assertFalse(res2.isVerified());
        assertEquals(KycVerificationStatus.REJECTED, res2.getStatus());
    }

    @Test
    @DisplayName("12. Mock KYC verification rejects expired DL")
    void testMockKycVerificationExpiredDl() {
        MockKycVerificationService mockKyc = new MockKycVerificationService();
        KycVerificationResult res = mockKyc.verifyDrivingLicense(
                "KA0120200001234", "KA", null, LocalDate.now().minusDays(1));

        assertFalse(res.isVerified());
        assertEquals(KycVerificationStatus.REJECTED, res.getStatus());
        assertEquals("EXPIRED_LICENSE", res.getErrorCode());
    }

    @Test
    @DisplayName("13. Production KYC fails closed safely (manual review, verified=false)")
    void testProductionKycFailsClosed() {
        ProductionKycVerificationService prodKyc = new ProductionKycVerificationService();
        KycVerificationResult res = prodKyc.verifyDrivingLicense(
                "KA0120200001234", "KA", null, LocalDate.now().plusYears(5));

        assertFalse(res.isVerified(), "Production KYC must fail closed when commercial gateway is unconfigured");
        assertEquals(KycVerificationStatus.MANUAL_REVIEW, res.getStatus());
        assertEquals("MANUAL_ADMIN", res.getProvider());
        assertTrue(res.getMessage().contains("Automated government verification gateway is not configured"));
    }

    @Test
    @DisplayName("14. Production KYC rejects expired DL immediately")
    void testProductionKycRejectsExpiredDl() {
        ProductionKycVerificationService prodKyc = new ProductionKycVerificationService();
        KycVerificationResult res = prodKyc.verifyDrivingLicense(
                "KA0120200001234", "KA", null, LocalDate.now().minusDays(10));

        assertFalse(res.isVerified());
        assertEquals(KycVerificationStatus.REJECTED, res.getStatus());
        assertEquals("EXPIRED_LICENSE", res.getErrorCode());
    }

    @Test
    @DisplayName("15. Booking blocked when driving license is not verified")
    void testBookingBlockedWithoutVerifiedDrivingLicense() {
        User user = createTestUser("no_dl_booking", false, "987654321021");
        Vehicle vehicle = vehicleRepository.findAll().stream().findFirst().orElseThrow();

        BookingRequest req = new BookingRequest();
        req.setUserId(user.getId());
        req.setVehicleId(vehicle.getId());
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
        assertTrue(ex.getMessage().contains("KYC verification is required") || ex.getMessage().contains("licence"));
    }

    @Test
    @DisplayName("16. Customer with TBH_VERIFIED Driving Licence can book without separate Aadhaar requirement")
    void testBookingAllowedWithVerifiedDrivingLicenseWithoutAadhaar() {
        User user = createTestUser("tbh_verified_booking", true, null);
        Vehicle vehicle = vehicleRepository.findAll().stream().findFirst().orElseThrow();

        BookingRequest req = new BookingRequest();
        req.setUserId(user.getId());
        req.setVehicleId(vehicle.getId());
        req.setPickupCity("Bangalore");
        req.setDropCity("Bangalore");
        req.setPickupHub("Koramangala Hub");
        req.setDropHub("Koramangala Hub");
        req.setRentalMode("HOURLY");
        req.setDuration(4);
        req.setPickupDateTime(LocalDateTime.now().plusHours(2));

        Booking booking = bookingService.createBooking(req);
        assertNotNull(booking);
        assertEquals(BookingStatus.PENDING, booking.getStatus());
        assertEquals(user.getId(), booking.getUser().getId());
    }

    @Test
    @DisplayName("17. Sensitive fields (privateDocumentPath, encryptedLicenseNumber) are not serialized in JSON")
    void testSensitiveKycFieldsNotSerializedInJson() throws Exception {
        User user = new User("JSON Tester", "jsontest@tbh.in", "9999999999", "pass", Role.ROLE_USER);
        user.setId(555L);
        LicenseVerification kyc = new LicenseVerification(user, "KA01••••1234", "KA0120200001234", "KA", LocalDate.now().plusYears(5), KycVerificationStatus.VERIFIED);
        kyc.setPrivateDocumentPath("uploads/kyc/secret_front_doc.jpg");
        kyc.setBackDocumentPath("uploads/kyc/secret_back_doc.jpg");

        String json = objectMapper.writeValueAsString(kyc);

        assertFalse(json.contains("secret_front_doc"), "privateDocumentPath must not be serialized in JSON");
        assertFalse(json.contains("secret_back_doc"), "backDocumentPath must not be serialized in JSON");
        assertFalse(json.contains("KA0120200001234"), "encryptedLicenseNumber raw number must not be serialized in JSON");
    }

    @Test
    @DisplayName("18. Aadhaar and DL identity sanitization and format validation")
    void testIdentitySanitizerUtility() {
        // Aadhaar validation: exactly 12 digits, cannot start with 0 or 1
        assertTrue(IdentitySanitizer.isValidAadhaar("987654321012"));
        assertTrue(IdentitySanitizer.isValidAadhaar("234567890123"));
        assertFalse(IdentitySanitizer.isValidAadhaar("012345678901"), "Aadhaar starting with 0 is invalid");
        assertFalse(IdentitySanitizer.isValidAadhaar("123456789012"), "Aadhaar starting with 1 is invalid");
        assertFalse(IdentitySanitizer.isValidAadhaar("12345"), "Short Aadhaar is invalid");
        assertFalse(IdentitySanitizer.isValidAadhaar(""), "Empty Aadhaar is invalid");

        // Aadhaar masking: only last 4 digits visible
        assertEquals("•••• •••• 1012", IdentitySanitizer.maskAadhaar("987654321012"));

        // DL masking
        assertEquals("KA01••••1234", IdentitySanitizer.maskLicense("KA0120200001234"));
        assertEquals("DL14••••2345", IdentitySanitizer.maskLicense("DL1420110012345"));

        // Indian DL format validation
        assertTrue(IdentitySanitizer.isValidIndianDl("KA0120200001234"));
        assertTrue(IdentitySanitizer.isValidIndianDl("DL-1420110012345"));
        assertTrue(IdentitySanitizer.isValidIndianDl("MH12 20180001234"));
        assertFalse(IdentitySanitizer.isValidIndianDl("INVALID-123"));
        assertFalse(IdentitySanitizer.isValidIndianDl(""));
    }

    @Test
    @DisplayName("19. Comprehensive Booking Verification Gate Tests (Cases 1-10)")
    void testComprehensiveBookingVerificationGate() {
        // Aadhaar masking verification
        assertEquals("•••• •••• 2046", IdentitySanitizer.maskAadhaar("586841532046"));

        Vehicle vehicle = vehicleRepository.findAll().stream().findFirst().orElseThrow();

        // CASE 2: Authenticated user with no KYC -> blocked
        User userNoKyc = createTestUser("gate_no_kyc", false, null);
        BookingRequest reqNoKyc = new BookingRequest();
        reqNoKyc.setUserId(userNoKyc.getId());
        reqNoKyc.setVehicleId(vehicle.getId());
        reqNoKyc.setPickupCity("Bangalore");
        reqNoKyc.setDropCity("Bangalore");
        reqNoKyc.setPickupHub("Koramangala Hub");
        reqNoKyc.setDropHub("Koramangala Hub");
        reqNoKyc.setRentalMode("HOURLY");
        reqNoKyc.setDuration(4);
        reqNoKyc.setPickupDateTime(LocalDateTime.now().plusHours(2));

        IllegalStateException exNoKyc = assertThrows(IllegalStateException.class, () -> bookingService.createBooking(reqNoKyc));
        assertTrue(exNoKyc.getMessage().contains("KYC verification is required"));

        // CASE 3: Authenticated user with REUPLOAD_REQUIRED -> blocked
        User userReupload = createTestUser("gate_reupload", false, null);
        LicenseVerification kycReup = new LicenseVerification(userReupload, "KA01••••1111", "KA0120200001111", "KA", LocalDate.now().plusYears(5), KycVerificationStatus.REUPLOAD_REQUIRED);
        kycRepository.save(kycReup);
        BookingRequest reqReup = new BookingRequest();
        reqReup.setUserId(userReupload.getId());
        reqReup.setVehicleId(vehicle.getId());
        reqReup.setPickupCity("Bangalore");
        reqReup.setDropCity("Bangalore");
        reqReup.setPickupHub("Koramangala Hub");
        reqReup.setDropHub("Koramangala Hub");
        reqReup.setRentalMode("HOURLY");
        reqReup.setDuration(4);
        reqReup.setPickupDateTime(LocalDateTime.now().plusHours(2));

        IllegalStateException exReup = assertThrows(IllegalStateException.class, () -> bookingService.createBooking(reqReup));
        assertTrue(exReup.getMessage().contains("KYC verification is required"));

        // CASE 4: Authenticated user with REJECTED KYC -> blocked
        User userRejected = createTestUser("gate_rejected", false, null);
        LicenseVerification kycRej = new LicenseVerification(userRejected, "KA01••••2222", "KA0120200002222", "KA", LocalDate.now().plusYears(5), KycVerificationStatus.REJECTED);
        kycRepository.save(kycRej);
        BookingRequest reqRej = new BookingRequest();
        reqRej.setUserId(userRejected.getId());
        reqRej.setVehicleId(vehicle.getId());
        reqRej.setPickupCity("Bangalore");
        reqRej.setDropCity("Bangalore");
        reqRej.setPickupHub("Koramangala Hub");
        reqRej.setDropHub("Koramangala Hub");
        reqRej.setRentalMode("HOURLY");
        reqRej.setDuration(4);
        reqRej.setPickupDateTime(LocalDateTime.now().plusHours(2));

        IllegalStateException exRej = assertThrows(IllegalStateException.class, () -> bookingService.createBooking(reqRej));
        assertTrue(exRej.getMessage().contains("KYC verification is required"));

        // CASE 5 & 7: Authenticated user with TBH_VERIFIED and compatible class -> booking created
        User userVerified = createTestUser("gate_tbh_verified", true, null);
        LicenseVerification kycVer = new LicenseVerification(userVerified, "KA01••••3333", "KA0120200003333", "KA", LocalDate.now().plusYears(5), KycVerificationStatus.TBH_VERIFIED);
        kycVer.setExtractedVehicleClasses("MCWG, LMV");
        kycRepository.save(kycVer);
        BookingRequest reqVer = new BookingRequest();
        reqVer.setUserId(userVerified.getId());
        reqVer.setVehicleId(vehicle.getId());
        reqVer.setPickupCity("Bangalore");
        reqVer.setDropCity("Bangalore");
        reqVer.setPickupHub("Koramangala Hub");
        reqVer.setDropHub("Koramangala Hub");
        reqVer.setRentalMode("HOURLY");
        reqVer.setDuration(4);
        reqVer.setPickupDateTime(LocalDateTime.now().plusDays(2));

        Booking booking = bookingService.createBooking(reqVer);
        assertNotNull(booking);
        assertEquals(BookingStatus.PENDING, booking.getStatus());
    }
}
