# TBH — Authentication & Session Security Guide

## 1. Security Architecture Overview
TBH employs a dual-token authentication pattern designed for enterprise-grade security and smooth user experiences:

1. **Short-Lived Access Token (JWT)**:
   - **TTL**: 15 minutes (`900000 ms`)
   - **Storage**: In-memory JavaScript runtime / transient `sessionStorage`
   - **Algorithm**: HMAC-SHA256 (`Keys.hmacShaKeyFor`)
   - **Claims**: `userId`, `email`, `role`, `iat`, `exp`
   - **Zero Persistent Leakage**: Never written to long-term browser `localStorage`.

2. **Long-Lived Refresh Token (Database-Backed Rotation)**:
   - **TTL**: 7 days (`604800000 ms`)
   - **Storage**: MySQL `refresh_tokens` table
   - **Rotation**: Every `/api/auth/refresh` request revokes the presented refresh token and issues a new one.
   - **Token Family & Replay Detection**: If an already-revoked refresh token is presented, the server detects a potential replay attack, flags a security violation, and revokes **all** tokens associated with that token family (`tokenFamily`).

3. **Multi-Factor / OTP Verification**:
   - Cryptographically random 6-digit PIN via `SecureRandom`
   - TTL: 5 minutes (300 seconds) with max 3 attempts limit and 60-second cooldown
   - Transport: Configured `OtpProvider` interface (production SMS gateway or dev console logger).

---

## 2. API Endpoints Reference

### 1. User Registration
- **Endpoint**: `POST /api/auth/register`
- **Access**: Public
- **Request Body**:
  ```json
  {
    "fullName": "Aarav Sharma",
    "email": "aarav.sharma@example.com",
    "phoneNumber": "9876543210",
    "password": "SecurePassword@123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsIn...",
    "refreshToken": "4a73ec98-1e42-4919-8647-7517a6db3f56",
    "userId": 10,
    "fullName": "Aarav Sharma",
    "email": "aarav.sharma@example.com",
    "phoneNumber": "9876543210",
    "role": "ROLE_USER",
    "drivingLicenseVerified": false,
    "drivingLicenseNumber": null
  }
  ```

### 2. User Login
- **Endpoint**: `POST /api/auth/login`
- **Access**: Public
- **Request Body**:
  ```json
  {
    "email": "rider@tbhrentals.in",
    "password": "rider123"
  }
  ```

### 3. Token Rotation
- **Endpoint**: `POST /api/auth/refresh`
- **Access**: Public (Requires valid unrevoked Refresh Token)
- **Request Body**:
  ```json
  {
    "refreshToken": "4a73ec98-1e42-4919-8647-7517a6db3f56"
  }
  ```
- **Response**: New access token and new rotated refresh token.

### 4. Logout / Session Invalidation
- **Endpoint**: `POST /api/auth/logout`
- **Access**: Public
- **Request Body**:
  ```json
  {
    "refreshToken": "4a73ec98-1e42-4919-8647-7517a6db3f56"
  }
  ```
- **Action**: Marks the token as revoked in MySQL database.

### 5. Driving License KYC
- **Endpoint**: `POST /api/auth/verify-license`
- **Access**: Public / Authenticated
- **Request Body**:
  ```json
  {
    "userId": 10,
    "licenseNumber": "KA-01-2024-0091823",
    "docUrl": "/storage/kyc/user-10-dl.jpg"
  }
  ```

---

## 3. Pre-Seeded Development & Demo Accounts

| Account Role | Email | Password | Pre-Verified DL Number |
|---|---|---|---|
| **System Admin** | `admin@tbhrentals.in` | `admin123` | `DL-04-2022-0091823` |
| **Demo Rider** | `rider@tbhrentals.in` | `rider123` | `KA-01-2023-0048192` |
