package com.tbh.config;

import com.tbh.entity.*;
import com.tbh.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Component
public class DataInitializer implements CommandLineRunner {

    private final JdbcTemplate jdbcTemplate;
    private final CityRepository cityRepository;
    private final VehicleRepository vehicleRepository;
    private final FleetUnitRepository fleetUnitRepository;
    private final VehicleMediaRepository vehicleMediaRepository;
    private final UserRepository userRepository;
    private final ReviewRepository reviewRepository;
    private final PasswordEncoder passwordEncoder;
    private final CityPricingRepository cityPricingRepository;
    private final LicenseVerificationRepository licenseVerificationRepository;

    public DataInitializer(JdbcTemplate jdbcTemplate,
                           CityRepository cityRepository,
                           VehicleRepository vehicleRepository,
                           FleetUnitRepository fleetUnitRepository,
                           VehicleMediaRepository vehicleMediaRepository,
                           UserRepository userRepository,
                           ReviewRepository reviewRepository,
                           PasswordEncoder passwordEncoder,
                           CityPricingRepository cityPricingRepository,
                           LicenseVerificationRepository licenseVerificationRepository) {
        this.jdbcTemplate = jdbcTemplate;
        this.cityRepository = cityRepository;
        this.vehicleRepository = vehicleRepository;
        this.fleetUnitRepository = fleetUnitRepository;
        this.vehicleMediaRepository = vehicleMediaRepository;
        this.userRepository = userRepository;
        this.reviewRepository = reviewRepository;
        this.passwordEncoder = passwordEncoder;
        this.cityPricingRepository = cityPricingRepository;
        this.licenseVerificationRepository = licenseVerificationRepository;
    }

    @Override
    public void run(String... args) {
        migrateColumnsIfNeeded();
        initOrUpdateCities();
        ensureAllVehicles();
        ensureMultiCityFleetUnits();
        initCityPricing();
        initUsersAndKyc();
    }

    private void migrateColumnsIfNeeded() {
        try {
            jdbcTemplate.execute("ALTER TABLE bookings MODIFY COLUMN payment_status VARCHAR(32)");
        } catch (Exception ignored) {}
        try {
            jdbcTemplate.execute("ALTER TABLE payments MODIFY COLUMN status VARCHAR(32)");
        } catch (Exception ignored) {}
        try {
            jdbcTemplate.execute("ALTER TABLE bookings MODIFY COLUMN status VARCHAR(32)");
        } catch (Exception ignored) {}
    }

    private void initOrUpdateCities() {
        createOrUpdateCity("Hyderabad", "Telangana", "TS", List.of(
                new LocationHub("Rajiv Gandhi Intl Airport (HYD)", "Shamshabad Aeroplaza", "Arrival Bay 3", "AIRPORT"),
                new LocationHub("Hitech City Hub", "Cyber Towers Outer Ring", "Near Shilparamam Metro", "TECH_PARK"),
                new LocationHub("Gachibowli Hub", "Financial District Main Circle", "Near DLF Cyber City", "TECH_PARK"),
                new LocationHub("Jubilee Hills Hub", "Road No 36", "Metro Pillar 140", "CITY_CENTER")
        ));

        createOrUpdateCity("Bengaluru", "Karnataka", "KA", List.of(
                new LocationHub("Kempegowda Intl Airport (BLR)", "Terminal 1 & 2 Mobility Zone", "Near Arrival Gate 4", "AIRPORT"),
                new LocationHub("Indiranagar Hub", "100 Feet Road, 12th Main", "Opposite Toit Brewery", "CITY_CENTER"),
                new LocationHub("Koramangala Hub", "80 Feet Road, 4th Block", "Near Sony World Signal", "CITY_CENTER"),
                new LocationHub("Whitefield IT Hub", "ITPL Main Road", "Next to Nexus Shantiniketan", "TECH_PARK")
        ));

        createOrUpdateCity("Chennai", "Tamil Nadu", "TN", List.of(
                new LocationHub("Chennai Intl Airport (MAA)", "Meenambakkam Terminal 2", "Aerohub Level 1", "AIRPORT"),
                new LocationHub("T. Nagar Hub", "GN Chetty Road", "Opposite Panagal Park", "CITY_CENTER"),
                new LocationHub("OMR IT Corridor", "Thoraipakkam Toll Gate", "Near Ascendas IT Park", "TECH_PARK")
        ));

        createOrUpdateCity("Mumbai", "Maharashtra", "MH", List.of(
                new LocationHub("Chhatrapati Shivaji Intl Airport (BOM)", "Terminal 2 Ground Transportation", "P4 Parking Level", "AIRPORT"),
                new LocationHub("Bandra Kurla Complex (BKC)", "G Block, BKC", "Near Jio World Drive", "TECH_PARK"),
                new LocationHub("South Mumbai Hub", "Nariman Point Marine Drive", "Opposite Air India Bldg", "CITY_CENTER")
        ));

        createOrUpdateCity("Pune", "Maharashtra", "MH", List.of(
                new LocationHub("Pune Airport (PNQ)", "Lohegaon Terminal", "Arrival Bay 2", "AIRPORT"),
                new LocationHub("Hinjawadi IT Hub", "Phase 1 Circle", "Next to Infosys Gate 1", "TECH_PARK"),
                new LocationHub("Koregaon Park Hub", "North Main Road", "Lane 5 Corner", "CITY_CENTER")
        ));

        createOrUpdateCity("Delhi NCR", "Delhi", "DL", List.of(
                new LocationHub("Indira Gandhi Intl Airport (DEL)", "Terminal 3 Multi-Level Hub", "P3 Car Park", "AIRPORT"),
                new LocationHub("Cyber Hub Gurugram", "DLF Cyber City Phase 2", "Near Rapid Metro", "TECH_PARK"),
                new LocationHub("Connaught Place Hub", "Inner Circle Block E", "Near Rajiv Chowk Metro", "CITY_CENTER")
        ));

        createOrUpdateCity("Kolkata", "West Bengal", "WB", List.of(
                new LocationHub("Netaji Subhash Chandra Bose Airport (CCU)", "Dum Dum Terminal", "Ground Transport Bay 2", "AIRPORT"),
                new LocationHub("Salt Lake Sector V", "College More Tech Zone", "Near Webel Bhavan", "TECH_PARK"),
                new LocationHub("Park Street Hub", "Park Street Crossing", "Near Allen Park", "CITY_CENTER")
        ));

        createOrUpdateCity("Goa", "Goa", "GA", List.of(
                new LocationHub("Manohar Intl Airport Mopa (GOX)", "North Goa Terminal", "Pickup Zone A", "AIRPORT"),
                new LocationHub("Dabolim Airport (GOI)", "South Goa Terminal", "Arrival Exit 2", "AIRPORT"),
                new LocationHub("Calangute Beach Hub", "Tito's Lane Junction", "Near St. Anthony Chapel", "CITY_CENTER"),
                new LocationHub("Panaji Waterfront Hub", "Miramar Circle", "Near Dayanand Bandodkar Marg", "CITY_CENTER")
        ));

        createOrUpdateCity("Jaipur", "Rajasthan", "RJ", List.of(
                new LocationHub("Jaipur Intl Airport (JAI)", "Terminal 2 Pickups", "Gate 3", "AIRPORT"),
                new LocationHub("MI Road Hub", "Panch Batti Circle", "Near Raj Mandir", "CITY_CENTER")
        ));

        createOrUpdateCity("Ahmedabad", "Gujarat", "GJ", List.of(
                new LocationHub("Sardar Vallabhbhai Patel Airport (AMD)", "Terminal 1 & 2 Pickup Bay", "Arrival Gate 2", "AIRPORT"),
                new LocationHub("SG Highway Tech Hub", "Prahlad Nagar Junction", "Near Titanium City Centre", "TECH_PARK"),
                new LocationHub("Navrangpura Hub", "CG Road", "Near Municipal Market", "CITY_CENTER")
        ));

        createOrUpdateCity("Kochi", "Kerala", "KL", List.of(
                new LocationHub("Cochin Intl Airport (COK)", "Nedumbassery Solar Terminal", "Canopy Pillar 12", "AIRPORT"),
                new LocationHub("Infopark Kakkanad", "Kakkanad Express Corridor", "Phase 1 Gate", "TECH_PARK"),
                new LocationHub("Marine Drive Hub", "Shanmugham Road", "Near Rainbow Bridge", "CITY_CENTER")
        ));
    }

    private void createOrUpdateCity(String name, String state, String stateCode, List<LocationHub> hubs) {
        City city = cityRepository.findByName(name).orElse(null);
        if (city == null) {
            city = new City(name, state, stateCode);
            for (LocationHub h : hubs) {
                city.addHub(h);
            }
            cityRepository.save(city);
        } else {
            city.setState(state);
            city.setStateCode(stateCode);
            if (city.getHubs() == null || city.getHubs().isEmpty()) {
                for (LocationHub h : hubs) {
                    city.addHub(h);
                }
            }
            cityRepository.save(city);
        }
    }

