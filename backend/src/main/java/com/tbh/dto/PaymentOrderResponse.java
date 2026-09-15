package com.tbh.dto;

public class PaymentOrderResponse {
    private String orderId;
    private long amount; // in paise (INR * 100)
    private String currency;
    private String keyId;
    private String bookingReference;

    public PaymentOrderResponse() {}

    public PaymentOrderResponse(String orderId, long amount, String currency, String keyId, String bookingReference) {
        this.orderId = orderId;
        this.amount = amount;
        this.currency = currency;
        this.keyId = keyId;
        this.bookingReference = bookingReference;
    }

    public String getOrderId() { return orderId; }
    public void setOrderId(String orderId) { this.orderId = orderId; }

    public long getAmount() { return amount; }
    public void setAmount(long amount) { this.amount = amount; }

    public String getCurrency() { return currency; }
    public void setCurrency(String currency) { this.currency = currency; }

    public String getKeyId() { return keyId; }
    public void setKeyId(String keyId) { this.keyId = keyId; }

    public String getBookingReference() { return bookingReference; }
    public void setBookingReference(String bookingReference) { this.bookingReference = bookingReference; }
}
