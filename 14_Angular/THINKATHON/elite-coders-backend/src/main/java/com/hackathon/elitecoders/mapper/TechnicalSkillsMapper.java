package com.hackathon.elitecoders.mapper;

import com.hackathon.elitecoders.entities.TechnicalSkills;
import com.hackathon.elitecoders.vo.requestVo.TechnicalSkillsVo;
import org.springframework.stereotype.Component;

@Component
public class TechnicalSkillsMapper {
    public TechnicalSkills mapRequestVoToTechnicalSkills(TechnicalSkillsVo technicalSkillsVo) {
        TechnicalSkills technicalSkills = new TechnicalSkills();

        technicalSkills.setTechnicalSkillsId(technicalSkillsVo.getTechnicalSkillsId());
        technicalSkills.setDatabases(technicalSkillsVo.getDatabases());
        technicalSkills.setTechnologies(technicalSkillsVo.getTechnologies());
        technicalSkills.setWebServices(technicalSkillsVo.getWebServices());
        technicalSkills.setScriptLanguages(technicalSkillsVo.getScriptLanguages());
        technicalSkills.setOrm(technicalSkillsVo.getOrm());
        technicalSkills.setDevelopmenTools(technicalSkillsVo.getDevelopmenTools());
        technicalSkills.setLanguages(technicalSkillsVo.getLanguages());
        technicalSkills.setFrameworks(technicalSkillsVo.getFrameworks());
        return technicalSkills;
    }

    public TechnicalSkills mapRequestVoToTechnicalSkills(TechnicalSkills technicalSkills, TechnicalSkillsVo technicalSkillsVo) {
        if (technicalSkillsVo.getTechnicalSkillsId() != null)
            technicalSkills.setTechnicalSkillsId(technicalSkillsVo.getTechnicalSkillsId());
        if (technicalSkillsVo.getDatabases() != null)
            technicalSkills.setDatabases(technicalSkillsVo.getDatabases());
        if (technicalSkillsVo.getTechnologies() != null)
            technicalSkills.setTechnologies(technicalSkillsVo.getTechnologies());
        if (technicalSkillsVo.getWebServices() != null)
            technicalSkills.setWebServices(technicalSkillsVo.getWebServices());
        if (technicalSkillsVo.getScriptLanguages() != null)
            technicalSkills.setScriptLanguages(technicalSkillsVo.getScriptLanguages());
        if (technicalSkillsVo.getOrm() != null)
            technicalSkills.setOrm(technicalSkillsVo.getOrm());
        if (technicalSkillsVo.getDevelopmenTools() != null)
            technicalSkills.setDevelopmenTools(technicalSkillsVo.getDevelopmenTools());
        if (technicalSkillsVo.getLanguages() != null)
            technicalSkills.setLanguages(technicalSkillsVo.getLanguages());
        if (technicalSkillsVo.getFrameworks() != null)
            technicalSkills.setFrameworks(technicalSkillsVo.getFrameworks());
        return technicalSkills;
    }

}
