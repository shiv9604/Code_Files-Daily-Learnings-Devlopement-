package com.hackathon.elitecoders.entities;


import com.hackathon.elitecoders.constants.TechStack;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Project implements Serializable {
    @Id
    @GenericGenerator(name = "UUIDGenerator", strategy = "uuid2")
    @GeneratedValue(generator = "UUIDGenerator")
    @Column(name = "id", updatable = false, nullable = false)
    private UUID projectId;

    @Column
    private String projectName;
    @Column
    private String clientName;
    @Column
    String projectDescription;
    @Column
    private String projectDomain;
    @Column
    private TechStack techStack;
    @Column
    private String responsibilities;
    @Column
    private String projectEnvironment;
    @Column
    private LocalDateTime createdDate;
    @Column
    private LocalDateTime updatedDate;

}
