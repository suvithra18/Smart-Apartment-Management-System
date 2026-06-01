package com.example.SmartSociety.serviceImpl;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SmartSociety.entity.VisitorApproval;
import com.example.SmartSociety.repository.VisitorApprovalRepository;
import com.example.SmartSociety.service.VisitorApprovalService;

@Service
public class VisitorApprovalServiceImpl
        implements VisitorApprovalService {

    @Autowired
    private VisitorApprovalRepository repository;

    @Override
    public VisitorApproval createApproval(
            VisitorApproval approval
    ) {

        String otp = String.valueOf(
                1000 + new Random().nextInt(9000)
        );

        approval.setOtp(otp);

        approval.setApproved(false);

        return repository.save(approval);
    }

    @Override
    public String verifyOtp(
            Long id,
            String otp
    ) {

        VisitorApproval approval =
                repository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Visitor not found"
                                ));

        if (
                approval.getOtp().equals(otp)
        ) {

            approval.setApproved(true);

            repository.save(approval);

            return "Visitor approved";
        }

        return "Invalid OTP";
    }

    @Override
    public List<VisitorApproval> getAllVisitors() {

        return repository.findAll();
    }
}
