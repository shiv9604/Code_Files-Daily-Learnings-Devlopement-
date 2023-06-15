package com.hackathon.elitecoders.controller;

import com.hackathon.elitecoders.auth.constants.ApiConstants;
import com.hackathon.elitecoders.customResponse.CustomResponse;
import com.hackathon.elitecoders.service.TechnicalSkillsService;
import com.hackathon.elitecoders.vo.requestVo.TechnicalSkillsVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;

import static com.hackathon.elitecoders.auth.constants.ApiConstants.DELETE_TECHNICALSKILL;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping(ApiConstants.URL_TECHNICAL_SKILLS)
@CrossOrigin("*")
public class TechnicalSkillsController {

    @Autowired
    TechnicalSkillsService technicalSkillsService;

    @PostMapping(ApiConstants.CREATE)
    @ResponseStatus(OK)
    public CustomResponse<?> create(@RequestBody @Valid TechnicalSkillsVo technicalSkillsVo) {
        System.out.println("Testing Technical Skills");
        technicalSkillsService.createTechnicalSKills(technicalSkillsVo);
        return new CustomResponse<>(OK, "Technical Skills Inserted");
    }

    @GetMapping(ApiConstants.GET_TECHNICALSKILLS_BY_ID)
    @ResponseStatus(OK)
    public CustomResponse<?> get(@PathVariable("technicalSkillId") UUID technicalSkillId) {
        return new CustomResponse<>(OK, technicalSkillsService.getTechnicalSkills(technicalSkillId), null);
    }

    @GetMapping(ApiConstants.GET)
    @ResponseStatus(OK)
    public CustomResponse<?> getAll() {
        return new CustomResponse<>(OK, technicalSkillsService.getTechnicalSkillsList(), null);
    }

    @PutMapping(ApiConstants.UPDATE_TECHNICALSKILLS)
    @ResponseStatus(OK)
    public CustomResponse<?> update(@PathVariable("technicallSkillId") UUID technicallSkillId, @RequestBody @Valid TechnicalSkillsVo technicalSkillsVo) {
        return new CustomResponse<>(OK, technicalSkillsService.updateTechnicalSkills(technicallSkillId, technicalSkillsVo), null);
    }

    @DeleteMapping(DELETE_TECHNICALSKILL)
    @ResponseStatus(OK)
    public CustomResponse<?> delete(@PathVariable("technicalSkillId") UUID technicalSkillId) {
        technicalSkillsService.deleteTechnicalSkills(technicalSkillId);
        return new CustomResponse<>(OK, null);
    }

}
