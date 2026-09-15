package com.tbh.controller;

import com.tbh.dto.BookingRequest;
import com.tbh.entity.Booking;
import com.tbh.entity.User;
import com.tbh.exception.VehicleUnavailableException;
import com.tbh.repository.UserRepository;
import com.tbh.service.BookingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService bookingService;
    private final UserRepository userRepository;
    private final com.tbh.service.email.EmailService emailService;

    public BookingController(BookingService bookingService, UserRepository userRepository) {
        this(bookingService, userRepository, null);
    }

    @org.springframework.beans.factory.annotation.Autowired
    public BookingController(BookingService bookingService, UserRepository userRepository,
                             @org.springframework.beans.factory.annotation.Autowired(required = false) com.tbh.service.email.EmailService emailService) {
        this.bookingService = bookingService;
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    @PostMapping
    public ResponseEntity<?> createBooking(@RequestBody BookingRequest request, Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated() || "anonymousUser".equals(authentication.getPrincipal())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of(
                    "code", "UNAUTHORIZED",
                    "message", "Authentication required to create a booking."
            ));
        }

        String email = authentication.getName();
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of(
                    "code", "USER_NOT_FOUND",
                    "message", "Authenticated user profile not found."
            ));
        }

        // Enforce authentic userId directly from verified JWT token
        request.setUserId(userOpt.get().getId());

        try {
            Booking booking = bookingService.createBooking(request);
            return ResponseEntity.status(HttpStatus.CREATED).body(booking);
        } catch (VehicleUnavailableException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of(
                    "code", e.getCode(),
                    "message", e.getMessage()
            ));
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(Map.of(
                    "code", "KYC_REQUIRED",
                    "message", e.getMessage()
            ));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of(
                    "code", "INVALID_REQUEST",
                    "message", e.getMessage()
            ));
        }
    }

    @GetMapping("/my/{userId}")
    public ResponseEntity<?> getMyBookings(@PathVariable Long userId, Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated() || "anonymousUser".equals(authentication.getPrincipal())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of(
                    "code", "UNAUTHORIZED",
                    "message", "Authentication required."
            ));
        }

        String email = authentication.getName();
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("code", "USER_NOT_FOUND"));
        }

        User caller = userOpt.get();
        boolean isAdmin = authentication.getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().contains("ADMIN"));
        if (!isAdmin && !caller.getId().equals(userId)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of(
                    "code", "FORBIDDEN",
                    "message", "You are not authorized to view another user's bookings."
            ));
        }

        return ResponseEntity.ok(bookingService.getMyBookings(userId));
    }

    @PostMapping("/{id}/cancel")
    public ResponseEntity<?> cancelBooking(@PathVariable Long id, @RequestParam Long userId, Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated() || "anonymousUser".equals(authentication.getPrincipal())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of(
                    "code", "UNAUTHORIZED",
                    "message", "Authentication required."
            ));
        }

        String email = authentication.getName();
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("code", "USER_NOT_FOUND"));
        }

        User caller = userOpt.get();
        boolean isAdmin = authentication.getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().contains("ADMIN"));
        if (!isAdmin && !caller.getId().equals(userId)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of(
                    "code", "FORBIDDEN",
                    "message", "You are not authorized to cancel another user's booking."
            ));
        }

        try {
            Booking booking = bookingService.cancelBooking(id, userId);
            if (emailService != null && booking.getUser() != null && booking.getUser().getEmail() != null) {
                try {
                    emailService.queueBookingCancelled(
                            booking.getUser().getEmail(),
                            booking.getUser().getFullName(),
                            booking.getBookingReference(),
                            String.valueOf(booking.getTotalAmount()),
                            "0.00"
                    );
                } catch (Exception e) {
                    // Non-blocking notification
                }
            }
            return ResponseEntity.ok(booking);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of(
                    "code", "INVALID_REQUEST",
                    "message", e.getMessage()
            ));
        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of(
                    "code", "FORBIDDEN",
                    "message", e.getMessage()
            ));
        }
    }
}
