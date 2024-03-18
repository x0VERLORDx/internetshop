package com.example.internetshop.dto;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.example.internetshop.model.Product}
 */
@Value
public class CardProductDto implements Serializable {
    Integer id;
    String name;
    Float price;
    byte[] image;
    String category;
    String[] color ={"red","green"};
    String [] size = {"L","M"};
    boolean available = true;

}