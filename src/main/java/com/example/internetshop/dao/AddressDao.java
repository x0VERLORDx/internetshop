package com.example.internetshop.dao;

import com.example.internetshop.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressDao extends JpaRepository<Address, Long> {
    boolean existsByAddressLine1IgnoreCaseAndAddressLine2IgnoreCase(String addressLine1, String addressLine2);
    Address findByAddressLine1IgnoreCaseAndAddressLine2IgnoreCase(String addressLine1, String addressLine2);
}
