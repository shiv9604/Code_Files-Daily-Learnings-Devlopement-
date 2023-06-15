package com.hackathon.elitecoders.service;

import com.hackathon.elitecoders.auth.repository.CustomResponseWithPage;
import com.hackathon.elitecoders.customResponse.CustomResponse;
import com.hackathon.elitecoders.entities.Project;
import com.hackathon.elitecoders.vo.requestVo.ProjectRequestVo;
import com.hackathon.elitecoders.vo.requestVo.UpdateProjectRequestVo;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public interface ProjectService {

    CustomResponse<?> addProjectDetails(ProjectRequestVo projectRequestVo);

    ResponseEntity<List<Project>> getAllProjects();

    CustomResponse<?> updateProjectDetails(UUID id, UpdateProjectRequestVo projectRequestVo);

    CustomResponse<?> getProjectDetailsById(UUID id);

    CustomResponse<?> deleteProjectById(UUID id);
}
