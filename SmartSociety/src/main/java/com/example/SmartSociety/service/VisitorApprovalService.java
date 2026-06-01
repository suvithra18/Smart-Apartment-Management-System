package com.example.SmartSociety.service;

import java.util.List;

import com.example.SmartSociety.entity.VisitorApproval;

public interface VisitorApprovalService {

    VisitorApproval createApproval(
            VisitorApproval approval
    );

    String verifyOtp(
            Long id,
            String otp
    );

    List<VisitorApproval> getAllVisitors();
}
