package com.example.SmartSociety.serviceImpl;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SmartSociety.dto.DeliveryDTO;
import com.example.SmartSociety.entity.DeliveryEntry;
import com.example.SmartSociety.repository.DeliveryRepository;
import com.example.SmartSociety.service.DeliveryService;

import java.util.List;
import java.util.Random;

@Service
public class DeliveryServiceImpl
        implements DeliveryService {

    @Autowired
    private DeliveryRepository repository;

    @Override
    public DeliveryEntry createEntry(
            DeliveryDTO dto
    ) {

        DeliveryEntry entry =
                new DeliveryEntry();

        entry.setDeliveryPersonName(
                dto.getDeliveryPersonName()
        );

        entry.setCompanyName(
                dto.getCompanyName()
        );

        entry.setResidentName(
                dto.getResidentName()
        );

        // Generate OTP

        String otp = String.valueOf(
                1000 + new Random().nextInt(9000)
        );

        entry.setOtp(otp);

        entry.setVerified(false);

        return repository.save(entry);
    }

    @Override
    public List<DeliveryEntry> getAllEntries() {

        return repository.findAll();
    }

    @Override
    public String verifyOtp(
            Long id,
            String otp
    ) {

        DeliveryEntry entry =
                repository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Entry not found"
                                ));

        if (
                entry.getOtp().equals(otp)
        ) {

            entry.setVerified(true);

            repository.save(entry);

            return "Delivery verified successfully";
        }

        return "Invalid OTP";
    }
}
