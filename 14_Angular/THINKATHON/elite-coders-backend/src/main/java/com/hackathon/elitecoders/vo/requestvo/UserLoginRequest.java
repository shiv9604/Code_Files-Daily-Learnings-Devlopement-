package com.hackathon.elitecoders.vo.requestvo;

import lombok.Data;


@Data
public class UserLoginRequest {

    private String user; // UserName or Email or PhoneNumber

    private String password;

}
