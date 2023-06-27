package com.hackathon.elitecoders.controller;

import com.hackathon.elitecoders.auth.config.TokenProvider;
import com.hackathon.elitecoders.auth.entities.User;
import com.hackathon.elitecoders.auth.enums.Permissions;
import com.hackathon.elitecoders.auth.repository.UserRepository;
import com.hackathon.elitecoders.auth.service.DeleteUserService;
import com.hackathon.elitecoders.auth.service.Validator;
import com.hackathon.elitecoders.customResponse.CustomResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.List;
import java.util.UUID;

import static com.hackathon.elitecoders.auth.constants.ApiConstants.*;
import static com.hackathon.elitecoders.auth.constants.ConfigConstants.*;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping(ROOT_URL_TEST)
@CrossOrigin("*")
public class TestController extends AbstractController {

    @Autowired
    TokenProvider tokenProvider;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private DeleteUserService deleteUserService;

    @Autowired
    Validator validator;


    public String TOKEN_PREFIX = BEARER;

    public static final String HEADER_STRING = AUTHORIZATION;


    @GetMapping(USERS_BY_ID)
    @ResponseStatus(OK)
    @RolesAllowed({Permissions.PermissionConstants.USER_READ, Permissions.PermissionConstants.USER_READ_SELF})
    public CustomResponse<?> getUserById(@PathVariable UUID id, @RequestHeader(HEADER_STRING) String bearerToken) {

        String authToken = bearerToken.replace(TOKEN_PREFIX, EMPTY_STRING);
        String userIdFromToken = tokenProvider.getUserIdFromToken(authToken);
        validator.validateSelfToken(authToken, id, Permissions.PermissionConstants.USER_READ);
        String response = "User id = "+id+". Requester Id = "+userIdFromToken; //Call Service here.
        return new CustomResponse<>(OK, response);

    }

    @GetMapping(ADMINS_BY_ID)
    @ResponseStatus(OK)
    @RolesAllowed({Permissions.PermissionConstants.ADMIN_READ, Permissions.PermissionConstants.ADMIN_READ_SELF})
    public CustomResponse<?> getAdminById(@PathVariable UUID id, @RequestHeader(HEADER_STRING) String bearerToken) {

        String authToken = bearerToken.replace(TOKEN_PREFIX, EMPTY_STRING);
        String userIdFromToken = tokenProvider.getUserIdFromToken(authToken);
        validator.validateSelfToken(authToken, id, Permissions.PermissionConstants.ADMIN_READ);
        String response = "Admin id = "+id+". Requester Id = "+userIdFromToken; //Call Service here.
        return new CustomResponse<>(OK, response);

    }

    @Cacheable(key = "'allUser'", value = "allUserCache")
    @GetMapping(USERS)
    public List<User> getAllUsers() {
        System.out.println("hey");
        return userRepository.findAll();
    }

    @DeleteMapping(USERS_BY_ID)
    @CacheEvict(value = "allUserCache", allEntries=true)
    public void removeUser(@PathVariable UUID id) {
        System.out.println("Request received to the controller");
        deleteUserService.removeUser(id);
    }

}
