package com.example.internetshop.model;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link Product}
 */
@Value
public class CardProductDto implements Serializable {
    Integer id;
    String name;
    Float price;
    byte[] image;
    String category;
}