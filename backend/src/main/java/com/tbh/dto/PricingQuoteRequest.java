package com.tbh.dto;

import java.time.LocalDateTime;

public class PricingQuoteRequest {

    private Long vehicleId;
    private String rentalMode; // HOURLY, DAILY, MONTHLY
    private int duration;
    private String insurancePlan = "PREMIUM"; // BASIC, PREMIUM, ZERO_DEPRECIATION
    private LocalDateTime pickupDateTime;
    private LocalDateTime dropDateTime;
    private String pickupCity;
    private String dropCity;
    private Long pickupHubId;
    private Long dropHubId;
    private String couponCode;
    private Long offerId;

    public PricingQuoteRequest() {}

    public String getCouponCode() { return couponCode; }
    public void setCouponCode(String couponCode) { this.couponCode = couponCode; }

    public Long getOfferId() { return offerId; }
    public void setOfferId(Long offerId) { this.offerId = offerId; }

    public Long getVehicleId() { return vehicleId; }
    public void setVehicleId(Long vehicleId) { this.vehicleId = vehicleId; }

    public String getRentalMode() { return rentalMode; }
    public void setRentalMode(String rentalMode) { this.rentalMode = rentalMode; }

    public int getDuration() { return duration; }
    public void setDuration(int duration) { this.duration = duration; }

    public String getInsurancePlan() { return insurancePlan; }
    public void setInsurancePlan(String insurancePlan) { this.insurancePlan = insurancePlan; }

    public LocalDateTime getPickupDateTime() { return pickupDateTime; }
    public void setPickupDateTime(LocalDateTime pickupDateTime) { this.pickupDateTime = pickupDateTime; }

    public LocalDateTime getDropDateTime() { return dropDateTime; }
    public void setDropDateTime(LocalDateTime dropDateTime) { this.dropDateTime = dropDateTime; }

    public String getPickupCity() { return pickupCity; }
    public void setPickupCity(String pickupCity) { this.pickupCity = pickupCity; }

    public String getDropCity() { return dropCity; }
    public void setDropCity(String dropCity) { this.dropCity = dropCity; }

    public Long getPickupHubId() { return pickupHubId; }
    public void setPickupHubId(Long pickupHubId) { this.pickupHubId = pickupHubId; }

    public Long getDropHubId() { return dropHubId; }
    public void setDropHubId(Long dropHubId) { this.dropHubId = dropHubId; }
}
