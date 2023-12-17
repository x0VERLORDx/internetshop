package com.example.internetshop.dao;

import com.example.internetshop.model.WebOrderQuantities;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WebOrderQuantitiesDao extends JpaRepository<WebOrderQuantities, Integer> {
}
