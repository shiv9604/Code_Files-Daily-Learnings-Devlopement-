package com.hackathon.elitecoders.auth.service;

import com.hackathon.elitecoders.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class DeleteUserService {
    @Autowired
    private UserRepository userRepository;

    public void removeUser(UUID id) {
        userRepository.deleteById(id);
    }
}
