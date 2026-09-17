-- TBH Rental Platform - Flyway Database Migration
-- Version: V8
-- Description: Add ImageKit Document URLs to License Verifications Table
-- Target RDBMS: MySQL 8.0+

ALTER TABLE license_verifications
    ADD COLUMN image_kit_front_url VARCHAR(500) NULL AFTER back_document_path,
    ADD COLUMN image_kit_back_url VARCHAR(500) NULL AFTER image_kit_front_url;
