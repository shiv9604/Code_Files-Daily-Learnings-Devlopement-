package com.hackathon.elitecoders.repository;

import com.hackathon.elitecoders.entities.TechnicalSkills;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TechnicalSkillsRepository extends JpaRepository<TechnicalSkills, UUID> {

}
