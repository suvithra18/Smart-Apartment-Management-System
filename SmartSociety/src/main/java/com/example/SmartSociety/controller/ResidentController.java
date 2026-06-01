package com.example.SmartSociety.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.SmartSociety.entity.Resident;
import com.example.SmartSociety.repository.ResidentRepository;
import com.example.SmartSociety.service.ActivityLogService;

import java.util.List;

@RestController
@RequestMapping("/api/residents")
@CrossOrigin("*")
public class ResidentController {

    private final ResidentRepository repository;
    @Autowired
    private ActivityLogService logService;

    // CONSTRUCTOR
    public ResidentController(ResidentRepository repository) {
        this.repository = repository;
    }

    // ADD
    @PostMapping
    public Resident addResident(@RequestBody Resident resident) {
    	logService.saveLog(
    		    "Admin",
    		    "Added Resident",
    		    "Residents"
    		);
        return repository.save(resident);
        
    }

    // GET ALL
    @GetMapping
    public List<Resident> getAllResidents() {
        return repository.findAll();
    }

    // GET BY ID
    @GetMapping("/{id}")
    public Resident getById(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Resident not found"));
    }

    // UPDATE
    @PutMapping("/{id}")
    public Resident updateResident(
            @PathVariable Long id,
            @RequestBody Resident updatedResident
    ) {

        Resident resident = repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Resident not found"));

        resident.setFlatNumber(updatedResident.getFlatNumber());
        resident.setBlockName(updatedResident.getBlockName());
        resident.setPhone(updatedResident.getPhone());

        return repository.save(resident);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void deleteResident(@PathVariable Long id) {
        repository.deleteById(id);
        logService.saveLog(
        	    "Admin",
        	    "Deleted Resident",
        	    "Residents"
        	);
    }
}