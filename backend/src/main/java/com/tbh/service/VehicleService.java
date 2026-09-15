package com.tbh.service;

import com.tbh.entity.FleetUnitStatus;
import com.tbh.entity.FuelType;
import com.tbh.entity.Vehicle;
import com.tbh.entity.VehicleType;
import com.tbh.repository.FleetUnitRepository;
import com.tbh.repository.VehicleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleService {

    private final VehicleRepository vehicleRepository;
    private final FleetUnitRepository fleetUnitRepository;

    public VehicleService(VehicleRepository vehicleRepository, FleetUnitRepository fleetUnitRepository) {
        this.vehicleRepository = vehicleRepository;
        this.fleetUnitRepository = fleetUnitRepository;
    }

    public List<Vehicle> getAllVehicles() {
        List<Vehicle> list = vehicleRepository.findAll();
        enrichVehiclesWithFleetCounts(list, null);
        return list;
    }

    public Optional<Vehicle> getVehicleById(Long id) {
        Optional<Vehicle> opt = vehicleRepository.findById(id);
        opt.ifPresent(v -> enrichVehicleWithFleetCount(v, null));
        return opt;
    }

    public List<Vehicle> searchVehicles(String city, String vehicleTypeStr, String fuelTypeStr, Double maxHourlyRate) {
        VehicleType vType = null;
        if (vehicleTypeStr != null && !vehicleTypeStr.isBlank() && !vehicleTypeStr.equalsIgnoreCase("ALL")) {
            try {
                vType = VehicleType.valueOf(vehicleTypeStr.toUpperCase());
            } catch (IllegalArgumentException ignored) {}
        }

        FuelType fType = null;
        if (fuelTypeStr != null && !fuelTypeStr.isBlank() && !fuelTypeStr.equalsIgnoreCase("ALL")) {
            try {
                fType = FuelType.valueOf(fuelTypeStr.toUpperCase());
            } catch (IllegalArgumentException ignored) {}
        }

        String searchCity = (city != null && !city.isBlank() && !city.equalsIgnoreCase("ALL")) ? city : null;

        List<Vehicle> list = vehicleRepository.searchVehicles(searchCity, vType, fType, maxHourlyRate);
        enrichVehiclesWithFleetCounts(list, searchCity);
        return list;
    }

    public Vehicle saveVehicle(Vehicle vehicle) {
        Vehicle saved = vehicleRepository.save(vehicle);
        enrichVehicleWithFleetCount(saved, null);
        return saved;
    }

    public java.util.Map<String, Object> getVehicleAvailability(Long vehicleId, String city, String hub) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new IllegalArgumentException("Vehicle not found: " + vehicleId));

        java.util.List<com.tbh.entity.FleetUnit> units;
        if (city != null && !city.isBlank() && !city.equalsIgnoreCase("ALL")) {
            if (hub != null && !hub.isBlank()) {
                units = fleetUnitRepository.findByVehicleIdAndCityNameAndHubName(vehicleId, city, hub);
            } else {
                units = fleetUnitRepository.findByVehicleIdAndCityName(vehicleId, city);
            }
        } else {
            units = fleetUnitRepository.findByVehicleId(vehicleId);
        }

        long availableCount = units.stream()
                .filter(u -> u.getStatus() == FleetUnitStatus.AVAILABLE)
                .count();

        java.util.List<java.util.Map<String, Object>> unitList = units.stream().map(u -> {
            java.util.Map<String, Object> m = new java.util.HashMap<>();
            m.put("id", u.getId());
            m.put("maskedRegistrationNumber", u.getMaskedRegistrationNumber());
            m.put("cityName", u.getCityName());
            m.put("hubName", u.getHubName());
            m.put("status", u.getStatus().name());
            m.put("stateCode", u.getStateCode());
            m.put("demoIdentifier", u.getDemoIdentifier());
            return m;
        }).toList();

        java.util.Map<String, Object> result = new java.util.HashMap<>();
        result.put("vehicleId", vehicle.getId());
        result.put("vehicleName", vehicle.getName());
        result.put("cityName", (city != null && !city.isBlank() && !city.equalsIgnoreCase("ALL")) ? city : "All Cities");
        result.put("availableUnits", availableCount);
        result.put("totalUnits", units.size());
        result.put("isAvailable", availableCount > 0);
        result.put("units", unitList);
        return result;
    }

    private void enrichVehiclesWithFleetCounts(List<Vehicle> vehicles, String city) {
        for (Vehicle v : vehicles) {
            enrichVehicleWithFleetCount(v, city);
        }
    }

    private void enrichVehicleWithFleetCount(Vehicle v, String city) {
        if (v == null || v.getId() == null) return;
        long count;
        if (city != null && !city.isBlank() && !city.equalsIgnoreCase("ALL")) {
            count = fleetUnitRepository.countByVehicleIdAndStatusAndCityName(v.getId(), FleetUnitStatus.AVAILABLE, city);
        } else {
            count = fleetUnitRepository.countByVehicleIdAndStatus(v.getId(), FleetUnitStatus.AVAILABLE);
        }
        v.setFleetUnitsAvailable((int) count);
        if (count == 0) {
            v.setAvailable(false);
        }
    }
}
