package com.tbh.repository;

import com.tbh.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Optional;
import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    @Query("SELECT p FROM Payment p LEFT JOIN FETCH p.booking LEFT JOIN FETCH p.user WHERE p.razorpayOrderId = :razorpayOrderId")
    Optional<Payment> findByRazorpayOrderId(@Param("razorpayOrderId") String razorpayOrderId);

    @Query("SELECT p FROM Payment p LEFT JOIN FETCH p.booking LEFT JOIN FETCH p.user WHERE p.razorpayPaymentId = :razorpayPaymentId")
    Optional<Payment> findByRazorpayPaymentId(@Param("razorpayPaymentId") String razorpayPaymentId);

    List<Payment> findByBookingId(Long bookingId);
    List<Payment> findByUserId(Long userId);
}
