package com.hackathon.elitecoders.auth.mapper;


import com.hackathon.elitecoders.auth.dto.UserDTO;
import com.hackathon.elitecoders.auth.entities.Role;
import com.hackathon.elitecoders.auth.entities.User;
import com.hackathon.elitecoders.auth.enums.Permissions;
import com.hackathon.elitecoders.auth.repository.RoleRepository;
import com.hackathon.elitecoders.auth.service.PasswordService;
import com.hackathon.elitecoders.vo.requestvo.UserRegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static java.time.ZoneOffset.UTC;

@Component
public class UserMapper {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordService passwordService;


    public User mapUserFromRequestVo(UserRegisterRequest userRegisterRequest, String userType) {

        LocalDateTime localDateTime = LocalDateTime.now(UTC);
        User user = new User();
        user.setCreatedAt(localDateTime);
        user.setUpdatedAt(localDateTime);
        user.setUserType(userType);
        user.setUserName(userRegisterRequest.getUserName());
        user.setPassword(passwordService.encodePassword(userRegisterRequest.getPassword()));
        user.setEmail(userRegisterRequest.getEmail());
        user.setPhone(userRegisterRequest.getPhone());
        user.setRoles(getRolesFromPermissions(userRegisterRequest.getRoles()));
        user.setIsActive(true);
        user.setIsDisable(false);
        return user;
    }

    public User mapUserFromDTO(UserDTO userDTO, String userType) {

        LocalDateTime localDateTime = LocalDateTime.now(UTC);
        User user = new User();
        user.setCreatedAt(localDateTime);
        user.setUpdatedAt(localDateTime);
        user.setUserType(userType);
        user.setUserName(userDTO.getUserName());
        user.setPassword(passwordService.encodePassword(userDTO.getPassword()));
        user.setEmail(userDTO.getEmail());
        user.setPhone(userDTO.getPhone());
        user.setRoles(getRolesFromPermissions(userDTO.getRoles()));
        user.setIsActive(true);
        user.setIsDisable(false);
        return user;
    }


    public Set<Role> getRolesFromPermissions(List<String> permissions) {
        Set<Role> roleSet = new HashSet<>();
        Optional<Role> userRoleOptional = roleRepository.findByName(Permissions.USERS.name);
        if (userRoleOptional.isPresent()) {
            Role userRole = userRoleOptional.get();
            if (permissions.isEmpty()) {
                roleSet.add(userRole);
                return roleSet;
            }
            List<Role> roleList = roleRepository.findByNames(permissions);
            roleSet = new HashSet<>(roleList);
            roleSet.add(userRole);
            return roleSet;
        }
        return null;
    }

}
