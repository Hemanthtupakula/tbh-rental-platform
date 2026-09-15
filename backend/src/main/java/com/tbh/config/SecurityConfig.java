package com.tbh.config;

import com.tbh.repository.UserRepository;
import com.tbh.security.JwtAuthenticationFilter;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.time.Instant;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Value("${tbh.security.allowed-origins:https://tbh-rental-platform.pages.dev,http://localhost:5173,http://localhost:3000,http://127.0.0.1:5173}")
    private String allowedOrigins;

    @Value("${spring.h2.console.enabled:false}")
    private boolean h2ConsoleEnabled;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService(UserRepository userRepository) {
        return username -> userRepository.findByEmail(username)
                .map(user -> new org.springframework.security.core.userdetails.User(
                        user.getEmail(),
                        user.getPassword() != null ? user.getPassword() : "",
                        Collections.singletonList(new SimpleGrantedAuthority(user.getRole().name()))
                ))
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // CSRF protection is disabled because the application uses stateless Bearer token authentication in the Authorization header.
            // No session cookies or browser credentials are used for API requests, preventing cross-site request forgery.
            .csrf(csrf -> csrf.disable())
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .headers(headers -> headers.frameOptions(frame -> frame.sameOrigin()))
            .exceptionHandling(ex -> ex
                .authenticationEntryPoint((request, response, authException) -> {
                    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                    response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                    String json = String.format(
                        "{\"timestamp\":\"%s\",\"status\":401,\"error\":\"Unauthorized\",\"message\":\"%s\",\"path\":\"%s\"}",
                        Instant.now().toString(),
                        authException.getMessage() != null ? authException.getMessage().replace("\"", "\\\"") : "Full authentication is required to access this resource",
                        request.getRequestURI()
                    );
                    response.getWriter().write(json);
                })
                .accessDeniedHandler((request, response, accessDeniedException) -> {
                    response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                    response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                    String json = String.format(
                        "{\"timestamp\":\"%s\",\"status\":403,\"error\":\"Forbidden\",\"message\":\"%s\",\"path\":\"%s\"}",
                        Instant.now().toString(),
                        accessDeniedException.getMessage() != null ? accessDeniedException.getMessage().replace("\"", "\\\"") : "Access Denied",
                        request.getRequestURI()
                    );
                    response.getWriter().write(json);
                })
            )
            .authorizeHttpRequests(auth -> {
                // OPTIONS requests for CORS preflight
                auth.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll();
                // Public authentication endpoints
                auth.requestMatchers(
                    "/api/auth/login",
                    "/api/auth/register",
                    "/api/auth/refresh",
                    "/api/auth/send-otp",
                    "/api/auth/verify-otp",
                    "/api/auth/send-email-otp",
                    "/api/auth/verify-email-otp",
                    "/api/auth/forgot-password",
                    "/api/auth/reset-password"
                ).permitAll();
                // Public vehicle catalog & locations
                auth.requestMatchers(HttpMethod.GET, "/api/vehicles/**", "/vehicles/**").permitAll();
                auth.requestMatchers(HttpMethod.GET, "/api/locations/**", "/api/cities/**").permitAll();
                // Public pricing calculation
                auth.requestMatchers("/api/pricing/**").permitAll();
                // Public health check
                auth.requestMatchers("/api/health").permitAll();
                // Payment webhook
                auth.requestMatchers("/api/payments/webhook").permitAll();
                // Dev console (restricted: active only when explicitly enabled via configuration)
                if (h2ConsoleEnabled) {
                    auth.requestMatchers("/h2-console/**").permitAll();
                }
                // Static frontend assets
                auth.requestMatchers("/", "/index.html", "/assets/**", "/favicon.ico", "/images/**", "/models/**", "/error").permitAll();
                // Strict Admin Endpoints
                auth.requestMatchers("/api/admin/**", "/api/v1/admin/**").hasAuthority("ROLE_ADMIN");
                // Explicitly authenticated user operations
                auth.requestMatchers("/api/auth/me", "/api/auth/verify-license", "/api/auth/clerk/**", "/api/v1/auth/clerk/**").authenticated();
                auth.requestMatchers("/api/kyc/**").authenticated();
                auth.requestMatchers("/api/bookings/**").authenticated();
                auth.requestMatchers("/api/payments/**").authenticated();
                // Deny-by-default for any unmapped endpoints
                auth.anyRequest().authenticated();
            })
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        List<String> origins = Arrays.stream(allowedOrigins.split(","))
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .toList();
        configuration.setAllowedOrigins(origins);
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "X-Requested-With", "Accept", "Origin", "Access-Control-Request-Method", "Access-Control-Request-Headers"));
        configuration.setExposedHeaders(List.of("Authorization"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
