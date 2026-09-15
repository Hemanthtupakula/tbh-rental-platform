package com.tbh.service;

import com.tbh.dto.PricingQuoteRequest;
import com.tbh.dto.PricingQuoteResponse;
import com.tbh.entity.CityPricing;
import com.tbh.entity.Vehicle;
import com.tbh.entity.VehicleType;
import com.tbh.repository.CityPricingRepository;
import com.tbh.repository.VehicleRepository;
import com.tbh.entity.Coupon;
import com.tbh.entity.Offer;
import com.tbh.repository.CouponRepository;
import com.tbh.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
public class PricingService {

    private final VehicleRepository vehicleRepository;
    private final CityPricingRepository cityPricingRepository;
    private final CouponRepository couponRepository;
    private final OfferRepository offerRepository;

    public PricingService(VehicleRepository vehicleRepository, CityPricingRepository cityPricingRepository) {
        this(vehicleRepository, cityPricingRepository, null, null);
    }

    @Autowired
    public PricingService(VehicleRepository vehicleRepository,
                          CityPricingRepository cityPricingRepository,
                          @Autowired(required = false) CouponRepository couponRepository,
                          @Autowired(required = false) OfferRepository offerRepository) {
        this.vehicleRepository = vehicleRepository;
        this.cityPricingRepository = cityPricingRepository;
        this.couponRepository = couponRepository;
        this.offerRepository = offerRepository;
    }

    public PricingQuoteResponse calculateQuote(PricingQuoteRequest req) {
        if (req.getVehicleId() == null) {
            throw new IllegalArgumentException("Vehicle ID is required to calculate pricing quote.");
        }

        Vehicle vehicle = vehicleRepository.findById(req.getVehicleId())
                .orElseThrow(() -> new IllegalArgumentException("Vehicle not found with ID: " + req.getVehicleId()));

        String pickupCity = req.getPickupCity() != null ? req.getPickupCity().trim() : null;
        String dropCity = req.getDropCity() != null ? req.getDropCity().trim() : pickupCity;

        // Check for city-specific pricing
        Optional<CityPricing> cityPricingOpt = Optional.empty();
        if (pickupCity != null && !pickupCity.isEmpty()) {
            cityPricingOpt = cityPricingRepository.findByVehicleIdAndCityName(vehicle.getId(), pickupCity);
        }

        String mode = req.getRentalMode() != null ? req.getRentalMode().toUpperCase() : "DAILY";
        int duration = Math.max(1, req.getDuration());

        BigDecimal baseRate;
        BigDecimal defaultBaseRate;
        BigDecimal baseAmount;

        if ("HOURLY".equals(mode)) {
            defaultBaseRate = vehicle.getPricePerHour();
            baseRate = cityPricingOpt.map(cp -> cp.getHourlyRate() != null ? cp.getHourlyRate() : defaultBaseRate).orElse(defaultBaseRate);
            baseAmount = baseRate.multiply(BigDecimal.valueOf(duration)).setScale(2, RoundingMode.HALF_UP);
        } else if ("MONTHLY".equals(mode)) {
            defaultBaseRate = vehicle.getPricePerMonth();
            baseRate = cityPricingOpt.map(cp -> cp.getMonthlyRate() != null ? cp.getMonthlyRate() : defaultBaseRate).orElse(defaultBaseRate);
            baseAmount = baseRate.multiply(BigDecimal.valueOf(duration)).setScale(2, RoundingMode.HALF_UP);
        } else {
            mode = "DAILY";
            defaultBaseRate = vehicle.getPricePerDay();
            baseRate = cityPricingOpt.map(cp -> cp.getDailyRate() != null ? cp.getDailyRate() : defaultBaseRate).orElse(defaultBaseRate);
            baseAmount = baseRate.multiply(BigDecimal.valueOf(duration)).setScale(2, RoundingMode.HALF_UP);
        }

        BigDecimal cityDifferential = baseRate.subtract(defaultBaseRate).setScale(2, RoundingMode.HALF_UP);

        // Multi-day duration discount
        BigDecimal discount = BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP);
        if ("DAILY".equals(mode)) {
            if (duration >= 7) {
                discount = baseAmount.multiply(new BigDecimal("0.15")).setScale(2, RoundingMode.HALF_UP); // 15% discount for weekly+ rentals
            } else if (duration >= 3) {
                discount = baseAmount.multiply(new BigDecimal("0.10")).setScale(2, RoundingMode.HALF_UP); // 10% discount for 3+ days
            }
        } else if ("HOURLY".equals(mode) && duration >= 24) {
            discount = baseAmount.multiply(new BigDecimal("0.10")).setScale(2, RoundingMode.HALF_UP);
        }

