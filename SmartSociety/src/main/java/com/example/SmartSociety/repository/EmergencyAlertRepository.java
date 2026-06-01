package com.example.SmartSociety.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SmartSociety.entity.EmergencyAlert;

@Repository
public interface EmergencyAlertRepository
        extends JpaRepository<EmergencyAlert, Long> {
}