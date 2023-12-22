package com.example.internetshop.controller;

import com.example.internetshop.dto.InventoryDto;
import com.example.internetshop.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/card")
public class CardController {
    private final InventoryService inventoryService;
    @Autowired
    public CardController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }
    @GetMapping("/{id}")
    public List<InventoryDto> getCardByProductId(@PathVariable Integer id){
        return inventoryService.getCardByProductId(id);
    }
}