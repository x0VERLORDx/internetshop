package com.example.internetshop.dto;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.example.internetshop.model.Inventory}
 */
@Value
public class InventoryDto implements Serializable {
    //CardProductDto product;
    ColorDto color;
    SizeDto size;
    Integer quantity;
}