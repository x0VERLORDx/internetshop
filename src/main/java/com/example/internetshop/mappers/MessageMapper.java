package com.example.internetshop.mappers;

import com.example.internetshop.dto.MessageDto;
import com.example.internetshop.model.Message;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MessageMapper {

    MessageDto toDto(Message webOrder);

    Message toEntity(MessageDto orderDto);

    // other mapping methods...
}