package com.tbh;

import com.tbh.entity.NotificationEvent;
import com.tbh.repository.NotificationEventRepository;
import com.tbh.service.email.EmailService;
import com.tbh.service.email.NotificationOutboxService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.Map;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
public class NotificationEventOutboxTest {

    @Autowired
    private NotificationOutboxService outboxService;

    @Autowired
    private NotificationEventRepository notificationEventRepository;

    @Autowired
    private EmailService emailService;

    @BeforeEach
    @AfterEach
    void cleanup() {
        notificationEventRepository.deleteAll();
    }

    @Test
    @DisplayName("Queueing event inserts into outbox with PENDING status")
    void testQueueEventInsertsPending() {
        String idempotencyKey = "test_idem_" + System.currentTimeMillis();
        NotificationEvent event = outboxService.queueEvent(
                "BOOKING_CONFIRMED",
                "rider@example.com",
                "Arjun Sharma",
                "booking_confirmed",
                Map.of("bookingReference", "TBH-TEST-01", "totalAmount", "1499.00"),
                idempotencyKey
        );

        assertNotNull(event);
        assertNotNull(event.getId());
        assertEquals("PENDING", event.getStatus());
        assertEquals("rider@example.com", event.getRecipientEmail());

        Optional<NotificationEvent> found = notificationEventRepository.findByIdempotencyKey(idempotencyKey);
        assertTrue(found.isPresent());
        assertEquals("BOOKING_CONFIRMED", found.get().getEventType());
    }

    @Test
    @DisplayName("Duplicate idempotency key does not insert duplicate event")
    void testIdempotencyDeduplication() {
        String idempotencyKey = "test_idem_duplicate_" + System.currentTimeMillis();

        NotificationEvent first = outboxService.queueEvent(
                "PAYMENT_SUCCESS",
                "rider@example.com",
                "Arjun Sharma",
                "payment_success",
                Map.of("amount", "2499.00"),
                idempotencyKey
        );

        NotificationEvent second = outboxService.queueEvent(
                "PAYMENT_SUCCESS",
                "rider@example.com",
                "Arjun Sharma",
                "payment_success",
                Map.of("amount", "2499.00"),
                idempotencyKey
        );

        assertEquals(first.getId(), second.getId(), "Both calls should return the same existing record");
        assertEquals(1, notificationEventRepository.count(), "Repository must have exactly 1 event");
    }

    @Test
    @DisplayName("ProcessOutbox successfully delivers pending notifications in non-prod mode")
    void testProcessOutboxDelivery() {
        String idempotencyKey = "test_idem_process_" + System.currentTimeMillis();
        outboxService.queueEvent(
                "KYC_APPROVED",
                "rider@example.com",
                "Arjun Sharma",
                "kyc_approved",
                Map.of("customerName", "Arjun Sharma"),
                idempotencyKey
        );

        outboxService.processPendingNotifications();

        Optional<NotificationEvent> eventOpt = notificationEventRepository.findByIdempotencyKey(idempotencyKey);
        assertTrue(eventOpt.isPresent());
        assertEquals("SENT", eventOpt.get().getStatus());
        assertNotNull(eventOpt.get().getSentAt());
    }

    @Test
    @DisplayName("EmailService helper methods queue appropriate transactional outbox events")
    void testEmailServiceQueuing() {
        emailService.queueBookingConfirmed(
                "rider@example.com",
                "Priya Patel",
                "TBH-BK-999",
                "Ather 450X Gen 3",
                "Indiranagar Hub",
                "Indiranagar Hub",
                "1899.00",
                "4821"
        );

        Optional<NotificationEvent> event = notificationEventRepository.findByIdempotencyKey("notif_book_conf_TBH-BK-999");
        assertTrue(event.isPresent());
        assertEquals("BOOKING_CONFIRMED", event.get().getEventType());
        assertEquals("rider@example.com", event.get().getRecipientEmail());
    }
}