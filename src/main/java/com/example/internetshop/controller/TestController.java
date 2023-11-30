package com.example.internetshop.controller;

import com.example.internetshop.service.ImgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;

@RestController
@RequestMapping("/test")
public class TestController {
    @Autowired
    private ImgService imgService;
    @GetMapping
    public void addImg() throws SQLException, IOException {
        imgService.addImg();
    }
    @GetMapping("/{id}")
    public void getImg(@PathVariable Long id){
        imgService.getImg(id);
    }
}
