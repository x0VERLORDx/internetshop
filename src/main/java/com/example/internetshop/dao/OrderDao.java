package com.example.internetshop.dao;

import com.example.internetshop.model.WebOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDao extends JpaRepository<WebOrder, Integer> {
}
