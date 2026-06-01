package com.example.SmartSociety.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SmartSociety.entity.ReputationScore;
import com.example.SmartSociety.service.ReputationService;

@RestController
@RequestMapping("/api/reputation")
@CrossOrigin("*")
public class ReputationController {

    @Autowired
    private ReputationService service;

    @PostMapping
    public ReputationScore saveScore(
            @RequestBody ReputationScore score
    ) {

        return service.saveScore(score);
    }

    @GetMapping
    public List<ReputationScore> getAllScores() {

        return service.getAllScores();
    }
}
