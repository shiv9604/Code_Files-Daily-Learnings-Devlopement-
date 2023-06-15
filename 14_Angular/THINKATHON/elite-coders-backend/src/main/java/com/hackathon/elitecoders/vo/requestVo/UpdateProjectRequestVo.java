package com.hackathon.elitecoders.vo.requestVo;

import com.hackathon.elitecoders.constants.TechStack;
import com.hackathon.elitecoders.validation.annotations.UpdateSampleEntityRequestValidator;
import lombok.Data;

import java.util.UUID;

@Data
@UpdateSampleEntityRequestValidator
public class UpdateProjectRequestVo {
    private UUID id;
    private String projectName;
    private String clientName;
    private String projectDescription;
    private String projectDomain;
    private TechStack techStack;
    private String responsibilities;
    private String projectEnvironment;

}
