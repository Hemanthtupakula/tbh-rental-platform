
package com.tbh;

import com.tbh.controller.PaymentController;
import com.tbh.dto.BookingRequest;
import com.tbh.dto.PaymentVerificationRequest;
import com.tbh.entity.*;
import com.tbh.repository.BookingRepository;
import com.tbh.repository.FleetUnitRepository;
import com.tbh.repository.PaymentRepository;
import com.tbh.repository.UserRepository;
import com.tbh.repository.VehicleRepository;
import com.tbh.service.BookingService;
import com.tbh.service.payment.RazorpayPaymentService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.util.ReflectionTestUtils;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.HexFormat;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
public class PaymentFlowTest {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private FleetUnitRepository fleetUnitRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private PaymentController paymentController;

    @BeforeEach
    void setUpFleet() {
        paymentRepository.deleteAll();
        bookingRepository.deleteAll();

        List<FleetUnit> units =
                fleetUnitRepository.findAll();

        for (FleetUnit unit : units) {
            unit.setStatus(
                    FleetUnitStatus.AVAILABLE
            );
        }

        fleetUnitRepository.saveAllAndFlush(
                units
        );
    }

    @AfterEach
    void tearDown() {
        paymentRepository.deleteAll();
        bookingRepository.deleteAll();
    }

    /**
     * Returns a user suitable for payment-flow integration tests.
     *
     * The booking service requires verified identity information.
     * We therefore explicitly mark the user's driving license as
     * verified and require an Aadhaar number to already exist.
     */
    private User verifiedTestUser() {

        User user =
                userRepository.findAll()
                        .stream()
                        .findFirst()
                        .orElseThrow(() ->
                                new IllegalStateException(
                                        "PaymentFlowTest requires at least one user"
                                )
                        );

        user.setDrivingLicenseVerified(true);
        user.setMobileVerified(true);

        if (user.getAadhaarNumber() == null
                || user.getAadhaarNumber().isBlank()) {

            throw new IllegalStateException(
                    "PaymentFlowTest requires verified identity information"
            );
        }

        return userRepository.saveAndFlush(
                user
        );
    }

    private User getOrCreateSecondUser() {
        return userRepository.findByEmail("other.user@example.com")
                .orElseGet(() -> {
                    User u = new User(
                            "Other User",
                            "other.user@example.com",
                            "+919999988888",
                            "$2a$10$abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr",
                            Role.ROLE_USER
                    );
                    u.setDrivingLicenseVerified(true);
                    u.setMobileVerified(true);
                    u.setAadhaarNumber("9876-5432-1098");
                    return userRepository.saveAndFlush(u);
                });
    }

    /**
     * Creates a common booking request used by the integration tests.
     */
    private BookingRequest createRequest(
            User user,
            Vehicle vehicle,
            LocalDateTime pickup,
            String rentalMode,
            int duration) {

        BookingRequest request =
                new BookingRequest();

        request.setUserId(
                user.getId()
        );

        request.setVehicleId(
                vehicle.getId()
        );

        request.setPickupCity(
                "Bengaluru"
        );

        request.setDropCity(
                "Bengaluru"
        );

        request.setPickupDateTime(
                pickup
        );

        request.setRentalMode(
                rentalMode
        );

        request.setDuration(
                duration
        );

        request.setPaymentMethod(
                "MOCK"
        );

        request.setIncludeHelmet(false);
        request.setIncludeZeroDep(false);

        return request;
    }

