package com.tbh.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String bookingReference;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "fleet_unit_id")
    private FleetUnit fleetUnit;

    private String pickupCity;
    private String dropCity;
    private String pickupHub;
    private String dropHub;

    private LocalDateTime pickupDateTime;
    private LocalDateTime dropDateTime;

    private String rentalMode; // HOURLY, DAILY, MONTHLY
    private int duration; // number of hours or days

    @Column(name = "base_amount", precision = 12, scale = 2, nullable = false)
    private BigDecimal baseAmount = BigDecimal.ZERO;

    @Column(name = "insurance_amount", precision = 12, scale = 2, nullable = false)
    private BigDecimal insuranceAmount = BigDecimal.ZERO;

    @Column(name = "tax_amount", precision = 12, scale = 2, nullable = false)
    private BigDecimal taxAmount = BigDecimal.ZERO;

    @Column(name = "deposit_amount", precision = 12, scale = 2, nullable = false)
    private BigDecimal depositAmount = BigDecimal.ZERO;

    @Column(name = "total_amount", precision = 12, scale = 2, nullable = false)
    private BigDecimal totalAmount = BigDecimal.ZERO;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 32)
    private BookingStatus status = BookingStatus.PENDING;

    @Enumerated(EnumType.STRING)
    @Column(name = "payment_status", length = 32)
    private PaymentStatus paymentStatus = PaymentStatus.INITIATED;

    private String paymentMethod;
    private String unlockPin;

    // Booking quote & lock expiry (15-minute TTL)
    private LocalDateTime expiresAt;

    // Refund and cancellation audit
    @Column(name = "refund_amount", precision = 12, scale = 2)
    private BigDecimal refundAmount;

    @Column(name = "cancellation_fee", precision = 12, scale = 2)
    private BigDecimal cancellationFee;
    private LocalDateTime cancelledAt;
    private String refundTransactionId;

    // Razorpay Integration
    private String razorpayOrderId;
    private String razorpayPaymentId;
    private String razorpaySignature;

    @Transient
    private String razorpayKeyId;

    private LocalDateTime createdAt = LocalDateTime.now();

    public Booking() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getBookingReference() { return bookingReference; }
    public void setBookingReference(String bookingReference) { this.bookingReference = bookingReference; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public Vehicle getVehicle() { return vehicle; }
    public void setVehicle(Vehicle vehicle) { this.vehicle = vehicle; }

    public FleetUnit getFleetUnit() { return fleetUnit; }
    public void setFleetUnit(FleetUnit fleetUnit) { this.fleetUnit = fleetUnit; }

    public String getPickupCity() { return pickupCity; }
    public void setPickupCity(String pickupCity) { this.pickupCity = pickupCity; }

    public String getDropCity() { return dropCity; }
    public void setDropCity(String dropCity) { this.dropCity = dropCity; }

    public String getPickupHub() { return pickupHub; }
    public void setPickupHub(String pickupHub) { this.pickupHub = pickupHub; }

    public String getDropHub() { return dropHub; }
    public void setDropHub(String dropHub) { this.dropHub = dropHub; }

    public LocalDateTime getPickupDateTime() { return pickupDateTime; }
    public void setPickupDateTime(LocalDateTime pickupDateTime) { this.pickupDateTime = pickupDateTime; }

    public LocalDateTime getDropDateTime() { return dropDateTime; }
    public void setDropDateTime(LocalDateTime dropDateTime) { this.dropDateTime = dropDateTime; }

    public String getRentalMode() { return rentalMode; }
    public void setRentalMode(String rentalMode) { this.rentalMode = rentalMode; }

    public int getDuration() { return duration; }
    public void setDuration(int duration) { this.duration = duration; }

    public BigDecimal getBaseAmount() { return baseAmount; }
    public void setBaseAmount(BigDecimal baseAmount) { this.baseAmount = baseAmount != null ? baseAmount.setScale(2, RoundingMode.HALF_UP) : BigDecimal.ZERO; }
    public void setBaseAmount(double baseAmount) { setBaseAmount(BigDecimal.valueOf(baseAmount)); }

    public BigDecimal getInsuranceAmount() { return insuranceAmount; }
    public void setInsuranceAmount(BigDecimal insuranceAmount) { this.insuranceAmount = insuranceAmount != null ? insuranceAmount.setScale(2, RoundingMode.HALF_UP) : BigDecimal.ZERO; }
    public void setInsuranceAmount(double insuranceAmount) { setInsuranceAmount(BigDecimal.valueOf(insuranceAmount)); }

    public BigDecimal getTaxAmount() { return taxAmount; }
    public void setTaxAmount(BigDecimal taxAmount) { this.taxAmount = taxAmount != null ? taxAmount.setScale(2, RoundingMode.HALF_UP) : BigDecimal.ZERO; }
    public void setTaxAmount(double taxAmount) { setTaxAmount(BigDecimal.valueOf(taxAmount)); }

    public BigDecimal getDepositAmount() { return depositAmount; }
    public void setDepositAmount(BigDecimal depositAmount) { this.depositAmount = depositAmount != null ? depositAmount.setScale(2, RoundingMode.HALF_UP) : BigDecimal.ZERO; }
    public void setDepositAmount(double depositAmount) { setDepositAmount(BigDecimal.valueOf(depositAmount)); }

    public BigDecimal getTotalAmount() { return totalAmount; }
    public void setTotalAmount(BigDecimal totalAmount) { this.totalAmount = totalAmount != null ? totalAmount.setScale(2, RoundingMode.HALF_UP) : BigDecimal.ZERO; }
    public void setTotalAmount(double totalAmount) { setTotalAmount(BigDecimal.valueOf(totalAmount)); }

    public BookingStatus getStatus() { return status; }
    public void setStatus(BookingStatus status) { this.status = status; }

    public PaymentStatus getPaymentStatus() { return paymentStatus; }
    public void setPaymentStatus(PaymentStatus paymentStatus) { this.paymentStatus = paymentStatus; }

    public String getPaymentMethod() { return paymentMethod; }
    public void setPaymentMethod(String paymentMethod) { this.paymentMethod = paymentMethod; }

    public String getUnlockPin() { return unlockPin; }
    public void setUnlockPin(String unlockPin) { this.unlockPin = unlockPin; }

    public BigDecimal getRefundAmount() { return refundAmount; }
    public void setRefundAmount(BigDecimal refundAmount) { this.refundAmount = refundAmount != null ? refundAmount.setScale(2, RoundingMode.HALF_UP) : null; }
    public void setRefundAmount(Double refundAmount) { setRefundAmount(refundAmount != null ? BigDecimal.valueOf(refundAmount) : null); }

    public BigDecimal getCancellationFee() { return cancellationFee; }
    public void setCancellationFee(BigDecimal cancellationFee) { this.cancellationFee = cancellationFee != null ? cancellationFee.setScale(2, RoundingMode.HALF_UP) : null; }
    public void setCancellationFee(Double cancellationFee) { setCancellationFee(cancellationFee != null ? BigDecimal.valueOf(cancellationFee) : null); }

    public LocalDateTime getCancelledAt() { return cancelledAt; }
    public void setCancelledAt(LocalDateTime cancelledAt) { this.cancelledAt = cancelledAt; }

    public String getRefundTransactionId() { return refundTransactionId; }
    public void setRefundTransactionId(String refundTransactionId) { this.refundTransactionId = refundTransactionId; }

    public String getRazorpayOrderId() { return razorpayOrderId; }
    public void setRazorpayOrderId(String razorpayOrderId) { this.razorpayOrderId = razorpayOrderId; }

    public String getRazorpayPaymentId() { return razorpayPaymentId; }
    public void setRazorpayPaymentId(String razorpayPaymentId) { this.razorpayPaymentId = razorpayPaymentId; }

    public String getRazorpaySignature() { return razorpaySignature; }
    public void setRazorpaySignature(String razorpaySignature) { this.razorpaySignature = razorpaySignature; }

    public LocalDateTime getExpiresAt() { return expiresAt; }
    public void setExpiresAt(LocalDateTime expiresAt) { this.expiresAt = expiresAt; }

    public String getRazorpayKeyId() { return razorpayKeyId; }
    public void setRazorpayKeyId(String razorpayKeyId) { this.razorpayKeyId = razorpayKeyId; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
