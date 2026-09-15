-- ============================================================================
-- TBH Rental Platform — Flyway Database Migration
-- Version: V1
-- Description: Initial MySQL 8 Schema for Ride Beyond Limits Platform
-- Target RDBMS: MySQL 8.0+
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. USERS TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `full_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `phone_number` VARCHAR(50) UNIQUE,
    `password` VARCHAR(255),
    `role` VARCHAR(32) NOT NULL DEFAULT 'ROLE_USER',
    `driving_license_number` VARCHAR(100),
    `driving_license_verified` BOOLEAN NOT NULL DEFAULT FALSE,
    `driving_license_doc_url` VARCHAR(1000),
    `aadhaar_number` VARCHAR(50),
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX `idx_users_email` ON `users` (`email`);
CREATE INDEX `idx_users_phone` ON `users` (`phone_number`);

-- ----------------------------------------------------------------------------
-- 2. CITIES TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `cities` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL UNIQUE,
    `state` VARCHAR(100),
    `state_code` VARCHAR(10),
    `active` BOOLEAN NOT NULL DEFAULT TRUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- 3. LOCATION HUBS TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `location_hubs` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `address` TEXT,
    `landmark` VARCHAR(255),
    `hub_type` VARCHAR(50),
    `city_id` BIGINT,
    CONSTRAINT `fk_location_hubs_city` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX `idx_location_hubs_city` ON `location_hubs` (`city_id`);

-- ----------------------------------------------------------------------------
-- 4. VEHICLES TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `vehicles` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `brand` VARCHAR(100) NOT NULL,
    `model` VARCHAR(100),
    `variant` VARCHAR(100),
    `vehicle_type` VARCHAR(50) NOT NULL,
    `category` VARCHAR(50),
    `fuel_type` VARCHAR(50) NOT NULL,
    `transmission` VARCHAR(50) NOT NULL,
    `seats` INT NOT NULL DEFAULT 2,
    `engine_or_battery` VARCHAR(100),
    `max_speed` INT NOT NULL,
    `zero_to_hundred` DOUBLE,
    `price_per_hour` DECIMAL(12,2) NOT NULL,
    `price_per_day` DECIMAL(12,2) NOT NULL,
    `price_per_week` DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    `price_per_month` DECIMAL(12,2) NOT NULL,
    `security_deposit` DECIMAL(12,2) NOT NULL,
    `insurance_fee` DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    `mileage_or_range` VARCHAR(100),
    `rating` DOUBLE NOT NULL DEFAULT 0.0,
    `review_count` INT NOT NULL DEFAULT 0,
    `trips_completed` INT NOT NULL DEFAULT 0,
    `image_url` TEXT,
    `color_hex` VARCHAR(50) DEFAULT '#00E5C7',
    `available` BOOLEAN NOT NULL DEFAULT TRUE,
    `features` VARCHAR(1000),
    `city_names` VARCHAR(1000),
    `asset_type` VARCHAR(50) NOT NULL DEFAULT 'GALLERY',
    `model3d_url` VARCHAR(500),
    `model3d_source` VARCHAR(100),
    `model3d_license` VARCHAR(100),
    `gallery_image_urls` VARCHAR(4000),
    `image_source` VARCHAR(100),
    `image_license` VARCHAR(100),
    `image_attribution` VARCHAR(255),
    `asset_verified` BOOLEAN NOT NULL DEFAULT FALSE,
    `power_bhp` DOUBLE NOT NULL DEFAULT 0.0,
    `torque_nm` DOUBLE NOT NULL DEFAULT 0.0,
    `ground_clearance_mm` INT NOT NULL DEFAULT 0,
    `boot_capacity_litres` INT NOT NULL DEFAULT 0,
    `is_electric` BOOLEAN NOT NULL DEFAULT FALSE,
    `battery_capacity_kwh` DOUBLE,
    `charging_time_hours` DOUBLE,
    `fast_charging_supported` BOOLEAN NOT NULL DEFAULT FALSE,
    `fast_charging_time_minutes` INT,
    `charging_connector_type` VARCHAR(100),
    `motor_power_kw` DOUBLE,
    `motor_torque_nm` DOUBLE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX `idx_vehicles_type` ON `vehicles` (`vehicle_type`);
CREATE INDEX `idx_vehicles_category` ON `vehicles` (`category`);
CREATE INDEX `idx_vehicles_available` ON `vehicles` (`available`);

-- ----------------------------------------------------------------------------
-- 5. FLEET UNITS TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `fleet_units` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `registration_number` VARCHAR(100) NOT NULL UNIQUE,
    `vin_number` VARCHAR(100) NOT NULL UNIQUE,
    `status` VARCHAR(50) NOT NULL,
    `vehicle_id` BIGINT NOT NULL,
    `city_name` VARCHAR(100),
    `hub_name` VARCHAR(255),
    `state_code` VARCHAR(10),
    `odometer_km` INT NOT NULL DEFAULT 1200,
    `insurance_status` VARCHAR(50) DEFAULT 'VALID',
    `insurance_expiry` DATE,
    `puc_status` VARCHAR(50) DEFAULT 'VALID',
    `puc_expiry` DATE,
    `registration_validity` DATE,
    `is_demo_vehicle` BOOLEAN NOT NULL DEFAULT TRUE,
    `demo_identifier` VARCHAR(100),
    `last_serviced_at` DATETIME(6),
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    CONSTRAINT `fk_fleet_units_vehicle` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX `idx_fleet_units_vehicle` ON `fleet_units` (`vehicle_id`);
CREATE INDEX `idx_fleet_units_status_city` ON `fleet_units` (`status`, `city_name`);

-- ----------------------------------------------------------------------------
-- 6. CITY PRICING TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `city_pricing` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `vehicle_id` BIGINT NOT NULL,
    `city_id` BIGINT NOT NULL,
    `hub_id` BIGINT,
    `hourly_rate` DECIMAL(12,2) NOT NULL,
    `daily_rate` DECIMAL(12,2) NOT NULL,
    `weekly_rate` DECIMAL(12,2),
    `monthly_rate` DECIMAL(12,2),
    `security_deposit` DECIMAL(12,2),
    `insurance_daily_rate` DECIMAL(12,2),
    `delivery_fee` DECIMAL(12,2) DEFAULT 0.00,
    `drop_fee` DECIMAL(12,2) DEFAULT 0.00,
    `cross_city_fee` DECIMAL(12,2) DEFAULT 1499.00,
    `cross_city_enabled` BOOLEAN NOT NULL DEFAULT TRUE,
    `active` BOOLEAN NOT NULL DEFAULT TRUE,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    CONSTRAINT `uk_city_pricing_vehicle_city` UNIQUE (`vehicle_id`, `city_id`),
    CONSTRAINT `fk_city_pricing_vehicle` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE RESTRICT,
    CONSTRAINT `fk_city_pricing_city` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE RESTRICT,
    CONSTRAINT `fk_city_pricing_hub` FOREIGN KEY (`hub_id`) REFERENCES `location_hubs` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX `idx_city_pricing_city` ON `city_pricing` (`city_id`);

-- ----------------------------------------------------------------------------
-- 7. BOOKINGS TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `bookings` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `booking_reference` VARCHAR(100) NOT NULL UNIQUE,
    `user_id` BIGINT,
    `vehicle_id` BIGINT,
    `fleet_unit_id` BIGINT,
    `pickup_city` VARCHAR(100),
    `drop_city` VARCHAR(100),
    `pickup_hub` VARCHAR(255),
    `drop_hub` VARCHAR(255),
    `pickup_date_time` DATETIME(6),
    `drop_date_time` DATETIME(6),
    `rental_mode` VARCHAR(50),
    `duration` INT NOT NULL DEFAULT 1,
    `base_amount` DECIMAL(12,2) NOT NULL,
    `insurance_amount` DECIMAL(12,2) NOT NULL,
    `tax_amount` DECIMAL(12,2) NOT NULL,
    `deposit_amount` DECIMAL(12,2) NOT NULL,
    `total_amount` DECIMAL(12,2) NOT NULL,
    `status` VARCHAR(32) NOT NULL DEFAULT 'PENDING',
    `payment_status` VARCHAR(32) NOT NULL DEFAULT 'INITIATED',
    `payment_method` VARCHAR(100),
    `unlock_pin` VARCHAR(20),
    `expires_at` DATETIME(6),
    `refund_amount` DECIMAL(12,2),
    `cancellation_fee` DECIMAL(12,2),
    `cancelled_at` DATETIME(6),
    `refund_transaction_id` VARCHAR(100),
    `razorpay_order_id` VARCHAR(100),
    `razorpay_payment_id` VARCHAR(100),
    `razorpay_signature` VARCHAR(255),
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    CONSTRAINT `fk_bookings_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT,
    CONSTRAINT `fk_bookings_vehicle` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE RESTRICT,
    CONSTRAINT `fk_bookings_fleet_unit` FOREIGN KEY (`fleet_unit_id`) REFERENCES `fleet_units` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX `idx_bookings_user` ON `bookings` (`user_id`);
