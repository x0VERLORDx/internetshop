package com.example.internetshop.dto;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.example.internetshop.model.Product}
 */
@Value
public class CardProductDto implements Serializable {
    String name;
    Float price;
    byte[] image;
}