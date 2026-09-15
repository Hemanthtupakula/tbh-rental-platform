package com.tbh;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tbh.dto.BookingRequest;
import com.tbh.entity.*;
import com.tbh.repository.UserRepository;
import com.tbh.repository.VehicleRepository;
import com.tbh.security.JwtTokenProvider;
import com.tbh.service.BookingService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class MobileVerificationSecurityTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private BookingService bookingService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    private User createTestUser(String email, String phone, boolean dlVerified, boolean mobileVerified) {
        User u = new User("Test Mobile User", email, phone, "password123", Role.ROLE_USER);
        u.setDrivingLicenseVerified(dlVerified);
        u.setMobileVerified(mobileVerified);
        u.setAadhaarNumber("987654321099");
        if (dlVerified) {
            u.setDrivingLicenseNumber("KA0120200001234");
        }
        return userRepository.save(u);
    }

    private BookingRequest createBookingRequest(Long userId, Long vehicleId) {
        BookingRequest req = new BookingRequest();
        req.setUserId(userId);
        req.setVehicleId(vehicleId);
        req.setPickupCity("Bangalore");
        req.setDropCity("Bangalore");
        req.setPickupHub("Koramangala Hub");
        req.setDropHub("Koramangala Hub");
        req.setRentalMode("HOURLY");
        req.setDuration(4);
        req.setPickupDateTime(LocalDateTime.now().plusDays(4));
        return req;
    }

    @Test
    @DisplayName("1. User with phoneNumber present but mobileVerified=false MUST BE BLOCKED from booking")
    void testUserWithPhonePresentButNotVerifiedIsBlocked() {
        String unique = "phone_present_unverified_" + System.currentTimeMillis();
        User user = createTestUser(unique + "@tbhtest.in", "+919876543210", true, false);
        Vehicle vehicle = vehicleRepository.findAll().stream().findFirst().orElseThrow();

        BookingRequest req = createBookingRequest(user.getId(), vehicle.getId());

        IllegalStateException ex = assertThrows(IllegalStateException.class, () -> {
            bookingService.createBooking(req);
        });

        assertTrue(ex.getMessage().contains("Mobile verification is required") || ex.getMessage().contains("verify your mobile"),
                "Expected mobile verification error message, but got: " + ex.getMessage());
    }

    @Test
    @DisplayName("2. User with mobileVerified=true can successfully complete booking")
    void testUserWithMobileVerifiedCanBook() {
        String unique = "mobile_verified_allowed_" + System.currentTimeMillis();
        User user = createTestUser(unique + "@tbhtest.in", "+919876543211", true, true);
        Vehicle vehicle = vehicleRepository.findAll().stream().findFirst().orElseThrow();

        BookingRequest req = createBookingRequest(user.getId(), vehicle.getId());

        Booking booking = bookingService.createBooking(req);
        assertNotNull(booking, "Booking should be created successfully");
        assertEquals(BookingStatus.PENDING, booking.getStatus());
        assertEquals(user.getId(), booking.getUser().getId());
    }

    @Test
    @DisplayName("3. User with NO phone number and mobileVerified=false is blocked")
    void testUserWithoutPhoneIsBlocked() {
        String unique = "no_phone_" + System.currentTimeMillis();
        User user = createTestUser(unique + "@tbhtest.in", null, true, false);
        Vehicle vehicle = vehicleRepository.findAll().stream().findFirst().orElseThrow();

        BookingRequest req = createBookingRequest(user.getId(), vehicle.getId());

        IllegalStateException ex = assertThrows(IllegalStateException.class, () -> {
            bookingService.createBooking(req);
        });

        assertTrue(ex.getMessage().contains("Mobile verification is required"));
    }

    @Test
    @DisplayName("4. Unauthenticated call to /api/auth/clerk/sync-mobile returns 401")
    void testSyncMobileUnauthenticatedReturns401() throws Exception {
        mockMvc.perform(post("/api/auth/clerk/sync-mobile"))
                .andExpect(status().isUnauthorized());
    }
}
