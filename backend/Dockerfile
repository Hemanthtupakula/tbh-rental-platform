# ==============================================================================
# Multi-Stage Dockerfile for TBH Spring Boot Backend
# Base: Eclipse Temurin Java 21 (LTS) & Ubuntu Jammy
# ==============================================================================

# ------------------------------------------------------------------------------
# 1. Build Stage: Resolve dependencies and package executable Fat JAR
# ------------------------------------------------------------------------------
FROM maven:3.9-eclipse-temurin-21 AS builder

WORKDIR /build

# Cache Maven dependencies layer
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source tree and compile (skipping tests only during Docker image build)
COPY src ./src
RUN mvn clean package -DskipTests -B

# ------------------------------------------------------------------------------
# 2. Runtime Stage: Minimal JRE 21 with Tesseract OCR engine & utilities
# ------------------------------------------------------------------------------
FROM eclipse-temurin:21-jre-jammy

# Install Tesseract OCR, English trained data, and wget for health checks
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        tesseract-ocr \
        tesseract-ocr-eng \
        wget && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Ensure KYC uploads directory exists
RUN mkdir -p /app/uploads/kyc

# Copy the generated Fat JAR from builder stage
COPY --from=builder /build/target/tbh-rental-backend-1.0.0.jar app.jar

# Environment defaults for cloud container runtime
ENV SERVER_PORT=8080 \
    TESSERACT_CMD=/usr/bin/tesseract \
    SPRING_PROFILES_ACTIVE=prod

EXPOSE 8080

# Run Spring Boot application
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "app.jar"]
