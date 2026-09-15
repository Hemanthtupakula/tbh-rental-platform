package com.tbh.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "kyc_audit_events")
public class KycAuditEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "kyc_id", nullable = false)
    private LicenseVerification kyc;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false, length = 60)
    private String eventType;

    @Column(nullable = false, length = 100)
    private String performedBy;

    private String fromStatus;

    @Column(nullable = false, length = 50)
    private String toStatus;

    @Column(columnDefinition = "TEXT")
    private String notes;

    @Column(columnDefinition = "TEXT")
    private String metadataJson;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    public KycAuditEvent() {}

    public KycAuditEvent(LicenseVerification kyc, User user, String eventType, String performedBy, String fromStatus, String toStatus, String notes) {
        this.kyc = kyc;
        this.user = user;
        this.eventType = eventType;
        this.performedBy = performedBy;
        this.fromStatus = fromStatus;
        this.toStatus = toStatus;
        this.notes = notes;
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    @com.fasterxml.jackson.annotation.JsonIgnore
    public LicenseVerification getKyc() { return kyc; }
    public void setKyc(LicenseVerification kyc) { this.kyc = kyc; }

    @com.fasterxml.jackson.annotation.JsonIgnore
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public Long getKycId() { return kyc != null ? kyc.getId() : null; }
    public Long getUserId() { return user != null ? user.getId() : null; }

    public String getEventType() { return eventType; }
    public void setEventType(String eventType) { this.eventType = eventType; }

    public String getPerformedBy() { return performedBy; }
    public void setPerformedBy(String performedBy) { this.performedBy = performedBy; }

    public String getFromStatus() { return fromStatus; }
    public void setFromStatus(String fromStatus) { this.fromStatus = fromStatus; }

    public String getToStatus() { return toStatus; }
    public void setToStatus(String toStatus) { this.toStatus = toStatus; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }

    public String getMetadataJson() { return metadataJson; }
    public void setMetadataJson(String metadataJson) { this.metadataJson = metadataJson; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
