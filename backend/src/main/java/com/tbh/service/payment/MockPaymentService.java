package com.tbh.service.payment;

import com.tbh.dto.PaymentOrderResponse;
import com.tbh.dto.PaymentVerificationRequest;
import com.tbh.dto.RefundResponse;
import com.tbh.entity.Booking;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.UUID;

@Service
@ConditionalOnProperty(name = "tbh.payment.provider", havingValue = "mock", matchIfMissing = true)
public class MockPaymentService implements PaymentService {

    private static final Logger log = LoggerFactory.getLogger(MockPaymentService.class);

    @Override
    public PaymentOrderResponse createOrder(Booking booking) {
        String orderId = "order_tbh_" + UUID.randomUUID().toString().replace("-", "").substring(0, 14);
        BigDecimal total = booking.getTotalAmount() != null ? booking.getTotalAmount() : BigDecimal.ZERO;
        long amountPaise = total.multiply(BigDecimal.valueOf(100)).setScale(0, RoundingMode.HALF_UP).longValue();
        log.info("[TBH PAYMENT DEV] Created Mock Razorpay Order {} for booking {} of amount ₹{}",
                orderId, booking.getBookingReference(), total);

        return new PaymentOrderResponse(orderId, amountPaise, "INR", "rzp_test_tbh_mock_key", booking.getBookingReference());
    }

    @Override
    public boolean verifyPayment(PaymentVerificationRequest request) {
        log.info("[TBH PAYMENT DEV] Verified mock signature for payment {} of order {}",
                request.getRazorpayPaymentId(), request.getRazorpayOrderId());
        return request.getRazorpayPaymentId() != null && !request.getRazorpayPaymentId().isBlank();
    }

    @Override
    public RefundResponse processRefund(Booking booking, BigDecimal refundAmount) {
        if (booking == null || refundAmount == null || refundAmount.compareTo(BigDecimal.ZERO) <= 0) {
            log.warn("[TBH PAYMENT DEV] Mock refund skipped: invalid booking or zero/negative refund amount (₹{})", refundAmount);
            return RefundResponse.failed("Invalid refund amount or booking");
        }
        String refundId = "rfnd_test_mock_" + UUID.randomUUID().toString().replace("-", "").substring(0, 14);
        log.info("[TBH PAYMENT DEV] Processed Mock Test Refund {} for booking {} of amount ₹{}",
                refundId, booking.getBookingReference(), refundAmount);
        return RefundResponse.success(refundId, refundAmount.doubleValue(), "processed");
    }

    @Override
    public RefundResponse processRefund(Booking booking, double refundAmount) {
        return processRefund(booking, BigDecimal.valueOf(refundAmount));
    }
}
