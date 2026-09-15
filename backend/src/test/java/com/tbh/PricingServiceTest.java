package com.tbh;

import com.tbh.dto.PricingQuoteRequest;
import com.tbh.dto.PricingQuoteResponse;
import com.tbh.entity.AssetType;
import com.tbh.entity.FuelType;
import com.tbh.entity.Transmission;
import com.tbh.entity.Vehicle;
import com.tbh.entity.VehicleType;
import com.tbh.repository.VehicleRepository;
import com.tbh.service.PricingService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class PricingServiceTest {

    private VehicleRepository vehicleRepository;
    private com.tbh.repository.CityPricingRepository cityPricingRepository;
    private PricingService pricingService;
    private Vehicle sampleBike;

    @BeforeEach
    void setUp() {
        vehicleRepository = Mockito.mock(VehicleRepository.class);
        cityPricingRepository = Mockito.mock(com.tbh.repository.CityPricingRepository.class);
        pricingService = new PricingService(vehicleRepository, cityPricingRepository);

        sampleBike = new Vehicle();
        sampleBike.setId(1L);
        sampleBike.setName("Royal Enfield Hunter 350");
        sampleBike.setVehicleType(VehicleType.BIKE);
        sampleBike.setFuelType(FuelType.PETROL);
        sampleBike.setTransmission(Transmission.MANUAL);
        sampleBike.setPricePerHour(100.0);
        sampleBike.setPricePerDay(800.0);
        sampleBike.setPricePerMonth(15000.0);
        sampleBike.setSecurityDeposit(1500.0);
        sampleBike.setAssetType(AssetType.GLB);

        when(vehicleRepository.findById(1L)).thenReturn(Optional.of(sampleBike));
    }

    @Test
    @DisplayName("Hourly calculation computes base price and GST accurately")
    void testHourlyQuote() {
        PricingQuoteRequest req = new PricingQuoteRequest();
        req.setVehicleId(1L);
        req.setRentalMode("HOURLY");
        req.setDuration(5);
        req.setInsurancePlan("BASIC");

        PricingQuoteResponse quote = pricingService.calculateQuote(req);

        assertEquals(500.0, quote.getBaseAmount()); // 100 * 5
        assertEquals(0.0, quote.getDiscountAmount());
        assertEquals(1500.0, quote.getSecurityDeposit());
        assertTrue(quote.getGstAmount() > 0);
        assertTrue(quote.getTotalAmount() > quote.getBaseAmount() + quote.getSecurityDeposit());
    }

    @Test
    @DisplayName("3-day daily rental receives 10% duration discount")
    void testDailyDiscount() {
        PricingQuoteRequest req = new PricingQuoteRequest();
        req.setVehicleId(1L);
        req.setRentalMode("DAILY");
        req.setDuration(4); // >= 3 days gets 10% discount
        req.setInsurancePlan("PREMIUM");

        PricingQuoteResponse quote = pricingService.calculateQuote(req);

        assertEquals(3200.0, quote.getBaseAmount()); // 800 * 4
        assertEquals(320.0, quote.getDiscountAmount()); // 10% of 3200
        assertEquals(18.0, quote.getGstPercent());
    }

    @Test
    @DisplayName("7-day weekly rental receives 15% duration discount")
    void testWeeklyDiscount() {
        PricingQuoteRequest req = new PricingQuoteRequest();
        req.setVehicleId(1L);
        req.setRentalMode("DAILY");
        req.setDuration(7); // >= 7 days gets 15% discount
        req.setInsurancePlan("PREMIUM");

        PricingQuoteResponse quote = pricingService.calculateQuote(req);

        assertEquals(5600.0, quote.getBaseAmount()); // 800 * 7
        assertEquals(840.0, quote.getDiscountAmount()); // 15% of 5600
    }

    @Test
    @DisplayName("Cross-city rental includes cross-city logistics fee")
    void testCrossCityPricing() {
        PricingQuoteRequest req = new PricingQuoteRequest();
        req.setVehicleId(1L);
        req.setRentalMode("DAILY");
        req.setDuration(2);
        req.setPickupCity("Hyderabad");
        req.setDropCity("Bengaluru");
        req.setInsurancePlan("BASIC");

        PricingQuoteResponse quote = pricingService.calculateQuote(req);

        assertEquals("Hyderabad", quote.getPickupCity());
        assertEquals("Bengaluru", quote.getDropCity());
        assertEquals(1499.0, quote.getCrossCityFee());
        assertTrue(quote.getTotalAmount() > quote.getBaseAmount() + quote.getCrossCityFee());
    }
}
