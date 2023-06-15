package com.hackathon.elitecoders.vo.requestVo;

import com.hackathon.elitecoders.validation.annotations.SampleEntityRequestValidator;
import lombok.Data;

@Data
@SampleEntityRequestValidator
public class SampleEntityRequestVo {

    private String firstName;

    private String lastName;

    private String userName;

    private String phoneNumber;

    private String email;


}
