package com.tbh.repository;

import com.tbh.entity.RefreshToken;
import com.tbh.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Optional;
import java.util.List;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    Optional<RefreshToken> findByToken(String token);
    List<RefreshToken> findByTokenFamily(String tokenFamily);
    
    @Modifying
    @Query("UPDATE RefreshToken r SET r.revoked = true WHERE r.tokenFamily = :tokenFamily")
    int revokeAllByTokenFamily(@Param("tokenFamily") String tokenFamily);

    @Modifying
    void deleteByUser(User user);
}
