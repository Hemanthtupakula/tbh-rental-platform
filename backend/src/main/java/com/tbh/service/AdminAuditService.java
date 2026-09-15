package com.tbh.service;

import com.tbh.entity.AdminAuditLog;
import com.tbh.repository.AdminAuditLogRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminAuditService {

    private final AdminAuditLogRepository auditLogRepository;

    public AdminAuditService(AdminAuditLogRepository auditLogRepository) {
        this.auditLogRepository = auditLogRepository;
    }

    public AdminAuditLog logAction(String adminEmail, String action, String targetEntity, String targetId, String details, String metadataJson) {
        AdminAuditLog log = new AdminAuditLog(
                adminEmail != null ? adminEmail : "admin@tbhrentals.in",
                action,
                targetEntity,
                targetId,
                details,
                metadataJson
        );
        return auditLogRepository.save(log);
    }

    public List<AdminAuditLog> getRecentLogs() {
        return auditLogRepository.findTop100ByOrderByCreatedAtDesc();
    }
}
