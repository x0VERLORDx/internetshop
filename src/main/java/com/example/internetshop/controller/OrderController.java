package com.example.internetshop.controller;

import com.example.internetshop.dto.WebOrderDto;
import com.example.internetshop.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public WebOrderDto createOrder(@RequestBody WebOrderDto webOrderDto) {
        return orderService.addOrder(webOrderDto);
    }

    // other handlers...
}
