package com.example.SmartSociety.serviceImpl;




import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.SmartSociety.config.JwtService;
import com.example.SmartSociety.dto.AuthRequest;
import com.example.SmartSociety.dto.AuthResponse;
import com.example.SmartSociety.entity.User;
import com.example.SmartSociety.repository.UserRepository;
import com.example.SmartSociety.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    // ✅ Manual constructor
    public AuthServiceImpl(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    // ✅ REGISTER
    @Override
    public AuthResponse register(User user) {

        user.setPassword(
                passwordEncoder.encode(user.getPassword())
        );

        User savedUser = userRepository.save(user);

        String token =
                jwtService.generateToken(savedUser.getEmail());

        return new AuthResponse(
                token,
                "User Registered Successfully",
                savedUser.getRole().name(),
                savedUser.getId()
        );
    }

    // ✅ LOGIN
    @Override
    public AuthResponse login(AuthRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        )) {

            throw new RuntimeException("Invalid credentials");
        }

        String token =
                jwtService.generateToken(user.getEmail());

        return new AuthResponse(
                token,
                "Login Successful",
                user.getRole().name(),
                user.getId()
        );
    }
}