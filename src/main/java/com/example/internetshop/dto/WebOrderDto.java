package com.example.internetshop.dto;

import lombok.Value;

import java.io.Serializable;
import java.util.List;

/**
 * DTO for {@link com.example.internetshop.model.WebOrder}
 */
@Value
public class WebOrderDto implements Serializable {
    String email;
    String firstName;
    String phone;
    String country;
    String city;
    String addressLine1;
    String addressLine2;
    List<WebOrderQuantitiesDto> selectedItems;
    String comment;
}