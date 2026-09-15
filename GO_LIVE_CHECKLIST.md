# TBH — Go-Live Commercial Launch Checklist

This checklist defines every operational and technical requirement needed to transition TBH ("Ride Beyond Limits") from the local audited sandbox build into a live commercial mobility rental enterprise accepting real customer funds and live user data.

---

## 1. 🗄️ Database & Managed Infrastructure
- [x] **MySQL 8.0 Architecture**: Verified running on port 3306 with normalized relational schema (11 cities, 41 vehicle models, fleet units, bookings, payments, pricing, refresh tokens, KYC).
- [x] **Schema Enum Safety**: `migrateColumnsIfNeeded()` prevents enum truncation on schema adjustments.
- [x] **Connection Pooling**: HikariCP configured with 10 connections and tuned timeouts (`idleTimeout: 30000`, `connectionTimeout: 20000`).
- [ ] **Managed Cloud RDBMS Deployment**: Transition from local MySQL to AWS RDS Aurora MySQL or Google Cloud SQL (MySQL 8.0).
- [ ] **Automated Backups & PITR**: Enable daily automated snapshots with 30-day retention and Point-in-Time Recovery (PITR) for transaction ledger safety.
- [ ] **Read Replicas**: Provision a read-replica for high-frequency catalog searches (`GET /api/vehicles`, `GET /api/locations/cities`) during peak hours.

---

## 2. 🔐 Security, Secrets & Access Control
- [x] **Auth Gate Hardening (Phase 1)**: Zero fake auto-login; initial user state defaults to `null`; real login redirect on all protected booking/payment/KYC actions.
- [x] **Verified JWT Subject Extraction**: `userId` is strictly resolved from verified Spring Security `Authentication` JWT token on `/api/bookings`, thwarting identity spoofing.
- [x] **Refresh Token Rotation**: Implemented in `refresh_tokens` table with family-level replay detection and revocation.
- [x] **CORS Configuration**: Restricted to allowed origins in `SecurityConfig.java`.
- [ ] **Production CORS Lockdown**: Replace `http://localhost:5173` with production domain (`https://tbhrentals.in`, `https://app.tbhrentals.in`).
- [ ] **Centralized Secrets Vault**: Migrate `TBH_JWT_SECRET`, `DB_PASSWORD`, `RAZORPAY_KEY_SECRET`, and `TBH_SMS_API_KEY` into AWS Secrets Manager, GCP Secret Manager, or HashiCorp Vault instead of plaintext disk environment files.
- [ ] **TLS 1.3 & HTTPS**: Terminate TLS 1.3 via Nginx / Cloudflare reverse proxy with HTTP Strict Transport Security (`HSTS`, `max-age=31536000; includeSubDomains; preload`).

---

## 3. 💳 Payment Processing & Fiscal Compliance
- [x] **Real Razorpay REST Integration (Phase 3)**: Authenticated `POST https://api.razorpay.com/v1/orders` using HTTP Basic Auth against live Razorpay servers.
- [x] **Fail-Closed HMAC Signature Verification**: Cryptographic HMAC-SHA256 signature verification in `/api/payments/verify`.
- [x] **Cross-Booking Replay Attack Defense**: Strictly validates that `request.razorpayOrderId` matches `booking.razorpayOrderId`, preventing cheap order replay against expensive reservations.
- [x] **Keyless Unlock PIN Generation**: 4-digit PIN is strictly generated and revealed *only* upon verified payment confirmation.
- [x] **15-Minute TTL & Abandoned Checkout Cleanup**: `@Scheduled` task cleans up stale `PENDING` bookings and returns locked fleet units to `AVAILABLE`.
- [x] **Idempotent Webhook Reconciler**: `/api/payments/webhook` handles `payment.captured` idempotently.
- [ ] **Razorpay Live Merchant Onboarding & KYC**:
  - [ ] Complete Razorpay business KYC (GSTIN registration, Certificate of Incorporation, cancelled cheque/bank account verification).
  - [ ] Switch `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` from `rzp_test_...` to live `rzp_live_...` credentials in production vault.
  - [ ] Register live webhook endpoint (`https://api.tbhrentals.in/api/payments/webhook`) with secret `RAZORPAY_WEBHOOK_SECRET` and event subscriptions (`order.paid`, `payment.captured`, `payment.failed`).

