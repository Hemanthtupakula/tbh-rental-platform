package com.tbh.repository;

import com.tbh.entity.FleetUnit;
import com.tbh.entity.FleetUnitStatus;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import jakarta.persistence.LockModeType;
import java.util.List;
import java.util.Optional;

public interface FleetUnitRepository extends JpaRepository<FleetUnit, Long> {
    List<FleetUnit> findByVehicleId(Long vehicleId);
    List<FleetUnit> findByVehicleIdAndStatus(Long vehicleId, FleetUnitStatus status);
    List<FleetUnit> findByVehicleIdAndStatusAndCityName(Long vehicleId, FleetUnitStatus status, String cityName);
    long countByVehicleIdAndStatus(Long vehicleId, FleetUnitStatus status);
    long countByVehicleIdAndStatusAndCityName(Long vehicleId, FleetUnitStatus status, String cityName);
    long countByVehicleId(Long vehicleId);

    List<FleetUnit> findByCityName(String cityName);
    List<FleetUnit> findByCityNameAndHubName(String cityName, String hubName);
    List<FleetUnit> findByVehicleIdAndCityName(Long vehicleId, String cityName);
    List<FleetUnit> findByVehicleIdAndCityNameAndHubName(Long vehicleId, String cityName, String hubName);
    List<FleetUnit> findByStatus(FleetUnitStatus status);

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT f FROM FleetUnit f WHERE f.vehicle.id = :vehicleId AND f.status = :status AND (:cityName IS NULL OR LOWER(f.cityName) = LOWER(:cityName))")
    List<FleetUnit> findAvailableUnitsForUpdate(@Param("vehicleId") Long vehicleId, 
                                               @Param("status") FleetUnitStatus status, 
                                               @Param("cityName") String cityName, 
                                               Pageable pageable);

    Optional<FleetUnit> findByRegistrationNumber(String registrationNumber);
}
