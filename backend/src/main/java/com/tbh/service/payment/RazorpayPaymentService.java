package com.tbh.service.payment;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tbh.dto.PaymentOrderResponse;
import com.tbh.dto.PaymentVerificationRequest;
import com.tbh.dto.RefundResponse;
import com.tbh.entity.Booking;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.time.Duration;
import java.util.Base64;
import java.util.HashMap;
import java.util.HexFormat;
import java.util.Map;

@Service
@ConditionalOnProperty(name = "tbh.payment.provider", havingValue = "razorpay")
public class RazorpayPaymentService implements PaymentService {

    private static final Logger log = LoggerFactory.getLogger(RazorpayPaymentService.class);
    private static final String RAZORPAY_ORDERS_URL = "https://api.razorpay.com/v1/orders";

    @Value("${tbh.razorpay.key-id:}")
    private String keyId;

    @Value("${tbh.razorpay.key-secret:}")
    private String keySecret;

    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;

    public RazorpayPaymentService() {
        this.httpClient = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();
        this.objectMapper = new ObjectMapper();
    }

    @Override
    public PaymentOrderResponse createOrder(Booking booking) {
        if (keyId == null || keyId.isBlank() || keySecret == null || keySecret.isBlank()) {
            log.error("[RAZORPAY] Razorpay API credentials missing. Configure tbh.razorpay.key-id and key-secret.");
            throw new IllegalStateException("Payment gateway not configured: Missing Razorpay key credentials.");
        }

        BigDecimal totalAmount = booking.getTotalAmount() != null ? booking.getTotalAmount() : BigDecimal.ZERO;
        long amountPaise = totalAmount.multiply(BigDecimal.valueOf(100)).setScale(0, RoundingMode.HALF_UP).longValue();

        try {
            Map<String, Object> payload = new HashMap<>();
            payload.put("amount", amountPaise);
            payload.put("currency", "INR");
            payload.put("receipt", booking.getBookingReference());

            Map<String, String> notes = new HashMap<>();
            notes.put("bookingReference", booking.getBookingReference());
            if (booking.getVehicle() != null) {
                notes.put("vehicle", booking.getVehicle().getName());
            }
            if (booking.getUser() != null) {
                notes.put("customerEmail", booking.getUser().getEmail());
            }
            payload.put("notes", notes);

            String requestBody = objectMapper.writeValueAsString(payload);
            String authHeader = "Basic " + Base64.getEncoder().encodeToString(
                    (keyId.trim() + ":" + keySecret.trim()).getBytes(StandardCharsets.UTF_8)
            );

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(RAZORPAY_ORDERS_URL))
                    .timeout(Duration.ofSeconds(15))
                    .header("Authorization", authHeader)
                    .header("Content-Type", "application/json")
                    .header("Accept", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();

            log.info("[RAZORPAY] Initiating real Razorpay order for booking {} (Amount: ₹{})",
                    booking.getBookingReference(), booking.getTotalAmount());

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            String responseBody = response.body() != null ? response.body() : "";

            if (response.statusCode() >= 200 && response.statusCode() < 300) {
                JsonNode json = objectMapper.readTree(responseBody);
                String orderId = json.path("id").asText();
                long amount = json.path("amount").asLong(amountPaise);
                String currency = json.path("currency").asText("INR");

                log.info("[RAZORPAY] Order successfully created in Razorpay: {} for booking {}",
                        orderId, booking.getBookingReference());

                return new PaymentOrderResponse(orderId, amount, currency, keyId.trim(), booking.getBookingReference());
            } else {
                String errorDescription = "HTTP status " + response.statusCode();
                try {
                    JsonNode json = objectMapper.readTree(responseBody);
                    if (json.has("error") && json.get("error").has("description")) {
                        errorDescription = json.get("error").get("description").asText();
                    }
                } catch (Exception ignored) {}

                log.error("[RAZORPAY] Order creation failed for booking {}: {}",
                        booking.getBookingReference(), errorDescription);
                throw new IllegalStateException("Razorpay order creation failed: " + errorDescription);
            }

        } catch (IOException e) {
            log.error("[RAZORPAY] Network I/O failure creating order for booking {}: {}",
                    booking.getBookingReference(), e.getMessage());
            throw new IllegalStateException("Failed to communicate with Razorpay payment gateway.");
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            log.error("[RAZORPAY] Order creation thread interrupted for booking {}", booking.getBookingReference());
            throw new IllegalStateException("Payment processing was interrupted.");
        }
    }

