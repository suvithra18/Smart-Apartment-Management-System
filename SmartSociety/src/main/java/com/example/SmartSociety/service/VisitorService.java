package com.example.SmartSociety.service;



import java.util.List;

import com.example.SmartSociety.entity.Visitor;

public interface VisitorService {

    Visitor addVisitor(Visitor visitor);

    List<Visitor> getAllVisitors();

    List<Visitor> getVisitorsByResident(Long residentId);

    Visitor generateOtp(Long visitorId);

    boolean verifyOtp(Long visitorId, String otp);
    void deleteVisitor(Long id);
}
