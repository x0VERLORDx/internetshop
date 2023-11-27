package com.example.internetshop.controller;

import com.example.internetshop.dto.LoginDto;
import com.example.internetshop.dto.LoginResponseDto;
import com.example.internetshop.dto.UserRegistrationDto;
import com.example.internetshop.exception.UserAlreadyExistsException;
import com.example.internetshop.model.User;
import com.example.internetshop.service.UserRegistrationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    @Autowired
    private UserRegistrationService userRegistrationService;
    @PostMapping("/registration")
    public ResponseEntity registerUser(@RequestBody @Valid UserRegistrationDto userRegistrationDto){
        try {
            userRegistrationService.registrateUser(userRegistrationDto);
            return ResponseEntity.ok().build();
        } catch (UserAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }


    @PostMapping("/login")
    public  ResponseEntity<LoginResponseDto> loginUser(@Valid @RequestBody LoginDto loginDto){
        String jwt = userRegistrationService.loginUser(loginDto);
        if (jwt == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }else {
            LoginResponseDto response = new LoginResponseDto();
            response.setJwt(jwt);
            return ResponseEntity.ok(response);
        }
    }
    @GetMapping("/me")
    public User getLoggedInUserProfile(@AuthenticationPrincipal User user){
        return user;
    }
}
