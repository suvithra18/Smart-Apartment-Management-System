package com.example.SmartSociety.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.SmartSociety.dto.PredictionResponse;
import com.example.SmartSociety.entity.MaintenanceRecord;
import com.example.SmartSociety.service.MaintenanceService;

import java.util.List;

@RestController
@RequestMapping("/api/maintenance")
@CrossOrigin("*")
public class MaintenanceController {

    @Autowired
    private MaintenanceService service;

    @PostMapping
    public MaintenanceRecord addRecord(
            @RequestBody MaintenanceRecord record
    ) {

        return service.addRecord(record);
    }

    @GetMapping
    public List<MaintenanceRecord> getAllRecords() {

        return service.getAllRecords();
    }

    @GetMapping("/predict/{id}")
    public PredictionResponse predictRisk(
            @PathVariable Long id
    ) {

        return service.predictRisk(id);
    }
    @DeleteMapping("/{id}")
    public String delete(
            @PathVariable Long id
    ) {

        service.delete(id);

        return "Deleted Successfully";
    }
}
