package com.example.internetshop.service;

import com.example.internetshop.dao.InventoryDao;
import com.example.internetshop.dto.InventoryDto;
import com.example.internetshop.mappers.InventoryMapper;
import com.example.internetshop.model.Inventory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InventoryService {
    private final InventoryDao inventoryDao;
    private final InventoryMapper inventoryMapper;
    @Autowired
    public InventoryService(InventoryDao inventoryDao, InventoryMapper inventoryMapper) {
        this.inventoryDao = inventoryDao;
        this.inventoryMapper = inventoryMapper;
    }
    public List<InventoryDto> getCardByProductId (Integer id){
        List<InventoryDto> card = new ArrayList<>();
        List<Inventory> productList = inventoryDao.findByProduct_Id(id);
        for(Inventory product : productList){
            card.add(inventoryMapper.toDto(product));
        }
        return card;
    }
}