    @Test
    @DisplayName(
            "Phase 3: Razorpay fail-closed check rejects null/missing secret and tampered signature"
    )
    void testRazorpayFailClosedVerification()
            throws Exception {

        /*
         * 1. Fail closed when keySecret is empty/null.
         */
        RazorpayPaymentService unconfiguredService =
                new RazorpayPaymentService();

        PaymentVerificationRequest req =
                new PaymentVerificationRequest();

        req.setBookingReference(
                "TBH-TEST-001"
        );

        req.setRazorpayOrderId(
                "order_123"
        );

        req.setRazorpayPaymentId(
                "pay_123"
        );

        req.setRazorpaySignature(
                "sig_123"
        );

        assertFalse(
                unconfiguredService.verifyPayment(req),
                "Must fail closed when secret is not configured"
        );

        /*
         * 2. Compute authentic HMAC with known secret.
         */
        String secret =
                "my_super_secret_rzp_key_2026";

        RazorpayPaymentService configuredService =
                new RazorpayPaymentService();

        ReflectionTestUtils.setField(
                configuredService,
                "keySecret",
                secret
        );

        String payload =
                "order_ABC123|pay_XYZ789";

        Mac mac =
                Mac.getInstance("HmacSHA256");

        mac.init(
                new SecretKeySpec(
                        secret.getBytes(
                                StandardCharsets.UTF_8
                        ),
                        "HmacSHA256"
                )
        );

        String validSig =
                HexFormat.of()
                        .formatHex(
                                mac.doFinal(
                                        payload.getBytes(
                                                StandardCharsets.UTF_8
                                        )
                                )
                        );

        req.setRazorpayOrderId(
                "order_ABC123"
        );

        req.setRazorpayPaymentId(
                "pay_XYZ789"
        );

        req.setRazorpaySignature(
                validSig
        );

        assertTrue(
                configuredService.verifyPayment(req),
                "Valid HMAC signature must verify successfully"
        );

        /*
         * 3. Tampered signature must fail closed.
         */
        req.setRazorpaySignature(
                validSig + "bad"
        );

        assertFalse(
                configuredService.verifyPayment(req),
                "Tampered signature must be rejected"
        );
    }

    @Test
    @DisplayName(
            "Phase 3: Booking starts PENDING, transitions to CONFIRMED after payment verification, and verification is idempotent"
    )
    void testBookingLifecycleAndIdempotentVerification() {

        User user =
                verifiedTestUser();

        Vehicle vehicle =
                vehicleRepository.findAll()
                        .get(0);

        BookingRequest request =
                createRequest(
                        user,
                        vehicle,
                        LocalDateTime.now()
                                .plusDays(5),
                        "HOURLY",
                        4
                );

        /*
         * 1. Initial booking creation.
         */
        Booking booking =
                bookingService.createBooking(
                        request
                );

        assertEquals(
                BookingStatus.PENDING,
                booking.getStatus(),
                "Initial status must be PENDING"
        );

        assertEquals(
                PaymentStatus.INITIATED,
                booking.getPaymentStatus(),
                "Initial paymentStatus must be INITIATED"
        );

        assertNull(
                booking.getUnlockPin(),
                "Unlock PIN must NOT be generated upfront"
        );

        assertNotNull(
                booking.getExpiresAt(),
                "Booking must have 15-minute quote/hold TTL"
        );

        assertNotNull(
                booking.getRazorpayOrderId(),
                "Booking must have associated Razorpay order ID"
        );

        /*
         * 2. Verify payment first time.
         */
        PaymentVerificationRequest verifyRequest =
                new PaymentVerificationRequest();

        verifyRequest.setBookingReference(
                booking.getBookingReference()
        );

        verifyRequest.setRazorpayOrderId(
                booking.getRazorpayOrderId()
        );

        verifyRequest.setRazorpayPaymentId(
                "pay_test_"
                        + System.currentTimeMillis()
        );

        verifyRequest.setRazorpaySignature(
                "sig_test_valid"
        );

        ResponseEntity<?> response1 =
                paymentController.verifyPayment(
                        verifyRequest
                );

        assertEquals(
                200,
                response1.getStatusCode().value()
        );

        Map<?, ?> body1 =
                (Map<?, ?>) response1.getBody();

        assertNotNull(body1);

        assertEquals(
                "SUCCESS",
                body1.get("status")
        );

        String pin1 =
                (String) body1.get("unlockPin");

        assertNotNull(
                pin1,
                "Unlock PIN must be generated upon payment verification"
        );

        /*
         * Verify database entity updated.
         */
        Booking updatedBooking =
                bookingRepository
                        .findByBookingReference(
                                booking.getBookingReference()
                        )
                        .orElseThrow();

        assertEquals(
                BookingStatus.CONFIRMED,
                updatedBooking.getStatus()
        );

        assertEquals(
                PaymentStatus.PAID,
                updatedBooking.getPaymentStatus()
        );

        assertEquals(
                pin1,
                updatedBooking.getUnlockPin()
        );

        /*
         * 3. Idempotent second verification.
         */
        ResponseEntity<?> response2 =
                paymentController.verifyPayment(
                        verifyRequest
                );

        assertEquals(
                200,
                response2.getStatusCode().value()
        );

        Map<?, ?> body2 =
                (Map<?, ?>) response2.getBody();

        assertNotNull(body2);

        assertEquals(
                "SUCCESS",
                body2.get("status")
        );

        String pin2 =
                (String) body2.get("unlockPin");

        assertEquals(
                pin1,
                pin2,
                "Duplicate verification must retain the original unlock PIN"
        );
    }

