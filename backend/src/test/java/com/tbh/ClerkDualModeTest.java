package com.tbh;

import com.tbh.entity.Role;
import com.tbh.entity.User;
import com.tbh.repository.UserRepository;
import com.tbh.security.ClerkJwtVerifier;
import com.tbh.security.JwtTokenProvider;
import io.jsonwebtoken.Jwts;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.util.Date;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ClerkDualModeTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private ClerkJwtVerifier clerkJwtVerifier;

    @Autowired
    private UserRepository userRepository;

    private KeyPair keyPair;
    private KeyPair attackerKeyPair;
    private final String testKid = "ins_test_clerk_rsa_key_1";
    private final String clerkIssuer = "https://deep-zebra-6151.clerk.accounts.dev";

    @BeforeAll
    void setupRsaKeys() throws Exception {
        KeyPairGenerator kpg = KeyPairGenerator.getInstance("RSA");
        kpg.initialize(2048);
        keyPair = kpg.generateKeyPair();
        attackerKeyPair = kpg.generateKeyPair();

        clerkJwtVerifier.registerKeyForTesting(testKid, keyPair.getPublic());
    }

    @Test
    @DisplayName("Unauthenticated request to Clerk Me endpoint returns 401")
    void testClerkMeEndpointUnauthenticatedReturns401() throws Exception {
        mockMvc.perform(get("/api/auth/clerk/me"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @DisplayName("Valid Clerk RS256 token authenticates, auto-provisions ROLE_USER, and returns user details")
    void testValidClerkTokenAuthenticatesAndProvisions() throws Exception {
        String clerkUserId = "user_clerk_verified_8812";
        String email = "clerk_verified_rider@tbhrentals.in";

        String validToken = Jwts.builder()
                .header().keyId(testKid).and()
                .issuer(clerkIssuer)
                .subject(clerkUserId)
                .claim("email", email)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 120000))
                .signWith(keyPair.getPrivate(), Jwts.SIG.RS256)
                .compact();

        mockMvc.perform(get("/api/auth/clerk/me")
                .header("Authorization", "Bearer " + validToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.authenticated").value(true))
                .andExpect(jsonPath("$.role").value("ROLE_USER"))
                .andExpect(jsonPath("$.clerkUserId").value(clerkUserId))
                .andExpect(jsonPath("$.email").value(email));
    }

    @Test
    @DisplayName("Expired Clerk token is rejected with 401 Unauthorized")
    void testExpiredClerkTokenReturns401() throws Exception {
        String expiredToken = Jwts.builder()
                .header().keyId(testKid).and()
                .issuer(clerkIssuer)
                .subject("user_clerk_expired_001")
                .claim("email", "expired_clerk@example.com")
                .issuedAt(new Date(System.currentTimeMillis() - 7200000))
                .expiration(new Date(System.currentTimeMillis() - 3600000))
                .signWith(keyPair.getPrivate(), Jwts.SIG.RS256)
                .compact();

        mockMvc.perform(get("/api/auth/clerk/me")
                .header("Authorization", "Bearer " + expiredToken))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @DisplayName("Forged signature with attacker private key is rejected with 401 Unauthorized")
    void testForgedSignatureReturns401() throws Exception {
        String forgedToken = Jwts.builder()
                .header().keyId(testKid).and()
                .issuer(clerkIssuer)
                .subject("user_clerk_attacker_001")
                .claim("email", "attacker@example.com")
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 120000))
                .signWith(attackerKeyPair.getPrivate(), Jwts.SIG.RS256)
                .compact();

        mockMvc.perform(get("/api/auth/clerk/me")
                .header("Authorization", "Bearer " + forgedToken))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @DisplayName("Token with wrong issuer is rejected with 401 Unauthorized")
    void testWrongIssuerReturns401() throws Exception {
        String wrongIssuerToken = Jwts.builder()
                .header().keyId(testKid).and()
                .issuer("https://untrusted-fake-clerk.accounts.dev")
                .subject("user_clerk_wrong_iss")
                .claim("email", "imposter@example.com")
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 120000))
                .signWith(keyPair.getPrivate(), Jwts.SIG.RS256)
                .compact();

        mockMvc.perform(get("/api/auth/clerk/me")
                .header("Authorization", "Bearer " + wrongIssuerToken))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @DisplayName("Token with blank or missing subject is rejected with 401 Unauthorized")
    void testEmptySubjectReturns401() throws Exception {
        String emptySubToken = Jwts.builder()
                .header().keyId(testKid).and()
                .issuer(clerkIssuer)
                .subject("")
                .claim("email", "nosubject@example.com")
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 120000))
                .signWith(keyPair.getPrivate(), Jwts.SIG.RS256)
                .compact();

        mockMvc.perform(get("/api/auth/clerk/me")
                .header("Authorization", "Bearer " + emptySubToken))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @DisplayName("Verify NO demo authentication endpoints exist in API")
    void testNoDemoEndpointsExist() throws Exception {
        mockMvc.perform(get("/api/auth/demo-rider"))
                .andExpect(status().is4xxClientError());
        mockMvc.perform(get("/api/auth/test-credentials"))
                .andExpect(status().is4xxClientError());
    }

    @Test
    @DisplayName("Standard HMAC JWT token authenticates user successfully alongside Clerk infrastructure")
    void testStandardHmacJwtStillWorks() throws Exception {
        User user = userRepository.findByEmail("test_clerk_compat@example.com").orElseGet(() -> {
            User u = new User("Dual Mode User", "test_clerk_compat@example.com", "+919888877771", "pass123", Role.ROLE_USER);
            return userRepository.save(u);
        });

        String token = jwtTokenProvider.generateToken(user.getId(), user.getEmail(), user.getRole().name());

        mockMvc.perform(get("/api/kyc/me")
                .header("Authorization", "Bearer " + token))
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("Media sync status endpoint is secured and accessible to ROLE_ADMIN")
    void testMediaSyncStatusEndpoint() throws Exception {
        mockMvc.perform(get("/api/admin/media/status"))
                .andExpect(status().isUnauthorized());

        User adminUser = userRepository.findByEmail("admin_media_test@tbhrentals.in").orElseGet(() -> {
            User u = new User("Admin User", "admin_media_test@tbhrentals.in", "+919888877772", "pass123", Role.ROLE_ADMIN);
            return userRepository.save(u);
        });

        String adminToken = jwtTokenProvider.generateToken(adminUser.getId(), adminUser.getEmail(), adminUser.getRole().name());

        mockMvc.perform(get("/api/admin/media/status")
                .header("Authorization", "Bearer " + adminToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("HEALTHY"))
                .andExpect(jsonPath("$.cdnEndpoint").value("https://ik.imagekit.io/hemanthhkt"))
                .andExpect(jsonPath("$.totalVehicles").isNumber());
    }
}