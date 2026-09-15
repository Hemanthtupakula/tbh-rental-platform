-- TBH Rental Platform: Production PostgreSQL Schema
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(50) UNIQUE,
    password VARCHAR(255),
    role VARCHAR(50) DEFAULT 'ROLE_USER',
    driving_license_number VARCHAR(100),
    driving_license_verified BOOLEAN DEFAULT FALSE,
    driving_license_doc_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cities (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    state VARCHAR(100) NOT NULL,
    active BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS location_hubs (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT,
    landmark VARCHAR(255),
    hub_type VARCHAR(50),
    city_id BIGINT REFERENCES cities(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS vehicles (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(100) NOT NULL,
    model VARCHAR(100),
    vehicle_type VARCHAR(50) NOT NULL,
    fuel_type VARCHAR(50) NOT NULL,
    transmission VARCHAR(50) NOT NULL,
    seats INT DEFAULT 2,
    engine_or_battery VARCHAR(100),
    max_speed INT NOT NULL,
    zero_to_hundred DOUBLE PRECISION,
    price_per_hour DOUBLE PRECISION NOT NULL,
    price_per_day DOUBLE PRECISION NOT NULL,
    price_per_month DOUBLE PRECISION NOT NULL,
    security_deposit DOUBLE PRECISION NOT NULL,
    mileage_or_range VARCHAR(100),
    rating DOUBLE PRECISION DEFAULT 4.9,
    trips_completed INT DEFAULT 0,
    image_url TEXT,
    color_hex VARCHAR(50) DEFAULT '#00E5C7',
    available BOOLEAN DEFAULT TRUE,
    features TEXT,
    city_names TEXT
);

CREATE TABLE IF NOT EXISTS bookings (
    id BIGSERIAL PRIMARY KEY,
    booking_reference VARCHAR(100) UNIQUE NOT NULL,
    user_id BIGINT REFERENCES users(id),
    vehicle_id BIGINT REFERENCES vehicles(id),
    pickup_city VARCHAR(100),
    pickup_hub VARCHAR(255),
    drop_hub VARCHAR(255),
    pickup_date_time TIMESTAMP,
    drop_date_time TIMESTAMP,
    rental_mode VARCHAR(50),
    duration INT,
    base_amount DOUBLE PRECISION,
    insurance_amount DOUBLE PRECISION,
    tax_amount DOUBLE PRECISION,
    deposit_amount DOUBLE PRECISION,
    total_amount DOUBLE PRECISION,
    status VARCHAR(50) DEFAULT 'CONFIRMED',
    payment_status VARCHAR(50) DEFAULT 'PAID',
    payment_method VARCHAR(100),
    unlock_pin VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
