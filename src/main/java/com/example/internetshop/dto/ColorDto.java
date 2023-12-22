package com.example.internetshop.dto;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.example.internetshop.model.Color}
 */
@Value
public class ColorDto implements Serializable {
    String color;
}