    @Override
    public boolean verifyPayment(PaymentVerificationRequest request) {
        // Strict Fail-Closed Check: If secret is missing or null, NEVER authorize
        if (keySecret == null || keySecret.isBlank()) {
            log.error("[RAZORPAY SECURITY] Payment signature verification failed: Razorpay keySecret is missing or empty. Rejecting payment (Fail Closed).");
            return false;
        }

        if (request == null ||
            request.getRazorpayOrderId() == null || request.getRazorpayOrderId().isBlank() ||
            request.getRazorpayPaymentId() == null || request.getRazorpayPaymentId().isBlank() ||
            request.getRazorpaySignature() == null || request.getRazorpaySignature().isBlank()) {
            log.warn("[RAZORPAY SECURITY] Missing orderId, paymentId, or signature in verification request. Rejecting payment.");
            return false;
        }

        try {
            String payload = request.getRazorpayOrderId().trim() + "|" + request.getRazorpayPaymentId().trim();
            Mac mac = Mac.getInstance("HmacSHA256");
            mac.init(new SecretKeySpec(keySecret.trim().getBytes(StandardCharsets.UTF_8), "HmacSHA256"));
            byte[] hash = mac.doFinal(payload.getBytes(StandardCharsets.UTF_8));
            String expectedSignature = HexFormat.of().formatHex(hash);

            boolean isValid = MessageDigest.isEqual(
                    expectedSignature.getBytes(StandardCharsets.UTF_8),
                    request.getRazorpaySignature().trim().getBytes(StandardCharsets.UTF_8)
            );

            if (!isValid) {
                log.warn("[RAZORPAY SECURITY] Invalid HMAC-SHA256 signature for order {}. Tampering attempt detected.",
                        request.getRazorpayOrderId());
            } else {
                log.info("[RAZORPAY SECURITY] Payment signature verified successfully for order {}",
                        request.getRazorpayOrderId());
            }

            return isValid;

        } catch (Exception e) {
            log.error("[RAZORPAY SECURITY] Cryptographic signature computation error: {}", e.getMessage());
            return false;
        }
    }

    @Override
    public RefundResponse processRefund(Booking booking, BigDecimal refundAmount) {
        if (keyId == null || keyId.isBlank() || keySecret == null || keySecret.isBlank()) {
            log.error("[RAZORPAY REFUND] Razorpay credentials missing. Cannot execute refund.");
            return RefundResponse.failed("Razorpay API credentials missing. Refund rejected.");
        }

        if (booking == null) {
            return RefundResponse.failed("Booking not found.");
        }

        String paymentId = booking.getRazorpayPaymentId();
        if (paymentId == null || paymentId.isBlank()) {
            log.error("[RAZORPAY REFUND] No Razorpay payment ID on booking {}. Cannot refund.", booking.getBookingReference());
            return RefundResponse.failed("No payment ID recorded on booking.");
        }

        if (refundAmount == null || refundAmount.compareTo(BigDecimal.ZERO) <= 0) {
            log.warn("[RAZORPAY REFUND] Zero or negative refund amount (₹{}) for booking {}", refundAmount, booking.getBookingReference());
            return RefundResponse.failed("Refund amount must be greater than zero.");
        }

        long refundAmountPaise = refundAmount.multiply(BigDecimal.valueOf(100)).setScale(0, RoundingMode.HALF_UP).longValue();

        try {
            Map<String, Object> payload = new HashMap<>();
            payload.put("amount", refundAmountPaise);

            Map<String, String> notes = new HashMap<>();
            notes.put("bookingReference", booking.getBookingReference());
            payload.put("notes", notes);

            String requestBody = objectMapper.writeValueAsString(payload);
            String authHeader = "Basic " + Base64.getEncoder().encodeToString(
                    (keyId.trim() + ":" + keySecret.trim()).getBytes(StandardCharsets.UTF_8)
            );

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.razorpay.com/v1/payments/" + paymentId.trim() + "/refund"))
                    .timeout(Duration.ofSeconds(15))
                    .header("Authorization", authHeader)
                    .header("Content-Type", "application/json")
                    .header("Accept", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();

            log.info("[RAZORPAY REFUND] Requesting Razorpay refund of ₹{} ({} paise) for payment {} (Booking {})",
                    refundAmount, refundAmountPaise, paymentId, booking.getBookingReference());

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            String responseBody = response.body() != null ? response.body() : "";

            if (response.statusCode() >= 200 && response.statusCode() < 300) {
                JsonNode json = objectMapper.readTree(responseBody);
                String refundId = json.path("id").asText();
                String status = json.path("status").asText("processed");

                log.info("[RAZORPAY REFUND] Successfully initiated refund {} (status: {}) for payment {}",
                        refundId, status, paymentId);

                return RefundResponse.success(refundId, refundAmount.doubleValue(), status);
            } else {
                String errorDescription = "HTTP status " + response.statusCode();
                try {
                    JsonNode json = objectMapper.readTree(responseBody);
                    if (json.has("error") && json.get("error").has("description")) {
                        errorDescription = json.get("error").get("description").asText();
                    }
                } catch (Exception ignored) {}

                log.error("[RAZORPAY REFUND] Refund failed for payment {}: {}", paymentId, errorDescription);
                return RefundResponse.failed("Razorpay refund error: " + errorDescription);
            }

        } catch (IOException e) {
            log.error("[RAZORPAY REFUND] Network error during refund for payment {}: {}", paymentId, e.getMessage());
            return RefundResponse.failed("Network error communicating with payment gateway.");
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            log.error("[RAZORPAY REFUND] Refund request interrupted for payment {}", paymentId);
            return RefundResponse.failed("Payment refund request interrupted.");
        }
    }

    @Override
    public RefundResponse processRefund(Booking booking, double refundAmount) {
        return processRefund(booking, BigDecimal.valueOf(refundAmount));
    }
}
