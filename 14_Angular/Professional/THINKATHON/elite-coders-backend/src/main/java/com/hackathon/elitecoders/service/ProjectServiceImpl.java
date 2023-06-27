package com.hackathon.elitecoders.service;

import com.hackathon.elitecoders.auth.constants.ResponseSuccess;
import com.hackathon.elitecoders.customResponse.CustomResponse;
import com.hackathon.elitecoders.entities.Project;
import com.hackathon.elitecoders.exception.CustomServiceValidationException;
import com.hackathon.elitecoders.mapper.ProjectMapper;
import com.hackathon.elitecoders.repository.ProjectRepository;
import com.hackathon.elitecoders.vo.requestVo.ProjectRequestVo;
import com.hackathon.elitecoders.vo.requestVo.UpdateProjectRequestVo;
import com.hackathon.elitecoders.vo.responseVo.ProjectResponseVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

import static com.hackathon.elitecoders.auth.constants.ResponseErrors.*;
import static com.hackathon.elitecoders.auth.constants.ResponseSuccess.*;
import static org.springframework.http.HttpStatus.OK;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    ProjectMapper projectMapper;

    @Override
    public CustomResponse<?> addProjectDetails(ProjectRequestVo projectRequestVo) {
        System.out.println("Inside Project service IMPL");
        Project project = projectMapper.mapRequestVoToProjectDetails(projectRequestVo);
        System.out.println("After Mapper");
        projectRepository.save(project);
        return new CustomResponse<>(OK, "Project Info Inserted");
    }

    @Override
    public CustomResponse<?> updateProjectDetails(UUID id, UpdateProjectRequestVo updateProjectRequestVo) {

        String projectName = updateProjectRequestVo.getProjectName();
        Boolean prjNameExistFlag = false;
        List<Project> projectInfoList = projectRepository.findAll();

        for (Project projectDetails : projectInfoList) {
            String prjName = projectDetails.getProjectName();
            if (prjName.equalsIgnoreCase(projectName)) {
                prjNameExistFlag = true;
            } else prjNameExistFlag = false;
        }

        if (prjNameExistFlag) {
            return new CustomResponse<>(OK, PROJECT_NAME_EXIST);
        }
        Project projectDetails = projectRepository.getById(id);
        if (projectDetails == null) {
            throw new CustomServiceValidationException(PROJECT_ENTITY_NOT_FOUND);
        }
        projectDetails = projectMapper.mapProjectFromUpdateRequest(updateProjectRequestVo, projectDetails);
        projectRepository.save(projectDetails);
        return new CustomResponse<>(OK, PROJECT_DETAILS_UPDATED);
    }

    @Override
    public ResponseEntity<List<Project>> getAllProjects() {
        List<Project> projectInfoList;
        projectInfoList = projectRepository.findAll();
        return ResponseEntity.ok().body(projectInfoList);
    }

    @Override
    public CustomResponse<?> getProjectDetailsById(UUID id) {
        Project projectInfo = projectRepository.findById(id).get();
        if (projectInfo == null) {
            return new CustomResponse<>(OK, PROJECT_ENTITY_NOT_FOUND);
        }
        ProjectResponseVo responseVo = projectMapper.mapResponseFromDbProject(projectInfo);
        return new CustomResponse<>(OK, responseVo, ResponseSuccess.PROJECT_DETAILS_FOUND);
    }

    @Override
    public CustomResponse<?> deleteProjectById(UUID id) {
        projectRepository.deleteById(id);
        return new CustomResponse<>(OK, PROJECT_DELETED);
    }

}
