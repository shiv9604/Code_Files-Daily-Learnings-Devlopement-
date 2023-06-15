package com.hackathon.elitecoders.service;

import com.hackathon.elitecoders.auth.repository.CustomResponseWithPage;
import com.hackathon.elitecoders.customResponse.CustomResponse;
import com.hackathon.elitecoders.vo.requestVo.employee.EmployeeEntityRequestVO;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public interface EmployeeService {
    CustomResponse<?> createEmployee(EmployeeEntityRequestVO employeeEntityRequestVO);

    CustomResponse<?> updateEmployee(UUID id, EmployeeEntityRequestVO employeeEntityRequestVO);

    CustomResponse<?> getEmployeeById(UUID id);

    CustomResponseWithPage<?> getAllEmployees(Integer page, Integer pageSize, String firstName, String search);
}
