package com.example.SmartSociety.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.SmartSociety.entity.VisitorApproval;
import com.example.SmartSociety.service.VisitorApprovalService;

@RestController
@RequestMapping("/api/visitor-approval")
@CrossOrigin("*")
public class VisitorApprovalController {

    @Autowired
    private VisitorApprovalService service;

    @PostMapping
    public VisitorApproval createApproval(
            @RequestBody VisitorApproval approval
    ) {

        return service.createApproval(approval);
    }

    @PostMapping("/verify/{id}")
    public String verifyOtp(
            @PathVariable Long id,
            @RequestParam String otp
    ) {

        return service.verifyOtp(id, otp);
    }

    @GetMapping
    public List<VisitorApproval> getAllVisitors() {

        return service.getAllVisitors();
    }
}