    @Test
    @DisplayName(
            "Phase 3: Abandoned checkout cancels stale PENDING booking and keeps future fleet unit available"
    )
    void testAbandonedCheckoutCleanupReleasesFleetUnit() {

        User user =
                verifiedTestUser();

        Vehicle vehicle =
                vehicleRepository.findAll()
                        .get(1);

        BookingRequest request =
                createRequest(
                        user,
                        vehicle,
                        LocalDateTime.now()
                                .plusDays(8),
                        "DAILY",
                        2
                );

        Booking booking =
                bookingService.createBooking(
                        request
                );

        assertNotNull(
                booking.getFleetUnit(),
                "Booking must have a physical fleet unit"
        );

        Long unitId =
                booking.getFleetUnit()
                        .getId();

        /*
         * IMPORTANT:
         *
         * A future PENDING booking does NOT mark the physical
         * fleet unit as RENTED.
         *
         * Availability is controlled by booking-overlap logic.
         */
        FleetUnit duringCheckout =
                fleetUnitRepository
                        .findById(unitId)
                        .orElseThrow();

        assertEquals(
                FleetUnitStatus.AVAILABLE,
                duringCheckout.getStatus(),
                "Future PENDING checkout must not mark the fleet unit RENTED"
        );

        /*
         * Artificially expire the 15-minute payment hold.
         */
        booking.setExpiresAt(
                LocalDateTime.now()
                        .minusMinutes(1)
        );

        bookingRepository.saveAndFlush(
                booking
        );

        /*
         * Run cleanup.
         */
        bookingService.cleanupExpiredPendingBookings();

        /*
         * Booking must be cancelled.
         */
        Booking expiredBooking =
                bookingRepository
                        .findById(
                                booking.getId()
                        )
                        .orElseThrow();

        assertEquals(
                BookingStatus.CANCELLED,
                expiredBooking.getStatus(),
                "Expired booking must be CANCELLED"
        );

        assertEquals(
                PaymentStatus.FAILED,
                expiredBooking.getPaymentStatus()
        );

        /*
         * Fleet unit must remain available.
         */
        FleetUnit releasedUnit =
                fleetUnitRepository
                        .findById(unitId)
                        .orElseThrow();

        assertEquals(
                FleetUnitStatus.AVAILABLE,
                releasedUnit.getStatus(),
                "Fleet unit must be AVAILABLE after expired checkout cleanup"
        );
    }

