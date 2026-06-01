package com.example.SmartSociety.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SmartSociety.entity.EmergencyAlert;
import com.example.SmartSociety.repository.EmergencyAlertRepository;
import com.example.SmartSociety.service.EmergencyService;

@Service
public class EmergencyServiceImpl
        implements EmergencyService {

    @Autowired
    private EmergencyAlertRepository repository;

    @Override
    public EmergencyAlert createAlert(
            EmergencyAlert alert
    ) {
        return repository.save(alert);
    }

    @Override
    public List<EmergencyAlert> getAllAlerts() {
        return repository.findAll();
    }
}
