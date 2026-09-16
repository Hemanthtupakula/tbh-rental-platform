package com.tbh.service.email;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Component;

@Component
public class EmailTemplateBuilder {

    public String buildSubject(String eventType, JsonNode payload) {
        return switch (eventType) {
            case "BOOKING_CONFIRMED" -> "Ride Confirmed: " + payload.path("vehicleName").asText("Your Vehicle") + " (Ref: " + payload.path("bookingReference").asText() + ")";
            case "PAYMENT_SUCCESS" -> "Payment Verified: ₹" + payload.path("amount").asText("0.00") + " for TBH Rental";
            case "RENTAL_PASS_ISSUED" -> "Digital Rental Pass Issued: " + payload.path("bookingReference").asText() + " (" + payload.path("vehicleName").asText("Vehicle") + ")";
            case "PAYMENT_FAILED" -> "Action Required: Payment Failed for Booking " + payload.path("bookingReference").asText();
            case "BOOKING_CANCELLED" -> "Booking Cancelled: " + payload.path("bookingReference").asText();
            case "KYC_SUBMITTED" -> "KYC Verification Documents Under Review";
            case "KYC_APPROVED" -> "KYC Verified! Your TBH Access is Activated";
            case "KYC_REJECTED" -> "Action Required: KYC Verification Update Needed";
            case "SECURITY_DEPOSIT_REFUNDED", "REFUND_PROCESSED" -> "Security Deposit Refund Initiated: ₹" + payload.path("amount").asText("0.00");
            case "RENTAL_REMINDER_PICKUP" -> "Reminder: Your TBH Rental Starts Soon";
            case "RENTAL_COMPLETED" -> "Trip Completed! Thank you for riding with TBH";
            case "SUPPORT_TICKET_CREATED" -> "Support Ticket Received: #" + payload.path("ticketNumber").asText() + " - " + payload.path("subject").asText("Inquiry");
            case "SUPPORT_REPLY" -> "Support Update: Ticket #" + payload.path("ticketNumber").asText() + " - " + payload.path("subject").asText("Inquiry");
            case "SUPPORT_TICKET_RESOLVED" -> "Support Ticket Resolved: #" + payload.path("ticketNumber").asText();
            case "MOBILE_VERIFICATION_COMPLETED" -> "Mobile Verification Completed — TBH Rentals";
            case "PROFILE_UPDATED" -> "Security Notice: TBH Profile Updated";
            default -> "TBH Rentals Notification: " + eventType;
        };
    }