    private List<Vehicle> getAllCatalogVehicles() {
        String allCities = "Hyderabad,Bengaluru,Chennai,Mumbai,Pune,Delhi NCR,Kolkata,Goa,Jaipur,Ahmedabad,Kochi";
        List<Vehicle> list = new ArrayList<>();

        // 1. Honda Activa 6G
        list.add(buildV("Honda Activa 6G", "Honda", "Activa", "Standard 6G",
                VehicleType.SCOOTER, RentalCategory.SCOOTER, FuelType.PETROL, Transmission.AUTOMATIC,
                2, "109.51 cc PGM-FI", 85, 14.2, 49.0, 449.0, 2699.0, 7999.0,
                1000.0, 49.0, "50 km/l", "/vehicles/honda/activa-6g/hero.jpg",
                "#00E5C7", "Silent Start ACG,Engine Start/Stop Switch,External Fuel Lid,Telescopic Suspension",
                "BikeDekho", 7.79, 8.84, 162, 18, allCities));

        // 2. Honda Activa 125
        list.add(buildV("Honda Activa 125", "Honda", "Activa 125", "Disc Drum",
                VehicleType.SCOOTER, RentalCategory.SCOOTER, FuelType.PETROL, Transmission.AUTOMATIC,
                2, "124.0 cc ESP", 90, 12.8, 59.0, 499.0, 2999.0, 8999.0,
                1200.0, 59.0, "47 km/l", "/vehicles/honda/activa-125/hero.jpg",
                "#D4AF37", "Idling Stop System,Digital-Analog Meter,Front Glove Box,LED Headlamp",
                "BikeDekho", 8.30, 10.4, 162, 18, allCities));

        // 3. Suzuki Access 125
        list.add(buildV("Suzuki Access 125", "Suzuki", "Access 125", "Ride Connect Edition",
                VehicleType.SCOOTER, RentalCategory.SCOOTER, FuelType.PETROL, Transmission.AUTOMATIC,
                2, "124.0 cc SEP", 92, 12.5, 59.0, 519.0, 3099.0, 9199.0,
                1200.0, 59.0, "48 km/l", "/vehicles/suzuki/access-125/hero.jpg",
                "#00E5C7", "Bluetooth Digital Console,Turn-by-Turn Nav,Chrome Mirrors,External Fuel Cap",
                "BikeDekho", 8.70, 10.0, 160, 22, allCities));

        // 4. TVS Jupiter 125
        list.add(buildV("TVS Jupiter 125", "TVS", "Jupiter 125", "Disc SmartXonnect",
                VehicleType.SCOOTER, RentalCategory.SCOOTER, FuelType.PETROL, Transmission.AUTOMATIC,
                2, "124.8 cc ET-Fi", 90, 13.1, 55.0, 489.0, 2899.0, 8699.0,
                1000.0, 50.0, "50 km/l", "/vehicles/tvs/jupiter-125/hero.jpg",
                "#141416", "Largest 33L Under-Seat Storage,Front External Fuel Fill,Progressive LED Light",
                "BikeDekho", 8.15, 10.5, 163, 33, allCities));

        // 5. TVS Ntorq 125
        list.add(buildV("TVS Ntorq 125", "TVS", "Ntorq 125", "Race XP Edition",
                VehicleType.SCOOTER, RentalCategory.SCOOTER, FuelType.PETROL, Transmission.AUTOMATIC,
                2, "124.8 cc 3-Valve", 98, 9.8, 69.0, 599.0, 3499.0, 9999.0,
                1500.0, 60.0, "42 km/l", "/vehicles/tvs/ntorq-125/hero.jpg",
                "#FF4B4B", "Dual Ride Modes (Race/Street),SmartXonnect Telemetry,Stealth Aircraft Exhaust Note",
                "BikeDekho", 10.2, 10.8, 155, 22, allCities));

        // 6. Hero Splendor Plus
        list.add(buildV("Hero Splendor Plus", "Hero", "Splendor Plus", "XTEC 2.0",
                VehicleType.BIKE, RentalCategory.COMMUTER, FuelType.PETROL, Transmission.MANUAL,
                2, "97.2 cc Single-Cylinder", 87, 15.5, 39.0, 379.0, 2299.0, 6999.0,
                800.0, 40.0, "65 km/l", "/vehicles/hero/splendor-plus/hero.jpg",
                "#00E5C7", "i3S Stop-Start,Fully Digital Display,Call/SMS Alerts,High Fuel Economy",
                "BikeDekho", 8.02, 8.05, 165, 0, allCities));

        // 7. Hero HF Deluxe
        list.add(buildV("Hero HF Deluxe", "Hero", "HF Deluxe", "Self-Start Alloy",
                VehicleType.BIKE, RentalCategory.COMMUTER, FuelType.PETROL, Transmission.MANUAL,
                2, "97.2 cc OHC", 85, 16.0, 35.0, 349.0, 2099.0, 6499.0,
                800.0, 35.0, "68 km/l", "/vehicles/hero/hf-deluxe/hero.jpg",
                "#D4AF37", "xSens Fi Technology,Tough Double Cradle Frame,Maintenance Free Battery",
                "BikeDekho", 8.02, 8.05, 165, 0, allCities));

        // 8. Honda Shine 125
        list.add(buildV("Honda Shine 125", "Honda", "Shine 125", "Drum OBD2",
                VehicleType.BIKE, RentalCategory.COMMUTER, FuelType.PETROL, Transmission.MANUAL,
                2, "123.94 cc eSP 5-Speed", 95, 13.5, 45.0, 419.0, 2499.0, 7499.0,
                1000.0, 45.0, "55 km/l", "/vehicles/honda/shine/hero.jpg",
                "#141416", "5-Speed Transmission,Silent ACG Starter,Piston Cooling Jet,DC Headlamp",
                "BikeDekho", 10.7, 11.0, 162, 0, allCities));

        // 9. Bajaj Pulsar 125
        list.add(buildV("Bajaj Pulsar 125", "Bajaj", "Pulsar 125", "Carbon Fiber Split Seat",
                VehicleType.BIKE, RentalCategory.COMMUTER, FuelType.PETROL, Transmission.MANUAL,
                2, "124.4 cc DTS-i", 100, 11.9, 52.0, 469.0, 2799.0, 8499.0,
                1200.0, 50.0, "52 km/l", "/vehicles/bajaj/pulsar-125/hero.jpg",
                "#00E5C7", "Twin Spark DTS-i,Clip-on Handlebars,Wolf-eyed Headlamp,Split Grab Rails",
                "BikeDekho", 11.8, 10.8, 165, 0, allCities));

        // 10. Bajaj Pulsar 150
        list.add(buildV("Bajaj Pulsar 150", "Bajaj", "Pulsar 150", "Single Disc SD",
                VehicleType.BIKE, RentalCategory.COMMUTER, FuelType.PETROL, Transmission.MANUAL,
                2, "149.5 cc Twin Spark", 115, 10.2, 59.0, 529.0, 3199.0, 9499.0,
                1500.0, 60.0, "48 km/l", "/vehicles/bajaj/pulsar-150/hero.jpg",
                "#00E5C7", "Single Channel ABS,Tubeless Tyres,Contoured Split Seat,LED Tail Lamp",
                "BikeDekho", 14.0, 13.25, 165, 0, allCities));

        // 11. Yamaha FZ-S FI V4
        list.add(buildV("Yamaha FZ-S FI V4", "Yamaha", "FZ-S FI", "Version 4 Deluxe",
                VehicleType.BIKE, RentalCategory.STREET, FuelType.PETROL, Transmission.MANUAL,
                2, "149.0 cc Blue Core", 112, 10.5, 69.0, 599.0, 3599.0, 10999.0,
                1500.0, 70.0, "45 km/l", "/vehicles/yamaha/fz-fi/hero.jpg",
                "#00E5C7", "Traction Control System (TCS),Y-Connect Bluetooth,Class D Headlight,Wide Radial Tyre",
                "BikeDekho", 12.4, 13.3, 165, 0, allCities));

        // 12. Royal Enfield Classic 350
        list.add(buildV("Royal Enfield Classic 350", "Royal Enfield", "Classic 350", "Dark Stealth Black",
                VehicleType.BIKE, RentalCategory.CRUISER, FuelType.PETROL, Transmission.MANUAL,
                2, "349.0 cc J-Series OHC", 115, 12.0, 89.0, 799.0, 4699.0, 13999.0,
                2500.0, 99.0, "36 km/l", "/vehicles/royal-enfield/classic-350/hero.jpg",
                "#141416", "Dual-Channel ABS,Twin Downtube Spine Frame,Tripper Navigation,Iconic Thump Exhaust",
                "BikeDekho", 20.2, 27.0, 170, 0, allCities));

        // 13. Royal Enfield Hunter 350
        list.add(buildV("Royal Enfield Hunter 350", "Royal Enfield", "Hunter 350", "Dapper Ash",
                VehicleType.BIKE, RentalCategory.STREET, FuelType.PETROL, Transmission.MANUAL,
                2, "349.0 cc J-Series", 114, 11.5, 79.0, 699.0, 4199.0, 12499.0,
                2000.0, 89.0, "36 km/l", "/vehicles/royal-enfield/hunter-350/hero.jpg",
                "#00E5C7", "Agile Roadster Geometry,17-inch Cast Alloy Wheels,Digi-Analog Meter,Short Wheelbase",
                "BikeDekho", 20.2, 27.0, 150, 0, allCities));

        // 14. Royal Enfield Bullet 350
        list.add(buildV("Royal Enfield Bullet 350", "Royal Enfield", "Bullet 350", "Military Black",
                VehicleType.BIKE, RentalCategory.CRUISER, FuelType.PETROL, Transmission.MANUAL,
                2, "349.0 cc J-Platform", 110, 12.4, 85.0, 749.0, 4499.0, 13499.0,
                2000.0, 90.0, "37 km/l", "/vehicles/royal-enfield/bullet-350/hero.jpg",
                "#141416", "Legendary Cast Headlamp Casquette,Hand-pinstriped Tank,Signature Single Bench Seat",
                "BikeDekho", 20.2, 27.0, 170, 0, allCities));

        // 15. Royal Enfield Meteor 350
        list.add(buildV("Royal Enfield Meteor 350", "Royal Enfield", "Meteor 350", "Supernova Bronze",
                VehicleType.BIKE, RentalCategory.CRUISER, FuelType.PETROL, Transmission.MANUAL,
                2, "349.0 cc Long-Stroke", 120, 11.8, 95.0, 849.0, 4999.0, 14999.0,
                2500.0, 100.0, "35 km/l", "/vehicles/royal-enfield/meteor-350/hero.jpg",
                "#D4AF37", "Touring Windscreen,Passenger Backrest,Tripper Turn-by-Turn GPS,Pannier Mounts",
                "BikeDekho", 20.2, 27.0, 170, 0, allCities));

        // 16. Royal Enfield Scram 411
        list.add(buildV("Royal Enfield Scram 411", "Royal Enfield", "Scram 411", "Silver Spirit",
                VehicleType.BIKE, RentalCategory.ADVENTURE, FuelType.PETROL, Transmission.MANUAL,
                2, "411.0 cc LS410", 125, 10.5, 99.0, 899.0, 5299.0, 15999.0,
                3000.0, 110.0, "32 km/l", "/vehicles/royal-enfield/scram-411/hero.jpg",
                "#00E5C7", "19-inch Front Dual Purpose Wheels,High Ground Clearance,Urban Scrambler Ergonomics",
                "BikeDekho", 24.3, 32.0, 200, 0, allCities));

        // 17. Bajaj Avenger Cruise 220
        list.add(buildV("Bajaj Avenger Cruise 220", "Bajaj", "Avenger Cruise 220", "Auburn Black",
                VehicleType.BIKE, RentalCategory.CRUISER, FuelType.PETROL, Transmission.MANUAL,
                2, "220.0 cc DTS-i Oil Cooled", 118, 11.0, 75.0, 649.0, 3899.0, 11499.0,
                2000.0, 80.0, "38 km/l", "/vehicles/bajaj/avenger-220/hero.jpg",
                "#141416", "Ultra Low Slung Seat,Highway Cruising Windshield,Classic Chrome Package",
                "BikeDekho", 19.03, 17.55, 169, 0, allCities));

        // 18. Bajaj Dominar 400
        list.add(buildV("Bajaj Dominar 400", "Bajaj", "Dominar 400", "Touring Edition Aurora Green",
                VehicleType.BIKE, RentalCategory.STREET, FuelType.PETROL, Transmission.MANUAL,
                2, "373.3 cc Liquid Cooled DOHC", 155, 7.1, 115.0, 999.0, 5999.0, 17999.0,
                3500.0, 130.0, "29 km/l", "/vehicles/bajaj/dominar-400/hero.jpg",
                "#00E5C7", "Factory Touring Visor & Handguards,43mm USD Forks,Twin Barrel Exhaust,Dual-Channel ABS",
                "BikeDekho", 40.0, 35.0, 157, 0, allCities));

        // 19. Yamaha YZF-R15 V4
        list.add(buildV("Yamaha YZF-R15 V4", "Yamaha", "YZF-R15 V4", "Racing Blue V4",
                VehicleType.BIKE, RentalCategory.SPORTS, FuelType.PETROL, Transmission.MANUAL,
                2, "155.0 cc Liquid-Cooled VVA", 140, 9.1, 109.0, 949.0, 5699.0, 16999.0,
                3000.0, 120.0, "40 km/l", "/vehicles/yamaha/r15-v4/hero.jpg",
                "#00E5C7", "Quick Shifter (Up),Traction Control,Bi-Functional LED Headlight,Assist & Slipper Clutch",
                "BikeDekho", 18.4, 14.2, 170, 0, allCities));

        // 20. Yamaha MT-15 V2
        list.add(buildV("Yamaha MT-15 V2", "Yamaha", "MT-15 V2", "Cyan Storm Deluxe",
                VehicleType.BIKE, RentalCategory.STREET, FuelType.PETROL, Transmission.MANUAL,
                2, "155.0 cc VVA 4-Valve", 130, 9.4, 99.0, 879.0, 5199.0, 15499.0,
                2500.0, 110.0, "42 km/l", "/vehicles/yamaha/mt-15/hero.jpg",
                "#00E5C7", "USD Golden Front Forks,Aluminum Swingarm,Dual-Channel ABS,Dark Warrior Styling",
                "BikeDekho", 18.4, 14.1, 170, 0, allCities));

        // 21. KTM 250 Duke
        list.add(buildV("KTM 250 Duke", "KTM", "250 Duke", "Electronic Orange",
                VehicleType.BIKE, RentalCategory.STREET, FuelType.PETROL, Transmission.MANUAL,
                2, "249.0 cc Liquid-Cooled DOHC", 148, 8.2, 125.0, 1099.0, 6499.0, 19499.0,
                4000.0, 140.0, "30 km/l", "/vehicles/ktm/duke-250/hero.jpg",
                "#FF5500", "Ride-by-Wire Throttle,Slipper Clutch,WP APEX Inverted Suspension,LCD Dash",
                "BikeDekho", 31.0, 25.0, 151, 0, allCities));

        // 22. KTM 390 Duke
        list.add(buildV("KTM 390 Duke", "KTM", "390 Duke", "Atlantic Blue Gen-3",
                VehicleType.BIKE, RentalCategory.STREET, FuelType.PETROL, Transmission.MANUAL,
                2, "399.0 cc LC4c Single", 168, 5.5, 149.0, 1349.0, 7999.0, 23999.0,
                5000.0, 170.0, "27 km/l", "/vehicles/ktm/duke-390/hero.jpg",
                "#FF5500", "Cornering ABS,Supermoto Mode,Quickshifter+ Launch Control,5-inch TFT with Smartphone Nav",
                "BikeDekho", 46.0, 39.0, 151, 0, allCities));

        // 23. KTM RC 390
        list.add(buildV("KTM RC 390", "KTM", "RC 390", "GP Edition Track Ready",
                VehicleType.BIKE, RentalCategory.SPORTS, FuelType.PETROL, Transmission.MANUAL,
                2, "373.3 cc Liquid-Cooled", 175, 5.3, 159.0, 1429.0, 8499.0, 25499.0,
                5000.0, 180.0, "25 km/l", "/vehicles/ktm/rc-390/hero.jpg",
                "#FF5500", "Aerodynamic Fairings,Adjustable Handlebars,TFT Screen,MotoGP Inspired Livery",
                "BikeDekho", 43.5, 37.0, 158, 0, allCities));

        // 24. Royal Enfield Himalayan 450
        list.add(buildV("Royal Enfield Himalayan 450", "Royal Enfield", "Himalayan 450", "Kaza Brown Sherpa",
                VehicleType.BIKE, RentalCategory.ADVENTURE, FuelType.PETROL, Transmission.MANUAL,
                2, "451.65 cc Sherpa Liquid-Cooled", 151, 6.8, 145.0, 1299.0, 7699.0, 22999.0,
                4500.0, 160.0, "30 km/l", "/vehicles/royal-enfield/himalayan-450/hero.jpg",
                "#D4AF37", "Full-Map Google Navigation Display,Switchable ABS,Long-Travel Showa Monoshock,Ride-by-Wire",
                "BikeDekho", 40.0, 40.0, 230, 0, allCities));

        // 25. Royal Enfield Guerrilla 450
        list.add(buildV("Royal Enfield Guerrilla 450", "Royal Enfield", "Guerrilla 450", "Brava Blue",
                VehicleType.BIKE, RentalCategory.STREET, FuelType.PETROL, Transmission.MANUAL,
                2, "452.0 cc Sherpa DOHC", 155, 6.2, 139.0, 1249.0, 7399.0, 21999.0,
                4000.0, 150.0, "30 km/l", "/vehicles/royal-enfield/guerrilla-450/hero.jpg",
                "#00E5C7", "Wide 160-Section Rear Tyre,Dynamic Chassis,Eco/Performance Modes,Tripper Dash",
                "BikeDekho", 40.0, 40.0, 169, 0, allCities));

        // 26. Maruti Suzuki Swift
        list.add(buildV("Maruti Suzuki Swift", "Maruti Suzuki", "Swift", "ZXi+ Dual Tone 2024",
                VehicleType.PETROL_CAR, RentalCategory.HATCHBACK, FuelType.PETROL, Transmission.MANUAL,
                5, "1.2L Z-Series 3-Cylinder", 165, 12.1, 149.0, 1399.0, 8499.0, 24999.0,
                3000.0, 150.0, "24.8 km/l", "/vehicles/maruti/swift/hero.jpg",
                "#00E5C7", "6 Airbags Standard,9-inch SmartPlay Pro+ Audio,Wireless Charger,Cruise Control",
                "CarDekho", 82.0, 112.0, 163, 265, allCities));

        // 27. Maruti Suzuki Baleno
        list.add(buildV("Maruti Suzuki Baleno", "Maruti Suzuki", "Baleno", "Alpha AGS Automatic",
                VehicleType.PETROL_CAR, RentalCategory.PREMIUM_HATCHBACK, FuelType.PETROL, Transmission.AUTOMATIC,
                5, "1.2L DualJet Dual VVT", 170, 11.5, 169.0, 1549.0, 9299.0, 27499.0,
                3500.0, 170.0, "22.9 km/l", "/vehicles/maruti/baleno/hero.jpg",
                "#141416", "Head-Up Display (HUD),360-Degree View Camera,Arkamys Surround Sound,Auto Climate",
                "CarDekho", 90.0, 113.0, 170, 318, allCities));

        // 28. Maruti Suzuki Dzire
        list.add(buildV("Maruti Suzuki Dzire", "Maruti Suzuki", "Dzire", "ZXi Plus AT",
                VehicleType.PETROL_CAR, RentalCategory.COMPACT_SEDAN, FuelType.PETROL, Transmission.AUTOMATIC,
                5, "1.2L DualJet Petrol", 165, 12.0, 159.0, 1499.0, 8999.0, 26499.0,
                3500.0, 160.0, "22.6 km/l", "/vehicles/maruti/dzire/hero.jpg",
                "#D4AF37", "Rear AC Vents,Spacious 378L Boot,Leatherette Accents,Keyless Smart Entry",
                "CarDekho", 89.0, 113.0, 163, 378, allCities));

        // 29. Maruti Suzuki Fronx
        list.add(buildV("Maruti Suzuki Fronx", "Maruti Suzuki", "Fronx", "Alpha 1.0 Turbo AT",
                VehicleType.PETROL_CAR, RentalCategory.CROSSOVER, FuelType.PETROL, Transmission.AUTOMATIC,
                5, "1.0L Boosterjet Turbo", 175, 10.4, 189.0, 1699.0, 10299.0, 30499.0,
                4000.0, 190.0, "20.0 km/l", "/vehicles/maruti/fronx/hero.jpg",
                "#00E5C7", "Paddle Shifters,6-Speed Torque Converter,Geometric Cut Alloys,Sporty Coupé Stance",
                "CarDekho", 100.0, 147.6, 190, 308, allCities));

        // 30. Maruti Suzuki Brezza
        list.add(buildV("Maruti Suzuki Brezza", "Maruti Suzuki", "Brezza", "ZXi+ Electric Sunroof",
                VehicleType.PETROL_CAR, RentalCategory.COMPACT_SUV, FuelType.PETROL, Transmission.MANUAL,
                5, "1.5L K15C Smart Hybrid", 170, 11.2, 199.0, 1799.0, 10899.0, 32499.0,
                4000.0, 200.0, "19.8 km/l", "/vehicles/maruti/brezza/hero.jpg",
                "#141416", "Electric Sunroof,Wireless Android Auto/CarPlay,SmartPlay Telematics,High Seating",
                "CarDekho", 103.0, 137.0, 200, 328, allCities));

        // 31. Kia Sonet
        list.add(buildV("Kia Sonet", "Kia", "Sonet", "GTX Plus 1.5 CRDi AT",
                VehicleType.DIESEL_CAR, RentalCategory.COMPACT_SUV, FuelType.DIESEL, Transmission.AUTOMATIC,
                5, "1.5L CRDi VGT Turbo-Diesel", 185, 10.1, 219.0, 1999.0, 11999.0, 35999.0,
                4500.0, 220.0, "18.6 km/l", "/vehicles/kia/sonet/hero.jpg",
                "#FF4B4B", "Level 1 ADAS,Front Ventilated Seats,Bose 7-Speaker Premium Sound,Electric Sunroof",
                "CarDekho", 116.0, 250.0, 205, 385, allCities));

        // 32. Hyundai Venue
        list.add(buildV("Hyundai Venue", "Hyundai", "Venue", "SX(O) Turbo DCT",
                VehicleType.PETROL_CAR, RentalCategory.COMPACT_SUV, FuelType.PETROL, Transmission.AUTOMATIC,
                5, "1.0L Turbo GDi", 180, 10.3, 209.0, 1899.0, 11499.0, 34499.0,
                4000.0, 210.0, "18.3 km/l", "/vehicles/hyundai/venue/hero.jpg",
                "#00E5C7", "7-Speed Dual Clutch (DCT),Bluelink Connected Car,Ambient Mood Lighting,Air Purifier",
                "CarDekho", 120.0, 172.0, 195, 350, allCities));

        // 33. Maruti Suzuki Ciaz
        list.add(buildV("Maruti Suzuki Ciaz", "Maruti Suzuki", "Ciaz", "Alpha 1.5 AT Lounge",
                VehicleType.PETROL_CAR, RentalCategory.MID_SIZE_SEDAN, FuelType.PETROL, Transmission.AUTOMATIC,
                5, "1.5L K15 Smart Hybrid", 175, 11.5, 189.0, 1699.0, 10299.0, 30999.0,
                4000.0, 190.0, "20.0 km/l", "/vehicles/maruti/ciaz/hero.jpg",
                "#D4AF37", "Class-leading Rear Legroom,Cruise Control,Rear Sunshade,510L Huge Boot",
                "CarDekho", 105.0, 138.0, 170, 510, allCities));

        // 34. Hyundai Verna
        list.add(buildV("Hyundai Verna", "Hyundai", "Verna", "SX(O) 1.5 Turbo DCT",
                VehicleType.PETROL_CAR, RentalCategory.MID_SIZE_SEDAN, FuelType.PETROL, Transmission.AUTOMATIC,
                5, "1.5L Turbo GDi (160 PS)", 210, 8.1, 239.0, 2199.0, 13199.0, 39499.0,
                5000.0, 240.0, "20.6 km/l", "/vehicles/hyundai/verna/hero.jpg",
                "#141416", "Hyundai SmartSense Level 2 ADAS,Heated & Ventilated Front Seats,Bose Audio,Horizon LED Bar",
                "CarDekho", 160.0, 253.0, 170, 528, allCities));

        // 35. Maruti Suzuki Ertiga
        list.add(buildV("Maruti Suzuki Ertiga", "Maruti Suzuki", "Ertiga", "ZXi+ AT 7-Seater",
                VehicleType.PETROL_CAR, RentalCategory.MPV, FuelType.PETROL, Transmission.AUTOMATIC,
                7, "1.5L K15C Dual VVT", 165, 13.0, 229.0, 2099.0, 12599.0, 37999.0,
                4500.0, 230.0, "20.3 km/l", "/vehicles/maruti/ertiga/hero.jpg",
                "#00E5C7", "Spacious 7 Seats,Roof-Mounted AC Vents,Paddle Shifters,Flexible Seat Folding",
                "CarDekho", 103.0, 136.8, 180, 209, allCities));

        // 36. Maruti Suzuki XL6
        list.add(buildV("Maruti Suzuki XL6", "Maruti Suzuki", "XL6", "Alpha+ Captain Seats 6-Seater",
                VehicleType.PETROL_CAR, RentalCategory.MPV, FuelType.PETROL, Transmission.AUTOMATIC,
                6, "1.5L K15C Smart Hybrid", 170, 12.8, 249.0, 2249.0, 13499.0, 40499.0,
                5000.0, 250.0, "20.2 km/l", "/vehicles/maruti/xl6/hero.jpg",
                "#D4AF37", "Second-Row Premium Captain Seats,Ventilated Seats,360 Camera,UV Cut Glass",
                "CarDekho", 103.0, 136.8, 180, 209, allCities));

        // 37. Toyota Innova Crysta
        list.add(buildV("Toyota Innova Crysta", "Toyota", "Innova Crysta", "ZX 2.4 Diesel 7-Seater",
                VehicleType.DIESEL_CAR, RentalCategory.MPV, FuelType.DIESEL, Transmission.MANUAL,
                7, "2.4L GD Turbo Diesel", 170, 11.5, 329.0, 2999.0, 17999.0, 53999.0,
                6000.0, 300.0, "15.1 km/l", "/vehicles/toyota/innova-crysta/hero.jpg",
                "#141416", "Legendary D-4D Reliability,Ladder Frame Comfort,7 Airbags,One-Touch Tumble Seats",
                "CarDekho", 150.0, 343.0, 178, 300, allCities));

        // 38. Toyota Innova Hycross
        list.add(buildV("Toyota Innova Hycross", "Toyota", "Innova Hycross", "ZX(O) Strong Hybrid e-CVT",
                VehicleType.PETROL_CAR, RentalCategory.MPV, FuelType.PETROL, Transmission.AUTOMATIC,
                7, "2.0L TNGA 5th Gen Self-Charging Hybrid", 180, 9.5, 379.0, 3499.0, 20999.0, 62999.0,
                7000.0, 350.0, "23.24 km/l", "/vehicles/toyota/innova-hycross/hero.jpg",
                "#00E5C7", "Powered Ottoman Seats,Panoramic Sunroof,Toyota Safety Sense (ADAS),EV Only Silent Mode",
                "CarDekho", 186.0, 206.0, 185, 300, allCities));

        // 39. Mahindra XUV700
        list.add(buildV("Mahindra XUV700", "Mahindra", "XUV700", "AX7 Luxury AWD Diesel AT",
                VehicleType.DIESEL_CAR, RentalCategory.PREMIUM_SUV, FuelType.DIESEL, Transmission.AUTOMATIC,
                7, "2.2L mHawk CRDe Turbo", 195, 9.2, 399.0, 3699.0, 22199.0, 66499.0,
                7000.0, 370.0, "16.0 km/l", "/vehicles/mahindra/xuv700/hero.jpg",
                "#FF4B4B", "Dual 10.25-inch Monolith Screens,Sony 3D 12-Speaker Sound,Level 2 ADAS,All-Wheel Drive",
                "CarDekho", 185.0, 450.0, 200, 240, allCities));

        // 40. Toyota Fortuner 4x4 (Luxury Tier - Limited Fleet Units)
        list.add(buildV("Toyota Fortuner 4x4", "Toyota", "Fortuner", "GR-Sport 2.8L 4x4 AT",
                VehicleType.DIESEL_CAR, RentalCategory.LUXURY_SUV, FuelType.DIESEL, Transmission.AUTOMATIC,
                7, "2.8L GD Turbocharged Diesel", 190, 9.8, 599.0, 5499.0, 32999.0, 98999.0,
                15000.0, 550.0, "14.4 km/l", "/vehicles/toyota/fortuner/hero.jpg",
                "#141416", "Electronic 4WD Shift-on-the-fly,Heavy Duty Offroad Suspension,JBL Sound,Powered Tailgate",
                "CarDekho", 204.0, 500.0, 225, 296, allCities));

        // 41. Audi A6 (Luxury Showcase - 0 Fleet Units initially: displays CURRENTLY UNAVAILABLE)
        list.add(buildV("Audi A6", "Audi", "A6", "Technology 45 TFSI S-Line",
                VehicleType.PETROL_CAR, RentalCategory.LUXURY_SEDAN, FuelType.PETROL, Transmission.AUTOMATIC,
                5, "2.0L TFSI Turbo 48V Mild Hybrid", 250, 6.7, 999.0, 8999.0, 53999.0, 161999.0,
                25000.0, 900.0, "14.1 km/l", "/vehicles/audi/a6/hero.jpg",
                "#00E5C7", "Matrix LED Headlights,Dual MMI Touchscreens,Bang & Olufsen 3D Sound,Virtual Cockpit Plus",
                "CarDekho", 245.0, 370.0, 165, 530, allCities));

        // ====================================================================
        // EXPANDED EV FLEET (18 Verified Indian Market Electric Models)
        // 5 Electric Bikes + 5 Electric Scooters + 8 Electric Cars = 18 Models
        // ====================================================================

        // 42. Revolt RV400 (Electric Bike)
        list.add(buildEV("Revolt RV400", "Revolt Motors", "RV400", "BRZ Edition",
                VehicleType.ELECTRIC_BIKE, RentalCategory.COMMUTER, Transmission.AUTOMATIC,
                2, "3.24 kWh Lithium-ion", 85, 12.0, 99.0, 699.0, 4199.0, 17999.0,
                2500.0, 69.0, "150 km", "/vehicles/revolt/rv400/hero.jpg",
                "#FF3344", "Removable Battery,3 Riding Modes (Eco/Norm/Sport),MyRevolt App Telemetry,CBS Braking",
                "Revolt Motors", 4.1, 54.0, 215, 0, allCities,
                3.24, 4.5, false, null, "15A 3-Pin Home / Swappable", 3.0, 54.0));

        // 43. Ultraviolette F77 Mach 2 (Electric Bike)
        list.add(buildEV("Ultraviolette F77 Mach 2", "Ultraviolette", "F77", "Mach 2 Recon",
                VehicleType.ELECTRIC_BIKE, RentalCategory.SPORTS, Transmission.AUTOMATIC,
                2, "10.3 kWh SRB7", 155, 7.7, 299.0, 1999.0, 11999.0, 49999.0,
                10000.0, 199.0, "323 km", "/vehicles/ultraviolette/f77/hero.jpg",
                "#1B2430", "10 Level Regenerative Braking,Dynamic Stability Control,LTE Connected 5-inch TFT,Brembo ByBre Brakes",
                "Ultraviolette", 40.2, 100.0, 160, 0, allCities,
                10.3, 5.0, true, 60, "CCS2 / UV Boost Charger", 30.0, 100.0));

        // 44. Matter Aera 5000+ (Electric Bike)
        list.add(buildEV("Matter Aera 5000+", "Matter", "Aera", "5000+",
                VehicleType.ELECTRIC_BIKE, RentalCategory.STREET, Transmission.MANUAL,
                2, "5.0 kWh Liquid-Cooled", 105, 10.5, 149.0, 999.0, 5999.0, 24999.0,
                4000.0, 99.0, "125 km", "/vehicles/matter/aera/hero.jpg",
                "#00E5C7", "India First 4-Speed HyperShift Gearbox,Active Liquid Cooled Battery,7-inch Touchscreen Navigation",
                "Matter Motors", 13.4, 52.0, 180, 5, allCities,
                5.0, 4.0, true, 90, "5A/15A Common Standard Connector", 10.0, 52.0));

        // 45. Oben Rorr (Electric Bike)
        list.add(buildEV("Oben Rorr", "Oben Electric", "Rorr", "Neo Standard",
                VehicleType.ELECTRIC_BIKE, RentalCategory.COMMUTER, Transmission.AUTOMATIC,
                2, "4.4 kWh LFP Battery", 100, 9.0, 129.0, 899.0, 5399.0, 21999.0,
                3000.0, 89.0, "187 km", "/vehicles/oben/rorr/hero.jpg",
                "#FFBF00", "High Heat Resistant LFP Chemistry,0-40 in 3.0s,Smart Vehicle Diagnostics,Alloy Wheels",
                "Oben Electric", 10.7, 62.0, 200, 0, allCities,
                4.4, 2.0, true, 120, "15A Fast Charge", 8.0, 62.0));

        // 46. Tork Kratos R (Electric Bike)
        list.add(buildEV("Tork Kratos R", "Tork Motors", "Kratos", "R Urban",
                VehicleType.ELECTRIC_BIKE, RentalCategory.STREET, Transmission.AUTOMATIC,
                2, "4.0 kWh Axial Flux", 105, 9.8, 139.0, 949.0, 5699.0, 22999.0,
                3500.0, 95.0, "180 km", "/vehicles/tork/kratos-r/hero.jpg",
                "#0D2C54", "Patented Axial Flux PMAC Motor,In-app Navigation,Geofencing,Crash Alert",
                "Tork Motors", 12.0, 38.0, 165, 0, allCities,
                4.0, 4.0, true, 60, "Tork Fast Charge Network", 9.0, 38.0));

        // 47. Ather 450X Gen 3 (Electric Scooter)
        list.add(buildEV("Ather 450X Gen 3", "Ather Energy", "450X", "Gen 3 Apex",
                VehicleType.ELECTRIC_SCOOTER, RentalCategory.SCOOTER, Transmission.AUTOMATIC,
                2, "3.7 kWh IP67 Battery", 90, 10.2, 89.0, 599.0, 3599.0, 14999.0,
                2000.0, 59.0, "150 km", "/vehicles/ather/450x/hero.jpg",
                "#00E5C7", "Warp Mode,Google Maps Integration on 7-inch Touchscreen,AutoHold Hill Assist,Ather Grid Fast Charge",
                "Ather Energy", 8.6, 26.0, 153, 22, allCities,
                3.7, 5.75, true, 10, "Ather Dot / Ather Grid Fast Charger", 6.4, 26.0));

        // 48. Ather Rizta Z (Electric Scooter)
        list.add(buildEV("Ather Rizta Z", "Ather Energy", "Rizta", "Z 3.7 kWh",
                VehicleType.ELECTRIC_SCOOTER, RentalCategory.SCOOTER, Transmission.AUTOMATIC,
                2, "3.7 kWh Battery", 80, 12.0, 85.0, 549.0, 3299.0, 13999.0,
                2000.0, 55.0, "159 km", "/vehicles/ather/rizta/hero.jpg",
                "#3A7D44", "Largest Family Seat in Segment,34L Boot Space,Ather SkidControl Traction,Magic Twist Regenerative Braking",
                "Ather Energy", 5.8, 22.0, 165, 34, allCities,
                3.7, 4.5, true, 15, "Ather Grid Fast Charge", 4.3, 22.0));

        // 49. Ola S1 Pro Gen 2 (Electric Scooter)
        list.add(buildEV("Ola S1 Pro Gen 2", "Ola Electric", "S1 Pro", "Gen 2",
                VehicleType.ELECTRIC_SCOOTER, RentalCategory.SCOOTER, Transmission.AUTOMATIC,
                2, "4.0 kWh Battery", 120, 7.5, 89.0, 599.0, 3599.0, 14999.0,
                2000.0, 59.0, "195 km", "/vehicles/ola/s1-pro/hero.jpg",
                "#222222", "Hyper Mode 0-40 in 2.6s,Party Mode with Built-in Speakers,Cruise Control,MoveOS 4 Pro",
                "Ola Electric", 14.7, 58.0, 160, 34, allCities,
                4.0, 6.5, true, 15, "Ola Hypercharger / 750W Home", 11.0, 58.0));

        // 50. TVS iQube ST (Electric Scooter)
        list.add(buildEV("TVS iQube ST", "TVS", "iQube", "ST 5.1 kWh",
                VehicleType.ELECTRIC_SCOOTER, RentalCategory.SCOOTER, Transmission.AUTOMATIC,
                2, "5.1 kWh Dual Battery", 82, 11.5, 85.0, 549.0, 3299.0, 13999.0,
                2000.0, 55.0, "145 km", "/vehicles/tvs/iqube/hero.jpg",
                "#1E3D59", "7-inch Full Colour TFT Touchscreen,32L Underseat Luggage,SmartXonnect Telemetry,Q-Park Assist Reverse",
                "TVS Motor", 5.9, 33.0, 157, 32, allCities,
                5.1, 4.5, true, 45, "TVS SmartXHome 950W", 4.4, 33.0));

        // 51. Bajaj Chetak Premium (Electric Scooter)
        list.add(buildEV("Bajaj Chetak Premium", "Bajaj", "Chetak", "Premium Edition",
                VehicleType.ELECTRIC_SCOOTER, RentalCategory.SCOOTER, Transmission.AUTOMATIC,
                2, "3.2 kWh IP67 Metal Battery", 73, 13.0, 79.0, 499.0, 2999.0, 12999.0,
                2000.0, 49.0, "126 km", "/vehicles/bajaj/chetak/hero.jpg",
                "#5E503F", "Seamless All-Steel Metal Unibody,Sequential LED Blinkers,Keyless Start,Hill Hold Assist",
                "Bajaj Auto", 5.6, 20.0, 160, 21, allCities,
                3.2, 4.5, false, null, "Standard 15A Home Plug", 4.2, 20.0));

        // 52. Tata Nexon EV Long Range (Electric Car)
        list.add(buildEV("Tata Nexon EV Long Range", "Tata", "Nexon EV", "Empowered+ Long Range",
                VehicleType.ELECTRIC_CAR, RentalCategory.COMPACT_SUV, Transmission.AUTOMATIC,
                5, "45.0 kWh High Energy LFP", 140, 8.9, 249.0, 2499.0, 14999.0, 59999.0,
                7500.0, 249.0, "489 km", "/vehicles/tata/nexon-ev/hero.jpg",
                "#00E5C7", "V2V & V2L Power Bank Capability,12.3-inch Cinematic Display,360 Surround View Camera,JBL 9-Speaker Audio",
                "Tata Motors", 142.0, 215.0, 205, 350, allCities,
                45.0, 6.0, true, 56, "CCS2 / 50kW DC Fast Charge", 106.0, 215.0));

        // 53. Tata Punch EV Empowered (Electric Car)
        list.add(buildEV("Tata Punch EV Empowered", "Tata", "Punch EV", "Empowered Plus Long Range",
                VehicleType.ELECTRIC_CAR, RentalCategory.COMPACT_SUV, Transmission.AUTOMATIC,
                5, "35.0 kWh acti.ev Architecture", 120, 9.5, 199.0, 1999.0, 11999.0, 47999.0,
                6000.0, 199.0, "421 km", "/vehicles/tata/punch-ev/hero.jpg",
                "#2C3E50", "10.25-inch Dual Screen Cockpit,Ventilated Front Seats,Frunk Storage,Electronic Parking Brake with Auto Hold",
                "Tata Motors", 120.0, 190.0, 190, 366, allCities,
                35.0, 5.0, true, 56, "CCS2 / 50kW DC Fast Charge", 90.0, 190.0));

        // 54. Tata Tiago EV Tech Lux (Electric Car)
        list.add(buildEV("Tata Tiago EV Tech Lux", "Tata", "Tiago EV", "XZ+ Tech Lux Long Range",
                VehicleType.ELECTRIC_CAR, RentalCategory.HATCHBACK, Transmission.AUTOMATIC,
                5, "24.0 kWh Ziptron", 110, 11.2, 149.0, 1499.0, 8999.0, 35999.0,
                5000.0, 149.0, "315 km", "/vehicles/tata/tiago-ev/hero.jpg",
                "#16A085", "Multi-Mode Regenerative Braking,Harman Touchscreen Audio,ZConnect Smart App Telemetry,Automatic Climate Control",
                "Tata Motors", 74.0, 114.0, 165, 240, allCities,
                24.0, 6.0, true, 57, "CCS2 / 3.3kW AC Wallbox", 55.0, 114.0));

        // 55. MG Windsor EV (Electric Car)
        list.add(buildEV("MG Windsor EV", "MG Motor", "Windsor EV", "Essence Aero Lounge",
                VehicleType.ELECTRIC_CAR, RentalCategory.CROSSOVER, Transmission.AUTOMATIC,
                5, "38.0 kWh Prismatic Cell", 125, 9.8, 229.0, 2299.0, 13799.0, 54999.0,
                7000.0, 229.0, "331 km", "/vehicles/mg/windsor-ev/hero.jpg",
                "#D4AF37", "135-degree Aero Lounge Reclining Rear Seats,15.6-inch Grandview Touchscreen,Infinity Glass Roof,Wireless Apple CarPlay",
                "MG Motor", 134.0, 200.0, 186, 604, allCities,
                38.0, 6.5, true, 40, "CCS2 / 45kW DC Fast Charge", 100.0, 200.0));

        // 56. MG ZS EV Exclusive Plus (Electric Car)
        list.add(buildEV("MG ZS EV Exclusive Plus", "MG Motor", "ZS EV", "Exclusive Plus",
                VehicleType.ELECTRIC_CAR, RentalCategory.COMPACT_SUV, Transmission.AUTOMATIC,
                5, "50.3 kWh Prismatic Battery", 140, 8.5, 299.0, 2999.0, 17999.0, 69999.0,
                9000.0, 299.0, "461 km", "/vehicles/mg/zs-ev/hero.jpg",
                "#0A3D62", "Level 2 ADAS (Adaptive Cruise, Lane Keep),Panoramic Dual-Pane Sunroof,i-SMART 75+ Connected Car Features,PM 2.5 Filter",
                "MG Motor", 174.0, 280.0, 177, 470, allCities,
                50.3, 8.5, true, 60, "CCS2 / 50kW DC Fast Charge", 130.0, 280.0));

        // 57. Mahindra XUV400 EL Pro (Electric Car)
        list.add(buildEV("Mahindra XUV400 EL Pro", "Mahindra", "XUV400", "EL Pro Fast Charge",
                VehicleType.ELECTRIC_CAR, RentalCategory.COMPACT_SUV, Transmission.AUTOMATIC,
                5, "39.4 kWh High Density", 150, 8.3, 269.0, 2699.0, 16199.0, 62999.0,
                8000.0, 269.0, "456 km", "/vehicles/mahindra/xuv400/hero.jpg",
                "#B87333", "Dual 10.25-inch Digital Cockpit,Copper Accents Styling,Lively Drive Modes (Fun/Fast/Fearless),Single Pedal Drive",
                "Mahindra", 147.5, 310.0, 180, 378, allCities,
                39.4, 6.5, true, 50, "CCS2 / 50kW DC Fast Charge", 110.0, 310.0));

        // 58. BYD Atto 3 Superior (Electric Car)
        list.add(buildEV("BYD Atto 3 Superior", "BYD", "Atto 3", "Superior Extended Range",
                VehicleType.ELECTRIC_CAR, RentalCategory.CROSSOVER, Transmission.AUTOMATIC,
                5, "60.48 kWh Ultra-Safe Blade Battery", 160, 7.3, 399.0, 3999.0, 23999.0, 89999.0,
                12000.0, 399.0, "521 km", "/vehicles/byd/atto-3/hero.jpg",
                "#2C3E50", "Revolutionary BYD Blade Battery (Nail Penetration Tested),Rotating 12.8-inch Touchscreen,Gym-Themed Interior,Full ADAS Suite",
                "BYD", 201.0, 310.0, 175, 440, allCities,
                60.48, 9.5, true, 50, "CCS2 / 80kW DC Fast Charge", 150.0, 310.0));

        // 59. Hyundai Ioniq 5 (Electric Car)
        list.add(buildEV("Hyundai Ioniq 5", "Hyundai", "Ioniq 5", "RWD Long Range",
                VehicleType.ELECTRIC_CAR, RentalCategory.LUXURY_SUV, Transmission.AUTOMATIC,
                5, "72.6 kWh E-GMP Architecture", 185, 7.6, 599.0, 5999.0, 35999.0, 139999.0,
                15000.0, 599.0, "631 km", "/vehicles/hyundai/ioniq-5/hero.jpg",
                "#EAEAEA", "800V Ultra-Fast Architecture 10-80% in 18 Min,V2L 3.6kW Power Output,Parametric Pixel LED Design,Relaxation Comfort Seats",
                "Hyundai", 215.0, 350.0, 163, 527, allCities,
                72.6, 7.0, true, 18, "CCS2 / 350kW Ultra-Fast DC", 160.0, 350.0));

        return list;
    }

