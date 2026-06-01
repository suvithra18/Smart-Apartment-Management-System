package com.example.SmartSociety.controller;


import org.springframework.web.bind.annotation.*;

import com.example.SmartSociety.dto.AuthRequest;
import com.example.SmartSociety.dto.AuthResponse;
import com.example.SmartSociety.entity.User;
import com.example.SmartSociety.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    private final AuthService authService;

    // ✅ MANUAL CONSTRUCTOR
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public AuthResponse register(@RequestBody User user) {
        return authService.register(user);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {
        return authService.login(request);
    }
}