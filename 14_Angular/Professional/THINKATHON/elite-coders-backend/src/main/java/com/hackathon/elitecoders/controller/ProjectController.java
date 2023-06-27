package com.hackathon.elitecoders.controller;

import com.hackathon.elitecoders.auth.repository.CustomResponseWithPage;
import com.hackathon.elitecoders.auth.repository.UserRepository;
import com.hackathon.elitecoders.customResponse.CustomResponse;
import com.hackathon.elitecoders.entities.Project;
import com.hackathon.elitecoders.repository.ProjectRepository;
import com.hackathon.elitecoders.service.ProjectService;
import com.hackathon.elitecoders.service.ProjectServiceImpl;
import com.hackathon.elitecoders.vo.requestVo.ProjectRequestVo;
import com.hackathon.elitecoders.vo.requestVo.UpdateProjectRequestVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

import static com.hackathon.elitecoders.auth.constants.ApiConstants.*;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@CrossOrigin(maxAge = 3600)
@RestController
public class ProjectController {
    @Autowired
    ProjectService projectService;

    @PostMapping(PROJECT_DETAILS_URL)
    @ResponseStatus(CREATED)
    public CustomResponse<?> addProjectDetails(@RequestBody @Valid ProjectRequestVo projectRequestVo) {
        System.out.println("CHeck>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        System.out.println(projectRequestVo.getProjectEnvironment());
        System.out.println(projectRequestVo.getProjectDomain());
        return projectService.addProjectDetails(projectRequestVo);
    }

    @GetMapping(PROJECT_DETAILS_BY_ID)
    public CustomResponse<?> getProjectDetailsById(@PathVariable("id") UUID id) {
        return projectService.getProjectDetailsById(id);
    }

    @GetMapping(PROJECT_DETAILS_URL + "/all-projects")
    public ResponseEntity<List<Project>> getAllProjectDetails() {
        return projectService.getAllProjects();
    }

    @PutMapping(PROJECT_DETAILS_UPDATE_URL)
    @ResponseStatus(OK)
    public CustomResponse<?> updateProjectDetails(@PathVariable("id") UUID id, @RequestBody UpdateProjectRequestVo projectRequestVo) {
        return projectService.updateProjectDetails(id, projectRequestVo);
    }

    @DeleteMapping(PROJECT_DELETE_BY_ID)
    @ResponseStatus(OK)
    public CustomResponse<?> deleteProjectById(@PathVariable("id") UUID id) {
        return projectService.deleteProjectById(id);
    }


}
