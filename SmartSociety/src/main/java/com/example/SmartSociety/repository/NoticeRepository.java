package com.example.SmartSociety.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SmartSociety.entity.Notice;

@Repository
public interface NoticeRepository
        extends JpaRepository<Notice, Long> {
}