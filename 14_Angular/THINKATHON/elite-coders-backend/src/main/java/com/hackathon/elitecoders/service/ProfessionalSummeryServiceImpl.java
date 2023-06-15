package com.hackathon.elitecoders.service;


import com.hackathon.elitecoders.entities.ProfessionalSummary;
import com.hackathon.elitecoders.repository.ProfessionalSummeryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ProfessionalSummeryServiceImpl implements  ProfessionalSummeryService{

  @Autowired
  private ProfessionalSummeryRepository professionalSummeryRepository;

  public List<ProfessionalSummary> findAll(){
      return professionalSummeryRepository.findAll();
  }

  @Override
  public ProfessionalSummary getById(Long id){
      Optional<ProfessionalSummary> professionalSummary = professionalSummeryRepository.findById(id);
      return professionalSummary.get();
  }

  @Override
  public ProfessionalSummary createSummary(ProfessionalSummary professionalSummary) {
      return professionalSummeryRepository.save(professionalSummary);
  }

  @Override
  public ProfessionalSummary updateSummary(Long id,ProfessionalSummary professionalSummary) {
      ProfessionalSummary professional = getById(id);
      professional.setProfessionalSummary(professionalSummary.getProfessionalSummary());
      professional.setProfileType(professionalSummary.getProfileType());
      professional.setYearOfExperience(professionalSummary.getYearOfExperience());
      return professionalSummeryRepository.save(professional);
  }


  @Override
  public Map<String, Boolean> deleteProfessionalSummary(Long professionalSummaryId){
        ProfessionalSummary professionalSummary   = professionalSummeryRepository.findById(professionalSummaryId).get();
        this.professionalSummeryRepository.delete(professionalSummary);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}


