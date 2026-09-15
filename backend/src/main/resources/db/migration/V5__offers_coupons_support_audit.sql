-- TBH Rental Platform - Flyway Database Migration
-- Version: V5
-- Description: Offers, Coupons, Customer Support, Admin Audit Logs, and Mobile Verification
-- Target RDBMS: MySQL 8.0+

-- 1. Mobile verification tracking on users table
ALTER TABLE users
    ADD COLUMN mobile_verified BOOLEAN NOT NULL DEFAULT FALSE AFTER phone_number;

-- 2. Promotional Offers table
CREATE TABLE IF NOT EXISTS offers (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    code VARCHAR(50) NULL,
    description TEXT NULL,
    discount_type VARCHAR(20) NOT NULL DEFAULT 'PERCENTAGE',
    discount_value DECIMAL(10,2) NOT NULL,
    min_booking_amount DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    max_discount DECIMAL(10,2) NULL,
    start_date DATETIME(6) NULL,
    end_date DATETIME(6) NULL,
    max_uses INT NOT NULL DEFAULT 1000,
    current_uses INT NOT NULL DEFAULT 0,
    per_user_limit INT NOT NULL DEFAULT 1,
    applicable_vehicle_type VARCHAR(50) NULL,
    applicable_vehicle_id BIGINT NULL,
    applicable_city VARCHAR(100) NULL,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_offers_active ON offers (active);
CREATE INDEX idx_offers_code ON offers (code);

-- 3. Coupons table
CREATE TABLE IF NOT EXISTS coupons (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(50) NOT NULL UNIQUE,
    description TEXT NULL,
    discount_type VARCHAR(20) NOT NULL DEFAULT 'PERCENTAGE',
    discount_value DECIMAL(10,2) NOT NULL,
    min_booking_amount DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    max_discount DECIMAL(10,2) NULL,
    expires_at DATETIME(6) NULL,
    max_uses INT NOT NULL DEFAULT 500,
    current_uses INT NOT NULL DEFAULT 0,
    per_user_limit INT NOT NULL DEFAULT 1,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_coupons_code ON coupons (code);
CREATE INDEX idx_coupons_active ON coupons (active);

-- 4. Coupon Redemptions table
CREATE TABLE IF NOT EXISTS coupon_redemptions (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    coupon_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    booking_id BIGINT NULL,
    discount_applied DECIMAL(10,2) NOT NULL,
    redeemed_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    CONSTRAINT fk_redemption_coupon FOREIGN KEY (coupon_id) REFERENCES coupons (id) ON DELETE CASCADE,
    CONSTRAINT fk_redemption_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_redemptions_coupon_user ON coupon_redemptions (coupon_id, user_id);

-- 5. Customer Support Tickets table
CREATE TABLE IF NOT EXISTS support_tickets (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    ticket_number VARCHAR(50) NOT NULL UNIQUE,
    user_id BIGINT NOT NULL,
    booking_id BIGINT NULL,
    category VARCHAR(50) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'OPEN',
    priority VARCHAR(20) NOT NULL DEFAULT 'NORMAL',
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
    CONSTRAINT fk_support_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_support_user ON support_tickets (user_id);
CREATE INDEX idx_support_status ON support_tickets (status);

-- 6. Support Ticket Messages table
CREATE TABLE IF NOT EXISTS support_messages (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    ticket_id BIGINT NOT NULL,
    sender_id BIGINT NOT NULL,
    sender_role VARCHAR(50) NOT NULL,
    sender_name VARCHAR(150) NULL,
    message TEXT NOT NULL,
    is_internal_note BOOLEAN NOT NULL DEFAULT FALSE,
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    CONSTRAINT fk_support_msg_ticket FOREIGN KEY (ticket_id) REFERENCES support_tickets (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_support_messages_ticket ON support_messages (ticket_id);

-- 7. Admin Audit Logs table
CREATE TABLE IF NOT EXISTS admin_audit_logs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    admin_email VARCHAR(150) NOT NULL,
    action VARCHAR(100) NOT NULL,
    target_entity VARCHAR(100) NOT NULL,
    target_id VARCHAR(100) NULL,
    details TEXT NULL,
    metadata_json TEXT NULL,
    created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_audit_admin_email ON admin_audit_logs (admin_email);
CREATE INDEX idx_audit_action ON admin_audit_logs (action);
CREATE INDEX idx_audit_created_at ON admin_audit_logs (created_at);

-- 8. Seed Standard Promotional Coupons
INSERT INTO coupons (code, description, discount_type, discount_value, min_booking_amount, max_discount, expires_at, max_uses, current_uses, per_user_limit, active)
VALUES 
    ('TBHWELCOME', 'Welcome discount: Flat ₹200 off for first-time riders', 'FLAT', 200.00, 500.00, 200.00, '2030-12-31 23:59:59', 5000, 0, 1, TRUE),
    ('RIDE10', '10% off up to ₹500 on all bookings over ₹1000', 'PERCENTAGE', 10.00, 1000.00, 500.00, '2030-12-31 23:59:59', 2000, 0, 3, TRUE),
    ('EXPLORE20', '20% off on long-distance tours over ₹2500', 'PERCENTAGE', 20.00, 2500.00, 1000.00, '2030-12-31 23:59:59', 1000, 0, 2, TRUE),
    ('TBHPROMO', 'Flat ₹500 off on premium fleet rentals over ₹3000', 'FLAT', 500.00, 3000.00, 500.00, '2030-12-31 23:59:59', 500, 0, 1, TRUE);

-- 9. Seed Active Promotions & Offers
INSERT INTO offers (name, code, description, discount_type, discount_value, min_booking_amount, max_discount, max_uses, per_user_limit, active)
VALUES 
    ('Weekend Explorer Special', 'WEEKEND15', 'Special 15% discount for weekend road-trips', 'PERCENTAGE', 15.00, 1200.00, 750.00, 1000, 2, TRUE),
    ('EV Green Mobility Drive', 'EVGREEN', 'Flat ₹300 incentive on all Electric Vehicles', 'FLAT', 300.00, 800.00, 300.00, 1000, 5, TRUE);
