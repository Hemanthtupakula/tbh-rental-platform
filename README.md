# TBH — "Ride Beyond Limits" 🏍️ 🚗 ⚡
### Ultra-Premium Indian Bike & Car Rental Full-Stack Platform

TBH is an elite, high-end vehicle rental platform built specifically for Indian metropolises and destinations. It features interactive WebGL 3D vehicle visualization (Three.js), transparent hourly, daily, and monthly rental pricing in Rupees (₹), driving license KYC verification, and full-stack Java Spring Boot architecture.

![TBH Banner](frontend/public/hero-bg.jpg)

---

## ✨ Key Features

- **Interactive 3D Vehicle Studio (Three.js)**:
  - 360-degree orbit camera controls (rotate, zoom, inspect chassis).
  - Real-time paint customizer (Matte Midnight Black, Electric Teal, Racing Saffron, Cyber Gold, Crimson Pulse, Titanium Silver).
  - Headlight beam toggles illuminating the 3D ground stage.
  - Web Audio API procedural engine rev synthesizer (Cruiser rumble, Superbike screamer, EV glide).
  - Real-time speedometer telemetry cockpit (RPM gauge, gear indicator, 0-100 km/h acceleration timer).
- **All-Inclusive Indian Fleet**:
  - **Superbikes & Cruisers**: Royal Enfield Classic 350, Royal Enfield Hunter 350, KTM Duke 390, Yamaha MT-15 V2, Kawasaki Ninja 400.
  - **Scooters / Scooties**: Honda Activa 6G, TVS Jupiter 125, Suzuki Access 125, Yamaha Aerox 155.
  - **Electric Velocity (EV)**: Ola S1 Pro Gen 2, Ather 450X Gen 3, Revolt RV400, Ultraviolette F77 Mach 2.
  - **Petrol Cars**: Maruti Suzuki Swift, Hyundai Creta SX, Volkswagen Virtus GT.
  - **Diesel & 4x4 SUVs**: Mahindra Thar 4x4 Diesel, Toyota Fortuner 4x4, Mahindra Scorpio-N.
  - **Electric Cars**: Tata Nexon EV Max, MG ZS EV, BYD Atto 3.
- **Pan-India Airport & City Hub Routing**:
  - Bengaluru, Hyderabad, Mumbai, Delhi NCR, Chennai, Goa, Pune, Jaipur.
  - Flexible pickup at one hub (e.g. Airport) and drop at another (e.g. Tech Park / City Center).
- **Flexible Pricing in INR (₹)**:
  - Hourly, Daily, and Monthly duration modes with instant price calculation.
  - Transparent itemization: Base fare + Insurance + GST 18% + 100% Refundable Security Deposit.
- **Real-Time Authentication & Driving License KYC**:
  - Indian Phone OTP (+91 numbers with instant verification simulation).
  - Email & Password login / registration.
  - Driving License document verification with instant DigiLocker verified badge.
- **Digital Rental Pass**:
  - Futuristic boarding pass ticket with QR code for hub pickup and 4-digit smart unlock PIN.
- **24/7 TBH Concierge & Emergency Roadside Helpline**:
  - Live AI assistant and Toll-Free SOS: `1800-TBH-RIDE` (1800 824 7433).
- **Multi-Language Support**:
  - Instant toggle between English and Hindi (हिंदी).

---

## 🛠️ Tech Stack

- **Backend**: Java 21 / 24, Spring Boot 3, Spring Web, Spring Data JPA, H2 Embedded Database (dev profile) + PostgreSQL (prod profile).
- **Frontend**: React 18, TypeScript, Tailwind CSS, Three.js, Lucide Icons, Canvas Confetti, Vite.
- **Payment Gateway**: Razorpay UPI / Card simulation.
- **Containerization**: Docker & Docker Compose.

---

## 🚀 Getting Started

### 1. Spring Boot Backend (Port 8080)
The backend includes an embedded H2 database pre-seeded with all Indian cities, hubs, bikes, cars, and users.
```bash
cd backend
mvnw.cmd compile
mvnw.cmd package -DskipTests
java -jar target/tbh-rental-backend-1.0.0.jar
```
API endpoints available at: `http://localhost:8080/api/vehicles`  
H2 Web Console: `http://localhost:8080/h2-console`

### 2. React + TypeScript Frontend (Port 5173)
```bash
cd frontend
npm install
npm run dev
```
Open your browser at: `http://localhost:5173/`

---

## 📂 Project Layout

```text
bike-rental/
├── backend/                  # Java Spring Boot 3 REST API
│   ├── mvnw.cmd              # Maven Wrapper
│   ├── pom.xml
│   └── src/main/java/com/tbh/
│       ├── config/           # CorsConfig, DataInitializer
│       ├── controller/       # VehicleController, LocationController, AuthController, BookingController
│       ├── dto/              # AuthRequest, BookingRequest, OtpRequest
│       ├── entity/           # Vehicle, City, LocationHub, Booking, User
│       ├── repository/       # VehicleRepository, CityRepository, BookingRepository
│       └── service/          # VehicleService, LocationService, BookingService
├── frontend/                 # React + TypeScript + Three.js
│   ├── src/
│   │   ├── components/       # Vehicle3DModal, HeroSection, Navbar, BookingModal, DigitalPass
│   │   ├── context/          # AuthContext (OTP & KYC), LanguageContext (EN/HI)
│   │   ├── services/         # soundService (Web Audio API), api
│   │   └── types/            # Vehicle, City, Booking TypeScript interfaces
├── database/
│   └── schema.sql            # PostgreSQL production schema
├── docker-compose.yml        # Docker composition for PostgreSQL & Backend
└── README.md
```

---

## 🛡️ License & Parivahan Compliance
All vehicles comply with the Motor Vehicles (Rent a Cab / Rent a Motorcycle) Scheme under the Ministry of Road Transport and Highways, Government of India.
