package com.tbh.repository;

import com.tbh.entity.NotificationEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface NotificationEventRepository extends JpaRepository<NotificationEvent, Long> {

    Optional<NotificationEvent> findByIdempotencyKey(String idempotencyKey);

    boolean existsByIdempotencyKey(String idempotencyKey);

    List<NotificationEvent> findByStatusInAndRetryCountLessThanOrderByCreatedAtAsc(List<String> statuses, int maxRetries);

    List<NotificationEvent> findByRecipientEmailOrderByCreatedAtDesc(String recipientEmail);

    long countByStatus(String status);
}
