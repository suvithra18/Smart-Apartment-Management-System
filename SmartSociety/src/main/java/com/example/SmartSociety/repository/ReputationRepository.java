package com.example.SmartSociety.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.SmartSociety.entity.ReputationScore;

@Repository
public interface ReputationRepository extends JpaRepository<ReputationScore,Long> {
	@Query("SELECT SUM(p.amount) FROM Payment p")
	Double totalRevenue();
}
