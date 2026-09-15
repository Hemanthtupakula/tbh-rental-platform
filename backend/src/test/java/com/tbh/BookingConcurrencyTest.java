
package com.tbh;

import com.tbh.dto.BookingRequest;
import com.tbh.entity.Booking;
import com.tbh.entity.BookingStatus;
import com.tbh.entity.FleetUnit;
import com.tbh.entity.FleetUnitStatus;
import com.tbh.entity.PaymentStatus;
import com.tbh.entity.User;
import com.tbh.entity.Vehicle;
import com.tbh.exception.VehicleUnavailableException;
import com.tbh.repository.BookingRepository;
import com.tbh.repository.FleetUnitRepository;
import com.tbh.repository.PaymentRepository;
import com.tbh.repository.UserRepository;
import com.tbh.repository.VehicleRepository;
import com.tbh.service.BookingService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
class BookingConcurrencyTest {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private FleetUnitRepository fleetUnitRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    /*
     * Unique marker used only by this test class.
     *
     * It lets cleanup remove only bookings created by this test.
     */
    private String testHub;

    /*
     * The booking window is deliberately chosen dynamically.
     *
     * We search for a physical fleet unit that has no existing
     * booking conflict during the selected test period.
     */
    private LocalDateTime testWindow;

    private final List<Long> createdBookingIds =
            new ArrayList<>();

    /*
     * Fleet-unit states changed by this test.
     *
     * Original states are stored so they can be restored after
     * the test instead of blindly setting everything AVAILABLE.
     */
    private final java.util.Map<Long, FleetUnitStatus> originalFleetStates =
            new java.util.HashMap<>();

    private User testUser;

    @BeforeEach
    void setUp() {

        testHub =
                "TBH_TEST_"
                        + UUID.randomUUID()
                        .toString()
                        .replace("-", "")
                        .substring(0, 12);

        /*
         * Use an authenticated/verified user.
         */
        testUser =
                userRepository.findAll()
                        .stream()
                        .findFirst()
                        .orElseThrow(() ->
                                new IllegalStateException(
                                        "BookingConcurrencyTest requires at least one user"
                                )
                        );

        testUser.setDrivingLicenseVerified(true);
        testUser.setMobileVerified(true);

        if (testUser.getAadhaarNumber() == null
                || testUser.getAadhaarNumber().isBlank()) {

            throw new IllegalStateException(
                    "Test user must contain verified identity information"
            );
        }

        testUser =
                userRepository.saveAndFlush(testUser);
    }

    /**
     * Active booking states that block a physical fleet unit.
     */
    private Collection<BookingStatus> activeBookingStatuses() {

        return List.of(
                BookingStatus.PENDING,
                BookingStatus.CONFIRMED,
                BookingStatus.ONGOING
        );
    }

    /**
     * Finds a physical fleet unit belonging to the requested vehicle
     * in Bengaluru that is free for the complete requested interval.
     */
    private FleetUnit findCleanFleetUnit(
            Vehicle vehicle,
            LocalDateTime pickup,
            LocalDateTime drop) {

        LocalDateTime now = LocalDateTime.now();

        List<FleetUnit> units =
                fleetUnitRepository.findByVehicleIdAndCityName(
                        vehicle.getId(),
                        "Bengaluru"
                );

        for (FleetUnit unit : units) {

            if (unit.getVehicle() == null
                    || !unit.getVehicle().getId().equals(vehicle.getId())) {
                continue;
            }

            if (unit.getStatus() == FleetUnitStatus.RETIRED
                    || unit.getStatus() == FleetUnitStatus.INACTIVE
                    || unit.getStatus() == FleetUnitStatus.MAINTENANCE) {
                continue;
            }

            long overlapping =
                    bookingRepository.countOverlappingBookingsForFleetUnit(
                            unit.getId(),
                            pickup,
                            drop,
                            activeBookingStatuses(),
                            now
                    );

            if (overlapping == 0) {
                return unit;
            }
        }

        throw new IllegalStateException(
                "No clean Bengaluru fleet unit is available for vehicle "
                        + vehicle.getName()
        );
    }

