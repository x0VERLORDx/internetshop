package com.example.internetshop.service;

import com.example.internetshop.dao.*;
import com.example.internetshop.dto.UserDto;
import com.example.internetshop.dto.WebOrderDto;
import com.example.internetshop.mappers.WebOrderMapper;
import com.example.internetshop.model.Address;
import com.example.internetshop.model.User;
import com.example.internetshop.model.WebOrder;
import com.example.internetshop.model.WebOrderQuantities;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    private final OrderDao orderDao;
    private final ProductDao productDao;
    private final AddressDao addressDao;
    private final UserDao userDao;
    private final WebOrderQuantitiesDao webOrderQuantitiesDao;
    private final WebOrderMapper webOrderMapper;
    public OrderService(OrderDao webOrderDao, ProductDao productDao, AddressDao addressDao, UserDao userDao, WebOrderQuantitiesDao webOrderQuantitiesDao, WebOrderMapper webOrderMapper) {
        this.orderDao = webOrderDao;
        this.productDao = productDao;
        this.addressDao = addressDao;
        this.userDao = userDao;
        this.webOrderQuantitiesDao = webOrderQuantitiesDao;
        this.webOrderMapper = webOrderMapper;
    }
    @Transactional
    public WebOrderDto addOrder(WebOrderDto webOrderDto) {
        System.out.println(webOrderDto.toString());
        WebOrder webOrder = webOrderMapper.toEntity(webOrderDto);// Method to convert DTO to Entity
        User user = new User();
//        if (userDto.getId()==0){
            user.setUsername(webOrder.getUser().getFirstName());
            user.setEmail(webOrder.getUser().getEmail());
            user.setPhone(webOrder.getUser().getPhone());

            Optional<User> existingUser = userDao.findByEmail(user.getEmail());
            if (existingUser.isPresent()) {
                user = existingUser.get();

            } else {
                user.setUsername("guest");
                userDao.save(user);
            }
//        } else {
//            user = userDao.findById(userDto.getId()).orElseThrow(() -> new EntityNotFoundException("User not found"));
//        }
if (user.getPhone() == null || !user.getPhone().equals(webOrder.getUser().getPhone())){
    user.setPhone(webOrder.getUser().getPhone());
    userDao.updatePhoneById(user.getPhone(), user.getId());
}
        Address address = webOrder.getAddress();
        address.setUser(user);
        // If address exists, retrieve it and connect it with the webOrder
        if (addressDao.addressExists(address.getCountry(), address.getCity(), address.getAddressLine1(), address.getAddressLine2())){
            address = addressDao.findAddress(address.getAddressLine1(), address.getAddressLine2());
        }else {
            addressDao.save(address);
        }
        List<WebOrderQuantities> webOrderQuantitiesList = webOrder.getOrderQuantities();
        for(WebOrderQuantities quantities : webOrderQuantitiesList) {
            quantities.setWebOrder(webOrder);
        }



        webOrder.setAddress(address);
        webOrder.setUser(user);
        webOrder = orderDao.save(webOrder);  // Save the order
        webOrderQuantitiesDao.saveAll(webOrderQuantitiesList);

        return webOrderMapper.toDto(webOrder);
    }
}