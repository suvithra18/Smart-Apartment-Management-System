package com.example.SmartSociety.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SmartSociety.ActivityLog;
import com.example.SmartSociety.repository.ActivityLogRepository;

@Service
public class ActivityLogService {

    @Autowired
    private ActivityLogRepository repository;

    public void saveLog(
            String username,
            String action,
            String module
    ) {

        ActivityLog log = new ActivityLog();

        log.setUsername(username);

        log.setAction(action);

        log.setModuleName(module);

        log.setCreatedAt(LocalDateTime.now());

        repository.save(log);
    }
}