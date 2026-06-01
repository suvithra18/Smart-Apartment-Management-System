package com.example.SmartSociety.controller;


import com.example.SmartSociety.entity.DeliveryEntry;
import com.example.SmartSociety.repository.DeliveryRepository;
import com.example.SmartSociety.service.ActivityLogService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/delivery")
@CrossOrigin("*")
public class DeliveryController {

    // ================= REPOSITORY =================

    @Autowired
    private DeliveryRepository repository;

    // ================= LOG SERVICE =================

    @Autowired
    private ActivityLogService logService;

    // ================= GET ALL =================

    @GetMapping
    public List<DeliveryEntry> getAllDeliveries() {

        return repository.findAll();
    }

    // ================= ADD DELIVERY =================

    @PostMapping
    public DeliveryEntry addDelivery(
            @RequestBody DeliveryEntry delivery
    ) {

        DeliveryEntry savedDelivery =
                repository.save(delivery);

        // SAVE LOG

        logService.saveLog(

                "Security",

                "Added Delivery",

                "Delivery"
        );

        return savedDelivery;
    }

    // ================= MARK DELIVERED =================

    @PutMapping("/delivered/{id}")
    public DeliveryEntry markDelivered(
            @PathVariable Long id
    ) {

        DeliveryEntry delivery =
                repository.findById(id).orElse(null);

        if (delivery == null) {

            return null;
        }

        delivery.setStatus("Delivered");

        DeliveryEntry updated =
                repository.save(delivery);

        // SAVE LOG

        logService.saveLog(

                "Security",

                "Marked Delivery Delivered",

                "Delivery"
        );

        return updated;
    }

    // ================= DELETE DELIVERY =================

    @DeleteMapping("/{id}")
    public void deleteDelivery(
            @PathVariable Long id
    ) {

        repository.deleteById(id);

        // SAVE LOG

        logService.saveLog(

                "Security",

                "Deleted Delivery",

                "Delivery"
        );
    }
}