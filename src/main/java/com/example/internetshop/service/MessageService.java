package com.example.internetshop.service;

import com.example.internetshop.dao.ContactRequestDao;
import com.example.internetshop.dao.MessageDao;
import com.example.internetshop.dto.MessageDto;
import com.example.internetshop.model.ContactRequest;
import com.example.internetshop.model.Message;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MessageService {

    private final MessageDao messageDao;
    private final ContactRequestDao contactRequestDao;
    public MessageService(MessageDao messageDao, ContactRequestDao contactRequestDao) {
        this.messageDao = messageDao;
        this.contactRequestDao = contactRequestDao;
    }
    @Transactional
    public void addMessage(MessageDto messageDto){
        ContactRequest contactRequest = new ContactRequest();
        contactRequest.setEmail(messageDto.getEmail());
        contactRequest.setName(messageDto.getName());
        contactRequest.setPhone(messageDto.getPhone());
        contactRequestDao.save(contactRequest);
        Message message = new Message();
        message.setMessage(messageDto.getMessage());
        message.setContactRequest(contactRequest);
        messageDao.save(message);
    }
}
