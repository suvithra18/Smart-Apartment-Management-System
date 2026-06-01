package com.example.SmartSociety.service;



import java.util.List;

import com.example.SmartSociety.dto.DeliveryDTO;
import com.example.SmartSociety.entity.DeliveryEntry;

public interface DeliveryService {

    DeliveryEntry createEntry(
            DeliveryDTO dto
    );

    List<DeliveryEntry> getAllEntries();

    String verifyOtp(
            Long id,
            String otp
    );
}
