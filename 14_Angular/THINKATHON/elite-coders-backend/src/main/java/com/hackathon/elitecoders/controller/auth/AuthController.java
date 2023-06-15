package com.hackathon.elitecoders.controller.auth;

import com.hackathon.elitecoders.auth.service.AuthTokenService;
import com.hackathon.elitecoders.controller.AbstractController;
import com.hackathon.elitecoders.customResponse.CustomResponse;
import com.hackathon.elitecoders.vo.requestvo.RefreshTokenRequest;
import com.hackathon.elitecoders.vo.requestvo.UserLoginRequest;
import com.hackathon.elitecoders.vo.requestvo.UserRegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static com.hackathon.elitecoders.auth.constants.ApiConstants.*;
import static com.hackathon.elitecoders.auth.constants.ConfigConstants.AUTHORIZATION;
import static com.hackathon.elitecoders.auth.constants.ConfigConstants.BEARER;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping(ROOT_URL_AUTH)
@CrossOrigin(origins = "*")
public class AuthController extends AbstractController {


    @Autowired
    private AuthTokenService authTokenService;


    public String TOKEN_PREFIX = BEARER;

    public static final String HEADER_STRING = AUTHORIZATION;

    @PostMapping(LOGIN_URL)
    @ResponseStatus(OK)
    public CustomResponse<?> userLogin(@PathVariable("user-type") String userType,
                                       @RequestBody UserLoginRequest userLoginRequest) {
        return authTokenService.login(userType, userLoginRequest);
    }

    @PostMapping(REFRESH_TOKEN_URL)
    @ResponseStatus(OK)
    public CustomResponse<?> refreshToken(@PathVariable("user-type") String userType,
                                          @RequestBody RefreshTokenRequest refreshTokenRequest) {
        return authTokenService.refreshToken(userType, refreshTokenRequest);

    }

    @PostMapping(REGISTER_TOKEN_URL)
    @ResponseStatus(OK)
    public CustomResponse<?> registerUser(@PathVariable("user-type") String userType,
                                          @RequestBody UserRegisterRequest userRegisterRequest) {
        return authTokenService.registerUser(userType, userRegisterRequest);

    }


}
