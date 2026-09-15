package com.tbh.dto;

import java.time.LocalDateTime;

public class BookingRequest {
    private Long userId;
    private Long vehicleId;
    private String pickupCity;
    private String dropCity;
    private String pickupHub;
    private String dropHub;
    private LocalDateTime pickupDateTime;
    private LocalDateTime dropDateTime;
    private String rentalMode; // HOURLY, DAILY, MONTHLY
    private int duration;
    private String paymentMethod;
    private boolean includeHelmet;
    private boolean includeZeroDep;
    private String couponCode;

    public BookingRequest() {}

    public String getCouponCode() { return couponCode; }
    public void setCouponCode(String couponCode) { this.couponCode = couponCode; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public Long getVehicleId() { return vehicleId; }
    public void setVehicleId(Long vehicleId) { this.vehicleId = vehicleId; }

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

    public String getPaymentMethod() { return paymentMethod; }
    public void setPaymentMethod(String paymentMethod) { this.paymentMethod = paymentMethod; }

    public boolean isIncludeHelmet() { return includeHelmet; }
    public void setIncludeHelmet(boolean includeHelmet) { this.includeHelmet = includeHelmet; }

    public boolean isIncludeZeroDep() { return includeZeroDep; }
    public void setIncludeZeroDep(boolean includeZeroDep) { this.includeZeroDep = includeZeroDep; }
}
