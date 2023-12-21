package com.example.internetshop.controller;

import com.example.internetshop.dto.MessageDto;
import com.example.internetshop.service.MessageService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/message")
public class MessageController {

    private final MessageService messageService;
    @Autowired
    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @CrossOrigin
    @PostMapping()
    public ResponseEntity contactRequestMessage(@RequestBody @Valid MessageDto messageDto){
        messageService.addMessage(messageDto);
        return ResponseEntity.ok().build();
    }
}
