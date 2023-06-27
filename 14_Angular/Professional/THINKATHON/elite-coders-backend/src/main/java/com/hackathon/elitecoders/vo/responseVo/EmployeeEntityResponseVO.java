package com.hackathon.elitecoders.vo.responseVo;

import lombok.Data;

import java.util.UUID;
@Data
public class EmployeeEntityResponseVO {
    private UUID id;
    private String firstName;
    private String lastName;
    private String email;
    private String gender;
    private String contact;
}