    private void ensureAllVehicles() {
        List<Vehicle> list = getAllCatalogVehicles();
        for (Vehicle v : list) {
            Optional<Vehicle> existingOpt = vehicleRepository.findByName(v.getName());
            Vehicle target;
            if (existingOpt.isEmpty()) {
                target = vehicleRepository.save(v);
                seedMediaForVehicle(target);
            } else {
                target = existingOpt.get();
                if (v.isElectric()) {
                    target.setElectric(true);
                    target.setBatteryCapacityKwh(v.getBatteryCapacityKwh());
                    target.setChargingTimeHours(v.getChargingTimeHours());
                    target.setFastChargingSupported(v.isFastChargingSupported());
                    target.setFastChargingTimeMinutes(v.getFastChargingTimeMinutes());
                    target.setChargingConnectorType(v.getChargingConnectorType());
                    target.setMotorPowerKw(v.getMotorPowerKw());
                    target.setMotorTorqueNm(v.getMotorTorqueNm());
                }
                if (target.getGalleryImageUrls() == null || target.getGalleryImageUrls().isBlank()) {
                    target.setGalleryImageUrls(v.getGalleryImageUrls());
                }
                target.setCityNames("Hyderabad,Bengaluru,Chennai,Mumbai,Pune,Delhi NCR,Kolkata,Goa,Jaipur,Ahmedabad,Kochi");
                target = vehicleRepository.save(target);
                seedMediaForVehicle(target);
            }
        }
        initReviews();
    }

