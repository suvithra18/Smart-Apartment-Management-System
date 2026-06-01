package com.example.SmartSociety.service;

import java.util.List;

import com.example.SmartSociety.entity.EmergencyAlert;

public interface EmergencyService {

    EmergencyAlert createAlert(EmergencyAlert alert);

    List<EmergencyAlert> getAllAlerts();
}
