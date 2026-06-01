package com.example.SmartSociety.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.SmartSociety.service.EmailService;

@RestController
@RequestMapping("/api/test")
@CrossOrigin("*")
public class TestEmailController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/send-email")
    public String sendTestEmail() {

        emailService.sendEmail(

                "receiver@gmail.com",

                "Smart Society Test Email",

                "Email Service Working Successfully!"
        );

        return "Email Sent Successfully";
    }
}
