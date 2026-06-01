package com.example.SmartSociety.service;


import com.example.SmartSociety.dto.VehicleDTO;
import com.example.SmartSociety.entity.Vehicle;
import com.example.SmartSociety.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository repository;

    // GET ALL
    public List<VehicleDTO> getAllVehicles() {

        return repository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    // ADD
    public VehicleDTO addVehicle(VehicleDTO dto) {

        Vehicle vehicle = new Vehicle();

        vehicle.setOwnerName(dto.getOwnerName());
        vehicle.setVehicleNumber(dto.getVehicleNumber());
        vehicle.setVehicleType(dto.getVehicleType());

        Vehicle saved = repository.save(vehicle);

        return convertToDTO(saved);
    }

    // DELETE
    public void deleteVehicle(Long id) {

        repository.deleteById(id);
    }

    // CONVERT
    private VehicleDTO convertToDTO(Vehicle v) {

        VehicleDTO dto = new VehicleDTO();

        dto.setId(v.getId());
        dto.setOwnerName(v.getOwnerName());
        dto.setVehicleNumber(v.getVehicleNumber());
        dto.setVehicleType(v.getVehicleType());

        return dto;
    }
}
