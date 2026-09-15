package com.tbh.repository;

import com.tbh.entity.KycVerificationStatus;
import com.tbh.entity.LicenseVerification;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface LicenseVerificationRepository extends JpaRepository<LicenseVerification, Long> {
    Optional<LicenseVerification> findByUserId(Long userId);
    Optional<LicenseVerification> findTopByUserIdOrderBySubmittedAtDesc(Long userId);
    List<LicenseVerification> findByVerificationStatus(KycVerificationStatus status);
    long countByVerificationStatus(KycVerificationStatus status);
}
