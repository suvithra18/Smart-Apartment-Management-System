package com.example.SmartSociety.service;



import java.util.List;

import com.example.SmartSociety.entity.Payment;

public interface PaymentService {

    Payment createPayment(Payment payment);

    List<Payment> getAllPayments();

    List<Payment> getPaymentsByResident(Long residentId);

    Payment updatePaymentStatus(Long paymentId, String status);

    Double getTotalCollectedAmount();
    
    void deletePayment(Long id);
}
