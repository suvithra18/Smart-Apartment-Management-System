package com.example.SmartSociety.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.SmartSociety.entity.Reminder;
import com.example.SmartSociety.service.ReminderService;

import java.util.List;

@RestController
@RequestMapping("/api/reminders")
@CrossOrigin("*")
public class ReminderController {

    @Autowired
    private ReminderService service;

    @PostMapping
    public Reminder createReminder(
            @RequestBody Reminder reminder
    ) {

        return service.createReminder(
                reminder
        );
    }

    @GetMapping
    public List<Reminder> getAllReminders() {

        return service.getAllReminders();
    }

    @PutMapping("/{id}")
    public Reminder updateReminder(
            @PathVariable Long id,
            @RequestBody Reminder reminder
    ) {

        return service.updateReminder(
                id,
                reminder
        );
    }

    @DeleteMapping("/{id}")
    public String deleteReminder(
            @PathVariable Long id
    ) {

        service.deleteReminder(id);

        return "Reminder deleted successfully";
    }
}