    public String buildHtml(String eventType, JsonNode payload) {
        String baseStyles = """
            body { margin: 0; padding: 0; background-color: #0d0e12; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f3f4f6; }
            .container { max-width: 600px; margin: 20px auto; background-color: #14161d; border-radius: 12px; border: 1px solid #232733; overflow: hidden; }
            .header { background: linear-gradient(135deg, #0d0e12 0%, #1a1d26 100%); padding: 32px 24px; text-align: center; border-bottom: 2px solid #00E5C7; }
            .logo { color: #00E5C7; font-size: 26px; font-weight: 800; letter-spacing: 2px; text-decoration: none; }
            .tagline { color: #9ca3af; font-size: 13px; margin-top: 6px; letter-spacing: 1px; text-transform: uppercase; }
            .content { padding: 32px 24px; }
            .title { font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 0; margin-bottom: 16px; }
            .card { background-color: #1a1d27; border: 1px solid #2a2f3f; border-radius: 8px; padding: 18px; margin: 20px 0; }
            .row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #232733; font-size: 14px; }
            .row:last-child { border-bottom: none; }
            .label { color: #9ca3af; }
            .value { font-weight: 600; color: #00E5C7; }
            .pin-badge { font-size: 24px; font-weight: 800; color: #D4AF37; letter-spacing: 4px; text-align: center; padding: 12px; background: #232733; border-radius: 6px; margin: 16px 0; border: 1px solid rgba(212,175,55,0.3); }
            .footer { padding: 24px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #232733; }
        """;

        String bodyContent = switch (eventType) {
            case "BOOKING_CONFIRMED" -> """
                <h2 class="title">Your Ride is Confirmed!</h2>
                <p>Hello %s, your luxury rental reservation is locked in.</p>
                <div class="card">
                    <div class="row"><span class="label">Booking Ref</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Vehicle</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Pickup Hub</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Drop Hub</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Total Paid</span><span class="value">₹%s</span></div>
                </div>
                <p style="margin-top: 20px;">Use this secure 4-digit unlock PIN at the hub to claim your keys:</p>
                <div class="pin-badge">%s</div>
            """.formatted(
                payload.path("customerName").asText("Rider"),
                payload.path("bookingReference").asText("TBH-REF"),
                payload.path("vehicleName").asText("Vehicle"),
                payload.path("pickupHub").asText("Pickup Location"),
                payload.path("dropHub").asText("Drop Location"),
                payload.path("totalAmount").asText("0.00"),
                payload.path("unlockPin").asText("----")
            );

            case "PAYMENT_SUCCESS" -> """
                <h2 class="title">Payment Receipt</h2>
                <p>Hello %s, we have received your payment.</p>
                <div class="card">
                    <div class="row"><span class="label">Payment ID</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Booking Ref</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Amount</span><span class="value">₹%s</span></div>
                    <div class="row"><span class="label">Method</span><span class="value">%s</span></div>
                </div>
            """.formatted(
                payload.path("customerName").asText("Customer"),
                payload.path("paymentId").asText("pay_xxx"),
                payload.path("bookingReference").asText("TBH-REF"),
                payload.path("amount").asText("0.00"),
                payload.path("paymentMethod").asText("Online")
            );

            case "RENTAL_PASS_ISSUED" -> """
                <h2 class="title" style="color: #00E5C7;">Digital Rental Pass Issued</h2>
                <p>Hello %s, your official Digital Rental Pass is generated and ready for pickup.</p>
                <div class="card">
                    <div class="row"><span class="label">Rider Name</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Masked Aadhaar</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Verified Mobile</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Driving Licence</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Booking Reference</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Vehicle</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Registration</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Pickup Hub</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Drop Hub</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Total Paid</span><span class="value">₹%s</span></div>
                </div>
                <p style="margin-top: 20px; text-align: center;">Keyless Unlock PIN:</p>
                <div class="pin-badge">%s</div>
            """.formatted(
                payload.path("customerName").asText("Rider"),
                payload.path("customerName").asText("Rider"),
                payload.path("maskedAadhaar").asText("•••• •••• XXXX"),
                payload.path("phoneNumber").asText("+91 ••••• •••••"),
                payload.path("dlStatus").asText("Verified DL on File"),
                payload.path("bookingReference").asText("TBH-REF"),
                payload.path("vehicleName").asText("TBH Vehicle"),
                payload.path("registrationNumber").asText("Fleet Unit Assigned"),
                payload.path("pickupHub").asText("Designated Hub"),
                payload.path("dropHub").asText("Designated Hub"),
                payload.path("totalAmount").asText("0.00"),
                payload.path("unlockPin").asText("----")
            );

            case "PAYMENT_FAILED" -> """
                <h2 class="title" style="color: #ef4444;">Payment Incomplete</h2>
                <p>Hello %s, your transaction for booking %s could not be processed.</p>
                <div class="card">
                    <div class="row"><span class="label">Reason</span><span class="value" style="color: #ef4444;">%s</span></div>
                </div>
                <p>Please re-attempt the payment via your active booking dashboard before the reservation window closes.</p>
            """.formatted(
                payload.path("customerName").asText("Customer"),
                payload.path("bookingReference").asText("TBH-REF"),
                payload.path("failureReason").asText("Bank verification failed")
            );

            case "BOOKING_CANCELLED" -> """
                <h2 class="title">Booking Cancelled</h2>
                <p>Your booking %s has been cancelled upon request.</p>
                <div class="card">
                    <div class="row"><span class="label">Refund Amount</span><span class="value">₹%s</span></div>
                    <div class="row"><span class="label">Cancellation Fee</span><span class="value">₹%s</span></div>
                </div>
            """.formatted(
                payload.path("bookingReference").asText("TBH-REF"),
                payload.path("refundAmount").asText("0.00"),
                payload.path("cancellationFee").asText("0.00")
            );

            case "KYC_SUBMITTED" -> """
                <h2 class="title">KYC Documents Received</h2>
                <p>We have received your verification documents. Our automated verification engine and security team are validating your Driving License and identity.</p>
                <p>Estimated verification time: Under 15 minutes.</p>
            """;

            case "KYC_APPROVED" -> """
                <h2 class="title" style="color: #00E5C7;">KYC Verified!</h2>
                <p>Congratulations, your profile has been verified! You are now cleared to book all vehicles in the TBH luxury fleet.</p>
            """;

            case "KYC_REJECTED" -> """
                <h2 class="title" style="color: #ef4444;">KYC Update Required</h2>
                <p>We could not verify your uploaded documentation.</p>
                <div class="card">
                    <div class="row"><span class="label">Feedback</span><span class="value" style="color: #ef4444;">%s</span></div>
                </div>
                <p>Please login and submit a clear image of your Driving License.</p>
            """.formatted(payload.path("rejectionReason").asText("Document unreadable or invalid format"));

            case "SECURITY_DEPOSIT_REFUNDED", "REFUND_PROCESSED" -> """
                <h2 class="title">Refund Processed</h2>
                <p>Your refund transaction has been initiated by our billing department.</p>
                <div class="card">
                    <div class="row"><span class="label">Refund Amount</span><span class="value">₹%s</span></div>
                    <div class="row"><span class="label">Transaction Ref</span><span class="value">%s</span></div>
                </div>
                <p>Refunds typically reflect in your bank account within 3–5 business days.</p>
            """.formatted(
                payload.path("amount").asText("0.00"),
                payload.path("transactionId").asText("rfnd_xxx")
            );

            case "RENTAL_REMINDER_PICKUP" -> """
                <h2 class="title">Pickup Reminder: Your Ride Starts Soon</h2>
                <p>Your vehicle is serviced, sanitized, and awaiting you at <strong>%s</strong>.</p>
                <div class="pin-badge">%s</div>
                <p>Show this PIN at arrival to collect your keys.</p>
            """.formatted(
                payload.path("pickupHub").asText("Pickup Location"),
                payload.path("unlockPin").asText("----")
            );

            case "RENTAL_COMPLETED" -> """
                <h2 class="title">Trip Completed!</h2>
                <p>Thank you for riding with TBH Rentals. We hope you enjoyed your ride beyond limits!</p>
                <p>Leave a review on our app to share your experience with fellow riders.</p>
            """;

            case "SUPPORT_TICKET_CREATED" -> """
                <h2 class="title">Support Ticket Received</h2>
                <p>Hello %s, we have received your support request.</p>
                <div class="card">
                    <div class="row"><span class="label">Ticket #</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Subject</span><span class="value">%s</span></div>
                </div>
                <p>Our concierge support team will inspect your issue and respond shortly.</p>
            """.formatted(
                payload.path("customerName").asText("Rider"),
                payload.path("ticketNumber").asText(""),
                payload.path("subject").asText("")
            );

            case "SUPPORT_REPLY" -> """
                <h2 class="title">Support Team Update</h2>
                <p>Hello %s, our customer support team has responded to your ticket.</p>
                <div class="card">
                    <div class="row"><span class="label">Ticket #</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Subject</span><span class="value">%s</span></div>
                    <div class="row"><span class="label">Status</span><span class="value">%s</span></div>
                </div>
                <div style="background: #232733; padding: 16px; border-radius: 6px; margin: 16px 0; border-left: 3px solid #00E5C7;">
                    <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #f3f4f6;">%s</p>
                </div>
                <p>You can view and reply to this thread directly in the TBH application.</p>
            """.formatted(
                payload.path("customerName").asText("Rider"),
                payload.path("ticketNumber").asText(""),
                payload.path("subject").asText(""),
                payload.path("status").asText("IN_PROGRESS"),
                payload.path("message").asText("")
            );

            case "SUPPORT_TICKET_RESOLVED" -> """
                <h2 class="title" style="color: #00E5C7;">Support Ticket Resolved</h2>
                <p>Hello %s, your support ticket #%s has been marked as resolved.</p>
                <p>If you need further assistance, you can reopen the ticket or create a new request at any time.</p>
            """.formatted(
                payload.path("customerName").asText("Rider"),
                payload.path("ticketNumber").asText("")
            );

            case "MOBILE_VERIFICATION_COMPLETED" -> """
                <h2 class="title" style="color: #00E5C7;">Mobile Verification Verified</h2>
                <p>Hello %s, your mobile number has been verified via Wakit WhatsApp OTP.</p>
                <p>Your verified phone number is now linked to your TBH account profile.</p>
            """.formatted(
                payload.path("customerName").asText("Rider")
            );

            case "PROFILE_UPDATED" -> """
                <h2 class="title">Profile Updated</h2>
                <p>Hello %s, your profile information was updated successfully.</p>
                <p>If you did not authorize this change, please contact our security team immediately.</p>
            """.formatted(
                payload.path("customerName").asText("Rider")
            );

            default -> "<p>" + eventType + "</p>";
        };

        return """
            <!DOCTYPE html>
            <html>
            <head><style>%s</style></head>
            <body>
                <div class="container">
                    <div class="header">
                        <div class="logo">TBH</div>
                        <div class="tagline">Ride Beyond Limits</div>
                    </div>
                    <div class="content">
                        %s
                    </div>
                    <div class="footer">
                        &copy; 2026 TBH Luxury Rentals India Pvt. Ltd. All rights reserved.<br>
                        This is a transactional message relating to your reservation.
                    </div>
                </div>
            </body>
            </html>
        """.formatted(baseStyles, bodyContent);
    }
}