package com.hackathon.elitecoders.mapper;

import com.hackathon.elitecoders.constants.TechStack;
import com.hackathon.elitecoders.entities.Project;
import com.hackathon.elitecoders.vo.requestVo.ProjectRequestVo;
import com.hackathon.elitecoders.vo.requestVo.UpdateProjectRequestVo;
import com.hackathon.elitecoders.vo.responseVo.ProjectResponseVo;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static java.time.ZoneOffset.UTC;

@Component
public class ProjectMapper {

    public Project mapRequestVoToProjectDetails(ProjectRequestVo projectRequestVo) {

        LocalDateTime localDateTime = LocalDateTime.now(UTC);

        Project project = new Project();
        project.setProjectName(projectRequestVo.getProjectName());
        project.setTechStack(TechStack.valueOf(projectRequestVo.getTechStack().name()));
        project.setResponsibilities(projectRequestVo.getResponsibilities());
        project.setProjectEnvironment(projectRequestVo.getProjectEnvironment());
        project.setClientName(projectRequestVo.getClientName());
        project.setProjectDescription(projectRequestVo.getProjectDescription());
        project.setProjectDomain(projectRequestVo.getProjectDomain());
        project.setCreatedDate(localDateTime);
        project.setUpdatedDate(localDateTime);
        System.out.println("PRINTING PRRRROJECT"+project);
        return project;
    }

    public ProjectResponseVo mapResponseFromDbProject(Project dbProjectInfo) {

        ProjectResponseVo response = new ProjectResponseVo();
        response.setId(dbProjectInfo.getProjectId());
        response.setProjectName(dbProjectInfo.getProjectName());
        response.setProjectDomain(dbProjectInfo.getProjectDomain());
        response.setClientName(dbProjectInfo.getClientName());
        response.setProjectDescription(dbProjectInfo.getProjectDescription());
        response.setTechStack(dbProjectInfo.getTechStack());
        response.setResponsibilities(dbProjectInfo.getResponsibilities());
        response.setProjectEnvironment(dbProjectInfo.getProjectEnvironment());

        return response;
    }

    public Project mapProjectFromUpdateRequest(UpdateProjectRequestVo requestProjectVo, Project dbProject) {

        LocalDateTime localDateTime = LocalDateTime.now(UTC);
        if (requestProjectVo.getProjectName() != null)
            dbProject.setProjectName(requestProjectVo.getProjectName());

        if (requestProjectVo.getClientName() != null)
            dbProject.setClientName(requestProjectVo.getClientName());
        if (requestProjectVo.getProjectDescription() != null)
            dbProject.setProjectDescription(requestProjectVo.getProjectDescription());
        if (requestProjectVo.getProjectDomain() != null)
            dbProject.setProjectDomain(requestProjectVo.getProjectDomain());
        if(requestProjectVo.getTechStack() != null)
                dbProject.setTechStack(requestProjectVo.getTechStack());
        if(requestProjectVo.getResponsibilities() != null)
                dbProject.setResponsibilities(requestProjectVo.getResponsibilities());
        if(requestProjectVo.getProjectEnvironment() != null)
                dbProject.setProjectEnvironment(requestProjectVo.getProjectEnvironment());

        dbProject.setUpdatedDate(localDateTime);
        return dbProject;
    }

}