    private void seedMediaForVehicle(Vehicle v) {
        List<VehicleMedia> existingMedia = vehicleMediaRepository.findByVehicleId(v.getId());
        if (existingMedia.size() < 5) {
            List<String> angles = getGalleryUrlList(v.getImageUrl());
            String[] mediaTypes = {"HERO", "FRONT", "SIDE", "REAR", "COCKPIT"};
            String[] angleNames = {"front_three_quarter", "front", "side_profile", "rear_three_quarter", "cockpit_console"};
            for (int i = 0; i < angles.size(); i++) {
                String url = angles.get(i);
                boolean exists = existingMedia.stream().anyMatch(m -> url.equals(m.getUrl()));
                if (!exists) {
                    String type = i < mediaTypes.length ? mediaTypes[i] : "GALLERY";
                    String angleName = i < angleNames.length ? angleNames[i] : "angle_" + i;
                    String sourceDomain = v.getImageSource() != null ? v.getImageSource().toLowerCase().replaceAll("\\s+", "") : "bikedekho";
                    VehicleMedia media = new VehicleMedia(
                            v,
                            url,
                            type,
                            v.getImageSource(),
                            MediaLicenseType.COLLEGE_DEMO_REFERENCE,
                            "https://www." + sourceDomain + ".com",
                            MediaVerificationStatus.DEMO_ONLY_REPLACEMENT_REQUIRED,
                            false
                    );
                    media.setAngle(angleName);
                    media.setSortOrder(i);
                    vehicleMediaRepository.save(media);
                }
            }
        }
    }

