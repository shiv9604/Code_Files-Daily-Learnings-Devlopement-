package com.hackathon.elitecoders.repository;

import com.hackathon.elitecoders.auth.entities.User;
import com.hackathon.elitecoders.entities.Employee;
import com.hackathon.elitecoders.entities.Project;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ProjectRepository extends JpaRepository<Project, UUID> {

}
