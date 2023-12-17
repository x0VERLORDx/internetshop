package com.example.internetshop.service;

import com.example.internetshop.dao.*;
import com.example.internetshop.dto.WebOrderDto;
import com.example.internetshop.mappers.WebOrderMapper;
import com.example.internetshop.model.Address;
import com.example.internetshop.model.User;
import com.example.internetshop.model.WebOrder;
import com.example.internetshop.model.WebOrderQuantities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private final OrderDao orderDao;
    private final ProductDao productDao;
    private final AddressDao addressDao;
    private final UserDao userDao;
    private final WebOrderQuantitiesDao webOrderQuantitiesDao;
    private final WebOrderMapper webOrderMapper;
    @Autowired
    public OrderService(OrderDao webOrderDao, ProductDao productDao, AddressDao addressDao, UserDao userDao, WebOrderQuantitiesDao webOrderQuantitiesDao, WebOrderMapper webOrderMapper) {
        this.orderDao = webOrderDao;
        this.productDao = productDao;
        this.addressDao = addressDao;
        this.userDao = userDao;
        this.webOrderQuantitiesDao = webOrderQuantitiesDao;
        this.webOrderMapper = webOrderMapper;
    }

    public WebOrderDto addOrder(WebOrderDto webOrderDto) {
        WebOrder webOrder = webOrderMapper.toEntity(webOrderDto);   // Method to convert DTO to Entity
        Address address = webOrder.getAddress();
        User user = webOrder.getUser();
        List<WebOrderQuantities> webOrderQuantitiesList = webOrder.getOrderQuantities();
        //webOrderQuantitiesList.forEach(webOrderQuantities -> se);

        for(WebOrderQuantities quantities : webOrderQuantitiesList) {
            quantities.setWebOrder(webOrder);
        }

        address.setUser(user);
        userDao.save(user);
        addressDao.save(address);
        webOrder.setAddress(address);
        webOrder = orderDao.save(webOrder);  // Save the order
        webOrderQuantitiesDao.saveAll(webOrderQuantitiesList);

        return webOrderMapper.toDto(webOrder);
    }
}