    private String constructGalleryJson(String heroUrl) {
        if (heroUrl == null || !heroUrl.contains("/hero.jpg")) {
            return heroUrl != null ? "[\"" + heroUrl + "\"]" : "[]";
        }
        String base = heroUrl.substring(0, heroUrl.lastIndexOf("/hero.jpg"));
        return "[\"" + base + "/hero.jpg\",\"" 
                     + base + "/angle-front-quarter.jpg\",\"" 
                     + base + "/angle-side.jpg\",\"" 
                     + base + "/angle-rear.jpg\",\"" 
                     + base + "/angle-cockpit.jpg\"]";
    }

    private List<String> getGalleryUrlList(String heroUrl) {
        if (heroUrl == null || !heroUrl.contains("/hero.jpg")) {
            return heroUrl != null ? List.of(heroUrl) : List.of();
        }
        String base = heroUrl.substring(0, heroUrl.lastIndexOf("/hero.jpg"));
        return List.of(
            base + "/hero.jpg",
            base + "/angle-front-quarter.jpg",
            base + "/angle-side.jpg",
            base + "/angle-rear.jpg",
            base + "/angle-cockpit.jpg"
        );
    }

    private Vehicle buildV(String name, String brand, String model, String variant,
                           VehicleType type, RentalCategory cat, FuelType fuel, Transmission trans,
                           int seats, String engine, int maxSpeed, double zeroTo100,
                           double priceHr, double priceDay, double priceWk, double priceMo,
                           double deposit, double insFee, String mileage, String imgUrl,
                           String colorHex, String features, String source,
                           double powerBhp, double torqueNm, int gcMm, int bootL, String cities) {
        Vehicle v = new Vehicle();
        v.setName(name);
        v.setBrand(brand);
        v.setModel(model);
        v.setVariant(variant);
        v.setVehicleType(type);
        v.setCategory(cat);
        v.setFuelType(fuel);
        v.setTransmission(trans);
        v.setSeats(seats);
        v.setEngineOrBattery(engine);
        v.setMaxSpeed(maxSpeed);
        v.setZeroToHundred(zeroTo100);
        v.setPricePerHour(priceHr);
        v.setPricePerDay(priceDay);
        v.setPricePerWeek(priceWk);
        v.setPricePerMonth(priceMo);
        v.setSecurityDeposit(deposit);
        v.setInsuranceFee(insFee);
        v.setMileageOrRange(mileage);
        v.setImageUrl(imgUrl);
        v.setGalleryImageUrls(constructGalleryJson(imgUrl));
        v.setColorHex(colorHex);
        v.setFeatures(features);
        v.setCityNames(cities);
        v.setAssetType(AssetType.GALLERY);
        v.setImageSource(source);
        v.setImageLicense("COLLEGE_DEMO_REFERENCE");
        v.setAssetVerified(false); // Academic reference - replacement required for commercial
        v.setPowerBhp(powerBhp);
        v.setTorqueNm(torqueNm);
        v.setGroundClearanceMm(gcMm);
        v.setBootCapacityLitres(bootL);
        v.setRating(0.0);
        v.setReviewCount(0);
        v.setTripsCompleted(0);
        v.setAvailable(true);

        // Apply EV specific telemetry specs
        if (v.getFuelType() == FuelType.ELECTRIC) {
            v.setElectric(true);
            v.setFastChargingSupported(true);
            String vname = v.getName();
            if (vname.contains("Ather 450X")) {
                v.setBatteryCapacityKwh(3.7);
                v.setChargingTimeHours(5.75);
                v.setFastChargingTimeMinutes(10);
                v.setChargingConnectorType("Ather Dot / Ather Grid Fast Charger");
                v.setMotorPowerKw(6.4);
                v.setMotorTorqueNm(26.0);
            } else if (vname.contains("Ola S1 Pro")) {
                v.setBatteryCapacityKwh(4.0);
                v.setChargingTimeHours(6.5);
                v.setFastChargingTimeMinutes(15);
                v.setChargingConnectorType("Ola Hypercharger / 750W Home");
                v.setMotorPowerKw(8.5);
                v.setMotorTorqueNm(58.0);
            } else if (vname.contains("TVS iQube")) {
                v.setBatteryCapacityKwh(3.4);
                v.setChargingTimeHours(4.5);
                v.setFastChargingTimeMinutes(45);
                v.setChargingConnectorType("TVS SmartXHome");
                v.setMotorPowerKw(4.4);
                v.setMotorTorqueNm(140.0);
            } else if (vname.contains("Nexon EV")) {
                v.setBatteryCapacityKwh(40.5);
                v.setChargingTimeHours(6.0);
                v.setFastChargingTimeMinutes(56);
                v.setChargingConnectorType("CCS2 / 50kW DC Fast Charge");
                v.setMotorPowerKw(106.4);
                v.setMotorTorqueNm(215.0);
            } else if (vname.contains("Tiago EV")) {
                v.setBatteryCapacityKwh(24.0);
                v.setChargingTimeHours(6.0);
                v.setFastChargingTimeMinutes(57);
                v.setChargingConnectorType("CCS2 / 3.3kW AC Wallbox");
                v.setMotorPowerKw(55.0);
                v.setMotorTorqueNm(114.0);
            } else if (vname.contains("MG ZS EV")) {
                v.setBatteryCapacityKwh(50.3);
                v.setChargingTimeHours(8.5);
                v.setFastChargingTimeMinutes(60);
                v.setChargingConnectorType("CCS2 / 50kW DC");
                v.setMotorPowerKw(130.0);
                v.setMotorTorqueNm(280.0);
            } else {
                v.setBatteryCapacityKwh(3.5);
                v.setChargingTimeHours(5.0);
                v.setFastChargingTimeMinutes(30);
                v.setChargingConnectorType("Standard EV Fast Charger");
                v.setMotorPowerKw(6.0);
                v.setMotorTorqueNm(30.0);
            }
        }

        return v;
    }

