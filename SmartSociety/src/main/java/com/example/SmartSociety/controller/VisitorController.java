package com.example.SmartSociety.controller;

import com.example.SmartSociety.entity.Visitor;
import com.example.SmartSociety.repository.VisitorRepository;
import com.example.SmartSociety.service.ActivityLogService;
import com.example.SmartSociety.service.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/visitors")
@CrossOrigin("*")
public class VisitorController {

    // ================= REPOSITORY =================

    @Autowired
    private VisitorRepository repository;

    // ================= LOG SERVICE =================

    @Autowired
    private ActivityLogService logService;

    // ================= EMAIL SERVICE =================

    @Autowired
    private EmailService emailService;

    // ================= GET ALL =================

    @GetMapping
    public List<Visitor> getAllVisitors() {

        return repository.findAll();
    }

    // ================= ADD VISITOR =================

    @PostMapping
    public Visitor addVisitor(
            @RequestBody Visitor visitor
    ) {

        Visitor savedVisitor =
                repository.save(visitor);

        // SAVE LOG

        logService.saveLog(

                "Security",

                "Added Visitor",

                "Visitors"
        );

        // SEND EMAIL

        emailService.sendEmail(

                visitor.getResidentEmail(),

                "Visitor Entry Request",

                "Dear Resident,\n\n" +

                "A visitor named " +

                visitor.getName() +

                " has requested entry.\n\n" +

                "Purpose: " +

                visitor.getPurpose() +

                "\n\nThank You,\nSmart Society"
        );

        return savedVisitor;
    }

    // ================= APPROVE VISITOR =================

    @PutMapping("/approve/{id}")
    public Visitor approveVisitor(
            @PathVariable Long id
    ) {

        Visitor visitor =
                repository.findById(id).orElse(null);

        if (visitor == null) {

            return null;
        }

        visitor.setStatus("Approved");

        Visitor updated =
                repository.save(visitor);

        // SAVE LOG

        logService.saveLog(

                "Security",

                "Approved Visitor",

                "Visitors"
        );

        // SEND EMAIL

        emailService.sendEmail(

                visitor.getResidentEmail(),

                "Visitor Approved",

                "Dear Resident,\n\n" +

                "Your visitor " +

                visitor.getName() +

                " has been approved successfully.\n\n" +

                "Thank You,\nSmart Society"
        );

        return updated;
    }

    // ================= DELETE VISITOR =================

    @DeleteMapping("/{id}")
    public void deleteVisitor(
            @PathVariable Long id
    ) {

        repository.deleteById(id);

        // SAVE LOG

        logService.saveLog(

                "Security",

                "Deleted Visitor",

                "Visitors"
        );
    }
}