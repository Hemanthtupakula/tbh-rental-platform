package com.tbh.repository;

import com.tbh.entity.CityPricing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;
import java.util.Optional;

public interface CityPricingRepository extends JpaRepository<CityPricing, Long> {
    
    @Query("SELECT cp FROM CityPricing cp WHERE cp.vehicle.id = :vehicleId AND LOWER(cp.city.name) = LOWER(:cityName)")
    Optional<CityPricing> findByVehicleIdAndCityName(@Param("vehicleId") Long vehicleId, @Param("cityName") String cityName);

    Optional<CityPricing> findByVehicleIdAndCityId(Long vehicleId, Long cityId);

    @Query("SELECT cp FROM CityPricing cp WHERE LOWER(cp.city.name) = LOWER(:cityName)")
    List<CityPricing> findByCityName(@Param("cityName") String cityName);

    List<CityPricing> findByVehicleId(Long vehicleId);
}
