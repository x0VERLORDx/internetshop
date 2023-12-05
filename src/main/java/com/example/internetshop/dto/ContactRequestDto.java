package com.example.internetshop.dto;

import jakarta.validation.constraints.*;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.example.internetshop.model.ContactRequest}
 */
@Value
public class ContactRequestDto implements Serializable {
    @Email
    @NotNull
    @NotBlank
    String email;

    @NotNull
    @NotBlank
    @Pattern(regexp = "[0-9]{10}")
    String phone;

    @NotNull
    @NotBlank
    @Size(min=3, max=255)
    String name;
}