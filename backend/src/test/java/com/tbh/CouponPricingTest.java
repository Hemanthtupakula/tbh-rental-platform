package com.tbh;

import com.tbh.dto.PricingQuoteRequest;
import com.tbh.dto.PricingQuoteResponse;
import com.tbh.entity.Coupon;
import com.tbh.entity.Vehicle;
import com.tbh.repository.CouponRepository;
import com.tbh.repository.VehicleRepository;
import com.tbh.service.PricingService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
public class CouponPricingTest {

    @Autowired
    private PricingService pricingService;

    @Autowired
    private CouponRepository couponRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Test
    @DisplayName("1. Flat discount coupon applies correctly and reduces total")
    void testFlatDiscountCoupon() {
        Vehicle vehicle = vehicleRepository.findAll().stream().findFirst().orElseThrow();

        Coupon coupon = new Coupon();
        coupon.setCode("TESTFLAT100");
        coupon.setDiscountType("FLAT");
        coupon.setDiscountValue(new BigDecimal("100.00"));
        coupon.setMinBookingAmount(new BigDecimal("100.00"));
        coupon.setMaxDiscount(new BigDecimal("100.00"));
        coupon.setActive(true);
        coupon.setMaxUses(100);
        couponRepository.save(coupon);

        PricingQuoteRequest reqWithout = new PricingQuoteRequest();
        reqWithout.setVehicleId(vehicle.getId());
        reqWithout.setRentalMode("DAILY");
        reqWithout.setDuration(2);
        reqWithout.setPickupCity("Bangalore");

        PricingQuoteResponse quoteWithout = pricingService.calculateQuote(reqWithout);

        PricingQuoteRequest reqWith = new PricingQuoteRequest();
        reqWith.setVehicleId(vehicle.getId());
        reqWith.setRentalMode("DAILY");
        reqWith.setDuration(2);
        reqWith.setPickupCity("Bangalore");
        reqWith.setCouponCode("TESTFLAT100");

        PricingQuoteResponse quoteWith = pricingService.calculateQuote(reqWith);

        assertNotNull(quoteWith.getCouponCode());
        assertEquals("TESTFLAT100", quoteWith.getCouponCode());
        assertEquals(100.0, quoteWith.getCouponDiscount(), 0.01);
        assertTrue(quoteWith.getTotalAmount() < quoteWithout.getTotalAmount(), "Total with coupon must be less than without");
    }

    @Test
    @DisplayName("2. Inactive coupon is safely ignored")
    void testInactiveCouponIgnored() {
        Vehicle vehicle = vehicleRepository.findAll().stream().findFirst().orElseThrow();

        Coupon coupon = new Coupon();
        coupon.setCode("TESTINACTIVE");
        coupon.setDiscountType("FLAT");
        coupon.setDiscountValue(new BigDecimal("500.00"));
        coupon.setMinBookingAmount(new BigDecimal("100.00"));
        coupon.setActive(false);
        couponRepository.save(coupon);

        PricingQuoteRequest req = new PricingQuoteRequest();
        req.setVehicleId(vehicle.getId());
        req.setRentalMode("DAILY");
        req.setDuration(2);
        req.setPickupCity("Bangalore");
        req.setCouponCode("TESTINACTIVE");

        PricingQuoteResponse quote = pricingService.calculateQuote(req);
        assertNull(quote.getCouponCode());
        assertEquals(0.0, quote.getCouponDiscount(), 0.01);
    }

    @Test
    @DisplayName("3. Excessive discount cannot produce negative total price")
    void testNegativePricePrevented() {
        Vehicle vehicle = vehicleRepository.findAll().stream().findFirst().orElseThrow();

        Coupon coupon = new Coupon();
        coupon.setCode("TESTMEGA99999");
        coupon.setDiscountType("FLAT");
        coupon.setDiscountValue(new BigDecimal("999999.00"));
        coupon.setMinBookingAmount(new BigDecimal("0.00"));
        coupon.setActive(true);
        couponRepository.save(coupon);

        PricingQuoteRequest req = new PricingQuoteRequest();
        req.setVehicleId(vehicle.getId());
        req.setRentalMode("HOURLY");
        req.setDuration(1);
        req.setPickupCity("Bangalore");
        req.setCouponCode("TESTMEGA99999");

        PricingQuoteResponse quote = pricingService.calculateQuote(req);
        assertTrue(quote.getTotalAmount() >= 0.0, "Total price must never be negative");
    }
}
