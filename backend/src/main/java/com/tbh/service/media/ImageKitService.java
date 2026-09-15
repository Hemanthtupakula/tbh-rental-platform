package com.tbh.service.media;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tbh.config.ImageKitConfig;
import com.tbh.entity.MediaLicenseType;
import com.tbh.entity.MediaVerificationStatus;
import com.tbh.entity.Vehicle;
import com.tbh.entity.VehicleMedia;
import com.tbh.repository.VehicleMediaRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
public class ImageKitService {

    private static final Logger log = LoggerFactory.getLogger(ImageKitService.class);

    private final ImageKitConfig config;
    private final VehicleMediaRepository vehicleMediaRepository;
    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;

    public ImageKitService(ImageKitConfig config, VehicleMediaRepository vehicleMediaRepository) {
        this.config = config;
        this.vehicleMediaRepository = vehicleMediaRepository;
        this.httpClient = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();
        this.objectMapper = new ObjectMapper();
    }

    public String buildTransformedUrl(String path, int width, int height, int quality, String format) {
        if (path == null || path.isBlank()) {
            return "";
        }
        String cleanEndpoint = config.getEndpoint().replaceAll("/+$", "");
        String transformation = "tr=w-" + width + ",h-" + height + ",fo-auto,q-" + quality + ",f-" + (format != null ? format : "auto");

        if (path.startsWith("http://") || path.startsWith("https://")) {
            if (path.contains("ik.imagekit.io")) {
                return path.contains("?") ? path + "&" + transformation : path + "?" + transformation;
            }
            return path;
        }

        String normalizedPath = path.startsWith("/") ? path.substring(1) : path;
        return cleanEndpoint + "/" + normalizedPath + "?" + transformation;
    }

    public String getCardThumbnailUrl(String path) {
        return buildTransformedUrl(path, 600, 400, 80, "auto");
    }

    public String getGalleryFullscreenUrl(String path) {
        return buildTransformedUrl(path, 1600, 1066, 85, "auto");
    }

    public String get360FrameUrl(String vehicleSlug, String colourSlug, int frameIndex) {
        String frameStr = String.format("%02d", frameIndex);
        String path = "tbh/vehicles/" + vehicleSlug + "/360/" + colourSlug + "/frame-" + frameStr + ".webp";
        return buildTransformedUrl(path, 1200, 800, 80, "auto");
    }

    public String uploadFile(byte[] fileBytes, String fileName, String folder, List<String> tags) {
        if (config.getPrivateKey() == null || config.getPrivateKey().isBlank()) {
            log.warn("[IMAGEKIT] Upload skipped: Private key not configured.");
            return null;
        }

        try {
            String base64File = Base64.getEncoder().encodeToString(fileBytes);
            String boundary = "----ImageKitBoundary" + System.currentTimeMillis();

            StringBuilder body = new StringBuilder();
            appendFormField(body, boundary, "file", "data:image/webp;base64," + base64File);
            appendFormField(body, boundary, "fileName", fileName);
            appendFormField(body, boundary, "folder", folder);
            appendFormField(body, boundary, "useUniqueFileName", "false");
            if (tags != null && !tags.isEmpty()) {
                appendFormField(body, boundary, "tags", String.join(",", tags));
            }
            body.append("--").append(boundary).append("--\r\n");

            String authHeader = "Basic " + Base64.getEncoder().encodeToString((config.getPrivateKey() + ":").getBytes(StandardCharsets.UTF_8));

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://upload.imagekit.io/api/v1/files/upload"))
                    .timeout(Duration.ofSeconds(30))
                    .header("Authorization", authHeader)
                    .header("Content-Type", "multipart/form-data; boundary=" + boundary)
                    .POST(HttpRequest.BodyPublishers.ofString(body.toString(), StandardCharsets.UTF_8))
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() >= 200 && response.statusCode() < 300) {
                JsonNode root = objectMapper.readTree(response.body());
                String uploadedUrl = root.path("url").asText();
                log.info("[IMAGEKIT] Uploaded asset successfully: {}", uploadedUrl);
                return uploadedUrl;
            } else {
                log.error("[IMAGEKIT] Upload failed HTTP {}: {}", response.statusCode(), response.body());
                return null;
            }
        } catch (Exception e) {
            log.error("[IMAGEKIT] Upload exception: {}", e.getMessage(), e);
            return null;
        }
    }

    private void appendFormField(StringBuilder sb, String boundary, String fieldName, String value) {
        sb.append("--").append(boundary).append("\r\n");
        sb.append("Content-Disposition: form-data; name=\"").append(fieldName).append("\"\r\n\r\n");
        sb.append(value).append("\r\n");
    }

    public void registerVehicleMedia(Vehicle vehicle, String colourName, String angle,
                                     Integer frameIndex, String imageKitUrl, String thumbnailUrl,
                                     int sortOrder, boolean is360Frame) {
        String mediaType = is360Frame ? "360_FRAME" : (sortOrder == 0 ? "HERO" : "GALLERY");
        VehicleMedia media = new VehicleMedia();
        media.setVehicle(vehicle);
        media.setUrl(imageKitUrl);
        media.setImageKitUrl(imageKitUrl);
        media.setThumbnailUrl(thumbnailUrl);
        media.setColourName(colourName);
        media.setAngle(angle);
        media.setFrameIndex(frameIndex);
        media.setMediaType(mediaType);
        media.setSortOrder(sortOrder);
        media.setSource("ImageKit");
        media.setSourceType("OFFICIAL_OEM");
        media.setLicenseType(MediaLicenseType.COLLEGE_DEMO_REFERENCE);
        media.setVerificationStatus(MediaVerificationStatus.VERIFIED_PRODUCTION);
        media.setVerified(true);
        media.setCommercialUseAllowed(true);
        vehicleMediaRepository.save(media);
    }
}