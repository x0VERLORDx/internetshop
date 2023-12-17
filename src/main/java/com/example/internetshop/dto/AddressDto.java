package com.example.internetshop.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.example.internetshop.model.Address}
 */
@Value
public class AddressDto implements Serializable {
    @JsonProperty("addressLine1")
    String addressLine1;
    @JsonProperty("addressLine2")
    String addressLine2;

    @JsonCreator
    public AddressDto(@JsonProperty("addressLine1") String addressLine1, @JsonProperty("addressLine2") String addressLine2) {
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
    }
}