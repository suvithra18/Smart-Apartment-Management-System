package com.example.SmartSociety.serviceImpl;


import org.springframework.stereotype.Service;

import com.example.SmartSociety.entity.Visitor;
import com.example.SmartSociety.repository.VisitorRepository;
import com.example.SmartSociety.service.VisitorService;

import java.util.List;
import java.util.Random;

@Service
public class VisitorServiceImpl implements VisitorService {

    private final VisitorRepository repository;

    // ✅ Manual constructor
    public VisitorServiceImpl(VisitorRepository repository) {
        this.repository = repository;
    }

    @Override
    public Visitor addVisitor(Visitor visitor) {

        return repository.save(visitor);
    }

    @Override
    public List<Visitor> getAllVisitors() {

        return repository.findAll();
    }

    @Override
    public List<Visitor> getVisitorsByResident(Long residentId) {

        return repository.findByResidentId(residentId);
    }

    @Override
    public Visitor generateOtp(Long visitorId) {

        Visitor visitor = repository.findById(visitorId)
                .orElseThrow(() ->
                        new RuntimeException("Visitor not found"));

        String otp =
                String.valueOf(new Random().nextInt(9000) + 1000);

        visitor.setOtp(otp);

        return repository.save(visitor);
    }

    @Override
    public boolean verifyOtp(Long visitorId, String otp) {

        Visitor visitor = repository.findById(visitorId)
                .orElseThrow(() ->
                        new RuntimeException("Visitor not found"));

        return visitor.getOtp().equals(otp);
    }
    
    @Override
    public void deleteVisitor(Long id) {
        repository.deleteById(id);
    }
}