        // Cross-city fee calculation
        BigDecimal crossCityFee = BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP);
        if (pickupCity != null && dropCity != null && !pickupCity.equalsIgnoreCase(dropCity)) {
            if (cityPricingOpt.isPresent()) {
                CityPricing cp = cityPricingOpt.get();
                if (!cp.isCrossCityEnabled()) {
                    throw new IllegalArgumentException("Cross-city rental from " + pickupCity + " to " + dropCity + " is currently not supported for " + vehicle.getName());
                }
                crossCityFee = cp.getCrossCityFee() != null ? cp.getCrossCityFee() : BigDecimal.valueOf(1499.0).setScale(2, RoundingMode.HALF_UP);
            } else {
                crossCityFee = BigDecimal.valueOf(1499.0).setScale(2, RoundingMode.HALF_UP); // Default cross-city logistics fee
            }
        }

        // Insurance calculation
        boolean isCar = vehicle.getVehicleType().name().contains("CAR");
        String plan = req.getInsurancePlan() != null ? req.getInsurancePlan().toUpperCase() : "PREMIUM";
        BigDecimal dailyInsuranceRate;

        switch (plan) {
            case "ZERO_DEPRECIATION":
                dailyInsuranceRate = isCar ? new BigDecimal("899.00") : new BigDecimal("349.00");
                break;
            case "BASIC":
                dailyInsuranceRate = isCar ? new BigDecimal("299.00") : new BigDecimal("99.00");
                break;
            case "PREMIUM":
            default:
                plan = "PREMIUM";
                dailyInsuranceRate = isCar ? new BigDecimal("499.00") : new BigDecimal("199.00");
                break;
        }

        BigDecimal insuranceAmount;
        if ("HOURLY".equals(mode)) {
            insuranceAmount = dailyInsuranceRate.divide(BigDecimal.valueOf(24), 4, RoundingMode.HALF_UP)
                    .multiply(BigDecimal.valueOf(duration))
                    .setScale(2, RoundingMode.HALF_UP);
        } else if ("MONTHLY".equals(mode)) {
            insuranceAmount = dailyInsuranceRate.multiply(BigDecimal.valueOf(30))
                    .multiply(BigDecimal.valueOf(duration))
                    .multiply(new BigDecimal("0.60"))
                    .setScale(2, RoundingMode.HALF_UP); // 40% discount on monthly insurance
        } else {
            insuranceAmount = dailyInsuranceRate.multiply(BigDecimal.valueOf(duration)).setScale(2, RoundingMode.HALF_UP);
        }

        BigDecimal taxableSubtotal = (baseAmount.subtract(discount)).add(insuranceAmount).add(crossCityFee);

        // Coupon calculation
        BigDecimal couponDiscount = BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP);
        String appliedCouponCode = null;
        if (couponRepository != null && req.getCouponCode() != null && !req.getCouponCode().trim().isEmpty()) {
            String code = req.getCouponCode().trim().toUpperCase();
            Optional<Coupon> couponOpt = couponRepository.findByCodeIgnoreCase(code);
            if (couponOpt.isPresent()) {
                Coupon c = couponOpt.get();
                boolean valid = c.isActive()
                        && (c.getExpiresAt() == null || c.getExpiresAt().isAfter(LocalDateTime.now()))
                        && (c.getMaxUses() <= 0 || c.getCurrentUses() < c.getMaxUses())
                        && taxableSubtotal.compareTo(c.getMinBookingAmount()) >= 0;

                if (valid) {
                    appliedCouponCode = c.getCode();
                    if ("PERCENTAGE".equalsIgnoreCase(c.getDiscountType())) {
                        couponDiscount = taxableSubtotal.multiply(c.getDiscountValue())
                                .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
                    } else {
                        couponDiscount = c.getDiscountValue();
                    }
                    if (c.getMaxDiscount() != null && couponDiscount.compareTo(c.getMaxDiscount()) > 0) {
                        couponDiscount = c.getMaxDiscount();
                    }
                    if (couponDiscount.compareTo(taxableSubtotal) > 0) {
                        couponDiscount = taxableSubtotal;
                    }
                }
            }
        }

        // Offer calculation
        BigDecimal offerDiscount = BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP);
        String appliedOfferName = null;
        if (offerRepository != null && req.getOfferId() != null) {
            Optional<Offer> offerOpt = offerRepository.findById(req.getOfferId());
            if (offerOpt.isPresent()) {
                Offer o = offerOpt.get();
                boolean valid = o.isActive()
                        && (o.getEndDate() == null || o.getEndDate().isAfter(LocalDateTime.now()))
                        && taxableSubtotal.compareTo(o.getMinBookingAmount()) >= 0;
                if (valid) {
                    appliedOfferName = o.getName();
                    if ("PERCENTAGE".equalsIgnoreCase(o.getDiscountType())) {
                        offerDiscount = taxableSubtotal.multiply(o.getDiscountValue())
                                .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
                    } else {
                        offerDiscount = o.getDiscountValue();
                    }
                    if (o.getMaxDiscount() != null && offerDiscount.compareTo(o.getMaxDiscount()) > 0) {
                        offerDiscount = o.getMaxDiscount();
                    }
                    BigDecimal remaining = taxableSubtotal.subtract(couponDiscount);
                    if (offerDiscount.compareTo(remaining) > 0) {
                        offerDiscount = remaining;
                    }
                }
            }
        }

        BigDecimal finalTaxable = taxableSubtotal.subtract(couponDiscount).subtract(offerDiscount);
        if (finalTaxable.compareTo(BigDecimal.ZERO) < 0) {
            finalTaxable = BigDecimal.ZERO;
        }

        // GST calculation (18% on taxable supply after promotional discounts)
        BigDecimal gstAmount = finalTaxable.multiply(new BigDecimal("0.18")).setScale(2, RoundingMode.HALF_UP);

        // Refundable Security Deposit
        BigDecimal deposit = cityPricingOpt.map(cp -> cp.getSecurityDeposit() != null ? cp.getSecurityDeposit() : vehicle.getSecurityDeposit()).orElse(vehicle.getSecurityDeposit());
        if (deposit == null) {
            deposit = BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP);
        }

        // Total
        BigDecimal total = finalTaxable.add(gstAmount).add(deposit).setScale(2, RoundingMode.HALF_UP);
        if (total.compareTo(BigDecimal.ZERO) < 0) {
            total = BigDecimal.ZERO;
        }

        PricingQuoteResponse quote = new PricingQuoteResponse();
        quote.setQuoteId("QUOTE_" + UUID.randomUUID().toString().substring(0, 12).toUpperCase());
        quote.setVehicleId(vehicle.getId());
        quote.setVehicleName(vehicle.getName());
        quote.setRentalMode(mode);
        quote.setDuration(duration);
        quote.setBaseRate(baseRate.doubleValue());
        quote.setBaseAmount(baseAmount.doubleValue());
        quote.setDiscountAmount(discount.doubleValue());
        quote.setInsurancePlan(plan);
        quote.setInsuranceAmount(insuranceAmount.doubleValue());
        quote.setCrossCityFee(crossCityFee.doubleValue());
        quote.setCityDifferential(cityDifferential.doubleValue());
        quote.setPickupCity(pickupCity);
        quote.setDropCity(dropCity);
        quote.setExpiresAt(LocalDateTime.now().plusMinutes(15).toString());
        quote.setGstPercent(18.0);
        quote.setGstAmount(gstAmount.doubleValue());
        quote.setSecurityDeposit(deposit.doubleValue());
        quote.setTotalAmount(total.doubleValue());
        quote.setCurrency("INR");
        quote.setCouponCode(appliedCouponCode);
        quote.setCouponDiscount(couponDiscount.doubleValue());
        quote.setOfferName(appliedOfferName);
        quote.setOfferDiscount(offerDiscount.doubleValue());

        return quote;
    }
}
