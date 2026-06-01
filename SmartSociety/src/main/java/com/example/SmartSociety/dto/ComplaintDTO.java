package com.example.SmartSociety.dto;



import lombok.Data;

@Data
public class ComplaintDTO {

    private Long id;

    private String title;
    private String description;

    private String category;   // Water, Electricity, Cleaning
    private String priority;   // LOW, MEDIUM, HIGH

    private String status;     // OPEN, IN_PROGRESS, CLOSED

    private Long residentId;
}
