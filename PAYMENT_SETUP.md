# TBH — Razorpay Payment Gateway Guide

## 1. Architecture & Flow Overview

```mermaid
sequenceDiagram
    autonumber
    actor Rider as TBH Rider (Client)
    participant Spring as Spring Boot Backend
    participant DB as MySQL 8.x
    participant RZP as Razorpay Gateway

    Rider->>Spring: POST /api/bookings (Select vehicle, dates, hub)
    Spring->>DB: Lock FleetUnit (PESSIMISTIC_WRITE)
    Spring->>RZP: Create Order (amount in paise)
    RZP-->>Spring: Returns order_id (e.g. order_9A...)
    Spring->>DB: Save Booking (PENDING) & Payment ledger entry
    Spring-->>Rider: Booking confirmation + Razorpay Order ID

    Rider->>RZP: Opens Razorpay Standard Checkout (UPI, Cards, NetBanking)
    RZP-->>Rider: Returns payment_id & signature

    Rider->>Spring: POST /api/payments/verify (order_id, payment_id, signature)
    Spring->>Spring: Calculate HMAC-SHA256(order_id + "|" + payment_id, secret)
    alt Signature Matches
        Spring->>DB: UPDATE payments & bookings SET status = 'PAID'
        Spring-->>Rider: 200 OK (Payment Verified)
    else Signature Mismatch
        Spring->>DB: Log tampering attempt
        Spring-->>Rider: 400 Bad Request (Signature Verification Failed)
    end

    Note over RZP,Spring: Asynchronous Redundancy: Webhook
    RZP->>Spring: POST /api/payments/webhook (event: payment.captured)
    Spring->>Spring: Verify X-Razorpay-Signature
    Spring->>DB: Reconcile Payment status
```

---

## 2. Configuration Parameters
In `.env` and `application.yml`:
```yaml
tbh:
  payment:
    provider: ${PAYMENT_PROVIDER:razorpay} # 'razorpay' for production or 'mock' for local offline testing
  razorpay:
    key-id: ${RAZORPAY_KEY_ID:rzp_test_YOUR_KEY_HERE}
    key-secret: ${RAZORPAY_KEY_SECRET:YOUR_SECRET_HERE}
    webhook-secret: ${RAZORPAY_WEBHOOK_SECRET:YOUR_WEBHOOK_SECRET_HERE}
```

---

## 3. Endpoints

### Create Payment Order
`POST /api/payments/create-order/{bookingReference}`
- Generates Razorpay order via Razorpay SDK / API
- Records `Payment` entry with status `PENDING`

### Verify Payment Signature
`POST /api/payments/verify`
```json
{
  "bookingReference": "TBH-HYD-A7B29C",
  "razorpayOrderId": "order_NX78x2yza",
  "razorpayPaymentId": "pay_NX79p0abc",
  "razorpaySignature": "2f47c...9a"
}
```

### Razorpay Webhook
`POST /api/payments/webhook`
- Header: `X-Razorpay-Signature: <hex_hmac>`
- Events Handled:
  - `order.paid`
  - `payment.captured`
  - `payment.failed`
