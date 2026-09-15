package com.tbh;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tbh.entity.*;
import com.tbh.repository.LicenseVerificationRepository;
import com.tbh.repository.UserRepository;
import com.tbh.repository.VehicleRepository;
import com.tbh.security.JwtTokenProvider;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class AdminSecurityTest {

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
    private JwtTokenProvider jwtTokenProvider;

    private User createTestUser(String prefix, Role role) {
        String unique = prefix + "_" + System.currentTimeMillis() + "_" + (long)(Math.random() * 100000);
        User user = new User("User " + unique, unique + "@tbhtest.in", "98" + (long)(10000000 + Math.random() * 89999999), "Password123", role);
        return userRepository.save(user);
    }

    // =========================================================================
    // 1. Unauthenticated Requests to Admin Endpoints Return HTTP 401
    // =========================================================================

    @Test
    @DisplayName("1. Unauthenticated GET /api/admin/metrics returns 401 Unauthorized")
    void testUnauthenticatedMetricsReturns401() throws Exception {
        mockMvc.perform(get("/api/admin/metrics"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @DisplayName("2. Unauthenticated GET /api/admin/bookings returns 401 Unauthorized")
    void testUnauthenticatedBookingsReturns401() throws Exception {
        mockMvc.perform(get("/api/admin/bookings"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @DisplayName("3. Unauthenticated GET /api/admin/kyc/pending returns 401 Unauthorized")
    void testUnauthenticatedPendingKycReturns401() throws Exception {
        mockMvc.perform(get("/api/admin/kyc/pending"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @DisplayName("4. Unauthenticated GET /api/admin/vehicles returns 401 Unauthorized")
    void testUnauthenticatedVehiclesReturns401() throws Exception {
        mockMvc.perform(get("/api/admin/vehicles"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @DisplayName("5. Unauthenticated GET /api/admin/users returns 401 Unauthorized")
    void testUnauthenticatedUsersReturns401() throws Exception {
        mockMvc.perform(get("/api/admin/users"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @DisplayName("6. Unauthenticated GET /api/admin/media/status returns 401 Unauthorized")
    void testUnauthenticatedMediaStatusReturns401() throws Exception {
        mockMvc.perform(get("/api/admin/media/status"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @DisplayName("7. Unauthenticated POST /api/admin/vehicles/1/toggle-availability returns 401")
    void testUnauthenticatedToggleAvailabilityReturns401() throws Exception {
        mockMvc.perform(post("/api/admin/vehicles/1/toggle-availability"))
                .andExpect(status().isUnauthorized());
    }

    // =========================================================================
    // 2. Authenticated Normal User (ROLE_USER) Requests Return HTTP 403 Forbidden
    // =========================================================================

    @Test
    @DisplayName("8. ROLE_USER GET /api/admin/metrics returns 403 Forbidden")
    void testRoleUserMetricsForbidden() throws Exception {
        User user = createTestUser("rider_metrics", Role.ROLE_USER);
        String token = jwtTokenProvider.generateToken(user.getId(), user.getEmail(), "ROLE_USER");

        mockMvc.perform(get("/api/admin/metrics")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isForbidden());
    }

    @Test
    @DisplayName("9. ROLE_USER GET /api/admin/bookings returns 403 Forbidden")
    void testRoleUserBookingsForbidden() throws Exception {
        User user = createTestUser("rider_bookings", Role.ROLE_USER);
        String token = jwtTokenProvider.generateToken(user.getId(), user.getEmail(), "ROLE_USER");

        mockMvc.perform(get("/api/admin/bookings")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isForbidden());
    }

    @Test
    @DisplayName("10. ROLE_USER GET /api/admin/kyc/pending returns 403 Forbidden")
    void testRoleUserPendingKycForbidden() throws Exception {
        User user = createTestUser("rider_pending_kyc", Role.ROLE_USER);
        String token = jwtTokenProvider.generateToken(user.getId(), user.getEmail(), "ROLE_USER");

        mockMvc.perform(get("/api/admin/kyc/pending")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isForbidden());
    }

    @Test
    @DisplayName("11. ROLE_USER POST /api/admin/kyc/1/review returns 403 Forbidden")
    void testRoleUserKycReviewForbidden() throws Exception {
        User user = createTestUser("rider_kyc_review", Role.ROLE_USER);
        String token = jwtTokenProvider.generateToken(user.getId(), user.getEmail(), "ROLE_USER");

        mockMvc.perform(post("/api/admin/kyc/1/review")
                        .header("Authorization", "Bearer " + token)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"status\":\"VERIFIED\"}"))
                .andExpect(status().isForbidden());
    }

    @Test
    @DisplayName("12. ROLE_USER GET /api/admin/vehicles returns 403 Forbidden")
    void testRoleUserVehiclesForbidden() throws Exception {
        User user = createTestUser("rider_vehicles", Role.ROLE_USER);
        String token = jwtTokenProvider.generateToken(user.getId(), user.getEmail(), "ROLE_USER");

        mockMvc.perform(get("/api/admin/vehicles")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isForbidden());
    }

    @Test
    @DisplayName("13. ROLE_USER GET /api/admin/users returns 403 Forbidden")
    void testRoleUserUsersForbidden() throws Exception {
        User user = createTestUser("rider_users", Role.ROLE_USER);
        String token = jwtTokenProvider.generateToken(user.getId(), user.getEmail(), "ROLE_USER");

        mockMvc.perform(get("/api/admin/users")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isForbidden());
    }

    @Test
    @DisplayName("14. ROLE_USER GET /api/admin/media/status returns 403 Forbidden")
    void testRoleUserMediaStatusForbidden() throws Exception {
        User user = createTestUser("rider_media", Role.ROLE_USER);
        String token = jwtTokenProvider.generateToken(user.getId(), user.getEmail(), "ROLE_USER");

        mockMvc.perform(get("/api/admin/media/status")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isForbidden());
    }

    @Test
    @DisplayName("15. ROLE_USER POST /api/admin/vehicles/1/toggle-availability returns 403 Forbidden")
    void testRoleUserToggleAvailabilityForbidden() throws Exception {
        User user = createTestUser("rider_toggle", Role.ROLE_USER);
        String token = jwtTokenProvider.generateToken(user.getId(), user.getEmail(), "ROLE_USER");

        mockMvc.perform(post("/api/admin/vehicles/1/toggle-availability")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isForbidden());
    }

    // =========================================================================
    // 3. Authenticated Admin (ROLE_ADMIN) Requests Succeed with HTTP 200 OK
    // =========================================================================

    @Test
    @DisplayName("16. ROLE_ADMIN GET /api/admin/metrics returns 200 OK with valid metrics")
    void testRoleAdminMetricsSucceeds() throws Exception {
        User admin = createTestUser("admin_metrics", Role.ROLE_ADMIN);
        String token = jwtTokenProvider.generateToken(admin.getId(), admin.getEmail(), "ROLE_ADMIN");

        mockMvc.perform(get("/api/admin/metrics")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalVehicles").exists())
                .andExpect(jsonPath("$.totalBookings").exists())
                .andExpect(jsonPath("$.fleetUtilizationRate").exists());
    }

    @Test
    @DisplayName("17. ROLE_ADMIN GET /api/admin/bookings returns 200 OK")
    void testRoleAdminBookingsSucceeds() throws Exception {
        User admin = createTestUser("admin_bookings", Role.ROLE_ADMIN);
        String token = jwtTokenProvider.generateToken(admin.getId(), admin.getEmail(), "ROLE_ADMIN");

        mockMvc.perform(get("/api/admin/bookings")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("18. ROLE_ADMIN GET /api/admin/kyc/pending returns 200 OK")
    void testRoleAdminPendingKycSucceeds() throws Exception {
        User admin = createTestUser("admin_kyc_pending", Role.ROLE_ADMIN);
        String token = jwtTokenProvider.generateToken(admin.getId(), admin.getEmail(), "ROLE_ADMIN");

        mockMvc.perform(get("/api/admin/kyc/pending")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("19. ROLE_ADMIN GET /api/admin/vehicles returns 200 OK")
    void testRoleAdminVehiclesSucceeds() throws Exception {
        User admin = createTestUser("admin_vehicles", Role.ROLE_ADMIN);
        String token = jwtTokenProvider.generateToken(admin.getId(), admin.getEmail(), "ROLE_ADMIN");

        mockMvc.perform(get("/api/admin/vehicles")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("20. ROLE_ADMIN GET /api/admin/users returns 200 OK without exposing passwords")
    void testRoleAdminUsersSucceedsWithoutPasswords() throws Exception {
        User admin = createTestUser("admin_users", Role.ROLE_ADMIN);
        String token = jwtTokenProvider.generateToken(admin.getId(), admin.getEmail(), "ROLE_ADMIN");

        mockMvc.perform(get("/api/admin/users")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].password").doesNotExist());
    }

    @Test
    @DisplayName("21. ROLE_ADMIN can review and approve a submitted KYC record")
    void testRoleAdminCanApproveKyc() throws Exception {
        User applicant = createTestUser("kyc_applicant", Role.ROLE_USER);
        LicenseVerification kyc = new LicenseVerification(applicant, "KA01••••5678", "KA0120230005678", "KA", LocalDate.now().plusYears(5), KycVerificationStatus.SUBMITTED);
        kyc = kycRepository.save(kyc);

        User admin = createTestUser("admin_approver", Role.ROLE_ADMIN);
        String token = jwtTokenProvider.generateToken(admin.getId(), admin.getEmail(), "ROLE_ADMIN");

        mockMvc.perform(post("/api/admin/kyc/" + kyc.getId() + "/review")
                        .header("Authorization", "Bearer " + token)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"status\":\"VERIFIED\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.verificationStatus").value("VERIFIED"));

        User refreshed = userRepository.findById(applicant.getId()).orElseThrow();
        assertTrue(refreshed.isDrivingLicenseVerified());
    }

    // =========================================================================
    // 4. Protection Against Self-Promotion & Arbitrary Role Modification
    // =========================================================================

    @Test
    @DisplayName("22. No endpoint exists for users to promote themselves to ROLE_ADMIN")
    void testNoSelfPromotionEndpoint() throws Exception {
        User user = createTestUser("attacker_promote", Role.ROLE_USER);
        String token = jwtTokenProvider.generateToken(user.getId(), user.getEmail(), "ROLE_USER");

        mockMvc.perform(post("/api/users/make-admin")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().is4xxClientError());

        mockMvc.perform(put("/api/users/" + user.getId() + "/role")
                        .header("Authorization", "Bearer " + token)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"role\":\"ROLE_ADMIN\"}"))
                .andExpect(status().is4xxClientError());
    }
}
