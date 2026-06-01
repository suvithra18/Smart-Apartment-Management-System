package com.example.SmartSociety.service;

import java.util.List;

import com.example.SmartSociety.entity.ReputationScore;

public interface ReputationService {

    ReputationScore saveScore(
            ReputationScore score
    );

    List<ReputationScore> getAllScores();
}
