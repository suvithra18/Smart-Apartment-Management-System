package com.example.SmartSociety.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SmartSociety.entity.EmergencyAlert;
import com.example.SmartSociety.service.EmergencyService;

@RestController
@RequestMapping("/api/emergency")
@CrossOrigin("*")
public class EmergencyController {

    @Autowired
    private EmergencyService emergencyService;

    @PostMapping
    public EmergencyAlert createAlert(
            @RequestBody EmergencyAlert alert
    ) {

        return emergencyService.createAlert(alert);
    }

    @GetMapping
    public List<EmergencyAlert> getAllAlerts() {

        return emergencyService.getAllAlerts();
    }
}