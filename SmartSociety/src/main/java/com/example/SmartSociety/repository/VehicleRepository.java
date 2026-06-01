package com.example.SmartSociety.repository;



import com.example.SmartSociety.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository
        extends JpaRepository<Vehicle, Long> {

    Vehicle findByVehicleNumber(String vehicleNumber);
}