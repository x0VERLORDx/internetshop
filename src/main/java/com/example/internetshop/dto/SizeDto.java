package com.example.internetshop.dto;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.example.internetshop.model.Size}
 */
@Value
public class SizeDto implements Serializable {
    String size;
}