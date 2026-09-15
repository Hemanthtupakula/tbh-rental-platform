package com.tbh.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "fleet_units")
public class FleetUnit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String registrationNumber; // e.g. "TS-09-AB-1234"

    @Column(nullable = false, unique = true)
    private String vinNumber;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private FleetUnitStatus status = FleetUnitStatus.AVAILABLE;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "vehicle_id", nullable = false)
    private Vehicle vehicle;

    private String cityName;

    private String hubName;

    private String stateCode; // e.g. "TS", "KA", "TN", "MH", "DL"

    private int odometerKm = 1200;

    private String insuranceStatus = "VALID";

    private LocalDate insuranceExpiry = LocalDate.now().plusYears(1);

    private String pucStatus = "VALID";

    private LocalDate pucExpiry = LocalDate.now().plusMonths(6);

    private LocalDate registrationValidity = LocalDate.now().plusYears(5);

    private boolean isDemoVehicle = true;

    private String demoIdentifier; // e.g. "DEMO-TS-HYD-ACT-001"

    private LocalDateTime lastServicedAt;

    private LocalDateTime createdAt = LocalDateTime.now();

    public FleetUnit() {}

    public FleetUnit(String registrationNumber, String vinNumber, Vehicle vehicle, String cityName, String hubName) {
        this.registrationNumber = registrationNumber;
        this.vinNumber = vinNumber;
        this.vehicle = vehicle;
        this.cityName = cityName;
        this.hubName = hubName;
        this.status = FleetUnitStatus.AVAILABLE;
        this.isDemoVehicle = true;
    }

    public FleetUnit(String registrationNumber, String vinNumber, Vehicle vehicle, String cityName, String hubName, String stateCode, String demoIdentifier) {
        this.registrationNumber = registrationNumber;
        this.vinNumber = vinNumber;
        this.vehicle = vehicle;
        this.cityName = cityName;
        this.hubName = hubName;
        this.stateCode = stateCode;
        this.demoIdentifier = demoIdentifier;
        this.status = FleetUnitStatus.AVAILABLE;
        this.isDemoVehicle = true;
    }

    public String getMaskedRegistrationNumber() {
        if (registrationNumber == null || registrationNumber.length() < 6) return registrationNumber;
        String clean = registrationNumber.replaceAll("[^a-zA-Z0-9]", "");
        if (clean.length() >= 8) {
            return clean.substring(0, 4) + "••••" + clean.substring(clean.length() - 2);
        }
        return registrationNumber.substring(0, 4) + "••••";
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getRegistrationNumber() { return registrationNumber; }
    public void setRegistrationNumber(String registrationNumber) { this.registrationNumber = registrationNumber; }

    public String getVinNumber() { return vinNumber; }
    public void setVinNumber(String vinNumber) { this.vinNumber = vinNumber; }

    public FleetUnitStatus getStatus() { return status; }
    public void setStatus(FleetUnitStatus status) { this.status = status; }

    public Vehicle getVehicle() { return vehicle; }
    public void setVehicle(Vehicle vehicle) { this.vehicle = vehicle; }

    public String getCityName() { return cityName; }
    public void setCityName(String cityName) { this.cityName = cityName; }

    public String getHubName() { return hubName; }
    public void setHubName(String hubName) { this.hubName = hubName; }

    public String getStateCode() { return stateCode; }
    public void setStateCode(String stateCode) { this.stateCode = stateCode; }

    public int getOdometerKm() { return odometerKm; }
    public void setOdometerKm(int odometerKm) { this.odometerKm = odometerKm; }

    public String getInsuranceStatus() { return insuranceStatus; }
    public void setInsuranceStatus(String insuranceStatus) { this.insuranceStatus = insuranceStatus; }

    public LocalDate getInsuranceExpiry() { return insuranceExpiry; }
    public void setInsuranceExpiry(LocalDate insuranceExpiry) { this.insuranceExpiry = insuranceExpiry; }

    public String getPucStatus() { return pucStatus; }
    public void setPucStatus(String pucStatus) { this.pucStatus = pucStatus; }

    public LocalDate getPucExpiry() { return pucExpiry; }
    public void setPucExpiry(LocalDate pucExpiry) { this.pucExpiry = pucExpiry; }

    public LocalDate getRegistrationValidity() { return registrationValidity; }
    public void setRegistrationValidity(LocalDate registrationValidity) { this.registrationValidity = registrationValidity; }

    public boolean isDemoVehicle() { return isDemoVehicle; }
    public void setDemoVehicle(boolean demoVehicle) { isDemoVehicle = demoVehicle; }

    public String getDemoIdentifier() { return demoIdentifier; }
    public void setDemoIdentifier(String demoIdentifier) { this.demoIdentifier = demoIdentifier; }

    public LocalDateTime getLastServicedAt() { return lastServicedAt; }
    public void setLastServicedAt(LocalDateTime lastServicedAt) { this.lastServicedAt = lastServicedAt; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
