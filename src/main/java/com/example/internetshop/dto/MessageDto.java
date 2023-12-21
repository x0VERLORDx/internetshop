package com.example.internetshop.dto;

import jakarta.validation.constraints.*;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.example.internetshop.model.Message}
 */
@Value
public class MessageDto implements Serializable {
    @NotNull
    @Email
    @NotEmpty
    String email;
    @NotNull
    @Pattern(regexp = "^\\+380\\d{9}$")
    @NotEmpty
    String phone;
    @NotNull
    @Size(min=3, max=255)
    @NotEmpty
    @NotBlank
    String name;
    @NotNull
    @Size(min=3, max=300)
    @NotEmpty
    @NotBlank
    String message;
}