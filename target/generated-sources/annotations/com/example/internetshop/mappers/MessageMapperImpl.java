package com.example.internetshop.mappers;

import com.example.internetshop.dto.MessageDto;
import com.example.internetshop.model.Message;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-12-29T21:25:13+0200",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 21.0.1 (Oracle Corporation)"
)
@Component
public class MessageMapperImpl implements MessageMapper {

    @Override
    public MessageDto toDto(Message webOrder) {
        if ( webOrder == null ) {
            return null;
        }

        String message = null;

        message = webOrder.getMessage();

        String email = null;
        String phone = null;
        String name = null;

        MessageDto messageDto = new MessageDto( email, phone, name, message );

        return messageDto;
    }

    @Override
    public Message toEntity(MessageDto orderDto) {
        if ( orderDto == null ) {
            return null;
        }

        Message message = new Message();

        message.setMessage( orderDto.getMessage() );

        return message;
    }
}