CREATE INDEX `idx_bookings_vehicle` ON `bookings` (`vehicle_id`);
CREATE INDEX `idx_bookings_fleet_unit` ON `bookings` (`fleet_unit_id`);
CREATE INDEX `idx_bookings_status` ON `bookings` (`status`);
CREATE INDEX `idx_bookings_payment_status` ON `bookings` (`payment_status`);
CREATE INDEX `idx_bookings_expires_at` ON `bookings` (`expires_at`);

-- ----------------------------------------------------------------------------
-- 8. PAYMENTS TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `payments` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `booking_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `razorpay_order_id` VARCHAR(100) NOT NULL,
    `razorpay_payment_id` VARCHAR(100),
    `razorpay_signature` VARCHAR(255),
    `amount` DECIMAL(12,2) NOT NULL,
    `currency` VARCHAR(10) NOT NULL DEFAULT 'INR',
    `status` VARCHAR(32) NOT NULL DEFAULT 'PENDING',
    `failure_reason` VARCHAR(500),
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    CONSTRAINT `fk_payments_booking` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`) ON DELETE RESTRICT,
    CONSTRAINT `fk_payments_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX `idx_payments_order_id` ON `payments` (`razorpay_order_id`);
CREATE INDEX `idx_payments_booking_id` ON `payments` (`booking_id`);
CREATE INDEX `idx_payments_user_id` ON `payments` (`user_id`);

-- ----------------------------------------------------------------------------
-- 9. LICENSE VERIFICATIONS TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `license_verifications` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `document_type` VARCHAR(50) NOT NULL DEFAULT 'DRIVING_LICENSE',
    `masked_license_number` VARCHAR(100) NOT NULL,
    `encrypted_license_number` VARCHAR(1000),
    `issuing_state` VARCHAR(50),
    `date_of_birth` DATE,
    `expiry_date` DATE NOT NULL,
    `verification_status` VARCHAR(50) NOT NULL DEFAULT 'SUBMITTED',
    `private_document_path` VARCHAR(500),
    `back_document_path` VARCHAR(500),
    `provider` VARCHAR(50) DEFAULT 'MANUAL_ADMIN',
    `provider_reference` VARCHAR(100),
    `submitted_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `verified_at` DATETIME(6),
    `rejection_reason` VARCHAR(500),
    `reviewed_by` VARCHAR(100),
    CONSTRAINT `fk_license_verifications_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX `idx_license_user_submitted` ON `license_verifications` (`user_id`, `submitted_at`);

-- ----------------------------------------------------------------------------
-- 10. REFRESH TOKENS TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `refresh_tokens` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `token` VARCHAR(500) NOT NULL UNIQUE,
    `token_family` VARCHAR(100) NOT NULL,
    `expiry_date` DATETIME(6) NOT NULL,
    `revoked` BOOLEAN NOT NULL DEFAULT FALSE,
    `replaced_by_token` VARCHAR(500),
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    CONSTRAINT `fk_refresh_tokens_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX `idx_refresh_tokens_family` ON `refresh_tokens` (`token_family`);
CREATE INDEX `idx_refresh_tokens_user` ON `refresh_tokens` (`user_id`);