    /**
     * Prepares exactly one fleet unit for deterministic testing.
     *
     * Every other unit belonging to the same vehicle is temporarily
     * moved to MAINTENANCE so BookingService must use the selected
     * physical unit.
     */
    private FleetUnit prepareVehicleForTest(
            Vehicle vehicle,
            LocalDateTime pickup,
            LocalDateTime drop) {

        List<FleetUnit> units =
                fleetUnitRepository.findByVehicleIdAndCityName(
                        vehicle.getId(),
                        "Bengaluru"
                );

        if (units.isEmpty()) {
            throw new IllegalStateException(
                    "No fleet units found for "
                            + vehicle.getName()
                            + " in Bengaluru"
            );
        }

        FleetUnit selected =
                findCleanFleetUnit(
                        vehicle,
                        pickup,
                        drop
                );

        for (FleetUnit unit : units) {

            originalFleetStates.putIfAbsent(
                    unit.getId(),
                    unit.getStatus()
            );

            if (unit.getId().equals(selected.getId())) {

                unit.setStatus(
                        FleetUnitStatus.AVAILABLE
                );

            } else {

                unit.setStatus(
                        FleetUnitStatus.MAINTENANCE
                );
            }
        }

        fleetUnitRepository.saveAllAndFlush(
                units
        );

        return selected;
    }

    private BookingRequest createRequest(
            User user,
            Vehicle vehicle,
            LocalDateTime pickup,
            String mode,
            int duration) {

        BookingRequest request =
                new BookingRequest();

        request.setUserId(
                user.getId()
        );

        request.setVehicleId(
                vehicle.getId()
        );

        request.setPickupCity(
                "Bengaluru"
        );

        request.setDropCity(
                "Bengaluru"
        );

        /*
         * Unique marker used only for test cleanup.
         */
        request.setPickupHub(
                testHub
        );

        request.setDropHub(
                testHub
        );

        request.setPickupDateTime(
                pickup
        );

        request.setRentalMode(
                mode
        );

        request.setDuration(
                duration
        );

        request.setPaymentMethod(
                "MOCK"
        );

        request.setIncludeHelmet(false);
        request.setIncludeZeroDep(false);

        return request;
    }

