package com.hackathon.elitecoders.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;

@Entity(name = "technical_skills")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TechnicalSkills {
    @Id
    @GenericGenerator(name = "UUIDGenerator", strategy = "uuid2")
    @GeneratedValue(generator = "UUIDGenerator")
    @Column(name = "id", updatable = false, nullable = false)
    private UUID technicalSkillsId;

    @Column
    private String languages;

    @Column
    private String technologies;

    @Column
    private String frameworks;

    @Column
    private String developmenTools;

    @Column
    private String orm;

    @Column
    private String webServices;

    @Column
    private String databases;

    @Column
    private String scriptLanguages;
}
