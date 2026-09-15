package com.tbh.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tbh.dto.PaymentOrderResponse;
import com.tbh.dto.PaymentVerificationRequest;
import com.tbh.entity.Booking;
import com.tbh.entity.BookingStatus;
import com.tbh.entity.Payment;
import com.tbh.entity.PaymentStatus;
import com.tbh.repository.BookingRepository;
import com.tbh.repository.PaymentRepository;
import com.tbh.service.payment.PaymentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.HexFormat;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/payments")
@Transactional
public class PaymentController {

    private static final Logger log = LoggerFactory.getLogger(PaymentController.class);

    private final PaymentService paymentService;
    private final BookingRepository bookingRepository;
    private final PaymentRepository paymentRepository;
    private final com.tbh.service.email.EmailService emailService;
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final SecureRandom secureRandom = new SecureRandom();

    @Value("${tbh.razorpay.webhook-secret:}")
    private String webhookSecret;

    public PaymentController(PaymentService paymentService, 
                             BookingRepository bookingRepository,
                             PaymentRepository paymentRepository) {
        this(paymentService, bookingRepository, paymentRepository, null);
    }

    @org.springframework.beans.factory.annotation.Autowired
    public PaymentController(PaymentService paymentService, 
                             BookingRepository bookingRepository,
                             PaymentRepository paymentRepository,
                             @org.springframework.beans.factory.annotation.Autowired(required = false) com.tbh.service.email.EmailService emailService) {
        this.paymentService = paymentService;
        this.bookingRepository = bookingRepository;
        this.paymentRepository = paymentRepository;
        this.emailService = emailService;
    }

