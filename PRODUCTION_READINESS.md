# TBH — Production Readiness & Architecture Report

## 1. Executive Summary
The **TBH Mobility Platform** ("Ride Beyond Limits") has been upgraded in-place from a prototype into an enterprise-architected, genuine Indian mobility rental system.

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS + Three.js
- **Backend**: Spring Boot 3.3.4 (Java 21)
- **Database**: MySQL Community Server 8.0.46 (`tbh` schema on port 3306)
- **Security**: Stateless short-lived JWT + MySQL-backed Refresh Token Rotation + Token Family replay prevention
- **Inventory Concurrency**: Explicit `VehicleModel` vs `FleetUnit` architecture with database pessimistic write locks
- **Media Provenance**: 41 authentic Indian vehicle models with model-specific photographs stored locally and documented in `VEHICLE_MEDIA_LICENSE_REGISTER.md`.

---

## 2. Readiness Matrix

| Feature / Domain | Status | Technical Implementation | College Demo vs Production |
|---|---|---|---|
| **Database Persistence** | ✅ **READY** | MySQL 8.x (`tbh` database), HikariCP connection pool, JPA Hibernate entities | Production-grade local RDBMS |
| **Fleet Catalog & Units** | ✅ **READY** | 41 Indian vehicles with realistic specs, separated `fleet_units` with RTO registrations | College demo includes 0 units for Audi A6 to demonstrate `CURRENTLY UNAVAILABLE` |
| **Media Assets & Provenance** | ✅ **READY** | Local assets in `/vehicles/.../hero.jpg`, documented in `VEHICLE_MEDIA_LICENSE_REGISTER.md` | College Demo Reference (Unlicensed for commercial use, replacement required for commercial launch) |
| **Authentication & Sessions** | ✅ **READY** | 15-min JWT access token, rotated refresh tokens in MySQL, replay attack family invalidation | Fully functional |
| **Inventory Locking & Concurrency** | ✅ **READY** | `@Lock(LockModeType.PESSIMISTIC_WRITE)` query on `FleetUnit`, returns `409 Conflict` on collisions | Fully functional |
| **Payment Gateway** | ⚠️ **CONFIG READY** | Dual-mode: `MockPaymentService` (local) / `RazorpayPaymentService` (live HMAC verification + Webhook) | **EXTERNAL ACTION REQUIRED**: Add live `RAZORPAY_KEY_ID` & `RAZORPAY_KEY_SECRET` in `.env` for production |
| **SMS OTP Service** | ⚠️ **CONFIG READY** | Dual-mode: `MockOtpProvider` (console logger) / `SmsOtpProvider` (Twilio/Gupshup SMS) | **EXTERNAL ACTION REQUIRED**: Configure SMS Gateway credentials for real SMS |
| **KYC / License Storage** | ✅ **READY** | Document upload verification endpoint and model validation | Fully functional |

---

## 3. Commercial Upgrade Steps
To transition the college-project build into a fully licensed commercial enterprise:
1. Replace CarDekho/BikeDekho visual assets with manufacturer press kit photography or partner-uploaded fleet unit photos.
2. Update `vehicle_media` table records to `license_type = 'COMMERCIAL_PARTNER_LICENSE'` and `verified = true`.
3. Provide live production API credentials for Razorpay in `.env`.
4. Connect Twilio / Gupshup / Fast2SMS API keys in `.env` for live SMS OTP delivery.
