-- ============================================================================
-- TBH Rental Platform — Flyway Database Migration
-- Version: V6
-- Description: Grant ROLE_ADMIN to designated platform administrator account
-- Target RDBMS: MySQL 8.0+ / Aiven MySQL
-- ============================================================================

-- Set ROLE_ADMIN for the platform administrator.
-- This runs safely: if the user does not yet exist (not yet signed up via Clerk),
-- the UPDATE will match 0 rows and cause no error.
UPDATE `users`
SET    `role` = 'ROLE_ADMIN'
WHERE  `email` = 'tupakulahemanth828@gmail.com';
