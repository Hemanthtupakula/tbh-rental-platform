package com.tbh.service.kyc;

import com.tbh.entity.VehicleType;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.Set;
import java.util.TreeSet;

/**
 * Vehicle Class Validator:
 * Evaluates transport permissions against rental categories.
 * 
 * Rules:
 * - MCWG / MCWOG / M/CYCL: Two-Wheelers (BIKE, SCOOTER, ELECTRIC_BIKE, ELECTRIC_SCOOTER)
 * - LMV / LMV-NT / MOTOR CAR: Cars (PETROL_CAR, DIESEL_CAR, ELECTRIC_CAR)
 * - TRANS / HGMV / HPMV: Heavy / Commercial (also covers LMV)
 */
@Component
public class VehicleClassValidator {

    public enum ClassStatus {
        ELIGIBLE_ALL,
        ELIGIBLE_TWO_WHEELER_ONLY,
        ELIGIBLE_FOUR_WHEELER_ONLY,
        CLASS_UNKNOWN
    }

    public ClassStatus evaluateClasses(Set<String> extractedClasses) {
        if (extractedClasses == null || extractedClasses.isEmpty()) {
            return ClassStatus.CLASS_UNKNOWN;
        }

        boolean hasTwoWheeler = false;
        boolean hasFourWheeler = false;

        for (String c : extractedClasses) {
            String upper = c.toUpperCase();
            if (upper.contains("MCWG") || upper.contains("MCWOG") || upper.contains("TWO") || upper.contains("M/CYCL")) {
                hasTwoWheeler = true;
            }
            if (upper.contains("LMV") || upper.contains("CAR") || upper.contains("TRANS") || upper.contains("FOUR")) {
                hasFourWheeler = true;
            }
        }

        if (hasTwoWheeler && hasFourWheeler) {
            return ClassStatus.ELIGIBLE_ALL;
        } else if (hasTwoWheeler) {
            return ClassStatus.ELIGIBLE_TWO_WHEELER_ONLY;
        } else if (hasFourWheeler) {
            return ClassStatus.ELIGIBLE_FOUR_WHEELER_ONLY;
        }

        return ClassStatus.CLASS_UNKNOWN;
    }

    public boolean isEligibleForVehicleType(Set<String> extractedClasses, VehicleType vehicleType) {
        if (vehicleType == null) return false;

        // If no explicit classes were extracted or parsed, admin review is needed
        if (extractedClasses == null || extractedClasses.isEmpty()) {
            return false;
        }

        boolean isTwoWheeler = (vehicleType == VehicleType.BIKE || 
                                vehicleType == VehicleType.SCOOTER || 
                                vehicleType == VehicleType.ELECTRIC_BIKE || 
                                vehicleType == VehicleType.ELECTRIC_SCOOTER);

        boolean isCar = (vehicleType == VehicleType.PETROL_CAR || 
                         vehicleType == VehicleType.DIESEL_CAR || 
                         vehicleType == VehicleType.ELECTRIC_CAR);

        for (String c : extractedClasses) {
            String upper = c.toUpperCase();
            if (isTwoWheeler && (upper.contains("MCWG") || upper.contains("MCWOG") || upper.contains("M/CYCL"))) {
                return true;
            }
            if (isCar && (upper.contains("LMV") || upper.contains("TRANS") || upper.contains("CAR"))) {
                return true;
            }
        }

        return false;
    }

    public Set<String> parseClassesString(String classesStr) {
        if (classesStr == null || classesStr.isBlank()) {
            return Collections.emptySet();
        }
        Set<String> set = new TreeSet<>();
        String[] parts = classesStr.split("[,;/\\s]+");
        for (String p : parts) {
            String clean = p.trim().toUpperCase();
            if (!clean.isEmpty()) {
                set.add(clean);
            }
        }
        return set;
    }
}






