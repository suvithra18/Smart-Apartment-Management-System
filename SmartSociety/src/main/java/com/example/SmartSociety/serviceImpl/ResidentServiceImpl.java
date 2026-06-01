package com.example.SmartSociety.serviceImpl;


import com.example.SmartSociety.entity.Resident;
import com.example.SmartSociety.repository.ResidentRepository;
import com.example.SmartSociety.service.ResidentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidentServiceImpl implements ResidentService {

    private final ResidentRepository repository;

    public ResidentServiceImpl(ResidentRepository repository) {
        this.repository = repository;
    }

    @Override
    public Resident addResident(Resident resident) {
        return repository.save(resident);
    }

    @Override
    public List<Resident> getAllResidents() {
        return repository.findAll();
    }

    @Override
    public Resident getResidentById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Resident not found"));
    }

    @Override
    public Resident updateResident(Long id, Resident resident) {

        Resident existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Resident not found"));

        existing.setFlatNumber(resident.getFlatNumber());
        existing.setBlockName(resident.getBlockName());
        existing.setPhone(resident.getPhone());

        return repository.save(existing);
    }

    @Override
    public void deleteResident(Long id) {
        repository.deleteById(id);
    }
}
