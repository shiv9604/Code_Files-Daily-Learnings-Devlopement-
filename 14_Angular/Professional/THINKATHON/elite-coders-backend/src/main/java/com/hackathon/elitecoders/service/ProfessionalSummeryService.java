package com.hackathon.elitecoders.service;

import com.hackathon.elitecoders.entities.ProfessionalSummary;

import java.util.List;
import java.util.Map;

public interface ProfessionalSummeryService {

    public List<ProfessionalSummary> findAll();

    public ProfessionalSummary getById(Long id);

    public ProfessionalSummary createSummary(ProfessionalSummary professionalSummary);

    public ProfessionalSummary updateSummary(Long id,ProfessionalSummary professionalSummary);

    public Map<String, Boolean> deleteProfessionalSummary(Long professionalSummaryId);
}
