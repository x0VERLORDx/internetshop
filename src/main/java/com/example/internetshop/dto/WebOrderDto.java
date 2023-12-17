package com.example.internetshop.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Value;

import java.io.Serializable;
import java.util.List;

/**
 * DTO for {@link com.example.internetshop.model.WebOrder}
 */
@Value
public class WebOrderDto implements Serializable {
    @NotNull
    UserDto user;
    @NotNull
    AddressDto address;
    List<WebOrderQuantitiesDto> orderQuantities;
}