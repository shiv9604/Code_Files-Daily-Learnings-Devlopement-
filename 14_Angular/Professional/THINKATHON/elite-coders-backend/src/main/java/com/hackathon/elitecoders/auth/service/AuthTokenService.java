package com.hackathon.elitecoders.auth.service;

import com.hackathon.elitecoders.auth.dto.UserDTO;
import com.hackathon.elitecoders.customResponse.CustomResponse;
import com.hackathon.elitecoders.vo.requestvo.RefreshTokenRequest;
import com.hackathon.elitecoders.vo.requestvo.UserLoginRequest;
import com.hackathon.elitecoders.vo.requestvo.UserRegisterRequest;
import org.springframework.stereotype.Service;

@Service
public interface AuthTokenService {

    void registerSuperAdmin(UserDTO userDTO);

    CustomResponse<?> login(String userType, UserLoginRequest userLoginRequest);

    CustomResponse<?> refreshToken(String userType, RefreshTokenRequest loginUser);

    CustomResponse<?> registerUser(String userType, UserRegisterRequest userRegisterRequest);

    CustomResponse<String> resetPasswordViaOTP(Object resetPasswordCred);

}
