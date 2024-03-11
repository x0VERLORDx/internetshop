package com.example.internetshop;

import java.io.File;
import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:postgresql://localhost:8888/postgres";
        String user = "postgres";
        String password = "1111";

        try (Connection con = DriverManager.getConnection(url, user, password)) {
            String query = "INSERT INTO products(id, name, price, image) VALUES (?, ?, ?, ?)";
            PreparedStatement pst = con.prepareStatement(query);

            File imgFile = new File("C:\\Users\\OVERLORD\\IdeaProjects\\InternetShop\\src\\img\\colection\\colection3.png");
            FileInputStream fis = new FileInputStream(imgFile);

            pst.setLong(1, 13L); // id is set to 1 for example
            pst.setString(2, "Світшоти"); // product name
            pst.setDouble(3, 200); // product price
            pst.setBinaryStream(4, fis, (int) imgFile.length()); // image is set as binary blob

            pst.executeUpdate(); // execute the query

            System.out.println("Image inserted successfully");
            con.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}