    @Test
    @DisplayName(
            "Phase 3 Security: Cross-booking replay attack is rejected when orderId does not match booking"
    )
    void testCrossBookingReplayAttackIsRejected() {

        User user =
                verifiedTestUser();

        Vehicle vehicle =
                vehicleRepository.findAll()
                        .get(0);

        /*
         * Booking A:
         *
         * Valid future reservation within the 10-day window.
         */
        BookingRequest requestA =
                createRequest(
                        user,
                        vehicle,
                        LocalDateTime.now()
                                .plusDays(3),
                        "HOURLY",
                        1
                );

        Booking bookingA =
                bookingService.createBooking(
                        requestA
                );

        assertNotNull(
                bookingA.getRazorpayOrderId()
        );

        /*
         * Booking B:
         *
         * Also within the 10-day allocation window.
         *
         * IMPORTANT:
         * Use DAILY instead of MONTHLY here. A monthly booking
         * beginning on day 7 would extend beyond the 10-day
         * allocation window and would be correctly rejected by
         * BookingService before the replay-security assertion.
         *
         * Booking B is deliberately on a different future date
         * so it does not overlap Booking A.
         */
        BookingRequest requestB =
                createRequest(
                        user,
                        vehicle,
                        LocalDateTime.now()
                                .plusDays(7),
                        "DAILY",
                        1
                );

        Booking bookingB =
                bookingService.createBooking(
                        requestB
                );

        assertNotNull(
                bookingB.getRazorpayOrderId()
        );

        /*
         * Attacker attempts to verify Booking B using
         * Booking A's order credentials.
         */
        PaymentVerificationRequest replayRequest =
                new PaymentVerificationRequest();

        replayRequest.setBookingReference(
                bookingB.getBookingReference()
        );

        /*
         * DELIBERATE MISMATCH:
         *
         * Target booking = B
         * Razorpay order = A
         */
        replayRequest.setRazorpayOrderId(
                bookingA.getRazorpayOrderId()
        );

        replayRequest.setRazorpayPaymentId(
                "pay_replay_"
                        + System.currentTimeMillis()
        );

        replayRequest.setRazorpaySignature(
                "sig_valid_for_orderA"
        );

        ResponseEntity<?> response =
                paymentController.verifyPayment(
                        replayRequest
                );

        /*
         * Must reject the cross-booking replay.
         */
        assertEquals(
                400,
                response.getStatusCode().value(),
                "Cross-booking replay must be rejected with HTTP 400"
        );

        Map<?, ?> body =
                (Map<?, ?>) response.getBody();

        assertNotNull(body);

        assertEquals(
                "FAILED",
                body.get("status")
        );

        assertTrue(
                ((String) body.get("message"))
                        .toLowerCase()
                        .contains("mismatch"),
                "Failure message must identify the order/booking mismatch"
        );

        /*
         * Booking B must remain untouched.
         */
        Booking untouchedB =
                bookingRepository
                        .findByBookingReference(
                                bookingB.getBookingReference()
                        )
                        .orElseThrow();

        assertEquals(
                BookingStatus.PENDING,
                untouchedB.getStatus()
        );

        assertEquals(
                PaymentStatus.INITIATED,
                untouchedB.getPaymentStatus()
        );

        assertNull(
                untouchedB.getUnlockPin(),
                "Unlock PIN must never be generated for replayed order"
        );
    }

