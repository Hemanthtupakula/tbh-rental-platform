package com.tbh.dto;

public class RefundResponse {
    private boolean success;
    private String refundId;
    private String status; // "processed", "pending", "failed"
    private double amount;
    private String currency;
    private String message;

    public RefundResponse() {}

    public RefundResponse(boolean success, String refundId, String status, double amount, String currency, String message) {
        this.success = success;
        this.refundId = refundId;
        this.status = status;
        this.amount = amount;
        this.currency = currency;
        this.message = message;
    }

    public static RefundResponse success(String refundId, double amount, String status) {
        return new RefundResponse(true, refundId, status, amount, "INR", "Refund processed successfully");
    }

    public static RefundResponse failed(String message) {
        return new RefundResponse(false, null, "failed", 0.0, "INR", message);
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getRefundId() {
        return refundId;
    }

    public void setRefundId(String refundId) {
        this.refundId = refundId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
