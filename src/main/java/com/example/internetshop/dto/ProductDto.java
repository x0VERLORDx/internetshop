package com.example.internetshop.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.example.internetshop.model.Product}
 */
@Value
public class ProductDto implements Serializable {

    Integer id;


    @JsonCreator
    public ProductDto(@JsonProperty("id") Integer id) {
        this.id = id;
    }
}