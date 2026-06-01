package com.example.SmartSociety.entity;



import jakarta.persistence.*;

@Entity
public class MaintenanceRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String equipmentName;

    private int complaintCount;

    private int usageHours;

    private String lastMaintenanceDate;

    public MaintenanceRecord() {
    }

    public Long getId() {
        return id;
    }

    public String getEquipmentName() {
        return equipmentName;
    }

    public void setEquipmentName(
            String equipmentName
    ) {
        this.equipmentName = equipmentName;
    }

    public int getComplaintCount() {
        return complaintCount;
    }

    public void setComplaintCount(
            int complaintCount
    ) {
        this.complaintCount = complaintCount;
    }

    public int getUsageHours() {
        return usageHours;
    }

    public void setUsageHours(int usageHours) {
        this.usageHours = usageHours;
    }

    public String getLastMaintenanceDate() {
        return lastMaintenanceDate;
    }

    public void setLastMaintenanceDate(
            String lastMaintenanceDate
    ) {
        this.lastMaintenanceDate =
                lastMaintenanceDate;
    }
}