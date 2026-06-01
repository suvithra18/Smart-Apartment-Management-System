package com.example.SmartSociety.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SmartSociety.entity.Resident;

import java.util.List;

@Repository
public interface ResidentRepository extends JpaRepository<Resident, Long> {

    List<Resident> findByBlockName(String blockName);

    Resident findByFlatNumber(String flatNumber);
}