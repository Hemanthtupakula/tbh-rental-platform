package com.tbh.controller;

import com.tbh.entity.Vehicle;
import com.tbh.entity.VehicleMedia;
import com.tbh.repository.VehicleMediaRepository;
import com.tbh.repository.VehicleRepository;
import com.tbh.service.media.ImageKitService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping({"/api/admin/media", "/api/v1/admin/media"})
@PreAuthorize("hasAuthority('ROLE_ADMIN')")
public class MediaSyncController {

    private final VehicleRepository vehicleRepository;
    private final VehicleMediaRepository vehicleMediaRepository;
    private final ImageKitService imageKitService;

    public MediaSyncController(VehicleRepository vehicleRepository,
                               VehicleMediaRepository vehicleMediaRepository,
                               ImageKitService imageKitService) {
        this.vehicleRepository = vehicleRepository;
        this.vehicleMediaRepository = vehicleMediaRepository;
        this.imageKitService = imageKitService;
    }

    @GetMapping("/status")
    public ResponseEntity<Map<String, Object>> getMediaStatus() {
        long totalVehicles = vehicleRepository.count();
        long totalMedia = vehicleMediaRepository.count();
        List<VehicleMedia> allMedia = vehicleMediaRepository.findAll();
        long imageKitMediaCount = allMedia.stream().filter(m -> m.getImageKitUrl() != null && !m.getImageKitUrl().isBlank()).count();
        long framesCount = allMedia.stream().filter(m -> "360_FRAME".equals(m.getMediaType())).count();

        Map<String, Object> resp = new HashMap<>();
        resp.put("totalVehicles", totalVehicles);
        resp.put("totalMediaRecords", totalMedia);
        resp.put("imageKitMediaCount", imageKitMediaCount);
        resp.put("threeSixtyFramesCount", framesCount);
        resp.put("cdnEndpoint", "https://ik.imagekit.io/hemanthhkt");
        resp.put("status", "HEALTHY");
        return ResponseEntity.ok(resp);
    }
}