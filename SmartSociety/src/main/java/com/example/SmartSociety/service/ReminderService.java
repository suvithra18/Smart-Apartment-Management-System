package com.example.SmartSociety.service;



import java.util.List;

import com.example.SmartSociety.entity.Reminder;

public interface ReminderService {

    Reminder createReminder(
            Reminder reminder
    );

    List<Reminder> getAllReminders();

    Reminder updateReminder(
            Long id,
            Reminder reminder
    );

    void deleteReminder(Long id);
}
