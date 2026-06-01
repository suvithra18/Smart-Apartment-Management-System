package com.example.SmartSociety.serviceImpl;


import com.example.SmartSociety.dto.AnalyticsDTO;
import com.example.SmartSociety.repository.*;
import com.example.SmartSociety.service.AnalyticsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnalyticsServiceImpl
        implements AnalyticsService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private ComplaintRepository complaintRepository;

    @Autowired
    private VisitorRepository visitorRepository;

    @Autowired
    private EmergencyAlertRepository emergencyRepository;

    @Autowired
    private ParkingSlotRepository parkingRepository;

    @Override
    public AnalyticsDTO getDashboardAnalytics() {

        double totalRevenue =
                paymentRepository.findAll()
                        .stream()
                        .mapToDouble(
                                p -> p.getAmount()
                        )
                        .sum();

        long totalComplaints =
                complaintRepository.count();

        long visitorCount =
                visitorRepository.count();

        long emergencyAlerts =
                emergencyRepository.count();

        long occupiedSlots =
                parkingRepository.findAll()
                        .stream()
                        .filter(slot ->
                                slot.isOccupied())
                        .count();

        long pendingPayments =
                paymentRepository.findAll()
                        .stream()
                        .filter(payment ->
                                payment.getStatus()
                                        .equalsIgnoreCase(
                                                "PENDING"
                                        ))
                        .count();

        return new AnalyticsDTO(
                totalRevenue,
                totalComplaints,
                pendingPayments,
                visitorCount,
                emergencyAlerts,
                occupiedSlots
        );
    }
}