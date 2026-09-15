package com.tbh.repository;

import com.tbh.entity.KycAuditEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface KycAuditEventRepository extends JpaRepository<KycAuditEvent, Long> {
    @Query("SELECT e FROM KycAuditEvent e WHERE e.kyc.id = :kycId ORDER BY e.createdAt DESC")
    List<KycAuditEvent> findByKycIdOrderByCreatedAtDesc(@Param("kycId") Long kycId);

    @Query("SELECT e FROM KycAuditEvent e WHERE e.user.id = :userId ORDER BY e.createdAt DESC")
    List<KycAuditEvent> findByUserIdOrderByCreatedAtDesc(@Param("userId") Long userId);

    List<KycAuditEvent> findByEventTypeOrderByCreatedAtDesc(String eventType);
}

