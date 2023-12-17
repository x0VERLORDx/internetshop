package com.example.internetshop.dto;

import com.example.internetshop.model.User;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link User}
 */
@Value
@Getter
public class UserDto implements Serializable {
    @JsonProperty("id")
    Long id;
    @JsonProperty("username")
    String username;
    @JsonProperty("email")
    String email;
    @JsonCreator
    public UserDto(@JsonProperty("id") long id, @JsonProperty("username") String username, @JsonProperty("email") String email) {
        this.id = id;
        this.username = username;
        this.email = email;
    }



}