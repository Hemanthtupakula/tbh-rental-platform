package com.tbh.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class VehicleUnavailableException extends RuntimeException {

    private final String code = "VEHICLE_UNAVAILABLE";

    public VehicleUnavailableException(String message) {
        super(message);
    }

    public String getCode() {
        return code;
    }
}
