package com.example.SmartSociety.dto;


public class PredictionResponse {

    private String equipmentName;

    private String riskLevel;

    private String recommendation;

    public PredictionResponse() {
    }

    public PredictionResponse(
            String equipmentName,
            String riskLevel,
            String recommendation
    ) {

        this.equipmentName = equipmentName;
        this.riskLevel = riskLevel;
        this.recommendation = recommendation;
    }

    public String getEquipmentName() {
        return equipmentName;
    }

    public String getRiskLevel() {
        return riskLevel;
    }

    public String getRecommendation() {
        return recommendation;
    }
}