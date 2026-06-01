package com.example.SmartSociety.service;


import java.util.List;

import com.example.SmartSociety.dto.PredictionResponse;
import com.example.SmartSociety.entity.MaintenanceRecord;

public interface MaintenanceService {

    MaintenanceRecord addRecord(
            MaintenanceRecord record
    );

    List<MaintenanceRecord> getAllRecords();

    PredictionResponse predictRisk(Long id);
    void delete(Long id);
}