-- ----------------------------------------------------------------------------
-- 11. VEHICLE MEDIA TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `vehicle_media` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `vehicle_id` BIGINT NOT NULL,
    `url` VARCHAR(1000) NOT NULL,
    `media_type` VARCHAR(50) DEFAULT 'HERO',
    `source` VARCHAR(100),
    `license_type` VARCHAR(50) DEFAULT 'COLLEGE_DEMO_REFERENCE',
    `license_reference` VARCHAR(500),
    `verification_status` VARCHAR(50) DEFAULT 'DEMO_ONLY_REPLACEMENT_REQUIRED',
    `verified` BOOLEAN NOT NULL DEFAULT FALSE,
    `verified_at` DATETIME(6),
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    CONSTRAINT `fk_vehicle_media_vehicle` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX `idx_vehicle_media_vehicle` ON `vehicle_media` (`vehicle_id`);

-- ----------------------------------------------------------------------------
-- 12. REVIEWS TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `reviews` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `vehicle_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `booking_id` BIGINT,
    `rating` INT NOT NULL,
    `comment` VARCHAR(1000),
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    CONSTRAINT `fk_reviews_vehicle` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE RESTRICT,
    CONSTRAINT `fk_reviews_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT,
    CONSTRAINT `fk_reviews_booking` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX `idx_reviews_vehicle` ON `reviews` (`vehicle_id`);
CREATE INDEX `idx_reviews_user` ON `reviews` (`user_id`);
