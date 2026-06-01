package com.example.SmartSociety.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.SmartSociety.dto.AnalyticsDTO;
import com.example.SmartSociety.service.AnalyticsService;

@RestController
@RequestMapping("/api/analytics")
@CrossOrigin("*")
public class AnalyticsController {

    @Autowired
    private AnalyticsService service;

    @GetMapping
    public AnalyticsDTO getAnalytics() {

        return service.getDashboardAnalytics();
    }
}