    private Vehicle buildEV(String name, String brand, String model, String variant,
                            VehicleType type, RentalCategory cat, Transmission trans,
                            int seats, String engineOrBattery, int maxSpeed, double zeroTo100,
                            double priceHr, double priceDay, double priceWk, double priceMo,
                            double deposit, double insFee, String mileageOrRange, String imgUrl,
                            String colorHex, String features, String source,
                            double powerBhp, double torqueNm, int gcMm, int bootL, String cities,
                            double batteryKwh, double chargingTimeHours, boolean fastCharging,
                            Integer fastChargingMinutes, String connectorType, double motorKw, double motorNm) {
        Vehicle v = buildV(name, brand, model, variant, type, cat, FuelType.ELECTRIC, trans,
                seats, engineOrBattery, maxSpeed, zeroTo100, priceHr, priceDay, priceWk, priceMo,
                deposit, insFee, mileageOrRange, imgUrl, colorHex, features, source,
                powerBhp, torqueNm, gcMm, bootL, cities);
        v.setElectric(true);
        v.setBatteryCapacityKwh(batteryKwh);
        v.setChargingTimeHours(chargingTimeHours);
        v.setFastChargingSupported(fastCharging);
        v.setFastChargingTimeMinutes(fastChargingMinutes);
        v.setChargingConnectorType(connectorType);
        v.setMotorPowerKw(motorKw);
        v.setMotorTorqueNm(motorNm);
        return v;
    }

