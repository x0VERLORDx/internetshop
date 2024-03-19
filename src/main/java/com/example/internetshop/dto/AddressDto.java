package com.example.internetshop.dto;

import com.example.internetshop.model.Address;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link Address}
 */
@Value
public class AddressDto implements Serializable {
    @JsonProperty("country")
    String country;
    @JsonProperty("city")
    String city;
    @JsonProperty("addressLine1")
    String addressLine1;
    @JsonProperty("addressLine2")
    String addressLine2;

    @JsonCreator
    public AddressDto(String country, String city, @JsonProperty("addressLine1") String addressLine1, @JsonProperty("addressLine2") String addressLine2) {
        this.country = country;
        this.city = city;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
    }
}