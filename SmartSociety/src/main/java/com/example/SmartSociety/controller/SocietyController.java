package com.example.SmartSociety.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SmartSociety.entity.Society;
import com.example.SmartSociety.service.SocietyService;

@RestController
@RequestMapping("/api/societies")
@CrossOrigin("*")
public class SocietyController {

    @Autowired
    private SocietyService service;

    @PostMapping
    public Society createSociety(
            @RequestBody Society society
    ) {

        return service.createSociety(society);
    }

    @GetMapping
    public List<Society> getAllSocieties() {

        return service.getAllSocieties();
    }
    @DeleteMapping("/{id}")
    public String deleteSociety(@PathVariable Long id) {

        service.deleteSociety(id);

        return "Society deleted successfully with id: " + id;
    }
}