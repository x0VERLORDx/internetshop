package com.example.internetshop.mappers;

import com.example.internetshop.dto.WebOrderDto;
import com.example.internetshop.model.WebOrder;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface WebOrderMapper {

    WebOrderDto toDto(WebOrder webOrder);

    WebOrder toEntity(WebOrderDto orderDto);

    // other mapping methods...
}
