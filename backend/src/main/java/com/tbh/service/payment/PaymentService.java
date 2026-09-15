package com.tbh.service.payment;

import com.tbh.dto.PaymentOrderResponse;
import com.tbh.dto.PaymentVerificationRequest;
import com.tbh.dto.RefundResponse;
import com.tbh.entity.Booking;

import java.math.BigDecimal;

public interface PaymentService {
    PaymentOrderResponse createOrder(Booking booking);
    boolean verifyPayment(PaymentVerificationRequest request);
    RefundResponse processRefund(Booking booking, double refundAmount);

    default RefundResponse processRefund(Booking booking, BigDecimal refundAmount) {
        return processRefund(booking, refundAmount != null ? refundAmount.doubleValue() : 0.0);
    }
}
