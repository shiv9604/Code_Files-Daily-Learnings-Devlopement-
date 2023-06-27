package com.hackathon.elitecoders.service.impl;

import com.hackathon.elitecoders.auth.constants.ResponseSuccess;
import com.hackathon.elitecoders.auth.repository.CustomResponseWithPage;
import com.hackathon.elitecoders.auth.repository.Paging;
import com.hackathon.elitecoders.customResponse.CustomResponse;
import com.hackathon.elitecoders.entities.Employee;
import com.hackathon.elitecoders.entities.SampleEntity;
import com.hackathon.elitecoders.exception.CustomServiceValidationException;
import com.hackathon.elitecoders.mapper.EmployeeEntityMapper;
import com.hackathon.elitecoders.repository.EmployeeEntityRepository;
import com.hackathon.elitecoders.service.EmployeeService;
import com.hackathon.elitecoders.vo.requestVo.employee.EmployeeEntityRequestVO;
import com.hackathon.elitecoders.vo.responseVo.EmployeeEntityResponseVO;
import com.hackathon.elitecoders.vo.responseVo.SampleEntityResponseVo;
import kotlin.OptIn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import static com.hackathon.elitecoders.auth.constants.ResponseErrors.EMPLOYEE_ENTITY_NOT_EXIST;
import static com.hackathon.elitecoders.auth.constants.ResponseSuccess.EMPLOYEE_ENTITY_CREATED;
import static com.hackathon.elitecoders.auth.constants.ResponseSuccess.EMPLOYEE_FOUND;
import static com.hackathon.elitecoders.auth.constants.ResponseSuccess.SAMPLE_ENTITY_UPDATED;
import static com.hackathon.elitecoders.auth.constants.ServiceConstants.*;
import static org.springframework.http.HttpStatus.OK;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    EmployeeEntityMapper employeeEntityMapper;
    @Autowired
    EmployeeEntityRepository employeeEntityRepository;
    @Override
    public CustomResponse<?> createEmployee(EmployeeEntityRequestVO employeeEntityRequestVO){
        Employee employee = employeeEntityMapper.mapEmployeeEntityFromRequest(employeeEntityRequestVO);
        Employee emp = employeeEntityRepository.save(employee);
        Map<String, UUID> response = new HashMap<>();
        response.put(ID, emp.getId());
        return new CustomResponse<>(OK, response, EMPLOYEE_ENTITY_CREATED);
    }
    @Override
    public CustomResponse<?> updateEmployee(UUID id,EmployeeEntityRequestVO employeeEntityRequestVO){
        Employee employee = employeeEntityRepository.findById(id).get();
        if(employee != null ){
            employee = employeeEntityMapper.mapUpdateEmployeeEntityFromRequest(employee,employeeEntityRequestVO);
        }else{
            throw new CustomServiceValidationException(EMPLOYEE_ENTITY_NOT_EXIST);
        }
        Employee emp = employeeEntityRepository.save(employee);
        Map<String, UUID> response = new HashMap<>();
        response.put(ID, emp.getId());
        return new CustomResponse<>(OK, response, SAMPLE_ENTITY_UPDATED);
    }

    @Override
    public CustomResponse<?> getEmployeeById(UUID id) {
        Employee employee = employeeEntityRepository.findById(id).get();
        if (employee == null) {
            throw new CustomServiceValidationException(EMPLOYEE_ENTITY_NOT_EXIST);
        }
        EmployeeEntityResponseVO response = employeeEntityMapper.mapResponseFromDbEmployee(employee);
        return new CustomResponse<>(OK, response, ResponseSuccess.EMPLOYEE_FOUND);
    }

    @Override
    public CustomResponseWithPage<?> getAllEmployees(Integer page, Integer pageSize, String firstName, String search) {

        page = (page == null) ? DEFAULT_PAGE : page;
        pageSize = (pageSize == null) ? DEFAULT_PAGE_SIZE : pageSize;

        Paging currentPage;

        List<Employee> dbResponse;
        List<EmployeeEntityResponseVO> responseVoList;
        Pageable defaultSortingAndPaging = PageRequest.of(page, pageSize);

        if (search != null && !search.isEmpty() && !search.isBlank()){

            search = search.toLowerCase().trim();

            dbResponse = employeeEntityRepository.getAllBySearch(search, defaultSortingAndPaging);
            responseVoList = employeeEntityMapper.mapResponseListFromEmployeeEntity(dbResponse);
            currentPage = new Paging(page, pageSize, employeeEntityRepository.getCountBySearch(search));
            return new CustomResponseWithPage<>(OK, responseVoList,currentPage, ResponseSuccess.EMPLOYEE_FOUND);
        }

        firstName = (firstName == null || firstName.isEmpty() || firstName.isBlank()) ? null : (firstName);

        dbResponse = employeeEntityRepository.getAllAndByFilter(firstName, defaultSortingAndPaging);
        responseVoList = employeeEntityMapper.mapResponseListFromEmployeeEntity(dbResponse);
        currentPage = new Paging(page, pageSize, employeeEntityRepository.getAllAndFilterCount(firstName));

        return new CustomResponseWithPage<>(OK, responseVoList, currentPage, ResponseSuccess.EMPLOYEE_FOUND);
    }

}
