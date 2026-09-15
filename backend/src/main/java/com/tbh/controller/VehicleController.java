package com.tbh.controller;

import com.tbh.entity.Vehicle;
import com.tbh.service.VehicleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {

    private final VehicleService vehicleService;

    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    @GetMapping
    public ResponseEntity<List<Vehicle>> getVehicles(
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String fuel,
            @RequestParam(required = false) Double maxPrice) {
        return ResponseEntity.ok(vehicleService.searchVehicles(city, type, fuel, maxPrice));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getVehicleById(@PathVariable Long id) {
        return vehicleService.getVehicleById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}/availability")
    public ResponseEntity<?> getVehicleAvailability(
            @PathVariable Long id,
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String hub) {
        try {
            return ResponseEntity.ok(vehicleService.getVehicleAvailability(id, city, hub));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
