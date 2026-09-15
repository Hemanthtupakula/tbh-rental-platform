-- ============================================================================
-- TBH Rental Platform — Flyway Database Migration
-- Version: V2
-- Description: Convert monetary columns across core tables to DECIMAL(12,2)
-- Target RDBMS: MySQL 8.0+
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. VEHICLES TABLE MONETARY COLUMNS (6 columns)
-- ----------------------------------------------------------------------------
ALTER TABLE `vehicles`
    MODIFY COLUMN `price_per_hour` DECIMAL(12,2) NOT NULL,
    MODIFY COLUMN `price_per_day` DECIMAL(12,2) NOT NULL,
    MODIFY COLUMN `price_per_week` DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    MODIFY COLUMN `price_per_month` DECIMAL(12,2) NOT NULL,
    MODIFY COLUMN `security_deposit` DECIMAL(12,2) NOT NULL,
    MODIFY COLUMN `insurance_fee` DECIMAL(12,2) NOT NULL DEFAULT 0.00;

-- ----------------------------------------------------------------------------
-- 2. CITY PRICING TABLE MONETARY COLUMNS (9 columns)
-- ----------------------------------------------------------------------------
ALTER TABLE `city_pricing`
    MODIFY COLUMN `hourly_rate` DECIMAL(12,2) NOT NULL,
    MODIFY COLUMN `daily_rate` DECIMAL(12,2) NOT NULL,
    MODIFY COLUMN `weekly_rate` DECIMAL(12,2) NULL,
    MODIFY COLUMN `monthly_rate` DECIMAL(12,2) NULL,
    MODIFY COLUMN `security_deposit` DECIMAL(12,2) NULL,
    MODIFY COLUMN `insurance_daily_rate` DECIMAL(12,2) NULL,
    MODIFY COLUMN `delivery_fee` DECIMAL(12,2) NULL DEFAULT 0.00,
    MODIFY COLUMN `drop_fee` DECIMAL(12,2) NULL DEFAULT 0.00,
    MODIFY COLUMN `cross_city_fee` DECIMAL(12,2) NULL DEFAULT 1499.00;

-- ----------------------------------------------------------------------------
-- 3. BOOKINGS TABLE MONETARY COLUMNS (7 columns)
-- ----------------------------------------------------------------------------
ALTER TABLE `bookings`
    MODIFY COLUMN `base_amount` DECIMAL(12,2) NOT NULL,
    MODIFY COLUMN `insurance_amount` DECIMAL(12,2) NOT NULL,
    MODIFY COLUMN `tax_amount` DECIMAL(12,2) NOT NULL,
    MODIFY COLUMN `deposit_amount` DECIMAL(12,2) NOT NULL,
    MODIFY COLUMN `total_amount` DECIMAL(12,2) NOT NULL,
    MODIFY COLUMN `refund_amount` DECIMAL(12,2) NULL,
    MODIFY COLUMN `cancellation_fee` DECIMAL(12,2) NULL;

-- ----------------------------------------------------------------------------
-- 4. PAYMENTS TABLE MONETARY COLUMNS (1 column)
-- ----------------------------------------------------------------------------
ALTER TABLE `payments`
    MODIFY COLUMN `amount` DECIMAL(12,2) NOT NULL;
