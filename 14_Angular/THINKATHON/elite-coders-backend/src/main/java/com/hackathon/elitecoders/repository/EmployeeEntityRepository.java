package com.hackathon.elitecoders.repository;

import com.hackathon.elitecoders.entities.Employee;
import com.hackathon.elitecoders.entities.SampleEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
@Repository
public interface EmployeeEntityRepository extends JpaRepository<Employee, UUID> {
    @Query("SELECT e " +
            "FROM Employee e " +
            "WHERE LOWER(e.firstName) LIKE %:search% " +
            "OR LOWER(e.lastName) LIKE %:search% ")
    List<Employee> getAllBySearch(String search, Pageable defaultSortingAndPaging);

    @Query("SELECT COUNT(e) " +
            "FROM Employee e " +
            "WHERE (LOWER(e.firstName) LIKE (%:search%) " +
            "OR LOWER(e.lastName) LIKE (%:search%) ) ")
    Integer getCountBySearch(String search);

    @Query("SELECT e " +
            "FROM Employee e " +
            "WHERE e.firstName LIKE %:firstName% ")
    List<Employee> getAllAndByFilter(String firstName, Pageable defaultSortingAndPaging);

    @Query("SELECT COUNT(e) " +
            "FROM Employee e " +
            "WHERE e.firstName LIKE %:firstName% ")
    Integer getAllAndFilterCount(String firstName);
}
