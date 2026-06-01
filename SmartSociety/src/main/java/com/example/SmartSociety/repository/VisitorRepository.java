package com.example.SmartSociety.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SmartSociety.entity.Visitor;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface VisitorRepository extends JpaRepository<Visitor, Long> {

    List<Visitor> findByResidentId(Long residentId);

    List<Visitor> findByPhone(String phone);

    List<Visitor> findByEntryTimeBetween(LocalDateTime start, LocalDateTime end);
}