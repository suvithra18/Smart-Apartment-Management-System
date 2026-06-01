package com.example.SmartSociety.service;

import java.util.List;

import com.example.SmartSociety.entity.Complaint;

public interface ComplaintService {

    Complaint raiseComplaint(Complaint complaint);

    List<Complaint> getAllComplaints();

    Complaint updateStatus(Long id, String status);
    Complaint getComplaintById(Long id);
    void deleteComplaint(Long id);
}
