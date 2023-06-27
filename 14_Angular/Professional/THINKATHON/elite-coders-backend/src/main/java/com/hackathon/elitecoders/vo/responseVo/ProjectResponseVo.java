package com.hackathon.elitecoders.vo.responseVo;

import com.hackathon.elitecoders.constants.TechStack;
import lombok.Data;

import java.util.UUID;

@Data
public class ProjectResponseVo {
    private UUID id;
    private String projectName;
    private String clientName;
    private String projectDescription;
    private String projectDomain;
    private TechStack techStack;
    private String responsibilities;
    private String projectEnvironment;

}
