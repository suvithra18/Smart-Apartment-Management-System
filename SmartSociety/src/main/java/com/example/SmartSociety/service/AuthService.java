package com.example.SmartSociety.service;


import com.example.SmartSociety.dto.AuthRequest;
import com.example.SmartSociety.dto.AuthResponse;
import com.example.SmartSociety.entity.User;

public interface AuthService {

    AuthResponse register(User user);

    AuthResponse login(AuthRequest request);
}