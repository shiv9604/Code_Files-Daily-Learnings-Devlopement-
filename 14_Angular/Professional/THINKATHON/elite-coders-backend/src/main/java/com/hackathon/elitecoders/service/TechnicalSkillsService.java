package com.hackathon.elitecoders.service;

import com.hackathon.elitecoders.customResponse.CustomResponse;
import com.hackathon.elitecoders.vo.requestVo.TechnicalSkillsVo;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public interface TechnicalSkillsService {
    CustomResponse<?> createTechnicalSKills(TechnicalSkillsVo technicalSkillsVo);


    CustomResponse<?> updateTechnicalSkills(UUID tecchnicalSkillsId, TechnicalSkillsVo technicalSkillsVo);

    CustomResponse<?> getTechnicalSkills(UUID technicalSkillsId);

    CustomResponse<?> getTechnicalSkillsList();

    CustomResponse<?> deleteTechnicalSkills(UUID technicalSkillsID);
}