---

## 4. 📱 SMS OTP Gateway & TRAI DLT Compliance
- [x] **HTTP SMS Dispatch (Phase 2)**: Real HTTP carrier dispatch in `SmsOtpProvider.java`.
- [x] **DLT-Compliant Request Builder**: Supports DLT template IDs, approved sender IDs, and Fast2SMS/MSG91 endpoints.
- [x] **Security & Zero Leakage**: Phone numbers masked in logs (`+91 98••••••12`); zero OTP codes exposed in system stdout/logs.
- [x] **Fail-Closed Carrier Error Handling**: Explicitly evaluates carrier JSON response (`json.has("return") && json.get("return").asBoolean()`).
- [ ] **TRAI DLT Registration**:
  - [ ] Register company entity on Indian Telco DLT portal (Vilpower / Jio / Airtel DLT).
  - [ ] Register 6-character Alpha Header / Sender ID (e.g. `TBHIND`).
  - [ ] Register transactional OTP template: `{#var#} is your TBH verification code. Valid for 10 minutes. Do not share this OTP with anyone. TBH Rentals`.
  - [ ] Populate `TBH_SMS_DLT_TEMPLATE_ID`, `TBH_SMS_SENDER_ID`, and `TBH_SMS_API_KEY` in production environment.

---

## 5. 🎨 3D Vehicle Viewer & Media Assets
- [x] **Three.js GLTFLoader Architecture (Phase 4)**: Replaced toy procedural geometry with real GLTF 2.0 binary (`.glb`) loader.
- [x] **8 Category Silhouette Models**: Distinct GLB models covering all 41 catalog vehicles:
  - `scooter.glb` (Urban Scooters)
  - `commuter.glb` (Commuter Motorcycles)
  - `cruiser.glb` (Classic Cruisers)
  - `sports_bike.glb` (Naked / Sport / Adventure Bikes)
  - `hatchback.glb` (Aero Hatchbacks)
  - `compact_suv.glb` (Compact SUVs & Crossovers)
  - `sedan.glb` (Executive Sedans)
  - `suv_mpv.glb` (3-Row Premium SUVs & MPVs)
- [x] **Interactive Features**: Dynamic PBR paint color swap, headlight beam projection, wireframe mesh topology inspector, smooth OrbitControls, cockpit speedometer & tachometer simulation.
- [x] **Loading Skeleton**: Responsive loading progress overlay with GLTF status indicator.
- [ ] **Commercial 3D Asset Upgrade (Per-Exact-Model)**:
  - [ ] Current category `.glb` files provide authentic class silhouettes. For exact 1:1 digital twins (e.g. exact Royal Enfield Classic 350 engine fin contours or exact Mahindra XUV700 grille), acquire commercially licensed CAD/GLTF models (via Sketchfab / TurboSquid / CGTrader commercial licenses) or commission a 3D artist.
  - [ ] Save exact `.glb` files into `frontend/public/models/exact/{brand}_{model}.glb` and populate `model3dUrl` in the database.
- [ ] **Vehicle Photography Licensing**:
  - [ ] Ingest official press kit media from OEM media portals (Royal Enfield Media, Maruti Suzuki Newsroom, TVS Media) or take authentic fleet unit photographs during depot intake.
  - [ ] Update `VEHICLE_MEDIA_LICENSE_REGISTER.md` records to `COMMERCIAL_OEM_MEDIA` or `FLEET_PARTNER_PHOTO`.
