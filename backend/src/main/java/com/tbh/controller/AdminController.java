package com.tbh.controller;

import com.tbh.entity.*;
import com.tbh.repository.BookingRepository;
import com.tbh.repository.CouponRepository;
import com.tbh.repository.OfferRepository;
import com.tbh.repository.UserRepository;
import com.tbh.repository.VehicleRepository;
import com.tbh.service.AdminAuditService;
import com.tbh.service.BookingService;
import com.tbh.service.KycService;
import com.tbh.service.SupportService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasAuthority('ROLE_ADMIN')")
public class AdminController {

    private final BookingService bookingService;
    private final BookingRepository bookingRepository;
    private final VehicleRepository vehicleRepository;
    private final KycService kycService;
    private final UserRepository userRepository;
    private final CouponRepository couponRepository;
    private final OfferRepository offerRepository;
    private final SupportService supportService;
    private final AdminAuditService auditService;

    public AdminController(BookingService bookingService,
                           BookingRepository bookingRepository,
                           VehicleRepository vehicleRepository,
                           KycService kycService,
                           UserRepository userRepository,
                           CouponRepository couponRepository,
                           OfferRepository offerRepository,
                           SupportService supportService,
                           AdminAuditService auditService) {
        this.bookingService = bookingService;
        this.bookingRepository = bookingRepository;
        this.vehicleRepository = vehicleRepository;
        this.kycService = kycService;
        this.userRepository = userRepository;
        this.couponRepository = couponRepository;
        this.offerRepository = offerRepository;
        this.supportService = supportService;
        this.auditService = auditService;
    }

    // ==========================================
    // 1. OVERVIEW & METRICS
    // ==========================================

    @GetMapping({"/metrics", "/overview"})
    public ResponseEntity<Map<String, Object>> getOverviewMetrics() {
        long totalVehicles = vehicleRepository.count();
        long availableVehicles = vehicleRepository.countByAvailable(true);
        long totalBookings = bookingRepository.count();
        long confirmedBookings = bookingRepository.countByStatus(BookingStatus.CONFIRMED);
        long ongoingBookings = bookingRepository.countByStatus(BookingStatus.ONGOING);
        long cancelledBookings = bookingRepository.countByStatus(BookingStatus.CANCELLED);
        long completedBookings = bookingRepository.countByStatus(BookingStatus.COMPLETED);
        Double totalRevenue = bookingRepository.calculateTotalRevenue();
        if (totalRevenue == null) totalRevenue = 0.0;

        double utilization = totalVehicles > 0
                ? ((double) (totalVehicles - availableVehicles) / totalVehicles) * 100.0
                : 0.0;

        long pendingKyc = kycService.getPendingKyc().size();
        long totalUsers = userRepository.count();
        long activeCoupons = couponRepository.findAll().stream().filter(Coupon::isActive).count();
        long openTickets = supportService.getAllTicketsAdmin().stream()
                .filter(t -> "OPEN".equalsIgnoreCase(t.getStatus()) || "IN_PROGRESS".equalsIgnoreCase(t.getStatus()))
                .count();

        Map<String, Object> metrics = new HashMap<>();
        metrics.put("totalVehicles", totalVehicles);
        metrics.put("availableVehicles", availableVehicles);
        metrics.put("totalBookings", totalBookings);
        metrics.put("activeBookings", confirmedBookings + ongoingBookings);
        metrics.put("confirmedBookings", confirmedBookings);
        metrics.put("ongoingBookings", ongoingBookings);
        metrics.put("completedBookings", completedBookings);
        metrics.put("cancelledBookings", cancelledBookings);
        metrics.put("totalRevenue", totalRevenue);
        metrics.put("fleetUtilizationRate", String.format("%.1f%%", utilization));
        metrics.put("customerSatisfaction", "4.94 / 5.0");
        metrics.put("pendingKyc", pendingKyc);
        metrics.put("totalUsers", totalUsers);
        metrics.put("activeCoupons", activeCoupons);
        metrics.put("openTickets", openTickets);

        return ResponseEntity.ok(metrics);
    }