    @Test
    @DisplayName("Phase 3 Security: Cross-user payment order creation and verification are rejected with HTTP 403")
    void testCrossUserPaymentOrderCreationAndVerificationRejected() {
        User owner = verifiedTestUser();
        User otherUser = getOrCreateSecondUser();
        Vehicle vehicle = vehicleRepository.findAll().get(0);

        Booking booking = bookingService.createBooking(
                createRequest(owner, vehicle, LocalDateTime.now().plusDays(2), "HOURLY", 2)
        );

        Authentication otherUserAuth = new UsernamePasswordAuthenticationToken(
                otherUser.getEmail(), "credentials", List.of(new SimpleGrantedAuthority("ROLE_USER"))
        );

        // Cross-user order creation rejected
        ResponseEntity<?> orderResp = paymentController.createPaymentOrder(booking.getBookingReference(), otherUserAuth);
        assertEquals(403, orderResp.getStatusCode().value(), "Cross-user create-order must return 403 FORBIDDEN");

        // Cross-user payment verification rejected
        PaymentVerificationRequest req = new PaymentVerificationRequest();
        req.setBookingReference(booking.getBookingReference());
        req.setRazorpayOrderId(booking.getRazorpayOrderId());
        req.setRazorpayPaymentId("pay_cross_user_test");
        req.setRazorpaySignature("sig_valid_mock");

        ResponseEntity<?> verifyResp = paymentController.verifyPayment(req, otherUserAuth);
        assertEquals(403, verifyResp.getStatusCode().value(), "Cross-user verify must return 403 FORBIDDEN");
    }

    @Test
    @DisplayName("Phase 3 Security: Payment order creation and verification rejected for expired booking hold (HTTP 410)")
    void testExpiredHoldRejection() {
        User user = verifiedTestUser();
        Vehicle vehicle = vehicleRepository.findAll().get(0);

        Booking booking = bookingService.createBooking(
                createRequest(user, vehicle, LocalDateTime.now().plusDays(2), "HOURLY", 2)
        );

        // Artificially expire the hold
        booking.setExpiresAt(LocalDateTime.now().minusMinutes(1));
        bookingRepository.saveAndFlush(booking);

        // createPaymentOrder should return 410 Gone
        ResponseEntity<?> orderResp = paymentController.createPaymentOrder(booking.getBookingReference(), null);
        assertEquals(410, orderResp.getStatusCode().value(), "Create payment order for expired hold must return 410 GONE");

        // verifyPayment should return 410 Gone
        PaymentVerificationRequest req = new PaymentVerificationRequest();
        req.setBookingReference(booking.getBookingReference());
        req.setRazorpayOrderId(booking.getRazorpayOrderId());
        req.setRazorpayPaymentId("pay_expired_hold_test");
        req.setRazorpaySignature("sig_valid_mock");

        ResponseEntity<?> verifyResp = paymentController.verifyPayment(req, null);
        assertEquals(410, verifyResp.getStatusCode().value(), "Verify payment for expired hold must return 410 GONE");
    }

    @Test
    @DisplayName("Phase 3 Security: Redeeming a previously used payment ID for a different booking is rejected (HTTP 400)")
    void testPaymentIdReuseAcrossBookingsRejected() {
        User user = verifiedTestUser();
        Vehicle vehicle = vehicleRepository.findAll().get(0);

        // Booking 1: Created and verified
        Booking booking1 = bookingService.createBooking(
                createRequest(user, vehicle, LocalDateTime.now().plusDays(2), "HOURLY", 2)
        );

        String legitimatePaymentId = "pay_unique_" + System.currentTimeMillis();

        PaymentVerificationRequest req1 = new PaymentVerificationRequest();
        req1.setBookingReference(booking1.getBookingReference());
        req1.setRazorpayOrderId(booking1.getRazorpayOrderId());
        req1.setRazorpayPaymentId(legitimatePaymentId);
        req1.setRazorpaySignature("sig_valid_mock");

        ResponseEntity<?> resp1 = paymentController.verifyPayment(req1, null);
        assertEquals(200, resp1.getStatusCode().value());

        // Booking 2: Distinct reservation
        Booking booking2 = bookingService.createBooking(
                createRequest(user, vehicle, LocalDateTime.now().plusDays(5), "DAILY", 1)
        );

        // Attempt to reuse legitimatePaymentId on Booking 2
        PaymentVerificationRequest req2 = new PaymentVerificationRequest();
        req2.setBookingReference(booking2.getBookingReference());
        req2.setRazorpayOrderId(booking2.getRazorpayOrderId());
        req2.setRazorpayPaymentId(legitimatePaymentId);
        req2.setRazorpaySignature("sig_valid_mock");

        ResponseEntity<?> resp2 = paymentController.verifyPayment(req2, null);
        assertEquals(400, resp2.getStatusCode().value(), "Replaying an existing payment ID must return 400 BAD REQUEST");

        Map<?, ?> body = (Map<?, ?>) resp2.getBody();
        assertNotNull(body);
        assertTrue(((String) body.get("message")).toLowerCase().contains("redeemed") ||
                   ((String) body.get("message")).toLowerCase().contains("already"));
    }

