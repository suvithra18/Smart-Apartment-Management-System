package com.example.SmartSociety.service;



import java.util.List;

import com.example.SmartSociety.entity.Notification;

public interface NotificationService {

    Notification createNotification(Notification notification);

    List<Notification> getAllNotifications();
    void delete(Long id);
}