    @GetMapping("/analytics")
    public ResponseEntity<Map<String, Object>> getAnalytics() {
        Map<String, Object> data = new HashMap<>();
        data.put("totalRevenue", bookingRepository.calculateTotalRevenue() != null ? bookingRepository.calculateTotalRevenue() : 0.0);
        data.put("totalBookings", bookingRepository.count());
        data.put("totalFleet", vehicleRepository.count());
        data.put("totalCustomers", userRepository.count());
        data.put("activePromotions", offerRepository.findByActiveTrue().size());
        return ResponseEntity.ok(data);
    }

    // ==========================================
    // 2. BOOKINGS
    // ==========================================

    @GetMapping("/bookings")
    public ResponseEntity<List<Booking>> getAllBookings() {
        return ResponseEntity.ok(bookingService.getAllBookings());
    }

    // ==========================================
    // 3. FLEET CONTROL
    // ==========================================

    @GetMapping("/vehicles")
    public ResponseEntity<List<Vehicle>> getAllVehicles() {
        return ResponseEntity.ok(vehicleRepository.findAll());
    }

    @PostMapping("/vehicles/{id}/toggle-availability")
    public ResponseEntity<?> toggleVehicleAvailability(@PathVariable Long id, Authentication auth) {
        return vehicleRepository.findById(id).map(vehicle -> {
            boolean current = vehicle.isAvailable();
            vehicle.setAvailable(!current);
            Vehicle saved = vehicleRepository.save(vehicle);

            auditService.logAction(
                    auth != null ? auth.getName() : "admin",
                    "TOGGLE_VEHICLE_AVAILABILITY",
                    "Vehicle",
                    id.toString(),
                    "Vehicle " + saved.getName() + " set to " + (saved.isAvailable() ? "AVAILABLE" : "MAINTENANCE"),
                    null
            );

            Map<String, Object> resp = new HashMap<>();
            resp.put("id", saved.getId());
            resp.put("name", saved.getName());
            resp.put("available", saved.isAvailable());
            resp.put("message", "Vehicle availability updated to: " + (saved.isAvailable() ? "AVAILABLE" : "RESERVED/MAINTENANCE"));
            return ResponseEntity.ok(resp);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/vehicles/{id}")
    public ResponseEntity<?> updateVehicle(@PathVariable Long id, @RequestBody Vehicle updated, Authentication auth) {
        return vehicleRepository.findById(id).map(existing -> {
            if (updated.getName() != null) existing.setName(updated.getName());
            if (updated.getPricePerHour() != null) existing.setPricePerHour(updated.getPricePerHour());
            if (updated.getPricePerDay() != null) existing.setPricePerDay(updated.getPricePerDay());
            if (updated.getPricePerMonth() != null) existing.setPricePerMonth(updated.getPricePerMonth());
            if (updated.getSecurityDeposit() != null) existing.setSecurityDeposit(updated.getSecurityDeposit());
            if (updated.getImageUrl() != null) existing.setImageUrl(updated.getImageUrl());
            if (updated.getCityNames() != null) existing.setCityNames(updated.getCityNames());
            existing.setAvailable(updated.isAvailable());

            Vehicle saved = vehicleRepository.save(existing);
            auditService.logAction(
                    auth != null ? auth.getName() : "admin",
                    "UPDATE_VEHICLE",
                    "Vehicle",
                    id.toString(),
                    "Updated vehicle " + saved.getName(),
                    null
            );
            return ResponseEntity.ok(saved);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // ==========================================
    // 4. CUSTOMERS
    // ==========================================

    @GetMapping("/users")
    public ResponseEntity<List<Map<String, Object>>> getAllUsers() {
        List<Map<String, Object>> users = userRepository.findAll().stream().map(u -> {
            Map<String, Object> map = new HashMap<>();
            map.put("id", u.getId());
            map.put("fullName", u.getFullName());
            map.put("email", u.getEmail());
            map.put("phoneNumber", u.getPhoneNumber());
            map.put("mobileVerified", u.isMobileVerified());
            map.put("role", u.getRole().name());
            map.put("drivingLicenseVerified", u.isDrivingLicenseVerified());
            map.put("drivingLicenseNumber", u.getDrivingLicenseNumber());
            map.put("clerkUserId", u.getClerkUserId());
            map.put("createdAt", u.getCreatedAt());
            return map;
        }).toList();
        return ResponseEntity.ok(users);
    }

    // ==========================================
    // 5. KYC VERIFICATION QUEUE
    // ==========================================

    @GetMapping("/kyc/pending")
    public ResponseEntity<?> getPendingKyc() {
        return ResponseEntity.ok(kycService.getPendingKyc());
    }

    @GetMapping("/kyc/all")
    public ResponseEntity<List<LicenseVerification>> getAllKyc() {
        return ResponseEntity.ok(kycService.getAllKyc());
    }

    @GetMapping("/kyc/{id}")
    public ResponseEntity<?> getKycById(@PathVariable Long id) {
        return kycService.getKycById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/kyc/{id}/review")
    public ResponseEntity<?> reviewKyc(@PathVariable Long id, @RequestBody Map<String, String> request, Authentication auth) {
        String statusStr = request.get("status");
        String rejectionReason = request.get("rejectionReason");
        KycVerificationStatus status = KycVerificationStatus.valueOf(statusStr != null ? statusStr : "VERIFIED");
        String adminEmail = auth != null ? auth.getName() : "ADMIN";
        LicenseVerification updated = kycService.reviewKyc(id, status, rejectionReason, adminEmail);

        auditService.logAction(
                adminEmail,
                "REVIEW_KYC",
                "LicenseVerification",
                id.toString(),
                "KYC status changed to " + status + (rejectionReason != null ? " Reason: " + rejectionReason : ""),
                null
        );

        return ResponseEntity.ok(updated);
    }

    @GetMapping("/kyc/{id}/audit")
    public ResponseEntity<?> getKycAuditEvents(@PathVariable Long id) {
        return ResponseEntity.ok(kycService.getAuditEvents(id));
    }

    // ==========================================
    // 6. OFFERS & DISCOUNTS
    // ==========================================

    @GetMapping("/offers")
    public ResponseEntity<List<Offer>> getAllOffers() {
        return ResponseEntity.ok(offerRepository.findAll());
    }

    @PostMapping("/offers")
    public ResponseEntity<Offer> createOffer(@RequestBody Offer offer, Authentication auth) {
        Offer saved = offerRepository.save(offer);
        auditService.logAction(
                auth != null ? auth.getName() : "admin",
                "CREATE_OFFER",
                "Offer",
                saved.getId().toString(),
                "Created offer: " + saved.getName(),
                null
        );
        return ResponseEntity.ok(saved);
    }

    @PostMapping("/offers/{id}/toggle-active")
    public ResponseEntity<Offer> toggleOfferActive(@PathVariable Long id, Authentication auth) {
        Offer offer = offerRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Offer not found: " + id));
        offer.setActive(!offer.isActive());
        Offer saved = offerRepository.save(offer);
        auditService.logAction(
                auth != null ? auth.getName() : "admin",
                "TOGGLE_OFFER",
                "Offer",
                id.toString(),
                "Offer " + offer.getName() + " active status set to: " + offer.isActive(),
                null
        );
        return ResponseEntity.ok(saved);
    }

    @DeleteMapping("/offers/{id}")
    public ResponseEntity<?> deleteOffer(@PathVariable Long id, Authentication auth) {
        offerRepository.deleteById(id);
        auditService.logAction(
                auth != null ? auth.getName() : "admin",
                "DELETE_OFFER",
                "Offer",
                id.toString(),
                "Deleted offer ID " + id,
                null
        );
        return ResponseEntity.ok(Map.of("message", "Offer deleted successfully"));
    }

    // ==========================================
    // 7. COUPONS
    // ==========================================

    @GetMapping("/coupons")
    public ResponseEntity<List<Coupon>> getAllCoupons() {
        return ResponseEntity.ok(couponRepository.findAllByOrderByCreatedAtDesc());
    }

    @PostMapping("/coupons")
    public ResponseEntity<?> createCoupon(@RequestBody Coupon coupon, Authentication auth) {
        if (coupon.getCode() == null || coupon.getCode().isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Coupon code is required"));
        }
        String cleanCode = coupon.getCode().trim().toUpperCase();
        if (couponRepository.existsByCodeIgnoreCase(cleanCode)) {
            return ResponseEntity.badRequest().body(Map.of("error", "Coupon code already exists: " + cleanCode));
        }
        coupon.setCode(cleanCode);
        Coupon saved = couponRepository.save(coupon);

        auditService.logAction(
                auth != null ? auth.getName() : "admin",
                "CREATE_COUPON",
                "Coupon",
                saved.getId().toString(),
                "Created coupon code: " + saved.getCode(),
                null
        );

        return ResponseEntity.ok(saved);
    }

    @PostMapping("/coupons/{id}/toggle-active")
    public ResponseEntity<Coupon> toggleCouponActive(@PathVariable Long id, Authentication auth) {
        Coupon coupon = couponRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Coupon not found: " + id));
        coupon.setActive(!coupon.isActive());
        Coupon saved = couponRepository.save(coupon);

        auditService.logAction(
                auth != null ? auth.getName() : "admin",
                "TOGGLE_COUPON",
                "Coupon",
                id.toString(),
                "Coupon " + coupon.getCode() + " active status set to: " + coupon.isActive(),
                null
        );

        return ResponseEntity.ok(saved);
    }

    @DeleteMapping("/coupons/{id}")
    public ResponseEntity<?> deleteCoupon(@PathVariable Long id, Authentication auth) {
        couponRepository.deleteById(id);
        auditService.logAction(
                auth != null ? auth.getName() : "admin",
                "DELETE_COUPON",
                "Coupon",
                id.toString(),
                "Deleted coupon ID " + id,
                null
        );
        return ResponseEntity.ok(Map.of("message", "Coupon deleted successfully"));
    }

    // ==========================================
    // 8. CUSTOMER SUPPORT (ADMIN)
    // ==========================================

    @GetMapping("/support/tickets")
    public ResponseEntity<List<SupportTicket>> getAllSupportTickets() {
        return ResponseEntity.ok(supportService.getAllTicketsAdmin());
    }

    @GetMapping("/support/tickets/{ticketId}/messages")
    public ResponseEntity<List<SupportMessage>> getSupportTicketMessages(@PathVariable Long ticketId) {
        return ResponseEntity.ok(supportService.getMessagesAdmin(ticketId));
    }

    @PostMapping("/support/tickets/{ticketId}/reply")
    public ResponseEntity<SupportMessage> replySupportTicket(
            @PathVariable Long ticketId,
            @RequestBody Map<String, Object> req,
            Authentication auth) {

        String message = (String) req.get("message");
        boolean isInternal = Boolean.TRUE.equals(req.get("isInternalNote"));
        String newStatus = (String) req.get("newStatus");
        String adminEmail = auth != null ? auth.getName() : "admin@tbhrentals.in";

        SupportMessage saved = supportService.addAdminReply(ticketId, adminEmail, message, isInternal, newStatus);

        auditService.logAction(
                adminEmail,
                "SUPPORT_REPLY",
                "SupportTicket",
                ticketId.toString(),
                (isInternal ? "[INTERNAL NOTE] " : "[REPLY] ") + "Ticket #" + ticketId,
                null
        );

        return ResponseEntity.ok(saved);
    }

    @PutMapping("/support/tickets/{ticketId}/status")
    public ResponseEntity<SupportTicket> updateSupportStatus(
            @PathVariable Long ticketId,
            @RequestBody Map<String, String> req,
            Authentication auth) {

        String newStatus = req.get("status");
        SupportTicket updated = supportService.updateTicketStatus(ticketId, newStatus);

        auditService.logAction(
                auth != null ? auth.getName() : "admin",
                "UPDATE_SUPPORT_STATUS",
                "SupportTicket",
                ticketId.toString(),
                "Status updated to: " + newStatus,
                null
        );

        return ResponseEntity.ok(updated);
    }

    // ==========================================
    // 9. AUDIT LOGS
    // ==========================================

    @GetMapping("/audit-logs")
    public ResponseEntity<List<AdminAuditLog>> getAuditLogs() {
        return ResponseEntity.ok(auditService.getRecentLogs());
    }
}
