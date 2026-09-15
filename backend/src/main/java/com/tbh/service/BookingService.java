package com.tbh.service;

import com.tbh.dto.BookingRequest;
import com.tbh.dto.PaymentOrderResponse;
import com.tbh.dto.PricingQuoteRequest;
import com.tbh.dto.PricingQuoteResponse;
import com.tbh.dto.RefundResponse;
import com.tbh.entity.*;
import com.tbh.exception.VehicleUnavailableException;
import com.tbh.repository.BookingRepository;
import com.tbh.repository.FleetUnitRepository;
import com.tbh.repository.PaymentRepository;
import com.tbh.repository.UserRepository;
import com.tbh.repository.VehicleRepository;
import com.tbh.service.payment.PaymentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.PageRequest;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionTemplate;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.security.SecureRandom;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class BookingService {

    private static final Logger log = LoggerFactory.getLogger(BookingService.class);

    private final BookingRepository bookingRepository;
    private final UserRepository userRepository;
    private final VehicleRepository vehicleRepository;
    private final FleetUnitRepository fleetUnitRepository;
    private final PaymentRepository paymentRepository;
    private final PricingService pricingService;
    private final PaymentService paymentService;
    private final KycService kycService;
    private final com.tbh.repository.CouponRepository couponRepository;
    private final com.tbh.repository.CouponRedemptionRepository couponRedemptionRepository;

    private final SecureRandom secureRandom = new SecureRandom();

    /*
     * Database row locking is the authoritative concurrency mechanism.
     * This JVM lock is retained as a small optimization for concurrent
     * requests handled by the same application instance.
     */
    private final Object bookingLock = new Object();
    private final TransactionTemplate transactionTemplate;

    public BookingService(
            BookingRepository bookingRepository,
            UserRepository userRepository,
            VehicleRepository vehicleRepository,
            FleetUnitRepository fleetUnitRepository,
            PaymentRepository paymentRepository,
            PricingService pricingService,
            PaymentService paymentService,
            KycService kycService,
            PlatformTransactionManager transactionManager) {
        this(bookingRepository, userRepository, vehicleRepository, fleetUnitRepository,
             paymentRepository, pricingService, paymentService, kycService,
             transactionManager, null, null);
    }

    @org.springframework.beans.factory.annotation.Autowired
    public BookingService(
            BookingRepository bookingRepository,
            UserRepository userRepository,
            VehicleRepository vehicleRepository,
            FleetUnitRepository fleetUnitRepository,
            PaymentRepository paymentRepository,
            PricingService pricingService,
            PaymentService paymentService,
            KycService kycService,
            PlatformTransactionManager transactionManager,
            @org.springframework.beans.factory.annotation.Autowired(required = false) com.tbh.repository.CouponRepository couponRepository,
            @org.springframework.beans.factory.annotation.Autowired(required = false) com.tbh.repository.CouponRedemptionRepository couponRedemptionRepository) {

        this.bookingRepository = bookingRepository;
        this.userRepository = userRepository;
        this.vehicleRepository = vehicleRepository;
        this.fleetUnitRepository = fleetUnitRepository;
        this.paymentRepository = paymentRepository;
        this.pricingService = pricingService;
        this.paymentService = paymentService;
        this.kycService = kycService;
        this.couponRepository = couponRepository;
        this.couponRedemptionRepository = couponRedemptionRepository;
        this.transactionTemplate = new TransactionTemplate(transactionManager);
        this.transactionTemplate.setIsolationLevel(TransactionDefinition.ISOLATION_SERIALIZABLE);
    }

    public Booking createBooking(BookingRequest req) {
        synchronized (bookingLock) {
            return transactionTemplate.execute(status -> doCreateBooking(req));
        }
    }

    private Booking doCreateBooking(BookingRequest req) {

            if (req.getUserId() == null || req.getVehicleId() == null) {
                throw new IllegalArgumentException(
                        "User ID and Vehicle ID are required."
                );
            }

            User user = userRepository.findById(req.getUserId())
                    .orElseThrow(() ->
                            new IllegalArgumentException(
                                    "User not found with ID: " + req.getUserId()
                            )
                    );

            // Mobile Verification Gate
            if (!user.isMobileVerified()) {
                throw new IllegalStateException(
                        "Mobile verification is required before completing this booking. Please verify your mobile number."
                );
            }

            // KYC Verification Gate
            if (!kycService.isUserVerified(user.getId())) {
                throw new IllegalStateException(
                        "KYC verification is required before booking this vehicle. Please verify your driving licence."
                );
            }

            Vehicle vehicle = vehicleRepository.findByIdForUpdate(req.getVehicleId())
                    .orElseThrow(() ->
                            new IllegalArgumentException(
                                    "Vehicle not found with ID: " + req.getVehicleId()
                            )
                    );

            if (!kycService.isUserEligibleForVehicleType(user.getId(), vehicle.getVehicleType())) {
                throw new IllegalStateException(
                        "VEHICLE CLASS MISMATCH: Your verified driving licence does not authorize driving " +
                        vehicle.getVehicleType().name() + " vehicles."
                );
            }

            LocalDateTime pickup =
                    req.getPickupDateTime() != null
                            ? req.getPickupDateTime()
                            : LocalDateTime.now().plusHours(1);

            int duration =
                    req.getDuration() > 0
                            ? req.getDuration()
                            : 4;

            String mode =
                    req.getRentalMode() != null
                            ? req.getRentalMode().toUpperCase()
                            : "HOURLY";

            LocalDateTime drop;

            if ("DAILY".equals(mode)) {
                drop = pickup.plusDays(duration);
            } else if ("MONTHLY".equals(mode)) {
                drop = pickup.plusMonths(duration);
            } else {
                drop = pickup.plusHours(duration);
            }

            // Enforce 10-day maximum booking window.
            LocalDateTime maxAllowedDrop =
                    LocalDateTime.now()
                            .plusDays(10)
                            .plusHours(2);

            if (pickup.isAfter(maxAllowedDrop)) {
                throw new IllegalArgumentException(
                        "Reservations are strictly permitted up to 10 days " +
                        "from today. Selected pickup exceeds the 10-day booking window."
                );
            }

            if (drop.isAfter(maxAllowedDrop)) {
                throw new IllegalArgumentException(
                        "Rental period cannot exceed 10 days from present date " +
                        "under the 10-day fleet allocation window."
                );
            }

            /*
             * ============================================================
             * CONCURRENCY-SAFE FLEET UNIT ALLOCATION
             * ============================================================
             *
             * FleetUnit.status represents the physical/current state
             * of the vehicle.
             *
             * A future PENDING booking does NOT change:
             *
             * AVAILABLE -> RENTED
             *
             * Instead, the Booking record reserves the physical FleetUnit
             * for pickupDateTime -> dropDateTime.
             *
             * Candidate FleetUnits are selected with a pessimistic DB lock.
             * Each locked unit is then checked for overlapping active
             * bookings.
             */

            String city = "Bengaluru";
            if (req.getPickupCity() != null && !req.getPickupCity().isBlank()) {
                String trimmed = req.getPickupCity().trim();
                if ("Bangalore".equalsIgnoreCase(trimmed) || "Bengaluru".equalsIgnoreCase(trimmed)) {
                    city = "Bengaluru";
                } else {
                    city = trimmed;
                }
            }

            List<FleetUnit> candidateUnits =
                    fleetUnitRepository.findAvailableUnitsForUpdate(
                            vehicle.getId(),
                            FleetUnitStatus.AVAILABLE,
                            city,
                            PageRequest.of(0, 50)
                    );

            if (candidateUnits.isEmpty()) {

                long totalUnits =
                        fleetUnitRepository.countByVehicleId(vehicle.getId());

                if (totalUnits == 0) {
                    throw new VehicleUnavailableException(
                            vehicle.getName() +
                            " is currently a showcase model with 0 active " +
                            "rental fleet units. Booking is unavailable."
                    );
                }

                throw new VehicleUnavailableException(
                        "No physically available units of " +
                        vehicle.getName() +
                        " are available in " +
                        city +
                        ". Please select another time or vehicle."
                );
            }

            /*
             * These statuses represent reservations/rentals that can block
             * another booking.
             *
             * CANCELLED and COMPLETED do not block availability.
             */
            List<BookingStatus> activeStatuses = List.of(
                    BookingStatus.PENDING,
                    BookingStatus.CONFIRMED,
                    BookingStatus.ONGOING
            );

            LocalDateTime now = LocalDateTime.now();

            FleetUnit assignedUnit = null;

            for (FleetUnit candidate : candidateUnits) {

                long overlappingBookings =
                        bookingRepository.countOverlappingBookingsForFleetUnit(
                                candidate.getId(),
                                pickup,
                                drop,
                                activeStatuses,
                                now
                        );

                if (overlappingBookings == 0) {
                    assignedUnit = candidate;
                    break;
                }
            }

            if (assignedUnit == null) {
                throw new VehicleUnavailableException(
                        "All units of " +
                        vehicle.getName() +
                        " in " +
                        city +
                        " are already reserved for the selected time."
                );
            }

            /*
             * IMPORTANT:
             *
             * DO NOT change assignedUnit to RENTED here.
             *
             * The booking reserves this physical unit for the requested
             * time range. The physical status remains AVAILABLE until
             * the rental actually starts.
             */

            // ============================================================
            // SERVER-SIDE AUTHORITATIVE PRICING
            // ============================================================

            String dropCity =
                    req.getDropCity() != null
                            ? req.getDropCity()
                            : city;

            PricingQuoteRequest quoteReq = new PricingQuoteRequest();

            quoteReq.setVehicleId(vehicle.getId());
            quoteReq.setRentalMode(mode);
            quoteReq.setDuration(duration);
            quoteReq.setInsurancePlan(
                    req.isIncludeZeroDep()
                            ? "ZERO_DEPRECIATION"
                            : "PREMIUM"
            );
            quoteReq.setPickupDateTime(pickup);
            quoteReq.setDropDateTime(drop);
            quoteReq.setPickupCity(city);
            quoteReq.setDropCity(dropCity);
            quoteReq.setCouponCode(req.getCouponCode());

            PricingQuoteResponse quote =
                    pricingService.calculateQuote(quoteReq);

            // ============================================================
            // CREATE BOOKING
            // ============================================================

            Booking booking = new Booking();

            booking.setUser(user);
            booking.setVehicle(vehicle);
            booking.setFleetUnit(assignedUnit);

            booking.setPickupCity(city);
            booking.setDropCity(dropCity);

            booking.setPickupHub(
                    req.getPickupHub() != null
                            ? req.getPickupHub()
                            : (
                                assignedUnit.getHubName() != null
                                        ? assignedUnit.getHubName()
                                        : "Main Hub"
                            )
            );

            booking.setDropHub(
                    req.getDropHub() != null
                            ? req.getDropHub()
                            : booking.getPickupHub()
            );

            booking.setPickupDateTime(pickup);
            booking.setDropDateTime(drop);

            booking.setRentalMode(mode);
            booking.setDuration(duration);

            booking.setBaseAmount(
                    quote.getBaseAmount()
                            - quote.getDiscountAmount()
            );

            booking.setInsuranceAmount(
                    quote.getInsuranceAmount()
            );

            booking.setTaxAmount(
                    quote.getGstAmount()
            );

            booking.setDepositAmount(
                    quote.getSecurityDeposit()
            );

            booking.setTotalAmount(
                    quote.getTotalAmount()
            );

            booking.setPaymentMethod(
                    req.getPaymentMethod() != null
                            ? req.getPaymentMethod()
                            : "Razorpay UPI/Card"
            );

            booking.setStatus(BookingStatus.PENDING);
            booking.setPaymentStatus(PaymentStatus.INITIATED);

            /*
             * Payment checkout hold.
             * The booking remains PENDING until payment is successfully
             * verified.
             */
            booking.setExpiresAt(
                    LocalDateTime.now().plusMinutes(15)
            );

            /*
             * Unlock PIN must only be generated after successful payment
             * verification.
             */
            booking.setUnlockPin(null);

            // ============================================================
            // SERVER-GENERATED BOOKING REFERENCE
            // ============================================================

            String cityPrefix =
                    booking.getPickupCity()
                            .replaceAll("[^a-zA-Z]", "")
                            .toUpperCase();

            if (cityPrefix.length() < 3) {
                cityPrefix = "IND";
            } else {
                cityPrefix = cityPrefix.substring(0, 3);
            }

            String refCode =
                    UUID.randomUUID()
                            .toString()
                            .replace("-", "")
                            .substring(0, 6)
                            .toUpperCase();

            booking.setBookingReference(
                    "TBH-" +
                    cityPrefix +
                    "-" +
                    refCode
            );

            // ============================================================
            // PAYMENT ORDER
            // ============================================================

            PaymentOrderResponse order =
                    paymentService.createOrder(booking);

            booking.setRazorpayOrderId(
                    order.getOrderId()
            );

            booking.setRazorpayKeyId(
                    order.getKeyId()
            );

            booking.setRazorpayPaymentId(null);
            booking.setRazorpaySignature(null);

            Booking savedBooking =
                    bookingRepository.saveAndFlush(booking);

            // ============================================================
            // PAYMENT LEDGER
            // ============================================================

            Payment payment =
                    new Payment(
                            savedBooking,
                            user,
                            order.getOrderId(),
                            savedBooking.getTotalAmount(),
                            PaymentStatus.INITIATED
                    );

            paymentRepository.save(payment);

            if (quote.getCouponCode() != null && quote.getCouponDiscount() > 0 && couponRepository != null && couponRedemptionRepository != null) {
                couponRepository.findByCodeIgnoreCase(quote.getCouponCode()).ifPresent(c -> {
                    c.setCurrentUses(c.getCurrentUses() + 1);
                    couponRepository.save(c);
                    com.tbh.entity.CouponRedemption redemption = new com.tbh.entity.CouponRedemption(
                            c,
                            user,
                            savedBooking.getId(),
                            java.math.BigDecimal.valueOf(quote.getCouponDiscount())
                    );
                    couponRedemptionRepository.save(redemption);
                });
            }

            log.info(
                    "[TBH BOOKING] Created PENDING booking {} " +
                    "with 15-min payment hold on FleetUnit {} " +
                    "(Payment Order: {})",
                    savedBooking.getBookingReference(),
                    assignedUnit.getRegistrationNumber(),
                    order.getOrderId()
            );

            return savedBooking;
    }

    public List<Booking> getMyBookings(Long userId) {

        User user =
                userRepository.findById(userId)
                        .orElseThrow(() ->
                                new IllegalArgumentException(
                                        "User not found with ID: " + userId
                                )
                        );

        return bookingRepository.findByUserOrderByCreatedAtDesc(user);
    }

    @Transactional
    public Booking cancelBooking(Long bookingId, Long userId) {

        Booking booking =
                bookingRepository.findById(bookingId)
                        .orElseThrow(() ->
                                new IllegalArgumentException(
                                        "Booking not found with ID: " + bookingId
                                )
                        );

        if (!booking.getUser().getId().equals(userId)) {
            throw new SecurityException(
                    "Unauthorized: You do not own this booking reservation."
            );
        }

        if (booking.getStatus() == BookingStatus.CANCELLED) {
            throw new IllegalArgumentException(
                    "This booking reservation has already been cancelled."
            );
        }

        LocalDateTime now = LocalDateTime.now();

        Duration untilPickup =
                Duration.between(
                        now,
                        booking.getPickupDateTime()
                );

        BigDecimal rentalCost =
                booking.getBaseAmount()
                        .add(booking.getInsuranceAmount())
                        .add(booking.getTaxAmount());

        BigDecimal deposit =
                booking.getDepositAmount();

        BigDecimal refund;
        BigDecimal fee;

        if (untilPickup.toHours() >= 24) {

            // Free cancellation more than 24 hours before pickup.
            refund = booking.getTotalAmount();
            fee = BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP);

        } else if (!untilPickup.isNegative()) {

            // Cancellation less than 24 hours before pickup: 10% fee on rental cost
            fee = rentalCost.multiply(new BigDecimal("0.10")).setScale(2, RoundingMode.HALF_UP);
            refund = rentalCost.subtract(fee).add(deposit).setScale(2, RoundingMode.HALF_UP);

        } else {

            // Ongoing or past rental.
            fee = rentalCost;
            refund = deposit;
        }

        booking.setStatus(BookingStatus.CANCELLED);
        booking.setCancelledAt(now);

        boolean wasPaid = booking.getPaymentStatus() == PaymentStatus.PAID;

        if (!wasPaid) {
            // Unpaid reservation cancellation: No money was collected, so no refund is owed or issued.
            booking.setRefundAmount(BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP));
            booking.setCancellationFee(BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP));
            booking.setRefundTransactionId(null);
            log.info("[TBH BOOKING] Cancelled unpaid booking {}. No payment was collected (0 refund).", booking.getBookingReference());
        } else {
            // Paid reservation cancellation: Calculate fee & refund, then call payment gateway refund service
            booking.setCancellationFee(fee);
            booking.setRefundAmount(refund);

            if (refund.compareTo(BigDecimal.ZERO) > 0) {
                RefundResponse refundResponse = paymentService.processRefund(booking, refund);
                if (refundResponse != null && refundResponse.isSuccess()) {
                    booking.setRefundTransactionId(refundResponse.getRefundId());
                    if ("pending".equalsIgnoreCase(refundResponse.getStatus())) {
                        booking.setPaymentStatus(PaymentStatus.REFUND_PENDING);
                    } else {
                        booking.setPaymentStatus(PaymentStatus.REFUNDED);
                    }
                    log.info("[TBH BOOKING] Refund {} initiated for paid booking {}",
                            refundResponse.getRefundId(), booking.getBookingReference());
                } else {
                    booking.setPaymentStatus(PaymentStatus.REFUND_FAILED);
                    booking.setRefundTransactionId(null);
                    log.error("[TBH BOOKING] Refund failed for paid booking {}: {}",
                            booking.getBookingReference(), refundResponse != null ? refundResponse.getMessage() : "Unknown error");
                }
            } else {
                // Fee consumed the entire payment
                booking.setPaymentStatus(PaymentStatus.REFUNDED);
                booking.setRefundTransactionId(null);
            }
        }

        /*
         * A cancelled future booking no longer blocks its FleetUnit.
         *
         * Physical status is already AVAILABLE in the new allocation
         * model, so there is normally nothing to release here.
         *
         * If the unit was physically in RENTED state for another reason,
         * do not blindly change it to AVAILABLE.
         */
        return bookingRepository.save(booking);
    }

    /*
     * Periodically expire unpaid PENDING bookings.
     *
     * With the new booking model, expiration only changes the booking.
     * It does not manipulate FleetUnit physical status because a PENDING
     * future booking never changed that status in the first place.
     */
    @Scheduled(fixedRate = 60000)
    @Transactional
    public void cleanupExpiredPendingBookings() {

        LocalDateTime now = LocalDateTime.now();

        List<Booking> expiredBookings =
                bookingRepository.findByStatusAndExpiresAtBefore(
                        BookingStatus.PENDING,
                        now
                );

        if (!expiredBookings.isEmpty()) {

            log.info(
                    "[TBH CLEANUP] Cleaning up {} expired pending booking reservation(s)",
                    expiredBookings.size()
            );

            for (Booking booking : expiredBookings) {

                booking.setStatus(
                        BookingStatus.CANCELLED
                );

                booking.setPaymentStatus(
                        PaymentStatus.FAILED
                );

                booking.setCancelledAt(now);

                bookingRepository.save(booking);

                log.info(
                        "[TBH CLEANUP] Expired pending booking {} released its time reservation",
                        booking.getBookingReference()
                );
            }
        }
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
}
