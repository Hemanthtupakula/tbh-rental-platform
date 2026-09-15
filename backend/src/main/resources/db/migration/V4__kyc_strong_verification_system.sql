-- TBH Rental Platform - Flyway Database Migration
-- Version: V4
-- Description: Driving Licence KYC Strong Verification System
-- Target RDBMS: MySQL 8.0+

ALTER TABLE license_verifications
    ADD COLUMN extracted_name VARCHAR(255) NULL AFTER date_of_birth,
    ADD COLUMN extracted_license_number VARCHAR(100) NULL AFTER extracted_name,
    ADD COLUMN extracted_dob DATE NULL AFTER extracted_license_number,
    ADD COLUMN extracted_issue_date DATE NULL AFTER extracted_dob,
    ADD COLUMN extracted_expiry_date DATE NULL AFTER extracted_issue_date,
    ADD COLUMN extracted_vehicle_classes VARCHAR(255) NULL AFTER extracted_expiry_date,
    ADD COLUMN ocr_status VARCHAR(50) NOT NULL DEFAULT 'NOT_ATTEMPTED' AFTER extracted_vehicle_classes,
    ADD COLUMN qr_status VARCHAR(50) NOT NULL DEFAULT 'NOT_ATTEMPTED' AFTER ocr_status,
    ADD COLUMN document_quality_status VARCHAR(50) NOT NULL DEFAULT 'NOT_CHECKED' AFTER qr_status,
    ADD COLUMN format_status VARCHAR(50) NOT NULL DEFAULT 'NOT_CHECKED' AFTER document_quality_status,
    ADD COLUMN expiry_status VARCHAR(50) NOT NULL DEFAULT 'NOT_CHECKED' AFTER format_status,
    ADD COLUMN class_status VARCHAR(50) NOT NULL DEFAULT 'NOT_CHECKED' AFTER expiry_status,
    ADD COLUMN customer_confirmed BOOLEAN NOT NULL DEFAULT FALSE AFTER class_status,
    ADD COLUMN review_notes TEXT NULL AFTER rejection_reason,
    ADD COLUMN updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) AFTER reviewed_by;

CREATE INDEX idx_license_status ON license_verifications (verification_status);

CREATE TABLE IF NOT EXISTS kyc_audit_events (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    kyc_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    event_type VARCHAR(60) NOT NULL,
    performed_by VARCHAR(100) NOT NULL,
    from_status VARCHAR(50),
    to_status VARCHAR(50) NOT NULL,
    notes TEXT,
    metadata_json TEXT,
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    CONSTRAINT fk_kyc_audit_verification FOREIGN KEY (kyc_id) REFERENCES license_verifications (id) ON DELETE CASCADE,
    CONSTRAINT fk_kyc_audit_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_kyc_audit_kyc ON kyc_audit_events (kyc_id);
CREATE INDEX idx_kyc_audit_user ON kyc_audit_events (user_id);
CREATE INDEX idx_kyc_audit_type ON kyc_audit_events (event_type);
