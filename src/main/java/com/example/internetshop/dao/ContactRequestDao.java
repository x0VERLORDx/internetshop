package com.example.internetshop.dao;

import com.example.internetshop.model.ContactRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRequestDao extends JpaRepository<ContactRequest, Long> {
}
