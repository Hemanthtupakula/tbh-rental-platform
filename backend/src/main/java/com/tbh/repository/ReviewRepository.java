package com.tbh.repository;

import com.tbh.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByVehicleId(Long vehicleId);
    List<Review> findByUserId(Long userId);
    long countByVehicleId(Long vehicleId);

    @Query("SELECT AVG(r.rating) FROM Review r WHERE r.vehicle.id = :vehicleId")
    Double getAverageRatingForVehicle(@Param("vehicleId") Long vehicleId);
}
