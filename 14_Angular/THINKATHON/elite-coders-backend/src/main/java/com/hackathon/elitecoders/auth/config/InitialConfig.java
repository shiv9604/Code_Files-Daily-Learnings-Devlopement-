package com.hackathon.elitecoders.auth.config;

import com.hackathon.elitecoders.auth.dto.UserDTO;
import com.hackathon.elitecoders.auth.entities.Role;
import com.hackathon.elitecoders.auth.enums.Permissions;
import com.hackathon.elitecoders.auth.repository.RoleRepository;
import com.hackathon.elitecoders.auth.repository.UserRepository;
import com.hackathon.elitecoders.auth.service.AuthTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.hackathon.elitecoders.auth.constants.ConfigConstants.EMPTY_STRING;


@Configuration
public class InitialConfig {

    @Value("${super-admin.username}")
    private String userName;

    @Value("${super-admin.password}")
    private String password;


    @Autowired
    RoleRepository roleRepository;

    @Autowired
    AuthTokenService authTokenService;

    @Autowired
    private UserRepository userRepository;

    @Bean
    public void rolesMaker() {
        try {
            List<Role> roles = new ArrayList<>();
            for (Permissions permission : Permissions.values()) {
                Optional<Role> optionalRole = roleRepository.findByName(permission.name);
                if (optionalRole.isPresent()) {
                    return;
                }
                Role role = new Role();
                role.setName(permission.name);
                role.setRoleGroup(permission.group);
                role.setDescription(permission.description);
                roles.add(role);
            }
            if (!roles.isEmpty()) {
                roleRepository.saveAll(roles);
            }
        } catch (Exception e) {
            System.out.println("Error while creating roles = " + e);
        }

    }

    @Bean
    public void initialUser() {
        try {
            if (userRepository.existsByUserName(userName)) {
                return;
            }
            List<String> allPermissions = Arrays.stream(Permissions.values()).map(permissions -> permissions.name).collect(Collectors.toList());
            UserDTO userDTO = new UserDTO(userName, password, EMPTY_STRING, EMPTY_STRING, allPermissions);
            authTokenService.registerSuperAdmin(userDTO);
        } catch (Exception e) {
            System.out.println("Error while creating initial super admin = " + e);
        }
    }

}
