package com.tbh.repository;

import com.tbh.entity.SupportMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SupportMessageRepository extends JpaRepository<SupportMessage, Long> {
    List<SupportMessage> findByTicketIdOrderByCreatedAtAsc(Long ticketId);
    List<SupportMessage> findByTicketIdAndIsInternalNoteFalseOrderByCreatedAtAsc(Long ticketId);
}
