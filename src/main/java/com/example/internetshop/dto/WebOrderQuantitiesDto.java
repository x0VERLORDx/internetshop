package com.example.internetshop.dto;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.example.internetshop.model.WebOrderQuantities}
 */
@Value
public class WebOrderQuantitiesDto implements Serializable {
    ProductDto product;
    Integer quantity;
}