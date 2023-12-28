package com.example.internetshop.service;

import com.example.internetshop.dao.InventoryDao;
import com.example.internetshop.dao.ProductDao;
import com.example.internetshop.dto.AllCardInfoDto;
import com.example.internetshop.dto.CardProductDto;
import com.example.internetshop.dto.InventoryDto;
import com.example.internetshop.mappers.AllCardInfoMapper;
import com.example.internetshop.mappers.InventoryMapper;
import com.example.internetshop.mappers.ProductMapper;
import com.example.internetshop.model.Inventory;
import com.example.internetshop.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class InventoryService {
    private final InventoryDao inventoryDao;
    private final ProductDao productDao;
    private final InventoryMapper inventoryMapper;
    private final ProductMapper productMapper;
    private final AllCardInfoMapper allCardInfoMapper;
    @Autowired
    public InventoryService(InventoryDao inventoryDao, ProductDao productDao, InventoryMapper inventoryMapper, ProductMapper productMapper, AllCardInfoMapper allCardInfoMapper) {
        this.inventoryDao = inventoryDao;
        this.productDao = productDao;
        this.inventoryMapper = inventoryMapper;
        this.productMapper = productMapper;
        this.allCardInfoMapper = allCardInfoMapper;
    }
    @Transactional(readOnly = true)
    public List<InventoryDto> getCardByProductId (Integer id){
        List<InventoryDto> card = new ArrayList<>();
        List<Inventory> productList = inventoryDao.findByProduct_Id(id);
        for(Inventory product : productList){
            card.add(inventoryMapper.toDto(product));
        }
        return card;
    }
    public List<CardProductDto> getAllProducts (){
        List<CardProductDto> productDtoList = new ArrayList<>();
        List<Product> productList = productDao.findAll();
        for(Product product : productList){
            productDtoList.add(productMapper.toDto(product));
        }
        return productDtoList;
    }
//public List<AllCardInfoDto> getAllProducts (){
//    List<AllCardInfoDto> allCardInfoDtos = new ArrayList<>();
//    List<Inventory> productList = inventoryDao.findAll();
//
//    for(Inventory product : productList){
//        allCardInfoDtos.add(allCardInfoMapper.toDto(product));
//    }
//    return allCardInfoDtos;
//}
}
