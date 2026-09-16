package com.tbh.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

/**
 * Keeps the Aiven MySQL free-tier database alive by sending a lightweight
 * ping query every 2 minutes. Without this, Aiven auto-powers-off the DB
 * after ~3 hours of inactivity on the free plan.
 */
@Service
public class DatabaseKeepAliveService {

    private static final Logger log = LoggerFactory.getLogger(DatabaseKeepAliveService.class);

    @PersistenceContext
    private EntityManager entityManager;

    // Runs every 2 minutes (120,000 ms) to prevent Aiven free-tier auto power-off
    @Scheduled(fixedDelay = 120000, initialDelay = 30000)
    @Transactional
    public void keepAlive() {
        try {
            entityManager.createNativeQuery("SELECT 1").getSingleResult();
            log.debug("[DB KEEP-ALIVE] Aiven MySQL ping successful - connection active");
        } catch (Exception e) {
            log.warn("[DB KEEP-ALIVE] Ping failed - database may be temporarily unavailable: {}", e.getMessage());
        }
    }
}
