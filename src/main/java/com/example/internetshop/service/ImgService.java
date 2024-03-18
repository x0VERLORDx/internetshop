package com.example.internetshop.service;

import com.example.internetshop.dao.ImgDao;
import com.example.internetshop.model.ImgTest;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;

@Service
public class ImgService {
    private ImgDao imgDao;

    public void addImg() throws IOException{
        ImgTest img = new ImgTest();
        img.setImage(Files.readAllBytes(Paths.get("C:\\Users\\OVERLORD\\IdeaProjects\\InternetShop\\src\\img\\images\\photo-header_3.png")));
        imgDao.save(img);//        File file = new File("photo-header_3.png");
//        FileInputStream fis = new FileInputStream(file);
//        Connection con = null;
//        PreparedStatement ps = con.prepareStatement("INSERT INTO images VALUES (?, ?)");
//        ps.setString(1, file.getName());
//        ps.setBinaryStream(2, fis, file.length());
//        ps.executeUpdate();
//        ps.close();
//        fis.close();
    }
    public void getImg(Long id){

        try (FileOutputStream fos
                     = new FileOutputStream("C:\\Users\\OVERLORD\\IdeaProjects\\InternetShop\\src\\img\\images\\testBook.png")) {
            fos.write(imgDao.findById(id).get().getImage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
