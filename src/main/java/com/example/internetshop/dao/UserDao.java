package com.example.internetshop.dao;

import com.example.internetshop.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface UserDao extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);

    Optional<User> findByUsernameAndEmail(String username, String email);

    @Transactional
    @Modifying
    @Query("update User u set u.phone = ?1 where u.id = ?2")
    void updatePhoneById(String phone, Long id);
}