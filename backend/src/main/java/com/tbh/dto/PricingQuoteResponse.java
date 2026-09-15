package com.tbh.dto;

public class PricingQuoteResponse {

    private String quoteId;
    private Long vehicleId;
    private String vehicleName;
    private String rentalMode;
    private int duration;
    private double baseRate;
    private double baseAmount;
    private double discountAmount;
    private String insurancePlan;
    private double insuranceAmount;
    private double gstPercent = 18.0;
    private double gstAmount;
    private double securityDeposit;
    private double crossCityFee = 0.0;
    private double cityDifferential = 0.0;
    private String pickupCity;
    private String dropCity;
    private String expiresAt;
    private double totalAmount;
    private String currency = "INR";
    private String couponCode;
    private double couponDiscount = 0.0;
    private String offerName;
    private double offerDiscount = 0.0;

    public PricingQuoteResponse() {}

    public String getQuoteId() { return quoteId; }
    public void setQuoteId(String quoteId) { this.quoteId = quoteId; }

    public Long getVehicleId() { return vehicleId; }
    public void setVehicleId(Long vehicleId) { this.vehicleId = vehicleId; }

    public String getVehicleName() { return vehicleName; }
    public void setVehicleName(String vehicleName) { this.vehicleName = vehicleName; }

    public String getRentalMode() { return rentalMode; }
    public void setRentalMode(String rentalMode) { this.rentalMode = rentalMode; }

    public int getDuration() { return duration; }
    public void setDuration(int duration) { this.duration = duration; }

    public double getBaseRate() { return baseRate; }
    public void setBaseRate(double baseRate) { this.baseRate = baseRate; }

    public double getBaseAmount() { return baseAmount; }
    public void setBaseAmount(double baseAmount) { this.baseAmount = baseAmount; }

    public double getDiscountAmount() { return discountAmount; }
    public void setDiscountAmount(double discountAmount) { this.discountAmount = discountAmount; }

    public String getInsurancePlan() { return insurancePlan; }
    public void setInsurancePlan(String insurancePlan) { this.insurancePlan = insurancePlan; }

    public double getInsuranceAmount() { return insuranceAmount; }
    public void setInsuranceAmount(double insuranceAmount) { this.insuranceAmount = insuranceAmount; }

    public double getGstPercent() { return gstPercent; }
    public void setGstPercent(double gstPercent) { this.gstPercent = gstPercent; }

    public double getGstAmount() { return gstAmount; }
    public void setGstAmount(double gstAmount) { this.gstAmount = gstAmount; }


    public double getSecurityDeposit() { return securityDeposit; }
    public void setSecurityDeposit(double securityDeposit) { this.securityDeposit = securityDeposit; }

    public double getCrossCityFee() { return crossCityFee; }
    public void setCrossCityFee(double crossCityFee) { this.crossCityFee = crossCityFee; }

    public double getCityDifferential() { return cityDifferential; }
    public void setCityDifferential(double cityDifferential) { this.cityDifferential = cityDifferential; }

    public String getPickupCity() { return pickupCity; }
    public void setPickupCity(String pickupCity) { this.pickupCity = pickupCity; }

    public String getDropCity() { return dropCity; }
    public void setDropCity(String dropCity) { this.dropCity = dropCity; }

    public String getExpiresAt() { return expiresAt; }
    public void setExpiresAt(String expiresAt) { this.expiresAt = expiresAt; }

    public double getTotalAmount() { return totalAmount; }
    public void setTotalAmount(double totalAmount) { this.totalAmount = totalAmount; }

    public String getCurrency() { return currency; }
    public void setCurrency(String currency) { this.currency = currency; }

    public String getCouponCode() { return couponCode; }
    public void setCouponCode(String couponCode) { this.couponCode = couponCode; }

    public double getCouponDiscount() { return couponDiscount; }
    public void setCouponDiscount(double couponDiscount) { this.couponDiscount = couponDiscount; }

    public String getOfferName() { return offerName; }
    public void setOfferName(String offerName) { this.offerName = offerName; }

    public double getOfferDiscount() { return offerDiscount; }
    public void setOfferDiscount(double offerDiscount) { this.offerDiscount = offerDiscount; }
}
