-- ============================================================================
-- TBH Rental Platform — Flyway Database Migration
-- Version: V7
-- Description: Remove admin role from all accounts except the platform owner.
--              Only tupakulahemanth828@gmail.com should hold ROLE_ADMIN.
-- Target RDBMS: MySQL 8.0+ / Aiven MySQL
-- ============================================================================

-- Demote all non-owner admin accounts to regular user role
UPDATE `users`
SET    `role` = 'ROLE_USER'
WHERE  `email` != 'tupakulahemanth828@gmail.com'
AND    `role` = 'ROLE_ADMIN';

-- Ensure the platform owner always has ROLE_ADMIN (idempotent)
UPDATE `users`
SET    `role` = 'ROLE_ADMIN'
WHERE  `email` = 'tupakulahemanth828@gmail.com';