    @Test
    @DisplayName("Phase 3 Security: Webhook signature verification fails closed on missing or invalid signature")
    void testWebhookSignatureFailClosed() throws Exception {
        String testSecret = "tbh_whsec_unit_test_secret_2026";
        ReflectionTestUtils.setField(paymentController, "webhookSecret", testSecret);

        String samplePayload = "{\"event\":\"order.paid\",\"payload\":{\"payment\":{\"entity\":{\"id\":\"pay_wh_123\",\"order_id\":\"order_wh_123\"}}}}";

        // 1. Missing signature header -> Must fail closed with 400
        ResponseEntity<?> missingSigResp = paymentController.handleRazorpayWebhook(samplePayload, null);
        assertEquals(400, missingSigResp.getStatusCode().value(), "Missing signature header must be rejected with 400");

        // 2. Tampered signature header -> Must be rejected with 400
        ResponseEntity<?> tamperedSigResp = paymentController.handleRazorpayWebhook(samplePayload, "invalid_tampered_sig");
        assertEquals(400, tamperedSigResp.getStatusCode().value(), "Tampered signature header must be rejected with 400");

        // 3. Valid HMAC-SHA256 signature -> Must succeed with 200
        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(new SecretKeySpec(testSecret.getBytes(StandardCharsets.UTF_8), "HmacSHA256"));
        String validSig = HexFormat.of().formatHex(mac.doFinal(samplePayload.getBytes(StandardCharsets.UTF_8)));

        ResponseEntity<?> validSigResp = paymentController.handleRazorpayWebhook(samplePayload, validSig);
        assertEquals(200, validSigResp.getStatusCode().value(), "Authentic webhook signature must be accepted with 200");
    }

    @Test
    @DisplayName("Phase 3: Unpaid booking cancellation produces 0 refund and null refund ID (never REF_TBH_)")
    void testUnpaidBookingCancellationProducesZeroRefundAndNullTransactionId() {
        User user = verifiedTestUser();
        Vehicle vehicle = vehicleRepository.findAll().get(0);

        Booking booking = bookingService.createBooking(
                createRequest(user, vehicle, LocalDateTime.now().plusDays(3), "HOURLY", 2)
        );

        assertEquals(PaymentStatus.INITIATED, booking.getPaymentStatus());

        Booking cancelled = bookingService.cancelBooking(booking.getId(), user.getId());

        assertEquals(BookingStatus.CANCELLED, cancelled.getStatus());
        assertEquals(0.0, cancelled.getRefundAmount() != null ? cancelled.getRefundAmount().doubleValue() : 0.0, 0.001);
        assertNull(cancelled.getRefundTransactionId(), "Unpaid booking must have null refundTransactionId");
    }

