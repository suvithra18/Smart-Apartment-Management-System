package com.example.SmartSociety.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SmartSociety.entity.MaintenanceRecord;

@Repository
public interface MaintenanceRepository
        extends JpaRepository<
        MaintenanceRecord,
        Long> {
}