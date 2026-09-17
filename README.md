# TBH — Ride Beyond Limits 🏍️ 🚗

### Premium Indian Bike & Car Rental Full-Stack Platform

> **A modern, production-oriented vehicle rental platform built for India's roads.**

TBH — **Ride Beyond Limits** is a full-stack bike and car rental platform designed around the Indian rental experience.

The platform combines a premium automotive interface with secure authentication, WhatsApp mobile verification, Driving Licence KYC with OCR, automated verification, administrator review workflows, vehicle availability, server-controlled pricing, Razorpay payments, transactional emails, and digitally generated rental passes.

---

## 🌐 Live Demo

### 🚘 Frontend

**Live Application:**  
https://tbh-rental-platform.pages.dev

### ⚙️ Backend

**Spring Boot API:**  
https://tbh-rental-platform.onrender.com

---

## ✨ Core Features

### 👤 Customer Experience

- 🔐 Clerk-powered authentication
- 📱 Real WhatsApp OTP verification using Wakit
- 👤 Customer profile management
- 🪪 Driving Licence KYC
- 📷 Front & back licence document upload
- 🔎 Tesseract OCR processing
- 🤖 Automated KYC verification
- 👨‍💼 Admin review for uncertain or mismatched KYC
- 🚘 Indian-market bike and car fleet
- 🎨 Model-specific vehicle colours
- 📸 Vehicle photography and multi-angle galleries
- 📅 Vehicle availability
- 💰 Hourly / Daily / Monthly rental pricing
- 💳 Razorpay payment integration
- 🎟️ Digital Rental Pass
- 📱 QR-based booking verification
- 🔢 Secure rental PIN
- 📧 Transactional email notifications
- 📋 Booking history
- ❌ Cancellation and refund workflows

---

# 🪪 Driving Licence KYC System

TBH implements a multi-stage Driving Licence verification workflow.

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
Tesseract OCR
   │
   ▼
Extract Licence Information
   │
   ▼
Customer Confirmation
   │
   ▼
Backend Validation
   │
   ├── Name
   ├── Date of Birth
   ├── Licence Number
   ├── Expiry Date
   ├── Front Document
   ├── Back Document
   └── OCR Success
   │
   ▼
All Required Checks Pass?
       │
   ┌───┴───┐
   │       │
  YES      NO
   │       │
   ▼       ▼
Automatic  Admin
Approval   Review
   │       │
   ▼       ├── Approve
TBH        └── Reject
VERIFIED