    @Test
    @DisplayName("Phase 3: Paid booking cancellation invokes payment refund service returning genuine test refund ID")
    void testPaidBookingCancellationProcessesRefundWithoutFakeId() {
        User user = verifiedTestUser();
        Vehicle vehicle = vehicleRepository.findAll().get(0);

        // Booking 4 days in future (> 24 hours before pickup -> eligible for 100% refund)
        Booking booking = bookingService.createBooking(
                createRequest(user, vehicle, LocalDateTime.now().plusDays(4), "DAILY", 2)
        );

        PaymentVerificationRequest verifyReq = new PaymentVerificationRequest();
        verifyReq.setBookingReference(booking.getBookingReference());
        verifyReq.setRazorpayOrderId(booking.getRazorpayOrderId());
        verifyReq.setRazorpayPaymentId("pay_cancel_test_" + System.currentTimeMillis());
        verifyReq.setRazorpaySignature("sig_valid_mock");

        ResponseEntity<?> verifyResp = paymentController.verifyPayment(verifyReq, null);
        assertEquals(200, verifyResp.getStatusCode().value());

        // Cancel the paid booking
        Booking cancelled = bookingService.cancelBooking(booking.getId(), user.getId());

        assertEquals(BookingStatus.CANCELLED, cancelled.getStatus());
        assertTrue(cancelled.getRefundAmount() != null && cancelled.getRefundAmount().compareTo(BigDecimal.ZERO) > 0,
                "Refund amount must be > 0 for cancellation > 24h before pickup");
        assertNotNull(cancelled.getRefundTransactionId(), "Refund transaction ID must be present");
        assertTrue(cancelled.getRefundTransactionId().startsWith("rfnd_test_"),
                "Refund ID must use genuine test refund prefix (rfnd_test_), never REF_TBH_");
        assertFalse(cancelled.getRefundTransactionId().contains("REF_TBH_"),
                "Fake REF_TBH_ generator must NEVER be used");
        assertEquals(PaymentStatus.REFUNDED, cancelled.getPaymentStatus());
    }

    @Test
    @DisplayName("Phase 3: Webhook payment confirmation is idempotent upon duplicate deliveries")
    void testWebhookIdempotentDuplicateDelivery() throws Exception {
        User user = verifiedTestUser();
        Vehicle vehicle = vehicleRepository.findAll().get(0);

        Booking booking = bookingService.createBooking(
                createRequest(user, vehicle, LocalDateTime.now().plusDays(3), "HOURLY", 3)
        );

        String testSecret = "tbh_webhook_secret_idempotent_test";
        ReflectionTestUtils.setField(paymentController, "webhookSecret", testSecret);

        String paymentId = "pay_webhook_idem_" + System.currentTimeMillis();
        String payload = String.format(
                "{\"event\":\"order.paid\",\"payload\":{\"payment\":{\"entity\":{\"id\":\"%s\",\"order_id\":\"%s\"}}}}",
                paymentId, booking.getRazorpayOrderId()
        );

        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(new SecretKeySpec(testSecret.getBytes(StandardCharsets.UTF_8), "HmacSHA256"));
        String sig = HexFormat.of().formatHex(mac.doFinal(payload.getBytes(StandardCharsets.UTF_8)));

        // Delivery 1
        ResponseEntity<?> resp1 = paymentController.handleRazorpayWebhook(payload, sig);
        assertEquals(200, resp1.getStatusCode().value());

        Booking bAfter1 = bookingRepository.findByBookingReference(booking.getBookingReference()).orElseThrow();
        assertEquals(BookingStatus.CONFIRMED, bAfter1.getStatus());
        assertEquals(PaymentStatus.PAID, bAfter1.getPaymentStatus());
        String pin1 = bAfter1.getUnlockPin();
        assertNotNull(pin1);

        // Delivery 2 (Duplicate)
        ResponseEntity<?> resp2 = paymentController.handleRazorpayWebhook(payload, sig);
        assertEquals(200, resp2.getStatusCode().value());

        Booking bAfter2 = bookingRepository.findByBookingReference(booking.getBookingReference()).orElseThrow();
        assertEquals(BookingStatus.CONFIRMED, bAfter2.getStatus());
        assertEquals(PaymentStatus.PAID, bAfter2.getPaymentStatus());
        assertEquals(pin1, bAfter2.getUnlockPin(), "Duplicate webhook must preserve original PIN");
    }
}