    @Test
    @DisplayName(
            "Overlapping booking on the same physical fleet unit is rejected"
    )
    void testOverlappingBookingThrowsConflict() {

        /*
         * Search for a vehicle that has a clean physical fleet
         * unit in Bengaluru.
         *
         * Use a test interval that is safely inside the 10-day
         * allocation window.
         */
        LocalDateTime pickup =
                LocalDateTime.now()
                        .plusDays(2);

        LocalDateTime drop =
                pickup.plusDays(2);

        Vehicle selectedVehicle = null;
        FleetUnit selectedUnit = null;

        for (Vehicle vehicle :
                vehicleRepository.findAll()) {

            try {

                FleetUnit candidate =
                        findCleanFleetUnit(
                                vehicle,
                                pickup,
                                drop
                        );

                selectedVehicle = vehicle;
                selectedUnit = candidate;
                break;

            } catch (IllegalStateException ignored) {
                /*
                 * Continue searching other vehicles.
                 */
            }
        }

        if (selectedVehicle == null
                || selectedUnit == null) {

            throw new IllegalStateException(
                    "No vehicle with a clean Bengaluru fleet unit was available for the overlap test"
            );
        }

        /*
         * Force BookingService to use the selected physical unit.
         */
        prepareVehicleForTest(
                selectedVehicle,
                pickup,
                drop
        );

        /*
         * First booking occupies the selected unit.
         */
        BookingRequest firstRequest =
                createRequest(
                        testUser,
                        selectedVehicle,
                        pickup,
                        "DAILY",
                        2
                );

        Booking firstBooking =
                bookingService.createBooking(
                        firstRequest
                );

        assertNotNull(
                firstBooking
        );

        assertNotNull(
                firstBooking.getId()
        );

        assertNotNull(
                firstBooking.getFleetUnit(),
                "First booking must receive a physical fleet unit"
        );

        assertEquals(
                selectedUnit.getId(),
                firstBooking.getFleetUnit().getId(),
                "First booking must use the clean fleet unit selected by the test"
        );

        assertEquals(
                testHub,
                firstBooking.getPickupHub(),
                "Booking must preserve the test hub marker"
        );

        createdBookingIds.add(
                firstBooking.getId()
        );

        /*
         * Second booking starts four hours after the first and
         * therefore overlaps the first booking's two-day period.
         */
        BookingRequest secondRequest =
                createRequest(
                        testUser,
                        selectedVehicle,
                        pickup.plusHours(4),
                        "HOURLY",
                        6
                );

        assertThrows(
                VehicleUnavailableException.class,
                () ->
                        bookingService.createBooking(
                                secondRequest
                        ),
                "An overlapping booking must be rejected"
        );

        /*
         * The first booking must remain intact.
         */
        Booking persisted =
                bookingRepository
                        .findById(
                                firstBooking.getId()
                        )
                        .orElseThrow();

        assertEquals(
                BookingStatus.PENDING,
                persisted.getStatus()
        );

        assertEquals(
                selectedUnit.getId(),
                persisted.getFleetUnit().getId()
        );
    }

