package com.example.internetshop.service;

import com.example.internetshop.dao.UserDao;
import com.example.internetshop.dto.LoginDto;
import com.example.internetshop.dto.UserRegistrationDto;
import com.example.internetshop.exception.UserAlreadyExistsException;
import com.example.internetshop.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserRegistrationService {
    @Autowired
    private UserDao userDao;
    @Autowired
    private EncryptionService encryptionService;
    @Autowired
    private JWTService jstService;
    public void registrateUser(UserRegistrationDto userRegistrationDto)throws UserAlreadyExistsException {
        if(userDao.findByUsername(userRegistrationDto.getUsername()).isPresent() || userDao.findByEmail(userRegistrationDto.getEmail()).isPresent()){
            throw new UserAlreadyExistsException();
        }
        User user = new User();
        user.setEmail(userRegistrationDto.getEmail());
        user.setPassword(encryptionService.encryptPassword(userRegistrationDto.getPassword()));
        user.setUsername(userRegistrationDto.getUsername());
        user.setFirstName(userRegistrationDto.getFirstName());
        user.setLastName(userRegistrationDto.getLastName());
        userDao.save(user);
    }


    public String loginUser(LoginDto loginDto){
        Optional<User> optionalUser = userDao.findByUsername(loginDto.getUsername());
        if (optionalUser.isPresent()){
            User user = optionalUser.get();
            if (encryptionService.verifyPassword(loginDto.getPassword(), user.getPassword())){
                return jstService.generateJWT(user);
            }
        }
        return null;
    }
}
