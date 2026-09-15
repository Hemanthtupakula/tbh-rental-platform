# TBH — FINAL PRODUCTION AUDIT & ARCHITECTURE SPECIFICATION
**Platform**: TBH — "Ride Beyond Limits"  
**Audit Date**: September 2026  
**Auditor**: Lead Full-Stack Architect (Google DeepMind Antigravity)  
**Database**: MySQL 8.0.46 (Running on localhost:3306)  
**Backend**: Spring Boot 3.3.4 (Java 21)  
**Frontend**: React 18 + TypeScript + Vite + Tailwind CSS + Three.js  

---

## 1. Current State Assessment

The TBH platform currently exists as an upgraded Spring Boot 3 + React/TypeScript application with a luxury automotive dark theme (Midnight Black `#0A0A0B`, Electric Teal `#00E5C7`, Champagne Gold `#D4AF37`). 

### Core Components Identified:
- **Backend**: Spring Boot 3.3.4 with Spring Security, JJWT 0.12.5, H2 (dev in-memory) and incomplete PostgreSQL configs, basic transactional locking, mock OTP and mock payment providers, and an initial 14-vehicle catalog seeded via `DataInitializer.java`.
- **Frontend**: Vite + React single-page application with Three.js WebGL OrbitControls, VehicleGalleryModal, BookingModal with live quote API, AuthModal, Concierge AI chat simulation, and Digital Rental Pass ticket modal.
- **Persistence**: Currently defaulting to in-memory H2 (`jdbc:h2:mem:tbhrental`), meaning all data is lost upon server restart.
- **Database Engine**: A real MySQL 8.0 server (`mysqld 8.0.46`, Windows service `hkt`) is actively running on port 3306 with root access verified.

---

## 2. Problems Found & Root Cause Analysis

### 🚨 Problem 1: Repeated / Artificial-Looking Vehicle Imagery
- **Root Cause**: In `DataInitializer.java` and `frontend/src/services/api.ts` (`INITIAL_VEHICLES`), multiple vehicles share identical Unsplash image URLs:
  - `photo-1558981403-c5f9899a28bc` was assigned to both **Royal Enfield Classic 350** and **TVS Jupiter 125**.
  - `photo-1568772585407-9361f9bf3a87` (a sport motorcycle) was assigned to both **KTM 390 Duke** and **Honda Activa 6G**! This is why Honda Activa was showing an orange/black sport motorcycle!
  - `photo-1609630875171-b1321377ee65` was assigned to **Royal Enfield Hunter 350** and **Ola S1 Pro**.
- **Impact**: The UI displayed artificial, repetitive, and incorrect vehicle silhouettes for diverse categories.
- **Remedy**: Eliminate repeated and generic images. Implement a relational `vehicle_media` table linking distinct, authentic manufacturer/press photography to each specific vehicle model.

### 🚨 Problem 2: Frontend Hardcoded Fleet as Fallback
- **Root Cause**: `frontend/src/App.tsx` initialized state with `useState(INITIAL_VEHICLES)`. If the API call had any delay or network blip, or before data loaded, the UI fell back to hardcoded arrays.
- **Remedy**: Remove hardcoded vehicle arrays as source of truth. Load state strictly via API (`GET /api/vehicles`) with a skeleton loader.

### 🚨 Problem 3: Catalog vs. Fleet Unit Ambiguity
- **Root Cause**: The current `Vehicle` entity represents both the model specification and the bookable unit simultaneously. It lacks inventory tracking.
- **Remedy**: Separate into two relational entities:
  1. `VehicleModel` (`CATALOG_MODEL`): stores make, model, variant, engine specs, dimensions, media, and pricing tiers.
  2. `FleetUnit` (`ACTUAL_FLEET_UNIT`): stores physical VIN, registration number, assigned hub, odometer, and status (`AVAILABLE`, `BOOKED`, `MAINTENANCE`, `INACTIVE`, `PENDING_VERIFICATION`).
  3. A model can exist in the catalog with 0 available units, preventing fraudulent or unavailable bookings.

### 🚨 Problem 4: Missing Refresh Token & Session Persistence
- **Root Cause**: While JWT access tokens exist, there is no `RefreshToken` persistence. Refreshing the browser or token expiration causes disruptive session drops.
- **Remedy**: Implement secure refresh token rotation stored in MySQL (`refresh_tokens` table) with `/api/auth/refresh` and `/api/auth/logout`.

### 🚨 Problem 5: Persistence Strategy (H2 -> MySQL 8.x)
- **Root Cause**: `application.yml` defaulted to in-memory H2. `application-prod.yml` pointed to Postgres rather than MySQL.
- **Remedy**: Configure Spring Boot to connect to MySQL 8.0 on `localhost:3306/tbh` using the verified root credentials via environment variables (`DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`). Add `com.mysql:mysql-connector-j` to `pom.xml`.

### 🚨 Problem 6: Razorpay Webhook & Payment Record Persistence
- **Root Cause**: Payment verification currently only updates the `Booking` entity fields (`razorpayPaymentId`, `razorpaySignature`). There is no dedicated `Payment` ledger table or webhook endpoint.
- **Remedy**: Create a dedicated `payments` table, implement `/api/payments/webhook` with signature verification, and support idempotent booking confirmation.

---

## 3. Database Architecture (MySQL 8.x)

### Configuration
```properties
spring.datasource.url=jdbc:mysql://${DB_HOST:localhost}:${DB_PORT:3306}/${DB_NAME:tbh}?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=Asia/Kolkata
spring.datasource.username=${DB_USER:root}
spring.datasource.password=${DB_PASSWORD}
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=update
```

