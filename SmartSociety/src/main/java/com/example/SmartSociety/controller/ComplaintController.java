package com.example.SmartSociety.controller;

import com.example.SmartSociety.entity.Complaint;
import com.example.SmartSociety.repository.ComplaintRepository;
import com.example.SmartSociety.service.ActivityLogService;
import com.example.SmartSociety.service.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/complaints")
@CrossOrigin("*")
public class ComplaintController {

    // ================= REPOSITORY =================

    @Autowired
    private ComplaintRepository repository;

    // ================= LOG SERVICE =================

    @Autowired
    private ActivityLogService logService;

    // ================= EMAIL SERVICE =================

    @Autowired
    private EmailService emailService;

    // ================= GET ALL =================

    @GetMapping
    public List<Complaint> getAllComplaints() {

        return repository.findAll();
    }

    // ================= ADD COMPLAINT =================

    @PostMapping
    public Complaint addComplaint(
            @RequestBody Complaint complaint
    ) {

        Complaint savedComplaint =
                repository.save(complaint);

        // ================= SAVE LOG =================

        logService.saveLog(

                "Resident",

                "Raised Complaint",

                "Complaints"
        );

        // ================= SEND EMAIL =================

        emailService.sendEmail(

                complaint.getEmail(),

                "Complaint Registered Successfully",

                "Dear Resident,\n\n" +

                "Your complaint has been submitted successfully.\n\n" +

                "Complaint Title: " +

                complaint.getTitle() +

                "\n\nStatus: Pending" +

                "\n\nThank You,\nSmart Society Management"
        );

        return savedComplaint;
    }

    // ================= UPDATE =================

    @PutMapping("/{id}")
    public Complaint updateComplaint(
            @PathVariable Long id,
            @RequestBody Complaint updatedComplaint
    ) {

        Complaint complaint =
                repository.findById(id).orElse(null);

        if (complaint == null) {

            return null;
        }

        complaint.setStatus(
                updatedComplaint.getStatus()
        );

        Complaint updated =
                repository.save(complaint);

        // ================= SAVE LOG =================

        logService.saveLog(

                "Admin",

                "Updated Complaint Status",

                "Complaints"
        );

        // ================= SEND EMAIL =================

        emailService.sendEmail(

                complaint.getEmail(),

                "Complaint Status Updated",

                "Dear Resident,\n\n" +

                "Your complaint status has been updated.\n\n" +

                "New Status: " +

                complaint.getStatus() +

                "\n\nThank You,\nSmart Society Management"
        );

        return updated;
    }

    // ================= DELETE =================

    @DeleteMapping("/{id}")
    public void deleteComplaint(
            @PathVariable Long id
    ) {

        repository.deleteById(id);

        // ================= SAVE LOG =================

        logService.saveLog(

                "Admin",

                "Deleted Complaint",

                "Complaints"
        );
    }
}