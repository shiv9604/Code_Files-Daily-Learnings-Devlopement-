package com.hackathon.elitecoders.controller.employeeEntity;

import com.hackathon.elitecoders.auth.repository.CustomResponseWithPage;
import com.hackathon.elitecoders.customResponse.CustomResponse;
import com.hackathon.elitecoders.service.EmployeeService;
import com.hackathon.elitecoders.vo.requestVo.employee.EmployeeEntityRequestVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.UUID;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/employee")
@CrossOrigin("*")
public class EmployeeEntityController {
    @Autowired
    EmployeeService employeeService;
    @PostMapping("/create")
    @ResponseStatus(CREATED)
    public CustomResponse<?> addSample(@RequestBody @Valid EmployeeEntityRequestVO employeeEntityRequestVO) {
        return employeeService.createEmployee(employeeEntityRequestVO);
    }

    @PutMapping("/update/{id}")
    @ResponseStatus(OK)
    public CustomResponse<?> updateEmployee(@PathVariable UUID id, @RequestBody @Valid EmployeeEntityRequestVO employeeEntityRequestVO) {
        return employeeService.updateEmployee(id,employeeEntityRequestVO);
    }

    @GetMapping("/getById/{id}")
    @ResponseStatus(OK)
    public CustomResponse<?> getById(@PathVariable UUID id) {
        return employeeService.getEmployeeById(id);
    }

    @GetMapping("/getAllEmployees")
    @ResponseStatus(OK)
    public CustomResponseWithPage<?> getAllEmployees(@RequestParam(required = false) String search,
                                                     @RequestParam(required = false) String firstName,
                                                     @RequestParam(required = false) Integer page,
                                                     @RequestParam(required = false) Integer pageSize) {
        return employeeService.getAllEmployees(page, pageSize, firstName, search);
    }

}
