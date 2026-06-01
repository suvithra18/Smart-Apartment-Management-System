package com.example.SmartSociety.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SmartSociety.entity.Complaint;

public interface ComplaintRepository extends JpaRepository<Complaint, Long> {

    List<Complaint> findByResidentId(Long residentId);
    List<Complaint> findByStatus(String status);

    List<Complaint> findByPriority(String priority);

    List<Complaint> findByCategory(String category);

}