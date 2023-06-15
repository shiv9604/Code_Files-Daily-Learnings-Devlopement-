package com.hackathon.elitecoders.vo.requestVo;

import com.hackathon.elitecoders.constants.TechStack;
import com.hackathon.elitecoders.validation.annotations.SampleEntityRequestValidator;
import lombok.Data;

import javax.persistence.Column;
import java.util.UUID;

@Data
public class ProjectRequestVo {
    private String projectName;
    private String clientName;
    private String projectDescription;
    private String projectDomain;
    private TechStack techStack;
    private String responsibilities;
    private String projectEnvironment;
}
