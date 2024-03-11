package com.example.internetshop.controller;

import com.example.internetshop.dto.AllCardInfoDto;
import com.example.internetshop.dto.CardProductDto;
import com.example.internetshop.dto.InventoryDto;
import com.example.internetshop.service.InventoryService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<CardProductDto>> getAllProducts(){
        HttpHeaders responseHeaders= new HttpHeaders();
        responseHeaders.set("Content-Type", "application/json");
        return ResponseEntity.ok().headers(responseHeaders).body(inventoryService.getAllProducts());
    }

//    @CrossOrigin
//    @GetMapping("/{id}")
//    public ResponseEntity<byte[]> getCardByProductId(@PathVariable Integer id){
//        HttpHeaders responseHeaders= new HttpHeaders();
//        responseHeaders.set("Content-Type", "image/png");
//        return ResponseEntity.ok().headers(responseHeaders)
//                .body(inventoryService.getCardByProductId(id));
//    }
//@CrossOrigin
//@GetMapping()
//public List<AllCardInfoDto> getAllProducts(){
//    return inventoryService.getAllProducts();
//}
}
