package com.hackathon.elitecoders.auth.service;

import org.springframework.stereotype.Service;

@Service
public interface PasswordService {

    String encodePassword(String password);

    Boolean verifyPassword(String password, String encodedPassword);

}
