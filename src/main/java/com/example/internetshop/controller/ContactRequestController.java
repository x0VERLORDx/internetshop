package com.example.internetshop.controller;

import com.example.internetshop.dto.ContactRequestDto;
import com.example.internetshop.service.ContactRequestService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/callPhone")
public class ContactRequestController {
    private final ContactRequestService contactRequestService;
    @Autowired
    public ContactRequestController(ContactRequestService contactRequestService) {
        this.contactRequestService = contactRequestService;
    }

    @CrossOrigin
    @PostMapping()
    public ResponseEntity<ContactRequestDto> contactRequest(@RequestBody @Valid ContactRequestDto contactRequestDto){
        contactRequestService.addRequest(contactRequestDto);
//        ContactRequestDto response =
        return ResponseEntity.ok(contactRequestDto);
    }
}
