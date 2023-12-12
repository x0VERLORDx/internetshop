package com.example.internetshop.controller;

import com.example.internetshop.service.ImgService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;


@RestController
@RequestMapping("/api")
public class TestController {
    @Autowired
    private ImgService imgService;
    @GetMapping
    public void addImg() throws  IOException {
        imgService.addImg();
    }
    @CrossOrigin
    @GetMapping("/titles")
    public String returnTitles() {
        String[] titles = new String[]{"hjglk","fdhj"};
        return new Gson().toJson(titles);
    }
    @GetMapping("/{id}")
    public void getImg(@PathVariable Long id){
        imgService.getImg(id);
    }
}
