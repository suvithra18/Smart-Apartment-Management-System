package com.example.SmartSociety.serviceImpl;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SmartSociety.dto.PredictionResponse;
import com.example.SmartSociety.entity.MaintenanceRecord;
import com.example.SmartSociety.repository.MaintenanceRepository;
import com.example.SmartSociety.service.MaintenanceService;

import java.util.List;

@Service
public class MaintenanceServiceImpl
        implements MaintenanceService {

    @Autowired
    private MaintenanceRepository repository;

    
    public MaintenanceRecord addRecord(
            MaintenanceRecord record
    ) {

        return repository.save(record);
    }

   
    public List<MaintenanceRecord> getAllRecords() {

        return repository.findAll();
    }

   
    public PredictionResponse predictRisk(
            Long id
    ) {

        MaintenanceRecord record =
                repository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Record not found"
                                ));

        String risk;

        String recommendation;

        // 🤖 AI LOGIC

        if (
                record.getComplaintCount() > 5 ||
                record.getUsageHours() > 1000
        ) {

            risk = "HIGH";

            recommendation =
                    "Immediate maintenance required";

        } else if (
                record.getComplaintCount() >= 3
        ) {

            risk = "MEDIUM";

            recommendation =
                    "Schedule maintenance soon";

        } else {

            risk = "LOW";

            recommendation =
                    "System operating normally";
        }

        return new PredictionResponse(
                record.getEquipmentName(),
                risk,
                recommendation
        );
    }
    @Override
    public void delete(Long id) {

        repository.deleteById(id);
    }
}
