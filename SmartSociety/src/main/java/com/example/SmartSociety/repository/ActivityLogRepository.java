package com.example.SmartSociety.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SmartSociety.ActivityLog;

public interface ActivityLogRepository
extends JpaRepository<ActivityLog, Long> {
}