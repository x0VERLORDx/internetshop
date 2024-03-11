package com.example.internetshop.dao;

import com.example.internetshop.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductDao extends JpaRepository<Product, Long> {
    @Override
    Optional<Product> findById(Long aLong);
}
