
package com.tbh.repository;

import com.tbh.entity.Booking;
import com.tbh.entity.BookingStatus;
import com.tbh.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findByUserOrderByCreatedAtDesc(User user);

    Optional<Booking> findByBookingReference(String bookingReference);

    Optional<Booking> findByRazorpayOrderId(String razorpayOrderId);

    List<Booking> findByStatusAndExpiresAtBefore(
            BookingStatus status,
            LocalDateTime threshold
    );

    /*
     * Test/support query.
     *
     * Only bookings created with the unique test hub marker
     * are returned. This prevents tests from deleting real bookings.
     */
    List<Booking> findByPickupHub(String pickupHub);

    @Query("""
        SELECT COUNT(b)
        FROM Booking b
        WHERE b.fleetUnit.id = :fleetUnitId
          AND b.status IN :activeStatuses
          AND b.pickupDateTime < :dropTime
          AND b.dropDateTime > :pickupTime
          AND (
              b.status <> com.tbh.entity.BookingStatus.PENDING
              OR b.expiresAt IS NULL
              OR b.expiresAt > :now
          )
        """)
    long countOverlappingBookingsForFleetUnit(
            @Param("fleetUnitId") Long fleetUnitId,
            @Param("pickupTime") LocalDateTime pickupTime,
            @Param("dropTime") LocalDateTime dropTime,
            @Param("activeStatuses") Collection<BookingStatus> activeStatuses,
            @Param("now") LocalDateTime now
    );

    long countByStatus(BookingStatus status);

    @Query("""
        SELECT COALESCE(SUM(b.totalAmount), 0.0)
        FROM Booking b
        WHERE b.paymentStatus =
              com.tbh.entity.PaymentStatus.PAID
        """)
    Double calculateTotalRevenue();
}