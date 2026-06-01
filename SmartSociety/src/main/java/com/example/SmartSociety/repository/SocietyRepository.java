package com.example.SmartSociety.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SmartSociety.entity.Society;

@Repository
public interface SocietyRepository
        extends JpaRepository<Society, Long> {
}
