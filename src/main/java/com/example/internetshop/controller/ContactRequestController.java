package com.example.internetshop.controller;

import com.example.internetshop.dto.ContactRequestDto;
import com.example.internetshop.service.ContactRequestService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/contact")
public class ContactRequestController {
    @Autowired
    private ContactRequestService contactRequestService;

    @PostMapping()
    public void contactRequest(@RequestBody @Valid ContactRequestDto contactRequestDto){
        contactRequestService.addRequest(contactRequestDto);
    }
}
