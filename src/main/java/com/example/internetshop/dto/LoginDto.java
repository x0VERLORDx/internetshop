package com.example.internetshop.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.example.internetshop.model.User}
 */
@Value
public class LoginDto implements Serializable {
    @NotNull
    @NotBlank
    String username;
    @NotNull
    @NotBlank
    String password;
}