### Relational Schema Design:
1. `users` (id, full_name, email, phone, password_hash, role, kyc_status, created_at)
2. `roles` (id, name: ROLE_USER, ROLE_ADMIN)
3. `refresh_tokens` (id, user_id, token, expiry_date, revoked, created_at)
4. `cities` (id, name, state, active)
5. `location_hubs` (id, city_id, name, address, landmark, hub_type)
6. `vehicle_models` (id, brand, model, variant, model_year, vehicle_type, category, fuel_type, transmission, engine_cc, power_bhp, torque_nm, seats, mileage, top_speed, boot_capacity_l, ground_clearance_mm, features, description, price_per_hour, price_per_day, price_per_week, price_per_month, security_deposit, insurance_fee, asset_type, model3d_url, model3d_source, model3d_license, is_popular, is_active)
7. `fleet_units` (id, vehicle_model_id, registration_number, vin_number, color_name, color_hex, city_id, hub_id, status, odo_km, last_serviced_at)
8. `vehicle_media` (id, vehicle_model_id, media_type, url, alt_text, display_order, is_hero, source, license_type, license_reference, verified)
9. `bookings` (id, booking_reference, user_id, fleet_unit_id, vehicle_model_id, pickup_city_id, pickup_hub_id, drop_city_id, drop_hub_id, start_time, end_time, duration_hours, rental_mode, base_amount, discount_amount, insurance_amount, gst_amount, security_deposit, total_amount, unlock_pin, status, refund_amount, cancellation_fee, cancelled_at, refund_transaction_id, created_at)
10. `payments` (id, booking_id, user_id, razorpay_order_id, razorpay_payment_id, razorpay_signature, amount, currency, status, payment_method, error_code, error_description, created_at, updated_at)
11. `kyc_documents` (id, user_id, doc_type, doc_number, file_path, status, verified_at)
12. `reviews` (id, vehicle_model_id, user_id, booking_id, rating, comment, verified_trip, created_at)
13. `audit_logs` (id, action, entity_type, entity_id, user_id, details, created_at)

---

## 4. Vehicle Catalog Scope

The fleet catalog covers all requested Indian automotive segments:
- **Scooters**: Honda Activa 6G, Honda Activa 125, Suzuki Access 125, TVS Jupiter 125, TVS Ntorq 125
- **Commuter Bikes**: Hero Splendor Plus, Hero HF Deluxe, Honda Shine 125, Bajaj Pulsar 125, Bajaj Pulsar 150, Yamaha FZ-FI
- **Mid-Range / Popular**: Royal Enfield Classic 350, Royal Enfield Hunter 350, Royal Enfield Bullet 350, Royal Enfield Meteor 350, Royal Enfield Scram 411, Bajaj Avenger 220, Bajaj Dominar 400
- **Premium / Performance**: Yamaha R15 V4, Yamaha MT-15 V2, KTM Duke 250, KTM Duke 390, KTM RC 390, Royal Enfield Guerrilla 450, Royal Enfield Himalayan 450
- **Adventure / Touring**: Royal Enfield Himalayan 411, Royal Enfield Himalayan 450, Royal Enfield Scram 411, Royal Enfield Meteor 350
- **Self-Drive Cars**:
  - *Economy*: Maruti Suzuki Swift, Maruti Suzuki Baleno, Maruti Suzuki Dzire
  - *Compact SUV*: Maruti Suzuki Fronx, Maruti Suzuki Brezza, Kia Sonet, Hyundai Venue
  - *Sedan*: Maruti Suzuki Ciaz, Hyundai Verna
  - *6/7 Seater MUV*: Maruti Suzuki Ertiga, Maruti Suzuki XL6, Toyota Innova Crysta, Toyota Innova Hycross
  - *Premium SUV*: Mahindra XUV700, Toyota Fortuner 4x4
  - *Luxury*: Audi A6, Kia Carnival (Cataloged with 0 physical units available until partner fleet unit is deployed)

---

## 5. Media Integrity & Licensing Strategy

- **Zero Tolerance for Generic/Fake Vehicles**: Every model has vehicle-specific photography directly reflecting that model's distinct styling.
- **Media Tiers**:
  - `HERO`: High-resolution primary profile
  - `FRONT_3_4`: Dynamic angular perspective
  - `SIDE`: True profile highlighting wheelbase
  - `REAR`: Rear badging and tail-lamp design
  - `COCKPIT` / `INTERIOR`: Digital console or cabin dashboard
- **Metadata Recorded**: Every record in `vehicle_media` tracks `source` (Official Manufacturer Media Kit / Wikimedia Commons / CC-BY), `license_type`, and `verified: true`.

---

## 6. Authentication, Security & Payments

- **BCrypt Hashing**: Passwords stored as BCrypt hashes (strength 12).
- **JWT + Refresh Token Rotation**: Stateless access token (15 mins) + persistent refresh token (7 days) with database revocation.
- **Rate-Limited OTP**: 6-digit OTP, 5-minute expiry, max 3 attempts, 60s cooldown. Console logging in development, zero JSON leakage.
- **Authoritative Pricing**: Server executes duration discounts, GST 18%, and refundable deposits.
- **Double-Booking Prevention**: Pessimistic write locking on `FleetUnit` and overlapping timestamp queries return HTTP 409 Conflict.
- **Razorpay Flow**: Server order generation (`/api/payments/create-order`) -> Checkout -> Signature verification (`/api/payments/verify`) -> Webhook listener (`/api/payments/webhook`).

---

## 7. Next Actions & Execution Path

1. Present implementation plan for user review.
2. Execute backend entity additions, repository upgrades, and service logic.
3. Migrate `pom.xml` and `application.yml` to MySQL 8.x.
4. Execute SQL migrations on local MySQL `tbh` database.
5. Upgrade frontend API service, remove hardcoded data, and wire Vehicle Detail & Gallery views.
6. Verify full test suite and confirm end-to-end integration.
