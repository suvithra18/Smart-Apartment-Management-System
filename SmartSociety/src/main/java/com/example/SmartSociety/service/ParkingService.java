package com.example.SmartSociety.service;

import java.util.List;

import com.example.SmartSociety.entity.ParkingSlot;

public interface ParkingService {

    ParkingSlot addSlot(ParkingSlot slot);

    List<ParkingSlot> getAllSlots();

    ParkingSlot reserveSlot(Long id, String vehicleNumber);
    void deleteSlot(Long id);
}