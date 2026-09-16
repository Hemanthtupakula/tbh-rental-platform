package com.tbh.service;

import com.tbh.entity.SupportMessage;
import com.tbh.entity.SupportTicket;
import com.tbh.entity.User;
import com.tbh.repository.SupportMessageRepository;
import com.tbh.repository.SupportTicketRepository;
import com.tbh.repository.UserRepository;
import com.tbh.service.email.NotificationOutboxService;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Random;

@Service
public class SupportService {

    private final SupportTicketRepository ticketRepository;
    private final SupportMessageRepository messageRepository;
    private final UserRepository userRepository;
    private final NotificationOutboxService notificationOutboxService;
    private final Random random = new Random();

    public SupportService(SupportTicketRepository ticketRepository,
                          SupportMessageRepository messageRepository,
                          UserRepository userRepository,
                          NotificationOutboxService notificationOutboxService) {
        this.ticketRepository = ticketRepository;
        this.messageRepository = messageRepository;
        this.userRepository = userRepository;
        this.notificationOutboxService = notificationOutboxService;
    }

    @Transactional
    public SupportTicket createTicket(User user, Long bookingId, String category, String subject, String message, String priority) {
        if (user == null) {
            throw new IllegalArgumentException("User cannot be null");
        }
        if (subject == null || subject.isBlank()) {
            throw new IllegalArgumentException("Subject is required");
        }
        if (message == null || message.isBlank()) {
            throw new IllegalArgumentException("Initial message is required");
        }

        String ticketNumber = "TBH-SUP-" + (100000 + random.nextInt(900000));
        String validCategory = (category != null && !category.isBlank()) ? category.toUpperCase() : "GENERAL";
        String validPriority = (priority != null && !priority.isBlank()) ? priority.toUpperCase() : "NORMAL";

        SupportTicket ticket = new SupportTicket(
                ticketNumber,
                user,
                bookingId,
                validCategory,
                subject.trim(),
                validPriority
        );
        ticket = ticketRepository.save(ticket);

        SupportMessage initialMsg = new SupportMessage(
                ticket,
                user.getId(),
                "CUSTOMER",
                user.getFullName(),
                message.trim(),
                false
        );
        messageRepository.save(initialMsg);

        if (notificationOutboxService != null && user.getEmail() != null) {
            Map<String, Object> payload = Map.of(
                    "customerName", user.getFullName() != null ? user.getFullName() : "Rider",
                    "ticketNumber", ticket.getTicketNumber(),
                    "subject", ticket.getSubject()
            );
            notificationOutboxService.queueEvent(
                    "SUPPORT_TICKET_CREATED",
                    user.getEmail(),
                    user.getFullName(),
                    "support_ticket_created",
                    payload,
                    "SUPPORT_CR_" + ticket.getTicketNumber()
            );
        }

        return ticket;
    }

    public List<SupportTicket> getCustomerTickets(Long userId) {
        return ticketRepository.findByUserIdOrderByCreatedAtDesc(userId);
    }

    public List<SupportMessage> getCustomerMessages(Long ticketId, Long userId) {
        SupportTicket ticket = ticketRepository.findById(ticketId)
                .orElseThrow(() -> new IllegalArgumentException("Ticket not found: " + ticketId));

        if (!ticket.getUser().getId().equals(userId)) {
            throw new AccessDeniedException("Access denied: You cannot view tickets belonging to another customer.");
        }

        return messageRepository.findByTicketIdAndIsInternalNoteFalseOrderByCreatedAtAsc(ticketId);
    }

