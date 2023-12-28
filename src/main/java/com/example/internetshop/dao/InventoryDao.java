package com.example.internetshop.dao;

import com.example.internetshop.dto.InventoryDto;
import com.example.internetshop.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface InventoryDao extends JpaRepository<Inventory, Long> {
    //List<Inventory> getByProduct_Id(Integer id);
   // List<InventoryDto> getByProduct_Id(Integer id);

    @Query("select i from Inventory i where i.product.id = ?1")
    List<Inventory> findByProduct_Id(Integer id);
}