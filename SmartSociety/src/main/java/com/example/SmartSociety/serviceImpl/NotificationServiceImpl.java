package com.example.SmartSociety.serviceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import com.example.SmartSociety.entity.Notification;
import com.example.SmartSociety.repository.NotificationRepository;
import com.example.SmartSociety.service.NotificationService;

import java.util.List;

@Service
public class NotificationServiceImpl
        implements NotificationService {

    @Autowired
    private NotificationRepository repository;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    public Notification createNotification(
            Notification notification
    ) {

        Notification saved =
                repository.save(notification);

        // 🔥 REAL-TIME PUSH
        messagingTemplate.convertAndSend(
                "/topic/notifications",
                saved
        );

        return saved;
    }

    public List<Notification> getAllNotifications() {

        return repository.findAll();
    }
    @Override
    public void delete(Long id) {

        repository.deleteById(id);
    }
}