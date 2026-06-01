package com.example.SmartSociety.serviceImpl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SmartSociety.entity.Complaint;
import com.example.SmartSociety.repository.ComplaintRepository;
import com.example.SmartSociety.service.ComplaintService;

@Service
public class ComplaintServiceImpl implements ComplaintService {

    @Autowired
    private ComplaintRepository complaintRepository;

    @Override
    public Complaint raiseComplaint(Complaint complaint) {

        return complaintRepository.save(complaint);
    }

    @Override
    public List<Complaint> getAllComplaints() {

        return complaintRepository.findAll();
    }

    @Override
    public Complaint updateStatus(Long id, String status) {

        Complaint complaint =
                complaintRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Complaint not found"));

        complaint.setStatus(status);

        return complaintRepository.save(complaint);
    }

    // ✅ THIS METHOD WAS MISSING
    @Override
    public Complaint getComplaintById(Long id) {

        return complaintRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Complaint not found"));
    }
    @Override
    public void deleteComplaint(Long id) {

        complaintRepository.deleteById(id);
    }
}