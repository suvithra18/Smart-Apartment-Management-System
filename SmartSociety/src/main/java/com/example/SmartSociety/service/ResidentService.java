package com.example.SmartSociety.service;


import com.example.SmartSociety.entity.Resident;

import java.util.List;

public interface ResidentService {

    Resident addResident(Resident resident);

    List<Resident> getAllResidents();

    Resident getResidentById(Long id);

    Resident updateResident(Long id, Resident resident);

    void deleteResident(Long id);
}
