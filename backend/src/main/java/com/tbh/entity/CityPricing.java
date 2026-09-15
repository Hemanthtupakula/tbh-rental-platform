package com.tbh.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;

@Entity
@Table(name = "city_pricing", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"vehicle_id", "city_id"})
})
public class CityPricing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "vehicle_id", nullable = false)
    private Vehicle vehicle;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "hub_id")
    private LocationHub hub;

    @Column(name = "hourly_rate", precision = 12, scale = 2, nullable = false)
    private BigDecimal hourlyRate;

    @Column(name = "daily_rate", precision = 12, scale = 2, nullable = false)
    private BigDecimal dailyRate;

    @Column(name = "weekly_rate", precision = 12, scale = 2)
    private BigDecimal weeklyRate;

    @Column(name = "monthly_rate", precision = 12, scale = 2)
    private BigDecimal monthlyRate;

    @Column(name = "security_deposit", precision = 12, scale = 2)
    private BigDecimal securityDeposit;

    @Column(name = "insurance_daily_rate", precision = 12, scale = 2)
    private BigDecimal insuranceDailyRate;

    @Column(name = "delivery_fee", precision = 12, scale = 2)
    private BigDecimal deliveryFee = BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP);

    @Column(name = "drop_fee", precision = 12, scale = 2)
    private BigDecimal dropFee = BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP);

    @Column(name = "cross_city_fee", precision = 12, scale = 2)
    private BigDecimal crossCityFee = BigDecimal.valueOf(1499.0).setScale(2, RoundingMode.HALF_UP);

    private boolean crossCityEnabled = true;

    private boolean active = true;

    private LocalDateTime createdAt = LocalDateTime.now();

    public CityPricing() {}

    public CityPricing(Vehicle vehicle, City city, BigDecimal hourlyRate, BigDecimal dailyRate, BigDecimal weeklyRate, BigDecimal monthlyRate, BigDecimal securityDeposit) {
        this.vehicle = vehicle;
        this.city = city;
        this.hourlyRate = hourlyRate != null ? hourlyRate.setScale(2, RoundingMode.HALF_UP) : null;
        this.dailyRate = dailyRate != null ? dailyRate.setScale(2, RoundingMode.HALF_UP) : null;
        this.weeklyRate = weeklyRate != null ? weeklyRate.setScale(2, RoundingMode.HALF_UP) : null;
        this.monthlyRate = monthlyRate != null ? monthlyRate.setScale(2, RoundingMode.HALF_UP) : null;
        this.securityDeposit = securityDeposit != null ? securityDeposit.setScale(2, RoundingMode.HALF_UP) : null;
        this.active = true;
        this.crossCityEnabled = true;
    }

    public CityPricing(Vehicle vehicle, City city, Double hourlyRate, Double dailyRate, Double weeklyRate, Double monthlyRate, Double securityDeposit) {
        this(vehicle, city,
             hourlyRate != null ? BigDecimal.valueOf(hourlyRate) : null,
             dailyRate != null ? BigDecimal.valueOf(dailyRate) : null,
             weeklyRate != null ? BigDecimal.valueOf(weeklyRate) : null,
             monthlyRate != null ? BigDecimal.valueOf(monthlyRate) : null,
             securityDeposit != null ? BigDecimal.valueOf(securityDeposit) : null);
    }

    public CityPricing(Vehicle vehicle, City city, Double hourlyRate, Double dailyRate, Double weeklyRate, Double monthlyRate, BigDecimal securityDeposit) {
        this(vehicle, city,
             hourlyRate != null ? BigDecimal.valueOf(hourlyRate) : null,
             dailyRate != null ? BigDecimal.valueOf(dailyRate) : null,
             weeklyRate != null ? BigDecimal.valueOf(weeklyRate) : null,
             monthlyRate != null ? BigDecimal.valueOf(monthlyRate) : null,
             securityDeposit);
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Vehicle getVehicle() { return vehicle; }
    public void setVehicle(Vehicle vehicle) { this.vehicle = vehicle; }

    public City getCity() { return city; }
    public void setCity(City city) { this.city = city; }

    public LocationHub getHub() { return hub; }
    public void setHub(LocationHub hub) { this.hub = hub; }

    public BigDecimal getHourlyRate() { return hourlyRate; }
    public void setHourlyRate(BigDecimal hourlyRate) { this.hourlyRate = hourlyRate != null ? hourlyRate.setScale(2, RoundingMode.HALF_UP) : null; }
    public void setHourlyRate(Double hourlyRate) { this.hourlyRate = hourlyRate != null ? BigDecimal.valueOf(hourlyRate).setScale(2, RoundingMode.HALF_UP) : null; }

    public BigDecimal getDailyRate() { return dailyRate; }
    public void setDailyRate(BigDecimal dailyRate) { this.dailyRate = dailyRate != null ? dailyRate.setScale(2, RoundingMode.HALF_UP) : null; }
    public void setDailyRate(Double dailyRate) { this.dailyRate = dailyRate != null ? BigDecimal.valueOf(dailyRate).setScale(2, RoundingMode.HALF_UP) : null; }

    public BigDecimal getWeeklyRate() { return weeklyRate; }
    public void setWeeklyRate(BigDecimal weeklyRate) { this.weeklyRate = weeklyRate != null ? weeklyRate.setScale(2, RoundingMode.HALF_UP) : null; }
    public void setWeeklyRate(Double weeklyRate) { this.weeklyRate = weeklyRate != null ? BigDecimal.valueOf(weeklyRate).setScale(2, RoundingMode.HALF_UP) : null; }

    public BigDecimal getMonthlyRate() { return monthlyRate; }
    public void setMonthlyRate(BigDecimal monthlyRate) { this.monthlyRate = monthlyRate != null ? monthlyRate.setScale(2, RoundingMode.HALF_UP) : null; }
    public void setMonthlyRate(Double monthlyRate) { this.monthlyRate = monthlyRate != null ? BigDecimal.valueOf(monthlyRate).setScale(2, RoundingMode.HALF_UP) : null; }

    public BigDecimal getSecurityDeposit() { return securityDeposit; }
    public void setSecurityDeposit(BigDecimal securityDeposit) { this.securityDeposit = securityDeposit != null ? securityDeposit.setScale(2, RoundingMode.HALF_UP) : null; }
    public void setSecurityDeposit(Double securityDeposit) { this.securityDeposit = securityDeposit != null ? BigDecimal.valueOf(securityDeposit).setScale(2, RoundingMode.HALF_UP) : null; }

    public BigDecimal getInsuranceDailyRate() { return insuranceDailyRate; }
    public void setInsuranceDailyRate(BigDecimal insuranceDailyRate) { this.insuranceDailyRate = insuranceDailyRate != null ? insuranceDailyRate.setScale(2, RoundingMode.HALF_UP) : null; }
    public void setInsuranceDailyRate(Double insuranceDailyRate) { this.insuranceDailyRate = insuranceDailyRate != null ? BigDecimal.valueOf(insuranceDailyRate).setScale(2, RoundingMode.HALF_UP) : null; }

    public BigDecimal getDeliveryFee() { return deliveryFee; }
    public void setDeliveryFee(BigDecimal deliveryFee) { this.deliveryFee = deliveryFee != null ? deliveryFee.setScale(2, RoundingMode.HALF_UP) : BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP); }
    public void setDeliveryFee(Double deliveryFee) { setDeliveryFee(deliveryFee != null ? BigDecimal.valueOf(deliveryFee) : BigDecimal.ZERO); }

    public BigDecimal getDropFee() { return dropFee; }
    public void setDropFee(BigDecimal dropFee) { this.dropFee = dropFee != null ? dropFee.setScale(2, RoundingMode.HALF_UP) : BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP); }
    public void setDropFee(Double dropFee) { setDropFee(dropFee != null ? BigDecimal.valueOf(dropFee) : BigDecimal.ZERO); }

    public BigDecimal getCrossCityFee() { return crossCityFee; }
    public void setCrossCityFee(BigDecimal crossCityFee) { this.crossCityFee = crossCityFee != null ? crossCityFee.setScale(2, RoundingMode.HALF_UP) : BigDecimal.valueOf(1499.0).setScale(2, RoundingMode.HALF_UP); }
    public void setCrossCityFee(Double crossCityFee) { setCrossCityFee(crossCityFee != null ? BigDecimal.valueOf(crossCityFee) : BigDecimal.valueOf(1499.0)); }

    public boolean isCrossCityEnabled() { return crossCityEnabled; }
    public void setCrossCityEnabled(boolean crossCityEnabled) { this.crossCityEnabled = crossCityEnabled; }

    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
