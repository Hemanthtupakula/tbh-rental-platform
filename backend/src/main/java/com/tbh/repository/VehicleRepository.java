package com.tbh.repository;

import com.tbh.entity.Vehicle;
import com.tbh.entity.VehicleType;
import com.tbh.entity.FuelType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    List<Vehicle> findByAvailableTrue();
    long countByAvailable(boolean available);
    List<Vehicle> findByVehicleType(VehicleType vehicleType);
    List<Vehicle> findByFuelType(FuelType fuelType);
    java.util.Optional<Vehicle> findByName(String name);
    boolean existsByName(String name);

    @org.springframework.data.jpa.repository.Lock(jakarta.persistence.LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT v FROM Vehicle v WHERE v.id = :id")
    java.util.Optional<Vehicle> findByIdForUpdate(@Param("id") Long id);

    @Query("SELECT v FROM Vehicle v WHERE (:city IS NULL OR LOWER(v.cityNames) LIKE LOWER(CONCAT('%', :city, '%'))) " +
           "AND (:vehicleType IS NULL OR v.vehicleType = :vehicleType) " +
           "AND (:fuelType IS NULL OR v.fuelType = :fuelType) " +
           "AND (:maxHourlyRate IS NULL OR v.pricePerHour <= :maxHourlyRate)")
    List<Vehicle> searchVehicles(@Param("city") String city,
                                 @Param("vehicleType") VehicleType vehicleType,
                                 @Param("fuelType") FuelType fuelType,
                                 @Param("maxHourlyRate") Double maxHourlyRate);
}
