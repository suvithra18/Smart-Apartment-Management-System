package com.example.SmartSociety.controller;

import com.example.SmartSociety.entity.Payment;
import com.example.SmartSociety.repository.PaymentRepository;
import com.example.SmartSociety.service.ActivityLogService;
import com.example.SmartSociety.service.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin("*")
public class PaymentController {

    // ================= DEPENDENCIES =================

    @Autowired
    private PaymentRepository repository;

    @Autowired
    private ActivityLogService logService;

    @Autowired
    private EmailService emailService;

    // ================= GET ALL =================

    @GetMapping
    public List<Payment> getAllPayments() {
        return repository.findAll();
    }

    // ================= ADD PAYMENT =================

    @PostMapping
    public Payment addPayment(@RequestBody Payment payment) {

        Payment savedPayment = repository.save(payment);

        // ================= ACTIVITY LOG =================

        logService.saveLog(
                "Admin",
                "Added Payment",
                "Payments"
        );

        // ================= EMAIL NOTIFICATION (NEW) =================

        if (payment.getEmail() != null) {

            emailService.sendEmail(

                    payment.getEmail(),

                    "Payment Successful",

                    "Dear Resident,\n\n" +
                    "Your payment of ₹" + payment.getAmount() +
                    " has been successfully received.\n\n" +
                    "Thank you!"
            );
        }

        return savedPayment;
    }

    // ================= DELETE PAYMENT =================

    @DeleteMapping("/{id}")
    public String deletePayment(@PathVariable Long id) {

        Optional<Payment> payment =
                repository.findById(id);

        if (payment.isPresent()) {

            repository.deleteById(id);

            logService.saveLog(
                    "Admin",
                    "Deleted Payment",
                    "Payments"
            );

            return "Payment deleted successfully";

        } else {

            return "Payment not found";
        }
    }
}