    @Transactional
    public SupportMessage addCustomerMessage(Long ticketId, Long userId, String messageText) {
        SupportTicket ticket = ticketRepository.findById(ticketId)
                .orElseThrow(() -> new IllegalArgumentException("Ticket not found: " + ticketId));

        if (!ticket.getUser().getId().equals(userId)) {
            throw new AccessDeniedException("Access denied: You cannot reply to another customer's ticket.");
        }

        if (messageText == null || messageText.isBlank()) {
            throw new IllegalArgumentException("Message content cannot be blank");
        }

        if ("RESOLVED".equals(ticket.getStatus()) || "WAITING_FOR_CUSTOMER".equals(ticket.getStatus())) {
            ticket.setStatus("IN_PROGRESS");
        }
        ticket.setUpdatedAt(LocalDateTime.now());
        ticketRepository.save(ticket);

        User user = ticket.getUser();
        SupportMessage msg = new SupportMessage(
                ticket,
                userId,
                "CUSTOMER",
                user.getFullName(),
                messageText.trim(),
                false
        );
        return messageRepository.save(msg);
    }

    public List<SupportTicket> getAllTicketsAdmin() {
        return ticketRepository.findAllByOrderByCreatedAtDesc();
    }

    public List<SupportMessage> getMessagesAdmin(Long ticketId) {
        return messageRepository.findByTicketIdOrderByCreatedAtAsc(ticketId);
    }

    @Transactional
    public SupportMessage addAdminReply(Long ticketId, String adminEmail, String messageText, boolean isInternalNote, String newStatus) {
        SupportTicket ticket = ticketRepository.findById(ticketId)
                .orElseThrow(() -> new IllegalArgumentException("Ticket not found: " + ticketId));

        if (messageText == null || messageText.isBlank()) {
            throw new IllegalArgumentException("Message content cannot be blank");
        }

        if (newStatus != null && !newStatus.isBlank()) {
            ticket.setStatus(newStatus.toUpperCase());
        } else if (!isInternalNote && "OPEN".equals(ticket.getStatus())) {
            ticket.setStatus("IN_PROGRESS");
        }
        ticket.setUpdatedAt(LocalDateTime.now());
        ticketRepository.save(ticket);

        User adminUser = userRepository.findByEmail(adminEmail).orElse(null);
        Long senderId = adminUser != null ? adminUser.getId() : 0L;

        SupportMessage msg = new SupportMessage(
                ticket,
                senderId,
                "ADMIN",
                "TBH Support Team",
                messageText.trim(),
                isInternalNote
        );
        SupportMessage savedMsg = messageRepository.save(msg);

        if (!isInternalNote && notificationOutboxService != null) {
            User customer = ticket.getUser();
            if (customer != null && customer.getEmail() != null) {
                Map<String, Object> payload = Map.of(
                        "customerName", customer.getFullName() != null ? customer.getFullName() : "Rider",
                        "ticketNumber", ticket.getTicketNumber(),
                        "subject", ticket.getSubject(),
                        "status", ticket.getStatus(),
                        "message", messageText.trim()
                );
                notificationOutboxService.queueEvent(
                        "SUPPORT_REPLY",
                        customer.getEmail(),
                        customer.getFullName(),
                        "support_reply",
                        payload,
                        "SUPPORT_REPLY_" + ticket.getTicketNumber() + "_" + System.currentTimeMillis()
                );

                if ("RESOLVED".equalsIgnoreCase(ticket.getStatus()) || "CLOSED".equalsIgnoreCase(ticket.getStatus())) {
                    Map<String, Object> resPayload = Map.of(
                            "customerName", customer.getFullName() != null ? customer.getFullName() : "Rider",
                            "ticketNumber", ticket.getTicketNumber()
                    );
                    notificationOutboxService.queueEvent(
                            "SUPPORT_TICKET_RESOLVED",
                            customer.getEmail(),
                            customer.getFullName(),
                            "support_ticket_resolved",
                            resPayload,
                            "SUPPORT_RES_" + ticket.getTicketNumber()
                    );
                }
            }
        }

        return savedMsg;
    }

    @Transactional
    public SupportTicket updateTicketStatus(Long ticketId, String newStatus) {
        SupportTicket ticket = ticketRepository.findById(ticketId)
                .orElseThrow(() -> new IllegalArgumentException("Ticket not found: " + ticketId));
        ticket.setStatus(newStatus.toUpperCase());
        ticket.setUpdatedAt(LocalDateTime.now());
        return ticketRepository.save(ticket);
    }
}
