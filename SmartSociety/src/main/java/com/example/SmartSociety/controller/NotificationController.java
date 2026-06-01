package com.example.SmartSociety.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.SmartSociety.entity.Notification;
import com.example.SmartSociety.repository.NotificationRepository;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
@CrossOrigin("*")
public class NotificationController {

    @Autowired
    private NotificationRepository repository;

    // ================= GET ALL =================

    @GetMapping
    public List<Notification> getAllNotifications() {

        return repository.findAll();
    }

    // ================= GET BY ID =================

    @GetMapping("/{id}")
    public Notification getNotificationById(
            @PathVariable Long id
    ) {

        return repository.findById(id).orElse(null);
    }

    // ================= ADD =================

    @PostMapping
    public Notification addNotification(
            @RequestBody Notification notification
    ) {

        return repository.save(notification);
    }

    // ================= UPDATE =================

    @PutMapping("/{id}")
    public Notification updateNotification(
            @PathVariable Long id,
            @RequestBody Notification updatedNotification
    ) {

        Notification notification =
                repository.findById(id).orElse(null);

        if (notification == null) {

            return null;
        }

        notification.setTitle(updatedNotification.getTitle());

        notification.setMessage(updatedNotification.getMessage());

        notification.setType(updatedNotification.getType());

        notification.setStatus(updatedNotification.getStatus());

        return repository.save(notification);
    }

    // ================= DELETE =================

    @DeleteMapping("/{id}")
    public void deleteNotification(
            @PathVariable Long id
    ) {

        repository.deleteById(id);
    }
}