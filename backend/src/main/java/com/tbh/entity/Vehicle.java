package com.tbh.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.math.RoundingMode;

@Entity
@Table(name = "vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String brand;

    private String model;

    private String variant;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private VehicleType vehicleType;

    @Enumerated(EnumType.STRING)
    private RentalCategory category;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private FuelType fuelType;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Transmission transmission;

    private int seats;

    private String engineOrBattery;

    private int maxSpeed; // in km/h

    private double zeroToHundred; // in seconds

    @Column(name = "price_per_hour", precision = 12, scale = 2, nullable = false)
    private BigDecimal pricePerHour = BigDecimal.ZERO;

    @Column(name = "price_per_day", precision = 12, scale = 2, nullable = false)
    private BigDecimal pricePerDay = BigDecimal.ZERO;

    @Column(name = "price_per_week", precision = 12, scale = 2, nullable = false)
    private BigDecimal pricePerWeek = BigDecimal.ZERO;

    @Column(name = "price_per_month", precision = 12, scale = 2, nullable = false)
    private BigDecimal pricePerMonth = BigDecimal.ZERO;

    @Column(name = "security_deposit", precision = 12, scale = 2, nullable = false)
    private BigDecimal securityDeposit = BigDecimal.ZERO;

    @Column(name = "insurance_fee", precision = 12, scale = 2, nullable = false)
    private BigDecimal insuranceFee = BigDecimal.ZERO;

    private String mileageOrRange;

    private double rating = 0.0;

    private int reviewCount = 0;

    private int tripsCompleted = 0;

    private String imageUrl;

    private String colorHex = "#00E5C7";

    private boolean available = true;

    @Transient
    private int fleetUnitsAvailable = 0;

    @Column(length = 1000)
    private String features;

    @Column(length = 1000)
    private String cityNames;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AssetType assetType = AssetType.GALLERY;

    private String model3dUrl;

    private String model3dSource;

    private String model3dLicense;

    @Column(length = 4000)
    private String galleryImageUrls;

    private String imageSource;

    private String imageLicense;

    private String imageAttribution;

    private boolean assetVerified = false;

    private double powerBhp;

    private double torqueNm;

    private int groundClearanceMm;

    private int bootCapacityLitres;

    // EV-Specific Telemetry
    private boolean isElectric = false;
    private Double batteryCapacityKwh;
    private Double chargingTimeHours;
    private boolean fastChargingSupported = false;
    private Integer fastChargingTimeMinutes;
    private String chargingConnectorType;
    private Double motorPowerKw;
    private Double motorTorqueNm;

    public Vehicle() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }

    public String getModel() { return model; }
    public void setModel(String model) { this.model = model; }

    public String getVariant() { return variant; }
    public void setVariant(String variant) { this.variant = variant; }

    public VehicleType getVehicleType() { return vehicleType; }
    public void setVehicleType(VehicleType vehicleType) { this.vehicleType = vehicleType; }

    public RentalCategory getCategory() { return category; }
    public void setCategory(RentalCategory category) { this.category = category; }

    public FuelType getFuelType() { return fuelType; }
    public void setFuelType(FuelType fuelType) { this.fuelType = fuelType; }

    public Transmission getTransmission() { return transmission; }
    public void setTransmission(Transmission transmission) { this.transmission = transmission; }

    public int getSeats() { return seats; }
    public void setSeats(int seats) { this.seats = seats; }

    public String getEngineOrBattery() { return engineOrBattery; }
    public void setEngineOrBattery(String engineOrBattery) { this.engineOrBattery = engineOrBattery; }

    public int getMaxSpeed() { return maxSpeed; }
    public void setMaxSpeed(int maxSpeed) { this.maxSpeed = maxSpeed; }

    public double getZeroToHundred() { return zeroToHundred; }
    public void setZeroToHundred(double zeroToHundred) { this.zeroToHundred = zeroToHundred; }

    public BigDecimal getPricePerHour() { return pricePerHour; }
    public void setPricePerHour(BigDecimal pricePerHour) { this.pricePerHour = pricePerHour != null ? pricePerHour.setScale(2, RoundingMode.HALF_UP) : BigDecimal.ZERO; }
    public void setPricePerHour(double pricePerHour) { setPricePerHour(BigDecimal.valueOf(pricePerHour)); }

    public BigDecimal getPricePerDay() { return pricePerDay; }
    public void setPricePerDay(BigDecimal pricePerDay) { this.pricePerDay = pricePerDay != null ? pricePerDay.setScale(2, RoundingMode.HALF_UP) : BigDecimal.ZERO; }
    public void setPricePerDay(double pricePerDay) { setPricePerDay(BigDecimal.valueOf(pricePerDay)); }

    public BigDecimal getPricePerWeek() { return pricePerWeek; }
    public void setPricePerWeek(BigDecimal pricePerWeek) { this.pricePerWeek = pricePerWeek != null ? pricePerWeek.setScale(2, RoundingMode.HALF_UP) : BigDecimal.ZERO; }
    public void setPricePerWeek(double pricePerWeek) { setPricePerWeek(BigDecimal.valueOf(pricePerWeek)); }

    public BigDecimal getPricePerMonth() { return pricePerMonth; }
    public void setPricePerMonth(BigDecimal pricePerMonth) { this.pricePerMonth = pricePerMonth != null ? pricePerMonth.setScale(2, RoundingMode.HALF_UP) : BigDecimal.ZERO; }
    public void setPricePerMonth(double pricePerMonth) { setPricePerMonth(BigDecimal.valueOf(pricePerMonth)); }

    public BigDecimal getSecurityDeposit() { return securityDeposit; }
    public void setSecurityDeposit(BigDecimal securityDeposit) { this.securityDeposit = securityDeposit != null ? securityDeposit.setScale(2, RoundingMode.HALF_UP) : BigDecimal.ZERO; }
    public void setSecurityDeposit(double securityDeposit) { setSecurityDeposit(BigDecimal.valueOf(securityDeposit)); }

    public BigDecimal getInsuranceFee() { return insuranceFee; }
    public void setInsuranceFee(BigDecimal insuranceFee) { this.insuranceFee = insuranceFee != null ? insuranceFee.setScale(2, RoundingMode.HALF_UP) : BigDecimal.ZERO; }
    public void setInsuranceFee(double insuranceFee) { setInsuranceFee(BigDecimal.valueOf(insuranceFee)); }

    public String getMileageOrRange() { return mileageOrRange; }
    public void setMileageOrRange(String mileageOrRange) { this.mileageOrRange = mileageOrRange; }

    public double getRating() { return rating; }
    public void setRating(double rating) { this.rating = rating; }

    public int getReviewCount() { return reviewCount; }
    public void setReviewCount(int reviewCount) { this.reviewCount = reviewCount; }

    public int getTripsCompleted() { return tripsCompleted; }
    public void setTripsCompleted(int tripsCompleted) { this.tripsCompleted = tripsCompleted; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getColorHex() { return colorHex; }
    public void setColorHex(String colorHex) { this.colorHex = colorHex; }

    public boolean isAvailable() { return available; }
    public void setAvailable(boolean available) { this.available = available; }

    public int getFleetUnitsAvailable() { return fleetUnitsAvailable; }
    public void setFleetUnitsAvailable(int fleetUnitsAvailable) { this.fleetUnitsAvailable = fleetUnitsAvailable; }

    public String getFeatures() { return features; }
    public void setFeatures(String features) { this.features = features; }

    public String getCityNames() { return cityNames; }
    public void setCityNames(String cityNames) { this.cityNames = cityNames; }

    public AssetType getAssetType() { return assetType; }
    public void setAssetType(AssetType assetType) { this.assetType = assetType; }

    public String getModel3dUrl() { return model3dUrl; }
    public void setModel3dUrl(String model3dUrl) { this.model3dUrl = model3dUrl; }

    public String getModel3dSource() { return model3dSource; }
    public void setModel3dSource(String model3dSource) { this.model3dSource = model3dSource; }

    public String getModel3dLicense() { return model3dLicense; }
    public void setModel3dLicense(String model3dLicense) { this.model3dLicense = model3dLicense; }

    public String getGalleryImageUrls() { return galleryImageUrls; }
    public void setGalleryImageUrls(String galleryImageUrls) { this.galleryImageUrls = galleryImageUrls; }

    public String getImageSource() { return imageSource; }
    public void setImageSource(String imageSource) { this.imageSource = imageSource; }

    public String getImageLicense() { return imageLicense; }
    public void setImageLicense(String imageLicense) { this.imageLicense = imageLicense; }

    public String getImageAttribution() { return imageAttribution; }
    public void setImageAttribution(String imageAttribution) { this.imageAttribution = imageAttribution; }

    public boolean isAssetVerified() { return assetVerified; }
    public void setAssetVerified(boolean assetVerified) { this.assetVerified = assetVerified; }

    public double getPowerBhp() { return powerBhp; }
    public void setPowerBhp(double powerBhp) { this.powerBhp = powerBhp; }

    public double getTorqueNm() { return torqueNm; }
    public void setTorqueNm(double torqueNm) { this.torqueNm = torqueNm; }

    public int getGroundClearanceMm() { return groundClearanceMm; }
    public void setGroundClearanceMm(int groundClearanceMm) { this.groundClearanceMm = groundClearanceMm; }

    public int getBootCapacityLitres() { return bootCapacityLitres; }
    public void setBootCapacityLitres(int bootCapacityLitres) { this.bootCapacityLitres = bootCapacityLitres; }

    public boolean isElectric() { return isElectric; }
    public void setElectric(boolean electric) { isElectric = electric; }

    public Double getBatteryCapacityKwh() { return batteryCapacityKwh; }
    public void setBatteryCapacityKwh(Double batteryCapacityKwh) { this.batteryCapacityKwh = batteryCapacityKwh; }

    public Double getChargingTimeHours() { return chargingTimeHours; }
    public void setChargingTimeHours(Double chargingTimeHours) { this.chargingTimeHours = chargingTimeHours; }

    public boolean isFastChargingSupported() { return fastChargingSupported; }
    public void setFastChargingSupported(boolean fastChargingSupported) { this.fastChargingSupported = fastChargingSupported; }

    public Integer getFastChargingTimeMinutes() { return fastChargingTimeMinutes; }
    public void setFastChargingTimeMinutes(Integer fastChargingTimeMinutes) { this.fastChargingTimeMinutes = fastChargingTimeMinutes; }

    public String getChargingConnectorType() { return chargingConnectorType; }
    public void setChargingConnectorType(String chargingConnectorType) { this.chargingConnectorType = chargingConnectorType; }

    public Double getMotorPowerKw() { return motorPowerKw; }
    public void setMotorPowerKw(Double motorPowerKw) { this.motorPowerKw = motorPowerKw; }

    public Double getMotorTorqueNm() { return motorTorqueNm; }
    public void setMotorTorqueNm(Double motorTorqueNm) { this.motorTorqueNm = motorTorqueNm; }
}
