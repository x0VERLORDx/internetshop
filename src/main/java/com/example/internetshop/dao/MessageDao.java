package com.example.internetshop.dao;

import com.example.internetshop.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageDao extends JpaRepository<Message, Long> {
}