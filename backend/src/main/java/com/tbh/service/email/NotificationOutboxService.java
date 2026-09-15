package com.tbh.service.email;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tbh.entity.NotificationEvent;
import com.tbh.repository.NotificationEventRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class NotificationOutboxService {

    private static final Logger log = LoggerFactory.getLogger(NotificationOutboxService.class);

    private final NotificationEventRepository notificationEventRepository;
    private final ResendEmailClient resendEmailClient;
    private final EmailTemplateBuilder emailTemplateBuilder;
    private final ObjectMapper objectMapper;

    public NotificationOutboxService(NotificationEventRepository notificationEventRepository,
                                     ResendEmailClient resendEmailClient,
                                     EmailTemplateBuilder emailTemplateBuilder) {
        this.notificationEventRepository = notificationEventRepository;
        this.resendEmailClient = resendEmailClient;
        this.emailTemplateBuilder = emailTemplateBuilder;
        this.objectMapper = new ObjectMapper();
    }

    public NotificationEvent queueEvent(String eventType, String recipientEmail, String recipientName,
                                        String templateName, Map<String, Object> payload, String idempotencyKey) {
        if (idempotencyKey != null && !idempotencyKey.isBlank()) {
            Optional<NotificationEvent> existing = notificationEventRepository.findByIdempotencyKey(idempotencyKey);
            if (existing.isPresent()) {
                log.info("[NOTIFICATION OUTBOX] Deduplicating event with key {}: already exists (status={})", idempotencyKey, existing.get().getStatus());
                return existing.get();
            }
        }

        try {
            String payloadJson = objectMapper.writeValueAsString(payload != null ? payload : Map.of());
            JsonNode payloadNode = objectMapper.readTree(payloadJson);
            String subject = emailTemplateBuilder.buildSubject(eventType, payloadNode);

            String finalKey = (idempotencyKey != null && !idempotencyKey.isBlank())
                    ? idempotencyKey
                    : (eventType + "_" + recipientEmail + "_" + System.currentTimeMillis());

            NotificationEvent event = new NotificationEvent(
                    eventType,
                    recipientEmail,
                    recipientName,
                    subject,
                    templateName,
                    payloadJson,
                    finalKey
            );

            NotificationEvent saved = notificationEventRepository.save(event);
            log.info("[NOTIFICATION OUTBOX] Queued notification {} for {} (Key: {})", eventType, recipientEmail, finalKey);
            return saved;
        } catch (Exception e) {
            log.error("[NOTIFICATION OUTBOX] Error enqueueing event {}: {}", eventType, e.getMessage());
            return null;
        }
    }

    @Scheduled(fixedDelay = 5000)
    public void processPendingNotifications() {
        List<NotificationEvent> pendingList = notificationEventRepository
                .findByStatusInAndRetryCountLessThanOrderByCreatedAtAsc(List.of("PENDING", "RETRYING"), 3);

        if (pendingList.isEmpty()) {
            return;
        }

        for (NotificationEvent event : pendingList) {
            try {
                JsonNode payloadNode = objectMapper.readTree(event.getPayloadJson());
                String html = emailTemplateBuilder.buildHtml(event.getEventType(), payloadNode);
                String resendId = resendEmailClient.sendEmail(event.getRecipientEmail(), event.getSubject(), html);

                event.setStatus("SENT");
                event.setResendEmailId(resendId);
                event.setSentAt(LocalDateTime.now());
                event.setUpdatedAt(LocalDateTime.now());
                notificationEventRepository.save(event);
                log.info("[NOTIFICATION OUTBOX] Delivered notification ID {} ({}) to {}", event.getId(), event.getEventType(), event.getRecipientEmail());
            } catch (Exception e) {
                int nextRetry = event.getRetryCount() + 1;
                event.setRetryCount(nextRetry);
                event.setLastError(e.getMessage());
                event.setUpdatedAt(LocalDateTime.now());
                if (nextRetry >= event.getMaxRetries()) {
                    event.setStatus("FAILED");
                    log.error("[NOTIFICATION OUTBOX] Permanently failed notification ID {} after {} attempts: {}", event.getId(), nextRetry, e.getMessage());
                } else {
                    event.setStatus("RETRYING");
                    log.warn("[NOTIFICATION OUTBOX] Transient failure for notification ID {} (attempt {}): {}", event.getId(), nextRetry, e.getMessage());
                }
                notificationEventRepository.save(event);
            }
        }
    }
}