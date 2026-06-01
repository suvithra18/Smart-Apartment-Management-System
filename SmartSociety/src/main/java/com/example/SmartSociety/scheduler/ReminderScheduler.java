package com.example.SmartSociety.scheduler;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.example.SmartSociety.entity.Reminder;
import com.example.SmartSociety.repository.ReminderRepository;

@Component
public class ReminderScheduler {

    @Autowired
    private ReminderRepository repository;

    @Scheduled(cron = "0 0 9 * * ?")
    public void sendReminder() {

        List<Reminder> reminders =
                repository.findAll();

        LocalDate today = LocalDate.now();

        reminders.forEach(reminder -> {

            if (
                    reminder.getReminderDate()
                            .equals(today)
            ) {

                System.out.println(
                        "🔔 Reminder: " +
                                reminder.getTitle()
                );
            }
        });
    }
}