    public void ensureMultiCityFleetUnits() {
        List<Vehicle> vehicles = vehicleRepository.findAll();
        if (vehicles.isEmpty()) return;

        // 11 Indian Metro configurations with authentic state codes and RTO prefixes
        record CityConfig(String cityName, String stateCode, String rtoCode, String hubName) {}
        List<CityConfig> cityConfigs = List.of(
                new CityConfig("Hyderabad", "TS", "09", "Hitech City Hub"),
                new CityConfig("Bengaluru", "KA", "01", "Indiranagar Hub"),
                new CityConfig("Chennai", "TN", "09", "OMR IT Corridor"),
                new CityConfig("Mumbai", "MH", "01", "Bandra Kurla Complex (BKC)"),
                new CityConfig("Pune", "MH", "12", "Hinjawadi IT Hub"),
                new CityConfig("Delhi NCR", "DL", "01", "Cyber Hub Gurugram"),
                new CityConfig("Kolkata", "WB", "02", "Salt Lake Sector V"),
                new CityConfig("Goa", "GA", "07", "Calangute Beach Hub"),
                new CityConfig("Jaipur", "RJ", "14", "MI Road Hub"),
                new CityConfig("Ahmedabad", "GJ", "01", "SG Highway Tech Hub"),
                new CityConfig("Kochi", "KL", "07", "Infopark Kakkanad")
        );

        List<FleetUnit> unitsToSave = new ArrayList<>();
        int seq = (int) (fleetUnitRepository.count() + 200);

        for (Vehicle v : vehicles) {
            if ("Audi A6".equals(v.getName())) {
                continue; // Showcase vehicle deliberately has 0 units
            }

            // Distribute units across cities
            for (CityConfig cc : cityConfigs) {
                // Ensure at least 1 available fleet unit in each city for this vehicle
                long existing = fleetUnitRepository.countByVehicleIdAndStatusAndCityName(v.getId(), FleetUnitStatus.AVAILABLE, cc.cityName);
                if (existing == 0) {
                    String cityAbbr = cc.cityName.replaceAll("[^a-zA-Z]", "").substring(0, Math.min(3, cc.cityName.length())).toUpperCase();
                    String vAbbr = v.getName().replaceAll("[^a-zA-Z]", "").substring(0, Math.min(3, v.getName().length())).toUpperCase();
                    
                    String regNo;
                    do {
                        seq++;
                        regNo = cc.stateCode + "-" + cc.rtoCode + "-TBH-" + seq;
                    } while (fleetUnitRepository.findByRegistrationNumber(regNo).isPresent());

                    String vinNo = "MATBH" + cc.stateCode + vAbbr + seq + "IN" + (1000 + (seq % 8000));
                    String demoId = "DEMO-" + cc.stateCode + "-" + cityAbbr + "-" + vAbbr + "-" + seq;

                    FleetUnit unit = new FleetUnit(regNo, vinNo, v, cc.cityName, cc.hubName, cc.stateCode, demoId);
                    unit.setOdometerKm(1200 + (seq * 15));
                    unit.setStatus(FleetUnitStatus.AVAILABLE);
                    unit.setInsuranceStatus("VALID");
                    unit.setInsuranceExpiry(LocalDate.now().plusYears(1));
                    unit.setPucStatus("VALID");
                    unit.setPucExpiry(LocalDate.now().plusMonths(6));
                    unit.setRegistrationValidity(LocalDate.now().plusYears(5));
                    unit.setLastServicedAt(LocalDateTime.now().minusDays(5));
                    unitsToSave.add(unit);
                }
            }
        }

        for (FleetUnit fu : unitsToSave) {
            try {
                fleetUnitRepository.save(fu);
            } catch (Exception ignored) {}
        }
        System.out.println("Ensured authentic state RTO fleet units across all 11 Indian metros.");
    }

