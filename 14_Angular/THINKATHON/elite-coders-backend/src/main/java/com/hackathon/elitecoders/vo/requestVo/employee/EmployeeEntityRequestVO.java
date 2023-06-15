package com.hackathon.elitecoders.vo.requestVo.employee;

import lombok.Data;

import javax.persistence.Column;
@Data
public class EmployeeEntityRequestVO {
    private String firstName;
    private String lastName;
    private String email;
    private String gender;
    private String contact;
    private String dob;
}
