package com.example.SmartSociety.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SmartSociety.dto.DashboardDTO;
import com.example.SmartSociety.repository.ComplaintRepository;
import com.example.SmartSociety.repository.PaymentRepository;
import com.example.SmartSociety.repository.ResidentRepository;
import com.example.SmartSociety.repository.VisitorRepository;
@CrossOrigin(origins = "http://localhost:3000")
@RestController

@RequestMapping("/api/dashboard")
public class DashboardController {

	    @Autowired
	    private ResidentRepository residentRepository;

	    @Autowired
	    private ComplaintRepository complaintRepository;

	    @Autowired
	    private VisitorRepository visitorRepository;

	    @Autowired
	    private PaymentRepository paymentRepository;

	    @GetMapping("/summary")
	    public ResponseEntity<DashboardDTO> getSummary() {

	        DashboardDTO dto = new DashboardDTO();

	        dto.setResidents(residentRepository.count());
	        dto.setComplaints(complaintRepository.count());
	        dto.setVisitors(visitorRepository.count());

	        // FIX revenue safely
	        Double revenue = paymentRepository.totalRevenue();
	        dto.setRevenue(revenue != null ? revenue : 0);

	        return ResponseEntity.ok(dto);
	    }
	}