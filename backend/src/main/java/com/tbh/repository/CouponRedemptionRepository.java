package com.tbh.repository;

import com.tbh.entity.CouponRedemption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CouponRedemptionRepository extends JpaRepository<CouponRedemption, Long> {
    long countByCouponIdAndUserId(Long couponId, Long userId);
    List<CouponRedemption> findByUserId(Long userId);
    List<CouponRedemption> findByCouponId(Long couponId);
}
