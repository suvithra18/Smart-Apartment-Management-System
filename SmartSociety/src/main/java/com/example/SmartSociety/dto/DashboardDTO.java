package com.example.SmartSociety.dto;

public class DashboardDTO {

    private long residents;
    private long complaints;
    private long visitors;
    private double revenue;
    public long getResidents() {
		return residents;
	}
	public void setResidents(long residents) {
		this.residents = residents;
	}
	public long getComplaints() {
		return complaints;
	}
	public void setComplaints(long complaints) {
		this.complaints = complaints;
	}
	public long getVisitors() {
		return visitors;
	}
	public void setVisitors(long visitors) {
		this.visitors = visitors;
	}
	public double getRevenue() {
		return revenue;
	}
	public void setRevenue(double revenue) {
		this.revenue = revenue;
	}
	
}