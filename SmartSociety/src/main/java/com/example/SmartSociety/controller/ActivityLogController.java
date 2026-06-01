package com.example.SmartSociety.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SmartSociety.ActivityLog;
import com.example.SmartSociety.repository.ActivityLogRepository;

@RestController
@RequestMapping("/api/logs")
@CrossOrigin("*")
public class ActivityLogController {

    @Autowired
    private ActivityLogRepository repository;

    @GetMapping
    public List<ActivityLog> getLogs() {

        return repository.findAll();
    }
}