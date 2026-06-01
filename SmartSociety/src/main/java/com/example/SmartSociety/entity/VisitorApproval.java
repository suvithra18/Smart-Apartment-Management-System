package com.example.SmartSociety.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class VisitorApproval {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String visitorName;

    private String residentName;

    private String purpose;

    private String otp;

    private boolean approved;

    public VisitorApproval() {
    }

    public Long getId() {
        return id;
    }

    public String getVisitorName() {
        return visitorName;
    }

    public void setVisitorName(
            String visitorName
    ) {
        this.visitorName = visitorName;
    }

    public String getResidentName() {
        return residentName;
    }

    public void setResidentName(
            String residentName
    ) {
        this.residentName = residentName;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(
            String purpose
    ) {
        this.purpose = purpose;
    }

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }

    public boolean isApproved() {
        return approved;
    }

    public void setApproved(
            boolean approved
    ) {
        this.approved = approved;
    }
}
