package com.example.SmartSociety.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ReputationScore {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String residentName;

    private int paymentScore;

    private int complaintScore;

    private int participationScore;

    private int totalScore;

    public ReputationScore() {
    }

    public Long getId() {
        return id;
    }

    public String getResidentName() {
        return residentName;
    }

    public void setResidentName(String residentName) {
        this.residentName = residentName;
    }

    public int getPaymentScore() {
        return paymentScore;
    }

    public void setPaymentScore(int paymentScore) {
        this.paymentScore = paymentScore;
    }

    public int getComplaintScore() {
        return complaintScore;
    }

    public void setComplaintScore(int complaintScore) {
        this.complaintScore = complaintScore;
    }

    public int getParticipationScore() {
        return participationScore;
    }

    public void setParticipationScore(int participationScore) {
        this.participationScore = participationScore;
    }

    public int getTotalScore() {
        return totalScore;
    }

    public void calculateScore() {

        this.totalScore =
                paymentScore +
                complaintScore +
                participationScore;
    }
}
