package com.hackathon.elitecoders.mapper;

import com.hackathon.elitecoders.entities.Employee;
import com.hackathon.elitecoders.entities.SampleEntity;
import com.hackathon.elitecoders.vo.requestVo.employee.EmployeeEntityRequestVO;
import com.hackathon.elitecoders.vo.responseVo.EmployeeEntityResponseVO;
import com.hackathon.elitecoders.vo.responseVo.SampleEntityResponseVo;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static java.time.ZoneOffset.UTC;

@Component
public class EmployeeEntityMapper {

    public Employee mapEmployeeEntityFromRequest(EmployeeEntityRequestVO requestVo) {
        Employee employee = new Employee();
        LocalDateTime localDateTime = LocalDateTime.now(UTC);
        employee.setFirstName(requestVo.getFirstName());
        employee.setLastName(requestVo.getLastName());
        employee.setEmail(requestVo.getEmail());
        employee.setDob(requestVo.getDob());
        employee.setGender(requestVo.getGender());
        employee.setContact(requestVo.getContact());
        employee.setCreatedDate(localDateTime);
        employee.setUpdatedDate(localDateTime);
        return employee;
    }

    public Employee mapUpdateEmployeeEntityFromRequest(Employee employee,EmployeeEntityRequestVO requestVo){
        LocalDateTime localDateTime = LocalDateTime.now(UTC);
        if(requestVo.getFirstName()!= null){
            employee.setFirstName(requestVo.getFirstName());
        }
        if(requestVo.getLastName() != null){
            employee.setLastName(requestVo.getLastName());
        }
        if(requestVo.getEmail() != null){
            employee.setEmail(requestVo.getEmail());
        }
        if(requestVo.getDob() != null){
            employee.setDob(requestVo.getDob());
        }
        if(requestVo.getGender()!= null){
            employee.setGender(requestVo.getGender());
        }
        if(requestVo.getContact()!= null){
            employee.setContact(requestVo.getContact());
        }

        employee.setUpdatedDate(localDateTime);
        return employee;
    }

    public EmployeeEntityResponseVO mapResponseFromDbEmployee(Employee employee) {
        EmployeeEntityResponseVO response = new EmployeeEntityResponseVO();
        response.setId(employee.getId());
        response.setFirstName(employee.getFirstName());
        response.setLastName(employee.getLastName());
        response.setEmail(employee.getEmail());
        response.setContact(employee.getContact());
        response.setGender(employee.getGender());
        return response;
    }

    public List<EmployeeEntityResponseVO> mapResponseListFromEmployeeEntity(List<Employee> dbResponse) {

        List<EmployeeEntityResponseVO> responseVoList = new ArrayList<>();
        dbResponse.forEach(db ->{
            EmployeeEntityResponseVO response = new EmployeeEntityResponseVO();
            response.setLastName(db.getLastName());
            response.setFirstName(db.getFirstName());
            response.setId(db.getId());
            response.setGender(db.getGender());
            response.setContact(db.getContact());
            response.setEmail(db.getEmail());
            responseVoList.add(response);
        });

        return responseVoList;
    }

}
