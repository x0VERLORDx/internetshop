package com.example.internetshop.dao;

import com.example.internetshop.model.ImgTest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImgDao extends JpaRepository<ImgTest, Long> {
}
