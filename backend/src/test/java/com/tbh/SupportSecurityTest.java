package com.tbh;

import com.tbh.entity.Role;
import com.tbh.entity.SupportMessage;
import com.tbh.entity.SupportTicket;
import com.tbh.entity.User;
import com.tbh.repository.SupportMessageRepository;
import com.tbh.repository.SupportTicketRepository;
import com.tbh.repository.UserRepository;
import com.tbh.security.JwtTokenProvider;
import com.tbh.service.SupportService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class SupportSecurityTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SupportService supportService;

    @Autowired
    private SupportTicketRepository ticketRepository;

    @Autowired
    private SupportMessageRepository messageRepository;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    private User createTestUser(String prefix, Role role) {
        String unique = prefix + "_" + System.currentTimeMillis() + "_" + (long)(Math.random() * 10000);
        User u = new User("User " + unique, unique + "@tbhtest.in", "+9198" + (long)(10000000 + Math.random() * 89999999), "pass123", role);
        u.setMobileVerified(true);
        u.setDrivingLicenseVerified(true);
        return userRepository.save(u);
    }

    @Test
    @DisplayName("1. IDOR Prevention: Customer A cannot view Customer B's support messages")
    void testCustomerCannotViewOtherCustomerMessages() {
        User userA = createTestUser("customer_a", Role.ROLE_USER);
        User userB = createTestUser("customer_b", Role.ROLE_USER);

        SupportTicket ticketB = supportService.createTicket(
                userB,
                null,
                "BILLING",
                "Question about security deposit",
                "When will my deposit refund reflect?",
                "NORMAL"
        );

        assertThrows(AccessDeniedException.class, () -> {
            supportService.getCustomerMessages(ticketB.getId(), userA.getId());
        });
    }

    @Test
    @DisplayName("2. IDOR Prevention: Customer A cannot post message to Customer B's ticket")
    void testCustomerCannotReplyToOtherCustomerTicket() {
        User userA = createTestUser("attacker_a", Role.ROLE_USER);
        User userB = createTestUser("victim_b", Role.ROLE_USER);

        SupportTicket ticketB = supportService.createTicket(
                userB,
                null,
                "VEHICLE",
                "Helmet issue",
                "The helmet was not provided",
                "HIGH"
        );

        assertThrows(AccessDeniedException.class, () -> {
            supportService.addCustomerMessage(ticketB.getId(), userA.getId(), "Malicious message");
        });
    }

    @Test
    @DisplayName("3. Regular user forbidden from accessing Admin Support tickets (403)")
    void testRegularUserForbiddenFromAdminSupport() throws Exception {
        User regularUser = createTestUser("reg_support_user", Role.ROLE_USER);
        String token = jwtTokenProvider.generateToken(regularUser.getId(), regularUser.getEmail(), "ROLE_USER");

        mockMvc.perform(get("/api/admin/support/tickets")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isForbidden());
    }

    @Test
    @DisplayName("4. Admin can reply to support ticket and status transitions properly")
    void testAdminReplyUpdatesTicketStatus() {
        User customer = createTestUser("ticket_owner", Role.ROLE_USER);
        User admin = createTestUser("support_admin", Role.ROLE_ADMIN);

        SupportTicket ticket = supportService.createTicket(
                customer,
                null,
                "GENERAL",
                "Trip assistance required",
                "Need help extending my booking",
                "NORMAL"
        );

        assertEquals("OPEN", ticket.getStatus());

        SupportMessage adminMsg = supportService.addAdminReply(
                ticket.getId(),
                admin.getEmail(),
                "We have extended your booking by 2 hours.",
                false,
                "RESOLVED"
        );

        assertNotNull(adminMsg);
        assertEquals("ADMIN", adminMsg.getSenderRole());

        SupportTicket updated = ticketRepository.findById(ticket.getId()).orElseThrow();
        assertEquals("RESOLVED", updated.getStatus());
    }
}
