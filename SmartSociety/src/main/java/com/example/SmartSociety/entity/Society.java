package com.example.SmartSociety.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Society {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String societyName;

    private String address;

    private int totalBlocks;

    public Society() {
    }

    public Long getId() {
        return id;
    }

    public String getSocietyName() {
        return societyName;
    }

    public void setSocietyName(
            String societyName
    ) {
        this.societyName = societyName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(
            String address
    ) {
        this.address = address;
    }

    public int getTotalBlocks() {
        return totalBlocks;
    }

    public void setTotalBlocks(
            int totalBlocks
    ) {
        this.totalBlocks = totalBlocks;
    }
}
