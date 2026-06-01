package com.example.SmartSociety.controller;


import com.example.SmartSociety.dto.VehicleDTO;
import com.example.SmartSociety.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
@CrossOrigin(origins = "http://localhost:3000")
public class VehicleController {

    @Autowired
    private VehicleService service;

    @GetMapping
    public List<VehicleDTO> getAll() {

        return service.getAllVehicles();
    }

    @PostMapping
    public VehicleDTO add(@RequestBody VehicleDTO dto) {

        return service.addVehicle(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {

        service.deleteVehicle(id);
    }
}
