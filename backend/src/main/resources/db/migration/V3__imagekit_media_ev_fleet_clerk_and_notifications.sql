-- ============================================================================
-- TBH Rental Platform — Flyway Database Migration
-- Version: V3
-- Description: ImageKit Media Platform, EV Fleet, Clerk Dual-Mode Auth, and Resend Notification Outbox
-- Target RDBMS: MySQL 8.0+
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. USERS TABLE — CLERK INTEGRATION
-- ----------------------------------------------------------------------------
ALTER TABLE `users`
    ADD COLUMN `clerk_user_id` VARCHAR(128) UNIQUE AFTER `aadhaar_number`;

CREATE INDEX `idx_users_clerk_id` ON `users` (`clerk_user_id`);

-- ----------------------------------------------------------------------------
-- 2. VEHICLE MEDIA TABLE — IMAGEKIT & 360 FRAME EXPANSION
-- ----------------------------------------------------------------------------
ALTER TABLE `vehicle_media`
    ADD COLUMN `colour_name` VARCHAR(80) NULL AFTER `media_type`,
    ADD COLUMN `angle` VARCHAR(50) NULL AFTER `colour_name`,
    ADD COLUMN `frame_index` INT NULL AFTER `angle`,
    ADD COLUMN `image_kit_file_id` VARCHAR(128) NULL AFTER `frame_index`,
    ADD COLUMN `image_kit_url` VARCHAR(512) NULL AFTER `image_kit_file_id`,
    ADD COLUMN `thumbnail_url` VARCHAR(512) NULL AFTER `image_kit_url`,
    ADD COLUMN `width` INT NULL AFTER `thumbnail_url`,
    ADD COLUMN `height` INT NULL AFTER `width`,
    ADD COLUMN `size_bytes` BIGINT NULL AFTER `height`,
    ADD COLUMN `sort_order` INT NOT NULL DEFAULT 0 AFTER `size_bytes`,
    ADD COLUMN `source_type` VARCHAR(50) DEFAULT 'OFFICIAL_OEM' AFTER `sort_order`,
    ADD COLUMN `commercial_use_allowed` BOOLEAN NOT NULL DEFAULT TRUE AFTER `source_type`;

CREATE INDEX `idx_vehicle_media_lookup` ON `vehicle_media` (`vehicle_id`, `colour_name`, `angle`);
CREATE INDEX `idx_vehicle_media_frames` ON `vehicle_media` (`vehicle_id`, `frame_index`);

-- ----------------------------------------------------------------------------
-- 3. NOTIFICATION EVENTS TABLE — RESEND OUTBOX ARCHITECTURE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `notification_events` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `event_type` VARCHAR(60) NOT NULL,
    `recipient_email` VARCHAR(191) NOT NULL,
    `recipient_name` VARCHAR(150),
    `subject` VARCHAR(255) NOT NULL,
    `template_name` VARCHAR(100),
    `payload_json` TEXT NOT NULL,
    `idempotency_key` VARCHAR(191) NOT NULL UNIQUE,
    `status` VARCHAR(30) NOT NULL DEFAULT 'PENDING',
    `resend_email_id` VARCHAR(128),
    `retry_count` INT NOT NULL DEFAULT 0,
    `max_retries` INT NOT NULL DEFAULT 3,
    `last_error` TEXT,
    `sent_at` DATETIME(6) NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX `idx_notif_status_retry` ON `notification_events` (`status`, `retry_count`);
CREATE INDEX `idx_notif_recipient` ON `notification_events` (`recipient_email`);
