package com.tbh;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.test.context.ActiveProfiles;

import javax.sql.DataSource;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.util.List;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
public class DatabaseMigrationTest {

    @Autowired
    private DataSource dataSource;

    private static final List<String> EXPECTED_TABLES = List.of(
            "users",
            "cities",
            "location_hubs",
            "vehicles",
            "fleet_units",
            "city_pricing",
            "bookings",
            "payments",
            "license_verifications",
            "refresh_tokens",
            "vehicle_media",
            "reviews"
    );

    @Test
    @DisplayName("Verify Flyway migration V1 script exists on classpath")
    void testFlywayMigrationScriptExists() {
        Resource resource = new ClassPathResource("db/migration/V1__initial_schema.sql");
        assertTrue(resource.exists(), "V1__initial_schema.sql must exist under src/main/resources/db/migration/");
    }

    @Test
    @DisplayName("Verify V1 migration defines all 12 core TBH tables")
    void testFlywayMigrationContainsAll12CoreTables() throws Exception {
        Resource resource = new ClassPathResource("db/migration/V1__initial_schema.sql");
        String sql;
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(resource.getInputStream(), StandardCharsets.UTF_8))) {
            sql = reader.lines().collect(Collectors.joining("\n")).toLowerCase();
        }

        for (String table : EXPECTED_TABLES) {
            String tablePattern = "create table if not exists `" + table + "`";
            assertTrue(sql.contains(tablePattern), "Flyway V1 script must contain table definition for: " + table);
        }
    }

    @Test
    @DisplayName("Verify V1 migration contains no legacy PostgreSQL artifacts")
    void testNoPostgreSQLArtifactsInV1() throws Exception {
        Resource resource = new ClassPathResource("db/migration/V1__initial_schema.sql");
        String sql;
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(resource.getInputStream(), StandardCharsets.UTF_8))) {
            sql = reader.lines().collect(Collectors.joining("\n")).toLowerCase();
        }

        assertFalse(sql.contains("bigserial"), "V1 migration must not contain PostgreSQL BIGSERIAL");
        assertFalse(sql.contains("double precision"), "V1 migration must not contain PostgreSQL DOUBLE PRECISION");
        assertFalse(sql.contains("postgresql"), "V1 migration must not contain PostgreSQL keywords");
    }

    @Test
    @DisplayName("Verify test environment uses isolated in-memory database")
    void testTestEnvironmentUsesIsolatedDatabase() throws Exception {
        try (Connection connection = dataSource.getConnection()) {
            String url = connection.getMetaData().getURL();
            assertNotNull(url, "Datasource URL must not be null");
            assertTrue(url.startsWith("jdbc:h2:mem:"), "Test profile must run against isolated in-memory H2 database, but was: " + url);
            assertFalse(url.contains("3306"), "Test profile must NOT connect to MySQL port 3306");
        }
    }

    @Test
    @DisplayName("Verify referential integrity constraints defined with ON DELETE RESTRICT")
    void testReferentialIntegrityForeignKeys() throws Exception {
        Resource resource = new ClassPathResource("db/migration/V1__initial_schema.sql");
        String sql;
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(resource.getInputStream(), StandardCharsets.UTF_8))) {
            sql = reader.lines().collect(Collectors.joining("\n")).toUpperCase();
        }

        assertTrue(sql.contains("CONSTRAINT `FK_BOOKINGS_USER` FOREIGN KEY (`USER_ID`) REFERENCES `USERS` (`ID`) ON DELETE RESTRICT"));
        assertTrue(sql.contains("CONSTRAINT `FK_PAYMENTS_BOOKING` FOREIGN KEY (`BOOKING_ID`) REFERENCES `BOOKINGS` (`ID`) ON DELETE RESTRICT"));
        assertTrue(sql.contains("CONSTRAINT `FK_LICENSE_VERIFICATIONS_USER` FOREIGN KEY (`USER_ID`) REFERENCES `USERS` (`ID`) ON DELETE RESTRICT"));
    }

    @Test
    @DisplayName("Verify Flyway migration V2 script exists on classpath")
    void testFlywayV2MigrationScriptExists() {
        Resource resource = new ClassPathResource("db/migration/V2__convert_monetary_columns_to_decimal.sql");
        assertTrue(resource.exists(), "V2__convert_monetary_columns_to_decimal.sql must exist under src/main/resources/db/migration/");
    }

    @Test
    @DisplayName("Verify V2 migration modifies monetary columns to DECIMAL(12,2) without destructive operations")
    void testV2MigrationSafeDecimalAlterations() throws Exception {
        Resource resource = new ClassPathResource("db/migration/V2__convert_monetary_columns_to_decimal.sql");
        String sql;
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(resource.getInputStream(), StandardCharsets.UTF_8))) {
            sql = reader.lines().collect(Collectors.joining("\n")).toLowerCase();
        }

        assertTrue(sql.contains("alter table `vehicles`"), "V2 must alter vehicles table");
        assertTrue(sql.contains("alter table `city_pricing`"), "V2 must alter city_pricing table");
        assertTrue(sql.contains("alter table `bookings`"), "V2 must alter bookings table");
        assertTrue(sql.contains("alter table `payments`"), "V2 must alter payments table");
        assertTrue(sql.contains("decimal(12,2)"), "V2 must specify DECIMAL(12,2)");

        assertFalse(sql.contains("drop table"), "V2 migration must not contain DROP TABLE");
        assertFalse(sql.contains("truncate table"), "V2 migration must not contain TRUNCATE TABLE");
        assertFalse(sql.contains("drop database"), "V2 migration must not contain DROP DATABASE");
    }
}
