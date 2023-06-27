package com.hackathon.elitecoders.repository;

import com.hackathon.elitecoders.entities.ProfessionalSummary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfessionalSummeryRepository extends JpaRepository<ProfessionalSummary,Long> {

}
