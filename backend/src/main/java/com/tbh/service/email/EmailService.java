package com.tbh.service.email;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmailService {

    private static final Logger log = LoggerFactory.getLogger(EmailService.class);

    @Value("${tbh.email.provider:mock}")
    private String emailProvider;

    @Value("${tbh.email.api-key:}")
    private String apiKey;

    @Value("${tbh.email.from:TBH Rentals <onboarding@resend.dev>}")
    private String fromEmail;

    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;
    private NotificationOutboxService outboxService;

    public EmailService() {
        this(null);
    }

    @org.springframework.beans.factory.annotation.Autowired
    public EmailService(NotificationOutboxService outboxService) {
        this.outboxService = outboxService;
        this.httpClient = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();
        this.objectMapper = new ObjectMapper();
    }

    public void sendOtpEmail(String recipientEmail, String otpCode) {
        log.info("[EMAIL SERVICE] Dispatching OTP email to: {}", recipientEmail);

        if ("resend".equalsIgnoreCase(emailProvider) && apiKey != null && !apiKey.trim().isEmpty()) {
            sendViaResend(recipientEmail, otpCode);
        } else if ("brevo".equalsIgnoreCase(emailProvider) && apiKey != null && !apiKey.trim().isEmpty()) {
            sendViaBrevo(recipientEmail, otpCode);
        } else {
            sendViaMock(recipientEmail, otpCode);
        }
    }

    private void sendViaResend(String recipientEmail, String otpCode) {
        try {
            Map<String, Object> payload = new HashMap<>();
            payload.put("from", fromEmail);
            payload.put("to", List.of(recipientEmail));
            payload.put("subject", otpCode + " is your TBH Rentals verification code");
            payload.put("html", buildHtmlEmail(otpCode));

            String body = objectMapper.writeValueAsString(payload);

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.resend.com/emails"))
                    .timeout(Duration.ofSeconds(12))
                    .header("Authorization", "Bearer " + apiKey.trim())
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(body))
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() >= 200 && response.statusCode() < 300) {
                log.info("[RESEND EMAIL] Successfully delivered OTP email to {} (HTTP {})", recipientEmail, response.statusCode());
            } else {
                log.error("[RESEND EMAIL] Delivery error: HTTP {} -> {}", response.statusCode(), response.body());
                sendViaMock(recipientEmail, otpCode);
            }
        } catch (Exception e) {
            log.error("[RESEND EMAIL] Exception during dispatch to {}: {}", recipientEmail, e.getMessage());
            sendViaMock(recipientEmail, otpCode);
        }
    }

    private void sendViaBrevo(String recipientEmail, String otpCode) {
        try {
            Map<String, Object> payload = new HashMap<>();
            payload.put("sender", Map.of("name", "TBH Rentals", "email", "noreply@tbhrentals.in"));
            payload.put("to", List.of(Map.of("email", recipientEmail)));
            payload.put("subject", otpCode + " is your TBH Rentals verification code");
            payload.put("htmlContent", buildHtmlEmail(otpCode));

            String body = objectMapper.writeValueAsString(payload);

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.brevo.com/v3/smtp/email"))
                    .timeout(Duration.ofSeconds(12))
                    .header("api-key", apiKey.trim())
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(body))
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() >= 200 && response.statusCode() < 300) {
                log.info("[BREVO EMAIL] Successfully delivered OTP email to {} (HTTP {})", recipientEmail, response.statusCode());
            } else {
                log.error("[BREVO EMAIL] Delivery error: HTTP {} -> {}", response.statusCode(), response.body());
                sendViaMock(recipientEmail, otpCode);
            }
        } catch (Exception e) {
            log.error("[BREVO EMAIL] Exception during dispatch: {}", e.getMessage());
            sendViaMock(recipientEmail, otpCode);
        }
    }

    private void sendViaMock(String recipientEmail, String otpCode) {
        log.info("====================================================================");
        log.info("[TBH EMAIL DISPATCHER] To: {}", recipientEmail);
        log.info("[TBH EMAIL DISPATCHER] Subject: {} is your TBH Rentals verification code", otpCode);
        log.info("[TBH EMAIL DISPATCHER] OTP CODE: >>> {} <<<", otpCode);
        log.info("[TBH EMAIL DISPATCHER] Valid for 5 minutes.");
        log.info("====================================================================");
        System.out.println(">>> [TBH EMAIL OTP] Recipient: " + recipientEmail + " | CODE: " + otpCode + " <<<");
    }

    private String buildHtmlEmail(String otpCode) {
        return "<div style='font-family: Arial, sans-serif; background: #0a0a0b; color: #ffffff; padding: 32px; border-radius: 16px; max-width: 520px; margin: auto; border: 1px solid rgba(255,255,255,0.1);'>"
                + "<div style='text-align: center; margin-bottom: 24px;'>"
                + "<h2 style='color: #00E5C7; margin: 0; font-size: 24px; letter-spacing: 1px;'>TBH RENTALS</h2>"
                + "<p style='color: #888888; font-size: 12px; margin-top: 4px;'>RIDE BEYOND LIMITS</p>"
                + "</div>"
                + "<p style='font-size: 14px; color: #cccccc;'>Hello Rider,</p>"
                + "<p style='font-size: 14px; color: #cccccc;'>Use the following 6-digit one-time password (OTP) to complete your authentication on the TBH Mobility platform:</p>"
                + "<div style='text-align: center; margin: 28px 0;'>"
                + "<span style='display: inline-block; font-size: 32px; font-weight: bold; font-family: monospace; letter-spacing: 8px; color: #00E5C7; background: #141416; padding: 14px 28px; border-radius: 12px; border: 1px solid rgba(0,229,199,0.3);'>" + otpCode + "</span>"
                + "</div>"
                + "<p style='font-size: 12px; color: #888888;'>This code is confidential and expires in <strong>5 minutes</strong>. If you did not request this, you can safely ignore this email.</p>"
                + "<hr style='border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 24px 0;' />"
                + "<p style='font-size: 11px; color: #555555; text-align: center;'>© 2026 TBH Mobility Rentals India. All rights reserved.</p>"
                + "</div>";
    }

    public void queueBookingConfirmed(String email, String customerName, String bookingRef,
                                      String vehicleName, String pickupHub, String dropHub,
                                      String totalAmount, String unlockPin) {
        if (outboxService != null) {
            Map<String, Object> payload = Map.of(
                    "customerName", customerName != null ? customerName : "Rider",
                    "bookingReference", bookingRef,
                    "vehicleName", vehicleName != null ? vehicleName : "TBH Vehicle",
                    "pickupHub", pickupHub != null ? pickupHub : "Hub",
                    "dropHub", dropHub != null ? dropHub : "Hub",
                    "totalAmount", totalAmount != null ? totalAmount : "0.00",
                    "unlockPin", unlockPin != null ? unlockPin : "----"
            );
            outboxService.queueEvent("BOOKING_CONFIRMED", email, customerName, "booking_confirmed", payload, "notif_book_conf_" + bookingRef);
        }
    }

    public void queuePaymentSuccess(String email, String customerName, String paymentId,
                                    String bookingRef, String amount, String method) {
        if (outboxService != null) {
            Map<String, Object> payload = Map.of(
                    "customerName", customerName != null ? customerName : "Customer",
                    "paymentId", paymentId != null ? paymentId : "pay_online",
                    "bookingReference", bookingRef != null ? bookingRef : "",
                    "amount", amount != null ? amount : "0.00",
                    "paymentMethod", method != null ? method : "Razorpay"
            );
            outboxService.queueEvent("PAYMENT_SUCCESS", email, customerName, "payment_success", payload, "notif_pay_succ_" + (paymentId != null ? paymentId : bookingRef));
        }
    }

    public void queuePaymentFailed(String email, String customerName, String bookingRef, String reason) {
        if (outboxService != null) {
            Map<String, Object> payload = Map.of(
                    "customerName", customerName != null ? customerName : "Customer",
                    "bookingReference", bookingRef != null ? bookingRef : "",
                    "failureReason", reason != null ? reason : "Transaction could not be completed"
            );
            outboxService.queueEvent("PAYMENT_FAILED", email, customerName, "payment_failed", payload, "notif_pay_fail_" + bookingRef + "_" + System.currentTimeMillis());
        }
    }

    public void queueBookingCancelled(String email, String customerName, String bookingRef, String refundAmount, String cancellationFee) {
        if (outboxService != null) {
            Map<String, Object> payload = Map.of(
                    "bookingReference", bookingRef != null ? bookingRef : "",
                    "refundAmount", refundAmount != null ? refundAmount : "0.00",
                    "cancellationFee", cancellationFee != null ? cancellationFee : "0.00"
            );
            outboxService.queueEvent("BOOKING_CANCELLED", email, customerName, "booking_cancelled", payload, "notif_book_canc_" + bookingRef);
        }
    }

    public void queueKycSubmitted(String email, String customerName) {
        if (outboxService != null) {
            Map<String, Object> payload = Map.of("customerName", customerName != null ? customerName : "Rider");
            outboxService.queueEvent("KYC_SUBMITTED", email, customerName, "kyc_submitted", payload, "notif_kyc_sub_" + email);
        }
    }

    public void queueKycApproved(String email, String customerName) {
        if (outboxService != null) {
            Map<String, Object> payload = Map.of("customerName", customerName != null ? customerName : "Rider");
            outboxService.queueEvent("KYC_APPROVED", email, customerName, "kyc_approved", payload, "notif_kyc_appr_" + email);
        }
    }

    public void queueKycRejected(String email, String customerName, String reason) {
        if (outboxService != null) {
            Map<String, Object> payload = Map.of(
                    "customerName", customerName != null ? customerName : "Rider",
                    "rejectionReason", reason != null ? reason : "Documentation rejected"
            );
            outboxService.queueEvent("KYC_REJECTED", email, customerName, "kyc_rejected", payload, "notif_kyc_rej_" + email + "_" + System.currentTimeMillis());
        }
    }

    public void queueKycReuploadRequired(String email, String customerName, String reason) {
        if (outboxService != null) {
            Map<String, Object> payload = Map.of(
                    "customerName", customerName != null ? customerName : "Rider",
                    "reuploadReason", reason != null ? reason : "Clearer driving licence images required"
            );
            outboxService.queueEvent("KYC_REUPLOAD_REQUIRED", email, customerName, "kyc_reupload", payload, "notif_kyc_reup_" + email + "_" + System.currentTimeMillis());
        }
    }

    public void queueSecurityDepositRefunded(String email, String customerName, String bookingRef, String amount, String txId) {
        if (outboxService != null) {
            Map<String, Object> payload = Map.of(
                    "bookingReference", bookingRef != null ? bookingRef : "",
                    "amount", amount != null ? amount : "0.00",
                    "transactionId", txId != null ? txId : "rfnd_" + System.currentTimeMillis()
            );
            outboxService.queueEvent("SECURITY_DEPOSIT_REFUNDED", email, customerName, "deposit_refunded", payload, "notif_dep_rfnd_" + bookingRef);
        }
    }

    public void queueRentalReminderPickup(String email, String customerName, String pickupHub, String unlockPin) {
        if (outboxService != null) {
            Map<String, Object> payload = Map.of(
                    "customerName", customerName != null ? customerName : "Rider",
                    "pickupHub", pickupHub != null ? pickupHub : "Designated Hub",
                    "unlockPin", unlockPin != null ? unlockPin : "----"
            );
            outboxService.queueEvent("RENTAL_REMINDER_PICKUP", email, customerName, "reminder_pickup", payload, "notif_rem_pick_" + email + "_" + unlockPin);
        }
    }

    public void queueRentalCompleted(String email, String customerName, String bookingRef) {
        if (outboxService != null) {
            Map<String, Object> payload = Map.of(
                    "customerName", customerName != null ? customerName : "Rider",
                    "bookingReference", bookingRef != null ? bookingRef : ""
            );
            outboxService.queueEvent("RENTAL_COMPLETED", email, customerName, "rental_completed", payload, "notif_rent_comp_" + bookingRef);
        }
    }

    public void queueRentalPassIssued(String email, String customerName, String maskedAadhaar,
                                      String phoneNumber, String dlStatus, String bookingRef,
                                      String vehicleName, String registrationNumber,
                                      String pickupHub, String dropHub,
                                      String totalAmount, String unlockPin) {
        if (outboxService != null) {
            Map<String, Object> payload = new HashMap<>();
            payload.put("customerName", customerName != null ? customerName : "Rider");
            payload.put("maskedAadhaar", maskedAadhaar != null ? maskedAadhaar : "•••• •••• XXXX");
            payload.put("phoneNumber", phoneNumber != null ? phoneNumber : "+91 ••••• •••••");
            payload.put("dlStatus", dlStatus != null ? dlStatus : "Verified DL on File");
            payload.put("bookingReference", bookingRef != null ? bookingRef : "");
            payload.put("vehicleName", vehicleName != null ? vehicleName : "TBH Vehicle");
            payload.put("registrationNumber", registrationNumber != null ? registrationNumber : "Fleet Unit");
            payload.put("pickupHub", pickupHub != null ? pickupHub : "Hub");
            payload.put("dropHub", dropHub != null ? dropHub : "Hub");
            payload.put("totalAmount", totalAmount != null ? totalAmount : "0.00");
            payload.put("unlockPin", unlockPin != null ? unlockPin : "----");
            outboxService.queueEvent("RENTAL_PASS_ISSUED", email, customerName, "rental_pass_issued", payload, "notif_pass_iss_" + bookingRef);
        }
    }

    public void queueMobileVerificationCompleted(String email, String customerName) {
        if (outboxService != null) {
            Map<String, Object> payload = Map.of("customerName", customerName != null ? customerName : "Rider");
            outboxService.queueEvent("MOBILE_VERIFICATION_COMPLETED", email, customerName, "mobile_verification", payload, "notif_mob_ver_" + email + "_" + System.currentTimeMillis());
        }
    }

    public void queueProfileUpdated(String email, String customerName) {
        if (outboxService != null) {
            Map<String, Object> payload = Map.of("customerName", customerName != null ? customerName : "Rider");
            outboxService.queueEvent("PROFILE_UPDATED", email, customerName, "profile_updated", payload, "notif_prof_upd_" + email + "_" + System.currentTimeMillis());
        }
    }

    public void queueSupportTicketCreated(String email, String customerName, String ticketNumber, String subject) {
        if (outboxService != null) {
            Map<String, Object> payload = Map.of(
                    "customerName", customerName != null ? customerName : "Rider",
                    "ticketNumber", ticketNumber != null ? ticketNumber : "",
                    "subject", subject != null ? subject : ""
            );
            outboxService.queueEvent("SUPPORT_TICKET_CREATED", email, customerName, "support_ticket_created", payload, "notif_sup_cr_" + ticketNumber);
        }
    }

    public void queueSupportTicketResolved(String email, String customerName, String ticketNumber) {
        if (outboxService != null) {
            Map<String, Object> payload = Map.of(
                    "customerName", customerName != null ? customerName : "Rider",
                    "ticketNumber", ticketNumber != null ? ticketNumber : ""
            );
            outboxService.queueEvent("SUPPORT_TICKET_RESOLVED", email, customerName, "support_ticket_resolved", payload, "notif_sup_res_" + ticketNumber);
        }
    }
}
