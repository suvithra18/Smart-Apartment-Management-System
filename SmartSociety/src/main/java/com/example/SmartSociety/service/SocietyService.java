package com.example.SmartSociety.service;


import java.util.List;
import com.example.SmartSociety.entity.Society;

public interface SocietyService {

    Society createSociety(Society society);

    List<Society> getAllSocieties();

    Society updateSociety(Long id, Society society);

    void deleteSociety(Long id);
}