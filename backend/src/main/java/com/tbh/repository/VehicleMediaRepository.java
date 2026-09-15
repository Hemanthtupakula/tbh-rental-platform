package com.tbh.repository;

import com.tbh.entity.VehicleMedia;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface VehicleMediaRepository extends JpaRepository<VehicleMedia, Long> {
    List<VehicleMedia> findByVehicleId(Long vehicleId);
    List<VehicleMedia> findByVehicleIdAndMediaType(Long vehicleId, String mediaType);
}
