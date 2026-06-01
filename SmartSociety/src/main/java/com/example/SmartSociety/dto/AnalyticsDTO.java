package com.example.SmartSociety.dto;



public class AnalyticsDTO {

    private double totalRevenue;

    private long totalComplaints;

    private long pendingPayments;

    private long visitorCount;

    private long emergencyAlerts;

    private long occupiedParkingSlots;

    public AnalyticsDTO() {
    }

    public AnalyticsDTO(
            double totalRevenue,
            long totalComplaints,
            long pendingPayments,
            long visitorCount,
            long emergencyAlerts,
            long occupiedParkingSlots
    ) {

        this.totalRevenue = totalRevenue;
        this.totalComplaints = totalComplaints;
        this.pendingPayments = pendingPayments;
        this.visitorCount = visitorCount;
        this.emergencyAlerts = emergencyAlerts;
        this.occupiedParkingSlots = occupiedParkingSlots;
    }

    public double getTotalRevenue() {
        return totalRevenue;
    }

    public long getTotalComplaints() {
        return totalComplaints;
    }

    public long getPendingPayments() {
        return pendingPayments;
    }

    public long getVisitorCount() {
        return visitorCount;
    }

    public long getEmergencyAlerts() {
        return emergencyAlerts;
    }

    public long getOccupiedParkingSlots() {
        return occupiedParkingSlots;
    }
}
