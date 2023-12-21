package com.example.internetshop.service;

import com.example.internetshop.dao.ContactRequestDao;
import com.example.internetshop.dto.ContactRequestDto;
import com.example.internetshop.model.ContactRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactRequestService {
    private final ContactRequestDao contactRequestDao;
    @Autowired
    public ContactRequestService(ContactRequestDao contactRequestDao) {
        this.contactRequestDao = contactRequestDao;
    }

    public void addRequest(ContactRequestDto contactRequestDto){
        ContactRequest contactRequest = new ContactRequest();
        contactRequest.setName(contactRequestDto.getName());
        contactRequest.setEmail(contactRequestDto.getEmail());
        contactRequest.setPhone(contactRequestDto.getPhone());
        contactRequestDao.save(contactRequest);
    }
}