    @Test
    @DisplayName(
            "Concurrent booking requests allow exactly one booking"
    )
    void testConcurrentBookingsOnlyOneSucceeds()
            throws InterruptedException {

        /*
         * Use a fresh test window safely inside the 10-day
         * allocation limit.
         *
         * Daily duration 3 gives a three-day booking.
         */
        testWindow =
                LocalDateTime.now()
                        .plusDays(2);

        LocalDateTime testDrop =
                testWindow.plusDays(3);

        /*
         * Find a vehicle whose Bengaluru fleet has a clean unit.
         */
        Vehicle selectedVehicle = null;
        FleetUnit selectedUnit = null;

        for (Vehicle vehicle :
                vehicleRepository.findAll()) {

            List<FleetUnit> units =
                    fleetUnitRepository
                            .findByVehicleIdAndCityName(
                                    vehicle.getId(),
                                    "Bengaluru"
                            );

            for (FleetUnit unit : units) {

                if (unit.getStatus() == FleetUnitStatus.RETIRED
                        || unit.getStatus() == FleetUnitStatus.INACTIVE
                        || unit.getStatus() == FleetUnitStatus.MAINTENANCE) {
                    continue;
                }

                long overlapping =
                        bookingRepository
                                .countOverlappingBookingsForFleetUnit(
                                        unit.getId(),
                                        testWindow,
                                        testDrop,
                                        activeBookingStatuses(),
                                        LocalDateTime.now()
                                );

                if (overlapping == 0) {

                    selectedVehicle = vehicle;
                    selectedUnit = unit;
                    break;
                }
            }

            if (selectedVehicle != null) {
                break;
            }
        }

        if (selectedVehicle == null
                || selectedUnit == null) {

            throw new IllegalStateException(
                    "No clean Bengaluru fleet unit available for concurrency test"
            );
        }

        /*
         * Temporarily make only the selected unit available.
         */
        prepareVehicleForTest(
                selectedVehicle,
                testWindow,
                testDrop
        );

        int threadCount = 4;

        ExecutorService executor =
                Executors.newFixedThreadPool(
                        threadCount
                );

        CountDownLatch readyLatch =
                new CountDownLatch(
                        threadCount
                );

        CountDownLatch startLatch =
                new CountDownLatch(
                        1
                );

        AtomicInteger successCount =
                new AtomicInteger(0);

        AtomicInteger conflictCount =
                new AtomicInteger(0);

        AtomicInteger unexpectedErrorCount =
                new AtomicInteger(0);

        final Vehicle workerVehicle = selectedVehicle;

        for (int i = 0; i < threadCount; i++) {

            executor.submit(() -> {

                try {

                    readyLatch.countDown();

                    /*
                     * Hold every worker until all workers are ready.
                     */
                    startLatch.await();

                    BookingRequest request =
                            createRequest(
                                    testUser,
                                    workerVehicle,
                                    testWindow,
                                    "DAILY",
                                    3
                            );

                    Booking booking =
                            bookingService.createBooking(
                                    request
                            );

                    if (booking != null
                            && booking.getId() != null) {

                        synchronized (createdBookingIds) {

                            createdBookingIds.add(
                                    booking.getId()
                            );
                        }

                        successCount.incrementAndGet();
                    }

                } catch (VehicleUnavailableException e) {

                    conflictCount.incrementAndGet();

                } catch (Exception e) {

                    unexpectedErrorCount.incrementAndGet();

                    System.err.println(
                            "[CONCURRENCY TEST] Unexpected exception: "
                                    + e.getClass().getName()
                                    + " - "
                                    + e.getMessage()
                    );

                    e.printStackTrace();
                }
            });
        }

        /*
         * Wait until all workers are ready.
         */
        assertTrue(
                readyLatch.await(
                        5,
                        TimeUnit.SECONDS
                ),
                "All worker threads must become ready"
        );

        /*
         * Release all workers together.
         */
        startLatch.countDown();

        executor.shutdown();

        assertTrue(
                executor.awaitTermination(
                        20,
                        TimeUnit.SECONDS
                ),
                "All concurrent booking threads must finish"
        );

        System.out.println(
                "[CONCURRENCY TEST] "
                        + "successes="
                        + successCount.get()
                        + ", conflicts="
                        + conflictCount.get()
                        + ", unexpectedErrors="
                        + unexpectedErrorCount.get()
        );

        assertEquals(
                0,
                unexpectedErrorCount.get(),
                "No unexpected database/application errors are allowed"
        );

        assertEquals(
                1,
                successCount.get(),
                "Exactly one concurrent booking must succeed"
        );

        assertEquals(
                threadCount - 1,
                conflictCount.get(),
                "All remaining concurrent bookings must be rejected"
        );
    }

    @AfterEach
    void cleanupTestBookingsAndFleet() {

        /*
         * 1. Find only bookings created by this test class.
         */
        List<Booking> testBookings =
                bookingRepository.findByPickupHub(
                        testHub
                );

        /*
         * 2. Delete payments first because payment.booking_id
         *    is non-null.
         */
        for (Booking booking : testBookings) {

            if (booking.getId() == null) {
                continue;
            }

            paymentRepository
                    .findByBookingId(
                            booking.getId()
                    )
                    .forEach(
                            paymentRepository::delete
                    );
        }

        paymentRepository.flush();

        /*
         * 3. Delete only this test's bookings.
         */
        if (!testBookings.isEmpty()) {

            bookingRepository.deleteAll(
                    testBookings
            );

            bookingRepository.flush();
        }

        /*
         * 4. Restore the fleet-unit states that existed before
         *    this test modified them.
         */
        for (java.util.Map.Entry<Long, FleetUnitStatus> entry :
                originalFleetStates.entrySet()) {

            fleetUnitRepository
                    .findById(
                            entry.getKey()
                    )
                    .ifPresent(unit -> {

                        unit.setStatus(
                                entry.getValue()
                        );

                        fleetUnitRepository.save(
                                unit
                        );
                    });
        }

        fleetUnitRepository.flush();

        createdBookingIds.clear();
        originalFleetStates.clear();
    }
}
