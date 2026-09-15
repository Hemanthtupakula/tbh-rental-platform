package com.tbh.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "vehicle_media")
public class VehicleMedia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicle_id", nullable = false)
    private Vehicle vehicle;

    @Column(nullable = false)
    private String url;

    private String mediaType = "HERO"; // HERO, GALLERY, THUMBNAIL, 3D, 360_FRAME

    @Column(name = "colour_name", length = 80)
    private String colourName;

    @Column(length = 50)
    private String angle; // front_three_quarter, rear_three_quarter, side_profile, cockpit_console, detail_wheel

    private Integer frameIndex; // 0..35 for 360 rotation

    @Column(name = "image_kit_file_id", length = 128)
    private String imageKitFileId;

    @Column(name = "image_kit_url", length = 512)
    private String imageKitUrl;

    @Column(name = "thumbnail_url", length = 512)
    private String thumbnailUrl;

    private Integer width;

    private Integer height;

    private Long sizeBytes;

    private int sortOrder = 0;

    @Column(name = "source_type", length = 50)
    private String sourceType = "OFFICIAL_OEM";

    private boolean commercialUseAllowed = true;

    private String source; // BikeDekho, CarDekho, Manufacturer, ImageKit

    @Enumerated(EnumType.STRING)
    private MediaLicenseType licenseType = MediaLicenseType.COLLEGE_DEMO_REFERENCE;

    private String licenseReference;

    @Enumerated(EnumType.STRING)
    private MediaVerificationStatus verificationStatus = MediaVerificationStatus.DEMO_ONLY_REPLACEMENT_REQUIRED;

    private boolean verified = false;

    private LocalDateTime verifiedAt;

    private LocalDateTime createdAt = LocalDateTime.now();

    public VehicleMedia() {}

    public VehicleMedia(Vehicle vehicle, String url, String mediaType, String source, 
                        MediaLicenseType licenseType, String licenseReference, 
                        MediaVerificationStatus verificationStatus, boolean verified) {
        this.vehicle = vehicle;
        this.url = url;
        this.mediaType = mediaType;
        this.source = source;
        this.licenseType = licenseType;
        this.licenseReference = licenseReference;
        this.verificationStatus = verificationStatus;
        this.verified = verified;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Vehicle getVehicle() { return vehicle; }
    public void setVehicle(Vehicle vehicle) { this.vehicle = vehicle; }

    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }

    public String getMediaType() { return mediaType; }
    public void setMediaType(String mediaType) { this.mediaType = mediaType; }

    public String getSource() { return source; }
    public void setSource(String source) { this.source = source; }

    public MediaLicenseType getLicenseType() { return licenseType; }
    public void setLicenseType(MediaLicenseType licenseType) { this.licenseType = licenseType; }

    public String getLicenseReference() { return licenseReference; }
    public void setLicenseReference(String licenseReference) { this.licenseReference = licenseReference; }

    public MediaVerificationStatus getVerificationStatus() { return verificationStatus; }
    public void setVerificationStatus(MediaVerificationStatus verificationStatus) { this.verificationStatus = verificationStatus; }

    public boolean isVerified() { return verified; }
    public void setVerified(boolean verified) { this.verified = verified; }

    public LocalDateTime getVerifiedAt() { return verifiedAt; }
    public void setVerifiedAt(LocalDateTime verifiedAt) { this.verifiedAt = verifiedAt; }

    public String getColourName() { return colourName; }
    public void setColourName(String colourName) { this.colourName = colourName; }

    public String getAngle() { return angle; }
    public void setAngle(String angle) { this.angle = angle; }

    public Integer getFrameIndex() { return frameIndex; }
    public void setFrameIndex(Integer frameIndex) { this.frameIndex = frameIndex; }

    public String getImageKitFileId() { return imageKitFileId; }
    public void setImageKitFileId(String imageKitFileId) { this.imageKitFileId = imageKitFileId; }

    public String getImageKitUrl() { return imageKitUrl; }
    public void setImageKitUrl(String imageKitUrl) { this.imageKitUrl = imageKitUrl; }

    public String getThumbnailUrl() { return thumbnailUrl; }
    public void setThumbnailUrl(String thumbnailUrl) { this.thumbnailUrl = thumbnailUrl; }

    public Integer getWidth() { return width; }
    public void setWidth(Integer width) { this.width = width; }

    public Integer getHeight() { return height; }
    public void setHeight(Integer height) { this.height = height; }

    public Long getSizeBytes() { return sizeBytes; }
    public void setSizeBytes(Long sizeBytes) { this.sizeBytes = sizeBytes; }

    public int getSortOrder() { return sortOrder; }
    public void setSortOrder(int sortOrder) { this.sortOrder = sortOrder; }

    public String getSourceType() { return sourceType; }
    public void setSourceType(String sourceType) { this.sourceType = sourceType; }

    public boolean isCommercialUseAllowed() { return commercialUseAllowed; }
    public void setCommercialUseAllowed(boolean commercialUseAllowed) { this.commercialUseAllowed = commercialUseAllowed; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
