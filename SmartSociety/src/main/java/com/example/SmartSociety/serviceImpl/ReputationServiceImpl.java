package com.example.SmartSociety.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SmartSociety.entity.ReputationScore;
import com.example.SmartSociety.repository.ReputationRepository;
import com.example.SmartSociety.service.ReputationService;

@Service
public class ReputationServiceImpl
        implements ReputationService {

    @Autowired
    private ReputationRepository repository;

    @Override
    public ReputationScore saveScore(
            ReputationScore score
    ) {

        score.calculateScore();

        return repository.save(score);
    }

    @Override
    public List<ReputationScore> getAllScores() {

        return repository.findAll();
    }
}
