package com.hackathon.elitecoders.service.impl;

import com.hackathon.elitecoders.customResponse.CustomResponse;
import com.hackathon.elitecoders.entities.TechnicalSkills;
import com.hackathon.elitecoders.mapper.TechnicalSkillsMapper;
import com.hackathon.elitecoders.repository.TechnicalSkillsRepository;
import com.hackathon.elitecoders.service.TechnicalSkillsService;
import com.hackathon.elitecoders.vo.requestVo.TechnicalSkillsVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TechnicalSkillsServiceImpl implements TechnicalSkillsService {
    @Autowired
    TechnicalSkillsRepository technicalSkillsRepository;

    @Autowired
    TechnicalSkillsMapper technicalSkillsMapper;


    @Override
    public CustomResponse<?> createTechnicalSKills(TechnicalSkillsVo technicalSkillsVo) {
        TechnicalSkills technicalSkills = null;
        if (technicalSkillsVo != null) {
            technicalSkills = technicalSkillsMapper.mapRequestVoToTechnicalSkills(technicalSkillsVo);
            technicalSkillsRepository.save(technicalSkills);
        }
        return new CustomResponse<>(HttpStatus.OK, "Technical Skills inserted ..!");
    }

    @Override
    public CustomResponse<?> updateTechnicalSkills(UUID technicalSkillsId, TechnicalSkillsVo technicalSkillsVo) {
        TechnicalSkills technicalSkillsEntity = null;
        TechnicalSkills technicalSkills = technicalSkillsRepository.findById(technicalSkillsId).get();

        if (technicalSkills != null && technicalSkillsVo != null) {
            technicalSkillsEntity = technicalSkillsMapper.mapRequestVoToTechnicalSkills(technicalSkills, technicalSkillsVo);
            technicalSkillsRepository.save(technicalSkillsEntity);
        }
        TechnicalSkills result = technicalSkillsRepository.findById(technicalSkillsId).get();
        return new CustomResponse<>(HttpStatus.OK, result, "Record updated");
    }

    @Override
    public CustomResponse<?> getTechnicalSkills(UUID technicalSkillsId) {

        Optional<TechnicalSkills> technicalSkills = technicalSkillsRepository.findById(technicalSkillsId);
        CustomResponse<Optional<TechnicalSkills>> response = new CustomResponse<>(HttpStatus.OK, technicalSkills, null);
        return response;
    }

    @Override
    public CustomResponse<?> getTechnicalSkillsList() {
        List<TechnicalSkills> technicalSkills = technicalSkillsRepository.findAll();
        CustomResponse customResponse = new CustomResponse<>();
        customResponse.setData(technicalSkills);
        return customResponse;
    }

    @Override
    public CustomResponse<?> deleteTechnicalSkills(UUID technicalSkillsID) {
        if (technicalSkillsID != null) {
            technicalSkillsRepository.deleteById(technicalSkillsID);
            return new CustomResponse<>(HttpStatus.OK, "Deleted successfully..!");
        }
        return new CustomResponse<>(null, "Fialed to delete");
    }
}
