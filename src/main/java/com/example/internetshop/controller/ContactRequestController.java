package com.example.internetshop.controller;

import com.example.internetshop.dto.ContactRequestDto;
import com.example.internetshop.service.ContactRequestService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contact")
public class ContactRequestController {
    @Autowired
    private ContactRequestService contactRequestService;
    @CrossOrigin
    @PostMapping()
    public ResponseEntity contactRequest(@RequestBody @Valid ContactRequestDto contactRequestDto){
        contactRequestService.addRequest(contactRequestDto);
        return ResponseEntity.ok().build();
    }
}
