package com.example.internetshop.dao;

import com.example.internetshop.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;


public interface AddressDao extends JpaRepository<Address, Long>, JpaSpecificationExecutor<Address> {


    @Query("select a from Address a where upper(a.addressLine1) = upper(?1) and upper(a.addressLine2) = upper(?2)")
    Address findAddress(String addressLine1, String addressLine2);

    @Query("""
            select (count(a) > 0) from Address a
            where upper(a.country) = upper(?1) and upper(a.city) = upper(?2) and upper(a.addressLine1) = upper(?3) and upper(a.addressLine2) = upper(?4)""")
    boolean addressExists(String country, String city, String addressLine1, String addressLine2);

}
