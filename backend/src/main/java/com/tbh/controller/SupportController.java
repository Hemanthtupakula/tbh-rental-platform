package com.tbh.controller;

import com.tbh.entity.SupportMessage;
import com.tbh.entity.SupportTicket;
import com.tbh.entity.User;
import com.tbh.repository.UserRepository;
import com.tbh.service.SupportService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping({"/api/support", "/api/v1/support"})
public class SupportController {

    private final SupportService supportService;
    private final UserRepository userRepository;

    public SupportController(SupportService supportService, UserRepository userRepository) {
        this.supportService = supportService;
        this.userRepository = userRepository;
    }

    private User getAuthenticatedUser(Authentication auth) {
        if (auth == null || !auth.isAuthenticated()) {
            throw new IllegalArgumentException("Authentication required");
        }
        return userRepository.findByEmail(auth.getName())
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + auth.getName()));
    }

    @PostMapping("/tickets")
    public ResponseEntity<?> createTicket(@RequestBody Map<String, Object> req, Authentication auth) {
        User user = getAuthenticatedUser(auth);

        Long bookingId = null;
        if (req.containsKey("bookingId") && req.get("bookingId") != null) {
            bookingId = Long.valueOf(req.get("bookingId").toString());
        }

        String category = (String) req.getOrDefault("category", "GENERAL");
        String subject = (String) req.get("subject");
        String message = (String) req.get("message");
        String priority = (String) req.getOrDefault("priority", "NORMAL");

        SupportTicket ticket = supportService.createTicket(user, bookingId, category, subject, message, priority);

        Map<String, Object> resp = new HashMap<>();
        resp.put("id", ticket.getId());
        resp.put("ticketNumber", ticket.getTicketNumber());
        resp.put("category", ticket.getCategory());
        resp.put("subject", ticket.getSubject());
        resp.put("status", ticket.getStatus());
        resp.put("priority", ticket.getPriority());
        resp.put("createdAt", ticket.getCreatedAt());

        return ResponseEntity.ok(resp);
    }

    @GetMapping("/tickets")
    public ResponseEntity<List<SupportTicket>> getMyTickets(Authentication auth) {
        User user = getAuthenticatedUser(auth);
        return ResponseEntity.ok(supportService.getCustomerTickets(user.getId()));
    }

    @GetMapping("/tickets/{ticketId}/messages")
    public ResponseEntity<List<SupportMessage>> getTicketMessages(@PathVariable Long ticketId, Authentication auth) {
        User user = getAuthenticatedUser(auth);
        return ResponseEntity.ok(supportService.getCustomerMessages(ticketId, user.getId()));
    }

    @PostMapping("/tickets/{ticketId}/messages")
    public ResponseEntity<SupportMessage> addMessage(@PathVariable Long ticketId, @RequestBody Map<String, String> req, Authentication auth) {
        User user = getAuthenticatedUser(auth);
        String message = req.get("message");
        SupportMessage msg = supportService.addCustomerMessage(ticketId, user.getId(), message);
        return ResponseEntity.ok(msg);
    }
}
