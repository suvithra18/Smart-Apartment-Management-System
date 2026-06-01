package com.example.SmartSociety.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.SmartSociety.entity.Payment;

import java.util.List;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {

    List<Payment> findByResidentId(Long residentId);
    List<Payment> findByStatus(String status);

    List<Payment> findByMonth(String month);

    @Query("SELECT COALESCE(SUM(p.amount), 0) FROM Payment p")
    double totalRevenue();
}