    @PostMapping("/create-order/{bookingReference}")
    public ResponseEntity<?> createPaymentOrder(@PathVariable String bookingReference, Authentication authentication) {
        Booking booking = bookingRepository.findByBookingReference(bookingReference)
                .orElse(null);
        if (booking == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", "Booking reference not found."));
        }

        if (booking.getStatus() == BookingStatus.CANCELLED) {
            return ResponseEntity.badRequest().body(Map.of(
                    "status", "FAILED",
                    "message", "Cannot initiate payment: Booking has been cancelled."
            ));
        }

        if (booking.getExpiresAt() != null && booking.getExpiresAt().isBefore(LocalDateTime.now()) && booking.getStatus() == BookingStatus.PENDING) {
            log.warn("[TBH PAYMENT] Cannot create order for expired booking hold {}", booking.getBookingReference());
            return ResponseEntity.status(HttpStatus.GONE).body(Map.of(
                    "status", "FAILED",
                    "message", "Reservation payment hold has expired. Please select a vehicle and initiate a new booking."
            ));
        }

        if (authentication != null && authentication.isAuthenticated() && !"anonymousUser".equals(authentication.getPrincipal())) {
            boolean isAdmin = authentication.getAuthorities().stream()
                    .anyMatch(a -> a.getAuthority().contains("ADMIN"));
            if (!isAdmin && booking.getUser() != null && !booking.getUser().getEmail().equalsIgnoreCase(authentication.getName())) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("message", "Access Denied: You cannot create a payment order for another user's booking."));
            }
        }

        PaymentOrderResponse order = paymentService.createOrder(booking);
        booking.setRazorpayOrderId(order.getOrderId());
        bookingRepository.save(booking);

        // Record initial payment ledger entry
        Payment payment = new Payment(booking, booking.getUser(), order.getOrderId(), booking.getTotalAmount(), PaymentStatus.INITIATED);
        paymentRepository.save(payment);

        return ResponseEntity.ok(order);
    }

    public ResponseEntity<?> createPaymentOrder(String bookingReference) {
        return createPaymentOrder(bookingReference, null);
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyPayment(@RequestBody PaymentVerificationRequest request, Authentication authentication) {
        boolean verified = paymentService.verifyPayment(request);
        if (!verified) {
            log.warn("[TBH PAYMENT] Verification failed for order {}. Tampering or bad signature.", request.getRazorpayOrderId());
            return ResponseEntity.badRequest().body(Map.of(
                    "status", "FAILED",
                    "message", "Payment signature verification failed. Possible tampering detected."
            ));
        }

        Booking booking = bookingRepository.findByBookingReference(request.getBookingReference())
                .orElse(null);
        if (booking == null && request.getRazorpayOrderId() != null) {
            booking = bookingRepository.findByRazorpayOrderId(request.getRazorpayOrderId()).orElse(null);
        }

        if (booking == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", "Booking reference not found."));
        }

        if (booking.getStatus() == BookingStatus.CANCELLED) {
            return ResponseEntity.badRequest().body(Map.of(
                    "status", "FAILED",
                    "message", "Cannot verify payment: Booking has been cancelled."
            ));
        }

        if (booking.getExpiresAt() != null && booking.getExpiresAt().isBefore(LocalDateTime.now()) && booking.getStatus() == BookingStatus.PENDING) {
            log.warn("[TBH PAYMENT] Cannot verify payment for expired booking hold {}", booking.getBookingReference());
            return ResponseEntity.status(HttpStatus.GONE).body(Map.of(
                    "status", "FAILED",
                    "message", "Reservation payment hold has expired. Please select a vehicle and initiate a new booking."
            ));
        }

        if (authentication != null && authentication.isAuthenticated() && !"anonymousUser".equals(authentication.getPrincipal())) {
            boolean isAdmin = authentication.getAuthorities().stream()
                    .anyMatch(a -> a.getAuthority().contains("ADMIN"));
            if (!isAdmin && booking.getUser() != null && !booking.getUser().getEmail().equalsIgnoreCase(authentication.getName())) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of(
                        "status", "FAILED",
                        "message", "Access Denied: You cannot verify payment for another user's booking."
                ));
            }
        }

        // Strict Order-to-Booking binding check: Prevent cross-booking replay / order-swapping exploits
        if (booking.getRazorpayOrderId() == null || !booking.getRazorpayOrderId().equals(request.getRazorpayOrderId())) {
            log.error("[TBH PAYMENT SECURITY] Cross-booking order mismatch detected! Booking {} expected order {} but received order {}. Rejecting replay attack.",
                    booking.getBookingReference(), booking.getRazorpayOrderId(), request.getRazorpayOrderId());
            return ResponseEntity.badRequest().body(Map.of(
                    "status", "FAILED",
                    "message", "Payment order ID mismatch: This payment order does not belong to the specified booking reservation."
            ));
        }

        // Strict Payment ID Uniqueness Check: Prevent reusing an authentic payment ID across multiple bookings
        if (request.getRazorpayPaymentId() != null && !request.getRazorpayPaymentId().isBlank()) {
            Optional<Payment> existingPayment = paymentRepository.findByRazorpayPaymentId(request.getRazorpayPaymentId());
            if (existingPayment.isPresent()) {
                Payment prior = existingPayment.get();
                Long priorBookingId = prior.getBooking() != null ? prior.getBooking().getId() : null;
                if (priorBookingId != null && !priorBookingId.equals(booking.getId())) {
                    log.error("[TBH PAYMENT SECURITY] Payment ID {} has already been redeemed for another booking reservation (ID: {})! Rejecting payment replay.",
                            request.getRazorpayPaymentId(), priorBookingId);
                    return ResponseEntity.badRequest().body(Map.of(
                            "status", "FAILED",
                            "message", "Payment ID has already been redeemed for another booking reservation."
                    ));
                }
            }
        }

        // Idempotency Check: Whichever runs second (frontend verify or webhook) is a clean no-op
        if (booking.getStatus() == BookingStatus.CONFIRMED && booking.getPaymentStatus() == PaymentStatus.PAID) {
            log.info("[TBH PAYMENT] Booking {} is already CONFIRMED and PAID (idempotent duplicate verify no-op)",
                    booking.getBookingReference());
            return ResponseEntity.ok(Map.of(
                    "status", "SUCCESS",
                    "message", "Payment already verified and confirmed.",
                    "unlockPin", booking.getUnlockPin(),
                    "booking", booking
            ));
        }

        // Apply authentic payment confirmation
        booking.setRazorpayPaymentId(request.getRazorpayPaymentId());
        booking.setRazorpaySignature(request.getRazorpaySignature());
        booking.setPaymentStatus(PaymentStatus.PAID);
        booking.setStatus(BookingStatus.CONFIRMED);

        // Dynamic cryptographically secure 4-digit keyless unlock PIN generated ONLY now
        if (booking.getUnlockPin() == null || booking.getUnlockPin().isBlank()) {
            int pin = 1000 + secureRandom.nextInt(9000);
            booking.setUnlockPin(String.valueOf(pin));
        }

        Booking savedBooking = bookingRepository.save(booking);

        // Update payment record in MySQL database
        Payment payment = paymentRepository.findByRazorpayOrderId(request.getRazorpayOrderId())
                .orElse(new Payment(savedBooking, savedBooking.getUser(), request.getRazorpayOrderId(), savedBooking.getTotalAmount(), PaymentStatus.PAID));
        payment.setRazorpayPaymentId(request.getRazorpayPaymentId());
        payment.setRazorpaySignature(request.getRazorpaySignature());
        payment.setStatus(PaymentStatus.PAID);
        paymentRepository.save(payment);

        log.info("[TBH PAYMENT] Confirmed booking {} and generated PIN {} upon verified payment {}",
                savedBooking.getBookingReference(), savedBooking.getUnlockPin(), request.getRazorpayPaymentId());

        // Queue transactional notification events safely
        if (emailService != null && savedBooking.getUser() != null && savedBooking.getUser().getEmail() != null) {
            try {
                String email = savedBooking.getUser().getEmail();
                String name = savedBooking.getUser().getFullName();
                emailService.queuePaymentSuccess(
                        email, name, request.getRazorpayPaymentId(),
                        savedBooking.getBookingReference(),
                        String.valueOf(savedBooking.getTotalAmount()), "Razorpay"
                );
                emailService.queueBookingConfirmed(
                        email, name, savedBooking.getBookingReference(),
                        savedBooking.getVehicle() != null ? savedBooking.getVehicle().getName() : "TBH Vehicle",
                        savedBooking.getPickupHub() != null ? savedBooking.getPickupHub() : "Designated Hub",
                        savedBooking.getDropHub() != null ? savedBooking.getDropHub() : "Designated Hub",
                        String.valueOf(savedBooking.getTotalAmount()), savedBooking.getUnlockPin()
                );
            } catch (Exception e) {
                log.error("[TBH NOTIFICATION] Failed to queue booking/payment confirmation email: {}", e.getMessage());
            }
        }

        return ResponseEntity.ok(Map.of(
                "status", "SUCCESS",
                "message", "Payment verified and recorded successfully in database.",
                "unlockPin", savedBooking.getUnlockPin(),
                "booking", savedBooking
        ));
    }

    public ResponseEntity<?> verifyPayment(PaymentVerificationRequest request) {
        return verifyPayment(request, null);
    }

    @PostMapping("/webhook")
    public ResponseEntity<?> handleRazorpayWebhook(
            @RequestBody String rawPayload,
            @RequestHeader(value = "X-Razorpay-Signature", required = false) String signature) {
        log.info("[TBH WEBHOOK] Incoming payment webhook received");

        // Fail-closed verification: If webhookSecret is configured, signature is strictly required
        if (webhookSecret != null && !webhookSecret.isBlank()) {
            if (signature == null || signature.isBlank()) {
                log.warn("[TBH WEBHOOK SECURITY] Rejecting webhook: Webhook secret configured but X-Razorpay-Signature header missing (Fail Closed).");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", "Missing X-Razorpay-Signature header"));
            }

            try {
                Mac mac = Mac.getInstance("HmacSHA256");
                mac.init(new SecretKeySpec(webhookSecret.trim().getBytes(StandardCharsets.UTF_8), "HmacSHA256"));
                byte[] hash = mac.doFinal(rawPayload.getBytes(StandardCharsets.UTF_8));
                String expectedSignature = HexFormat.of().formatHex(hash);

                if (!MessageDigest.isEqual(expectedSignature.getBytes(StandardCharsets.UTF_8), signature.trim().getBytes(StandardCharsets.UTF_8))) {
                    log.warn("[TBH WEBHOOK SECURITY] Invalid signature rejected");
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", "Invalid webhook signature"));
                }
            } catch (Exception e) {
                log.error("[TBH WEBHOOK SECURITY] Signature calculation error: {}", e.getMessage());
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        }

        try {
            JsonNode root = objectMapper.readTree(rawPayload);
            String event = root.path("event").asText("");
            JsonNode paymentEntity = root.path("payload").path("payment").path("entity");
            String orderId = paymentEntity.path("order_id").asText("");
            String paymentId = paymentEntity.path("id").asText("");

            log.info("[TBH WEBHOOK] Processing event: {} for order: {}", event, orderId);

            if ("order.paid".equals(event) || "payment.captured".equals(event)) {
                Booking booking = bookingRepository.findByRazorpayOrderId(orderId).orElse(null);
                Payment payment = paymentRepository.findByRazorpayOrderId(orderId).orElse(null);
                if (booking == null && payment != null) {
                    booking = payment.getBooking();
                }

                if (booking != null) {
                    // Idempotency Check: Whichever runs second (frontend verify or webhook) is a clean no-op
                    if (booking.getStatus() == BookingStatus.CONFIRMED && booking.getPaymentStatus() == PaymentStatus.PAID) {
                        log.info("[TBH WEBHOOK] Booking {} is already CONFIRMED and PAID (idempotent duplicate webhook no-op)",
                                booking.getBookingReference());
                    } else {
                        booking.setPaymentStatus(PaymentStatus.PAID);
                        booking.setStatus(BookingStatus.CONFIRMED);
                        booking.setRazorpayPaymentId(paymentId);
                        if (booking.getUnlockPin() == null || booking.getUnlockPin().isBlank()) {
                            int pin = 1000 + secureRandom.nextInt(9000);
                            booking.setUnlockPin(String.valueOf(pin));
                        }
                        bookingRepository.save(booking);
                        log.info("[TBH WEBHOOK] Confirmed booking {} and generated PIN {} via webhook for order {}",
                                booking.getBookingReference(), booking.getUnlockPin(), orderId);

                        if (emailService != null && booking.getUser() != null && booking.getUser().getEmail() != null) {
                            try {
                                String email = booking.getUser().getEmail();
                                String name = booking.getUser().getFullName();
                                emailService.queuePaymentSuccess(
                                        email, name, paymentId,
                                        booking.getBookingReference(),
                                        String.valueOf(booking.getTotalAmount()), "Razorpay"
                                );
                                emailService.queueBookingConfirmed(
                                        email, name, booking.getBookingReference(),
                                        booking.getVehicle() != null ? booking.getVehicle().getName() : "TBH Vehicle",
                                        booking.getPickupHub() != null ? booking.getPickupHub() : "Designated Hub",
                                        booking.getDropHub() != null ? booking.getDropHub() : "Designated Hub",
                                        String.valueOf(booking.getTotalAmount()), booking.getUnlockPin()
                                );
                            } catch (Exception e) {
                                log.error("[TBH NOTIFICATION] Webhook email dispatch error: {}", e.getMessage());
                            }
                        }
                    }
                }

                if (payment != null) {
                    payment.setStatus(PaymentStatus.PAID);
                    payment.setRazorpayPaymentId(paymentId);
                    paymentRepository.save(payment);
                }
            } else if ("payment.failed".equals(event)) {
                String failureReason = paymentEntity.path("error_description").asText("Transaction failed");
                paymentRepository.findByRazorpayOrderId(orderId).ifPresent(p -> {
                    p.setStatus(PaymentStatus.FAILED);
                    p.setFailureReason(failureReason);
                    paymentRepository.save(p);
                });
                if (emailService != null) {
                    bookingRepository.findByRazorpayOrderId(orderId).ifPresent(b -> {
                        if (b.getUser() != null && b.getUser().getEmail() != null) {
                            try {
                                emailService.queuePaymentFailed(b.getUser().getEmail(), b.getUser().getFullName(), b.getBookingReference(), failureReason);
                            } catch (Exception e) {
                                log.error("[TBH NOTIFICATION] Webhook payment failed email error: {}", e.getMessage());
                            }
                        }
                    });
                }
            } else if ("refund.processed".equals(event)) {
                JsonNode refundEntity = root.path("payload").path("refund").path("entity");
                String refundPaymentId = refundEntity.path("payment_id").asText("");
                String refundId = refundEntity.path("id").asText("");
                String refundAmount = refundEntity.path("amount").asText("0");
                log.info("[TBH WEBHOOK] Processing refund.processed for payment: {}, refundId: {}", refundPaymentId, refundId);
                if (!refundPaymentId.isBlank()) {
                    paymentRepository.findByRazorpayPaymentId(refundPaymentId).ifPresent(p -> {
                        p.setStatus(PaymentStatus.REFUNDED);
                        paymentRepository.save(p);
                        if (p.getBooking() != null) {
                            Booking b = p.getBooking();
                            b.setPaymentStatus(PaymentStatus.REFUNDED);
                            if (b.getRefundTransactionId() == null || b.getRefundTransactionId().isBlank()) {
                                b.setRefundTransactionId(refundId);
                            }
                            bookingRepository.save(b);

                            if (emailService != null && b.getUser() != null && b.getUser().getEmail() != null) {
                                try {
                                    emailService.queueSecurityDepositRefunded(
                                            b.getUser().getEmail(), b.getUser().getFullName(),
                                            b.getBookingReference(), refundAmount, refundId
                                    );
                                } catch (Exception e) {
                                    log.error("[TBH NOTIFICATION] Webhook refund email error: {}", e.getMessage());
                                }
                            }
                        }
                    });
                }
            }

            return ResponseEntity.ok(Map.of("status", "processed"));
        } catch (Exception e) {
            log.error("[TBH WEBHOOK] Payload processing error: {}", e.getMessage());
            return ResponseEntity.ok(Map.of("status", "error_logged"));
        }
    }
}
