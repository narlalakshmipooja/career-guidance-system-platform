package com.example.careerguidance.repository;

import com.example.careerguidance.model.Career;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CareerRepository extends JpaRepository<Career, Long> {
}