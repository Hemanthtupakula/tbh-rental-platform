package com.tbh.controller;

import com.tbh.dto.PricingQuoteRequest;
import com.tbh.dto.PricingQuoteResponse;
import com.tbh.service.PricingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pricing")
public class PricingController {

    private final PricingService pricingService;

    public PricingController(PricingService pricingService) {
        this.pricingService = pricingService;
    }

    @PostMapping("/quote")
    public ResponseEntity<PricingQuoteResponse> getPricingQuote(@RequestBody PricingQuoteRequest request) {
        PricingQuoteResponse quote = pricingService.calculateQuote(request);
        return ResponseEntity.ok(quote);
    }
}
