package com.example.SmartSociety.dto;



public class DeliveryDTO {

    private String deliveryPersonName;

    private String companyName;

    private String residentName;

    public DeliveryDTO() {
    }

    public String getDeliveryPersonName() {
        return deliveryPersonName;
    }

    public void setDeliveryPersonName(
            String deliveryPersonName
    ) {
        this.deliveryPersonName =
                deliveryPersonName;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(
            String companyName
    ) {
        this.companyName = companyName;
    }

    public String getResidentName() {
        return residentName;
    }

    public void setResidentName(
            String residentName
    ) {
        this.residentName = residentName;
    }
}
