package com.example.SmartSociety.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SmartSociety.entity.ParkingSlot;
import com.example.SmartSociety.repository.ParkingSlotRepository;
import com.example.SmartSociety.service.ParkingService;

@Service
public class ParkingServiceImpl
        implements ParkingService {

    @Autowired
    private ParkingSlotRepository repository;

    @Override
    public ParkingSlot addSlot(ParkingSlot slot) {
        return repository.save(slot);
    }

    @Override
    public List<ParkingSlot> getAllSlots() {
        return repository.findAll();
    }

    @Override
    public ParkingSlot reserveSlot(
            Long id,
            String vehicleNumber
    ) {

        ParkingSlot slot = repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Slot not found"));

        slot.setOccupied(true);
        slot.setVehicleNumber(vehicleNumber);

        return repository.save(slot);
    }
    @Override
    public void deleteSlot(Long id) {

        repository.deleteById(id);
    }
}