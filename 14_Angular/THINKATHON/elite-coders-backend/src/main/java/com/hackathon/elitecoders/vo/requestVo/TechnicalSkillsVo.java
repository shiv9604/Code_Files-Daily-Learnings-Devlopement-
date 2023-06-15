package com.hackathon.elitecoders.vo.requestVo;

import lombok.Data;

import javax.persistence.Column;
import java.util.UUID;

@Data
public class TechnicalSkillsVo {

    private UUID technicalSkillsId;

    private String languages;

    private String technologies;

    private String frameworks;

    private String developmenTools;

    private String orm;

    private String webServices;

    private String databases;

    private String scriptLanguages;
}
