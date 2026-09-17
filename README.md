# TBH — Ride Beyond Limits 🏍️ 🚗 ⚡

### Premium Indian Bike & Car Rental Full-Stack Platform

[![Live App](https://img.shields.io/badge/Live_Application-tbh--rental--platform.pages.dev-00E5C7?style=for-the-badge&logo=cloudflare&logoColor=black)](https://tbh-rental-platform.pages.dev)
[![Backend](https://img.shields.io/badge/Backend-Java_21_|__Spring_Boot_3.3-FF2D20?style=for-the-badge&logo=springboot&logoColor=white)](https://tbh-rental-platform.onrender.com)
[![Database](https://img.shields.io/badge/Database-Aiven_MySQL_8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://github.com/Hemanthtupakula/tbh-rental-platform)

> **Repository Description**: Premium full-stack Indian bike & car rental platform with KYC/OCR, WhatsApp OTP, Razorpay payments, digital rental passes, and admin control center.

---

## 🌐 Live Application

- **Frontend Production URL**: [https://tbh-rental-platform.pages.dev](https://tbh-rental-platform.pages.dev)
- **Backend Spring Boot API**: [https://tbh-rental-platform.onrender.com](https://tbh-rental-platform.onrender.com)

---

## ✨ Core Features

### 👤 Customer Experience

- 🔐 **Clerk Authentication**: Dual-mode Clerk JWT & Spring Security Bearer tokens.
- 📱 **Real WhatsApp OTP Verification**: Powered by Wakit WhatsApp API.
- 👤 **Customer Profile & Eligibility Management**.
- 🪪 **Driving Licence KYC & Tesseract OCR**:
  - ImageKit CDN secure document storage for Front & Back DL uploads.
  - Tesseract OCR text extraction engine.
  - Authoritative backend auto-approval engine verifying customer inputs against OCR extraction (Licence Number, Name, DOB, Expiry Date).
  - Fallback to Admin Review Queue with audit notes on mismatch or missing fields.
- 🚘 **Indian Fleet & Model-Specific Colors**:
  - Comprehensive fleet across Superbikes, Cruisers, Scooters, EVs, Petrol Cars, 4x4 SUVs, and Electric Vehicles.
  - Authentic manufacturer color palettes with direct OEM CDN images.
  - Multi-angle gallery viewer and 360° interactive preview.
- 📍 **Pan-India Airport & Metro Hub Routing**:
  - Active across 11 Indian metros (Hyderabad, Bengaluru, Chennai, Mumbai, Pune, Delhi NCR, Kolkata, Goa, Jaipur, Ahmedabad, Kochi).
  - Flexible pickup and drop at major airports, tech parks, and city centers.
- 💰 **Transparent Rental Pricing (₹ INR)**:
  - Hourly, Daily, and Monthly duration modes with transparent breakdown (Base fare + Insurance + GST 18% + 100% Refundable Deposit).
- 💳 **Razorpay Payment Gateway**:
  - Instant booking payment hold and signature-verified Razorpay transactions.
- 🎟️ **Digital Rental Pass**:
  - Boarding-pass style rental authorization with dynamic QR code verification and 4-digit smart unlock PIN.
- 📧 **Transactional Emails**: Resend API notifications.

### 👨‍💼 Admin Control Center

- Dedicated full-screen Admin control panel for fleet availability toggling, interactive KYC review modal with Front/Back document zoom and audit log timeline, promotional coupons & offers management, customer support ticket inbox, and audit logs.

---

## 🪪 Driving Licence KYC Workflow

```text
Customer
   │
   ▼
Upload DL Front + Back
   │
   ▼
ImageKit Document Storage
   │
   ▼
Tesseract OCR Engine
   │
   ▼
Extract Licence Information (DL No, Name, DOB, Expiry)
   │
   ▼
Customer Confirmation
   │
   ▼
Backend Validation
   ├── Name Match
   ├── Date of Birth Match
   ├── Licence Number Match
   ├── Expiry Date Valid
   ├── Front Document Present
   ├── Back Document Present
   └── OCR Status == OCR_SUCCESS
   │
   ▼
All Required Checks Pass?
       │
   ┌───┴───┐
   │       │
  YES      NO
   │       │
   ▼       ▼
Automatic  Admin Review Queue
Approval   (Manual Inspection)
   │       │
   ▼       ├── Approve (TBH_VERIFIED)
TBH        └── Reject (REJECTED)
VERIFIED
```

---

## 🛠️ Architecture & Tech Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Backend** | Java 21, Spring Boot 3.3.4, Spring Security, Spring Data JPA, Flyway DB Migrations |
| **Database** | Aiven MySQL 8.0 (Production) / H2 In-Memory (Test/Dev) |
| **Frontend** | React 18, TypeScript, Tailwind CSS, Vite, Cloudflare Pages |
| **OCR & Media** | Tesseract OCR 5.5, ImageKit CDN Storage |
| **Auth & Messaging** | Wakit WhatsApp OTP API, Clerk Dual-Mode Auth, Resend Email API |
| **Payments** | Razorpay Payment Gateway API |

---

## 🚀 Getting Started

### 1. Spring Boot Backend Setup
```bash
cd backend
mvnw.cmd compile
mvnw.cmd test
mvnw.cmd package -DskipTests
java -jar target/tbh-rental-backend-1.0.0.jar
```
Backend API available at: `http://localhost:8080/api`

### 2. Frontend Development Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend client available at: `http://localhost:5173/`

---

## 🛡️ License & Compliance
All vehicles operate under the Motor Vehicles (Rent a Cab / Rent a Motorcycle) Scheme prescribed by the Ministry of Road Transport and Highways (MoRTH), Government of India.

---
**Developer**: [Hemanth Tupakula](https://github.com/Hemanthtupakula)
