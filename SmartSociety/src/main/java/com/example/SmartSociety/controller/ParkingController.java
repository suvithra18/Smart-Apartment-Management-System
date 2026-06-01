package com.example.SmartSociety.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.SmartSociety.entity.ParkingSlot;
import com.example.SmartSociety.service.ParkingService;

@RestController
@RequestMapping("/api/parking")
@CrossOrigin("*")
public class ParkingController {

    @Autowired
    private ParkingService parkingService;

    @PostMapping
    public ParkingSlot addSlot(
            @RequestBody ParkingSlot slot
    ) {
        return parkingService.addSlot(slot);
    }

    @GetMapping
    public List<ParkingSlot> getAllSlots() {
        return parkingService.getAllSlots();
    }

    @PutMapping("/{id}")
    public ParkingSlot reserveSlot(
            @PathVariable Long id,
            @RequestParam String vehicleNumber
    ) {

        return parkingService.reserveSlot(
                id,
                vehicleNumber
        );
    }
    @DeleteMapping("/{id}")
    public String deleteSlot(@PathVariable Long id) {

        parkingService.deleteSlot(id);

        return "Parking slot deleted successfully";
    }
}