package com.example.SmartSociety.serviceImpl;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SmartSociety.entity.Reminder;
import com.example.SmartSociety.repository.ReminderRepository;
import com.example.SmartSociety.service.ReminderService;

import java.util.List;

@Service
public class ReminderServiceImpl
        implements ReminderService {

    @Autowired
    private ReminderRepository repository;

    @Override
    public Reminder createReminder(
            Reminder reminder
    ) {

        return repository.save(reminder);
    }

    @Override
    public List<Reminder> getAllReminders() {

        return repository.findAll();
    }

    @Override
    public Reminder updateReminder(
            Long id,
            Reminder reminder
    ) {

        Reminder existingReminder =
                repository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Reminder not found"
                                ));

        existingReminder.setTitle(
                reminder.getTitle()
        );

        existingReminder.setMessage(
                reminder.getMessage()
        );

        existingReminder.setReminderDate(
                reminder.getReminderDate()
        );

        existingReminder.setCompleted(
                reminder.isCompleted()
        );

        return repository.save(
                existingReminder
        );
    }

    @Override
    public void deleteReminder(Long id) {

        repository.deleteById(id);
    }
}