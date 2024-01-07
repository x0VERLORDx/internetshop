package com.example.internetshop.controller;

import com.example.internetshop.dto.AllCardInfoDto;
import com.example.internetshop.dto.CardProductDto;
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
    @CrossOrigin
    @GetMapping("/{id}")
    public List<InventoryDto> getCardByProductId(@PathVariable Integer id){
        return inventoryService.getCardByProductId(id);
    }
    @CrossOrigin
    @GetMapping()
    public List<CardProductDto> getAllProducts(){
        return inventoryService.getAllProducts();
    }
//@CrossOrigin
//@GetMapping()
//public List<AllCardInfoDto> getAllProducts(){
//    return inventoryService.getAllProducts();
//}
}
