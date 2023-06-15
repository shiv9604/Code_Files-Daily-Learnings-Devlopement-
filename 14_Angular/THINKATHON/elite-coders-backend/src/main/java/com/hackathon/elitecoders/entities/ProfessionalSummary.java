package com.hackathon.elitecoders.entities;


import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;

@Entity
@Data
@Table(name="professional_summary")
public class ProfessionalSummary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @Column(name = "professional_summary", nullable = false)
    @NotBlank(message = "Professional Summary is Mandatory")
    private String professionalSummary;

    @Column(name ="year_of_experience")
    private Integer yearOfExperience;

    @Column(name="profile_type")
    private String profileType;

    @Column(name="created_date")
    @CreationTimestamp
    private Timestamp createdDate;

    @Column(name="updated_date")
    @UpdateTimestamp
    private Timestamp updatedDate;


}
