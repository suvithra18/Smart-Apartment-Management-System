package com.example.SmartSociety.serviceImpl;



import com.example.SmartSociety.entity.Payment;
import com.example.SmartSociety.repository.PaymentRepository;
import com.example.SmartSociety.service.PaymentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository repository;

    // Constructor Injection
    public PaymentServiceImpl(PaymentRepository repository) {
        this.repository = repository;
    }

    @Override
    public Payment createPayment(Payment payment) {
        return repository.save(payment);
    }

    @Override
    public List<Payment> getAllPayments() {
        return repository.findAll();
    }

    @Override
    public List<Payment> getPaymentsByResident(Long residentId) {
        return repository.findByResidentId(residentId);
    }

    @Override
    public Payment updatePaymentStatus(Long paymentId, String status) {

        Payment payment = repository.findById(paymentId)
                .orElseThrow(() -> new RuntimeException("Payment not found"));

        payment.setStatus(status);

        return repository.save(payment);
    }

    @Override
    public Double getTotalCollectedAmount() {

        List<Payment> payments = repository.findAll();

        return payments.stream()
                .filter(p -> p.getStatus().equalsIgnoreCase("PAID"))
                .mapToDouble(Payment::getAmount)
                .sum();
    }
    
    @Override
    public void deletePayment(Long id) {

        Payment payment = repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Payment not found"));

        repository.delete(payment);
    }
}
