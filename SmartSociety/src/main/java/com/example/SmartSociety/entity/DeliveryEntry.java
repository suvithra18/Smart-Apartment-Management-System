package com.example.SmartSociety.entity;



import jakarta.persistence.*;

@Entity
public class DeliveryEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String deliveryPersonName;

    private String companyName;

    private String residentName;

    private String otp;
    private String status;



	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public void setId(Long id) {
		this.id = id;
	}

	private boolean verified;

    public DeliveryEntry() {
    }

    public Long getId() {
        return id;
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

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }

    public boolean isVerified() {
        return verified;
    }

    public void setVerified(
            boolean verified
    ) {
        this.verified = verified;
    }
}