    private void initCityPricing() {
        List<Vehicle> vehicles = vehicleRepository.findAll();
        List<City> cities = cityRepository.findAll();
        List<CityPricing> pricingList = new ArrayList<>();

        for (Vehicle v : vehicles) {
            for (City c : cities) {
                if (cityPricingRepository.findByVehicleIdAndCityName(v.getId(), c.getName()).isEmpty()) {
                    double hourly = v.getPricePerHour() != null ? v.getPricePerHour().doubleValue() : 0.0;
                    double daily = v.getPricePerDay() != null ? v.getPricePerDay().doubleValue() : 0.0;

                    // City pricing dynamics:
                    // Goa: +25% vacation rate
                    // Bengaluru / Mumbai / Delhi NCR: +10% tech metro rate
                    // Kolkata / Jaipur / Ahmedabad / Kochi: -5% competitive launch rate
                    if ("Goa".equalsIgnoreCase(c.getName())) {
                        hourly = Math.round(hourly * 1.25);
                        daily = Math.round(daily * 1.25);
                    } else if ("Bengaluru".equalsIgnoreCase(c.getName()) || 
                               "Mumbai".equalsIgnoreCase(c.getName()) || 
                               "Delhi NCR".equalsIgnoreCase(c.getName())) {
                        hourly = Math.round(hourly * 1.10);
                        daily = Math.round(daily * 1.10);
                    } else if ("Kolkata".equalsIgnoreCase(c.getName()) || 
                               "Jaipur".equalsIgnoreCase(c.getName()) || 
                               "Ahmedabad".equalsIgnoreCase(c.getName()) || 
                               "Kochi".equalsIgnoreCase(c.getName())) {
                        hourly = Math.round(hourly * 0.95);
                        daily = Math.round(daily * 0.95);
                    }

                    double weekly = Math.round(daily * 6.0);
                    double monthly = Math.round(daily * 22.0);

                    CityPricing cp = new CityPricing(v, c, hourly, daily, weekly, monthly, v.getSecurityDeposit());
                    cp.setCrossCityEnabled(true);
                    cp.setCrossCityFee(1499.0);
                    cp.setActive(true);
                    pricingList.add(cp);
                }
            }
        }

        if (!pricingList.isEmpty()) {
            cityPricingRepository.saveAll(pricingList);
            System.out.println("Seeded " + pricingList.size() + " dynamic city pricing rules.");
        }
    }

    private void initReviews() {
        Vehicle classic = vehicleRepository.findByName("Royal Enfield Classic 350").orElse(null);

        if (classic != null) {
            User demoReviewer = userRepository.findByEmail("rider@tbhrentals.in").orElse(null);
            if (demoReviewer != null && reviewRepository.count() == 0) {
                Review r1 = new Review(classic, demoReviewer, null, 5, "Extremely smooth ride through Nandi Hills! Engine thump is authentic and the pickup is great.");
                reviewRepository.save(r1);

                classic.setRating(5.0);
                classic.setReviewCount(1);
                classic.setTripsCompleted(1);
                vehicleRepository.save(classic);
            }
        }
    }

    private void initUsersAndKyc() {
        User admin = userRepository.findByEmail("admin@tbhrentals.in").orElse(null);
        if (admin == null) {
            admin = new User("TBH Commander", "admin@tbhrentals.in", "9876543210", passwordEncoder.encode("admin123"), Role.ROLE_ADMIN);
            admin.setDrivingLicenseNumber("DL-0420220091823");
            admin.setDrivingLicenseVerified(true);
            admin.setAadhaarNumber("8912-3456-7890");
            admin = userRepository.save(admin);
        } else {
            admin.setAadhaarNumber("8912-3456-7890");
            userRepository.save(admin);
        }

        User rider = userRepository.findByEmail("rider@tbhrentals.in").orElse(null);
        if (rider == null) {
            rider = new User("Hemanth Rider", "rider@tbhrentals.in", "9876500000", passwordEncoder.encode("rider123"), Role.ROLE_USER);
            rider.setDrivingLicenseNumber("KA-0120230048192");
            rider.setDrivingLicenseVerified(true);
            rider.setAadhaarNumber("5489-3210-4819");
            rider = userRepository.save(rider);
        } else {
            rider.setDrivingLicenseVerified(true);
            rider.setDrivingLicenseNumber("KA-0120230048192");
            rider.setAadhaarNumber("5489-3210-4819");
            rider = userRepository.save(rider);
        }

        userRepository.findAll().forEach(u -> {
            if (com.tbh.service.AuthService.isAdminEmail(u.getEmail())) {
                if (u.getRole() != Role.ROLE_ADMIN || !u.isDrivingLicenseVerified()) {
                    u.setRole(Role.ROLE_ADMIN);
                    u.setDrivingLicenseVerified(true);
                    userRepository.save(u);
                }
            }
        });


        // Seed verified KYC records
        if (licenseVerificationRepository.findTopByUserIdOrderBySubmittedAtDesc(rider.getId()).isEmpty()) {
            LicenseVerification riderKyc = new LicenseVerification(
                    rider,
                    "KA-01••••4819",
                    "KA-0120230048192",
                    "KA",
                    LocalDate.of(2032, 12, 31),
                    KycVerificationStatus.VERIFIED
            );
            riderKyc.setProvider("DEMO_VERIFIED");
            riderKyc.setVerifiedAt(LocalDateTime.now());
            riderKyc.setReviewedBy("SYSTEM_DEMO_SEEDER");
            licenseVerificationRepository.save(riderKyc);
        }

        if (licenseVerificationRepository.findTopByUserIdOrderBySubmittedAtDesc(admin.getId()).isEmpty()) {
            LicenseVerification adminKyc = new LicenseVerification(
                    admin,
                    "DL-04••••1823",
                    "DL-0420220091823",
                    "DL",
                    LocalDate.of(2030, 6, 30),
                    KycVerificationStatus.VERIFIED
            );
            adminKyc.setProvider("DEMO_VERIFIED");
            adminKyc.setVerifiedAt(LocalDateTime.now());
            adminKyc.setReviewedBy("SYSTEM_DEMO_SEEDER");
            licenseVerificationRepository.save(adminKyc);
        }
    }
}
