package com.example.internetshop.mappers;

import com.example.internetshop.dto.AddressDto;
import com.example.internetshop.dto.ProductDto;
import com.example.internetshop.dto.UserDto;
import com.example.internetshop.dto.WebOrderDto;
import com.example.internetshop.dto.WebOrderQuantitiesDto;
import com.example.internetshop.model.Address;
import com.example.internetshop.model.Product;
import com.example.internetshop.model.User;
import com.example.internetshop.model.WebOrder;
import com.example.internetshop.model.WebOrderQuantities;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-12-29T21:06:44+0200",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 21.0.1 (Oracle Corporation)"
)
@Component
public class WebOrderMapperImpl implements WebOrderMapper {

    @Override
    public WebOrderDto toDto(WebOrder webOrder) {
        if ( webOrder == null ) {
            return null;
        }

        List<WebOrderQuantitiesDto> orderQuantities = null;
        UserDto user = null;
        AddressDto address = null;

        orderQuantities = webOrderQuantitiesListToWebOrderQuantitiesDtoList( webOrder.getOrderQuantities() );
        user = userToUserDto( webOrder.getUser() );
        address = addressToAddressDto( webOrder.getAddress() );

        WebOrderDto webOrderDto = new WebOrderDto( user, address, orderQuantities );

        return webOrderDto;
    }

    @Override
    public WebOrder toEntity(WebOrderDto orderDto) {
        if ( orderDto == null ) {
            return null;
        }

        WebOrder webOrder = new WebOrder();

        webOrder.setUser( userDtoToUser( orderDto.getUser() ) );
        webOrder.setAddress( addressDtoToAddress( orderDto.getAddress() ) );
        webOrder.setOrderQuantities( webOrderQuantitiesDtoListToWebOrderQuantitiesList( orderDto.getOrderQuantities() ) );

        return webOrder;
    }

    protected ProductDto productToProductDto(Product product) {
        if ( product == null ) {
            return null;
        }

        Integer id = null;

        id = product.getId();

        ProductDto productDto = new ProductDto( id );

        return productDto;
    }

    protected WebOrderQuantitiesDto webOrderQuantitiesToWebOrderQuantitiesDto(WebOrderQuantities webOrderQuantities) {
        if ( webOrderQuantities == null ) {
            return null;
        }

        ProductDto product = null;
        Integer quantity = null;

        product = productToProductDto( webOrderQuantities.getProduct() );
        quantity = webOrderQuantities.getQuantity();

        WebOrderQuantitiesDto webOrderQuantitiesDto = new WebOrderQuantitiesDto( product, quantity );

        return webOrderQuantitiesDto;
    }

    protected List<WebOrderQuantitiesDto> webOrderQuantitiesListToWebOrderQuantitiesDtoList(List<WebOrderQuantities> list) {
        if ( list == null ) {
            return null;
        }

        List<WebOrderQuantitiesDto> list1 = new ArrayList<WebOrderQuantitiesDto>( list.size() );
        for ( WebOrderQuantities webOrderQuantities : list ) {
            list1.add( webOrderQuantitiesToWebOrderQuantitiesDto( webOrderQuantities ) );
        }

        return list1;
    }

    protected UserDto userToUserDto(User user) {
        if ( user == null ) {
            return null;
        }

        long id = 0L;
        String username = null;
        String email = null;
        String phone = null;

        if ( user.getId() != null ) {
            id = user.getId();
        }
        username = user.getUsername();
        email = user.getEmail();
        phone = user.getPhone();

        UserDto userDto = new UserDto( id, username, email, phone );

        return userDto;
    }

    protected AddressDto addressToAddressDto(Address address) {
        if ( address == null ) {
            return null;
        }

        String addressLine1 = null;
        String addressLine2 = null;

        addressLine1 = address.getAddressLine1();
        addressLine2 = address.getAddressLine2();

        AddressDto addressDto = new AddressDto( addressLine1, addressLine2 );

        return addressDto;
    }

    protected User userDtoToUser(UserDto userDto) {
        if ( userDto == null ) {
            return null;
        }

        User user = new User();

        user.setId( userDto.getId() );
        user.setUsername( userDto.getUsername() );
        user.setEmail( userDto.getEmail() );
        user.setPhone( userDto.getPhone() );

        return user;
    }

    protected Address addressDtoToAddress(AddressDto addressDto) {
        if ( addressDto == null ) {
            return null;
        }

        Address address = new Address();

        address.setAddressLine1( addressDto.getAddressLine1() );
        address.setAddressLine2( addressDto.getAddressLine2() );

        return address;
    }

    protected Product productDtoToProduct(ProductDto productDto) {
        if ( productDto == null ) {
            return null;
        }

        Product product = new Product();

        product.setId( productDto.getId() );

        return product;
    }

    protected WebOrderQuantities webOrderQuantitiesDtoToWebOrderQuantities(WebOrderQuantitiesDto webOrderQuantitiesDto) {
        if ( webOrderQuantitiesDto == null ) {
            return null;
        }

        WebOrderQuantities webOrderQuantities = new WebOrderQuantities();

        webOrderQuantities.setProduct( productDtoToProduct( webOrderQuantitiesDto.getProduct() ) );
        webOrderQuantities.setQuantity( webOrderQuantitiesDto.getQuantity() );

        return webOrderQuantities;
    }

    protected List<WebOrderQuantities> webOrderQuantitiesDtoListToWebOrderQuantitiesList(List<WebOrderQuantitiesDto> list) {
        if ( list == null ) {
            return null;
        }

        List<WebOrderQuantities> list1 = new ArrayList<WebOrderQuantities>( list.size() );
        for ( WebOrderQuantitiesDto webOrderQuantitiesDto : list ) {
            list1.add( webOrderQuantitiesDtoToWebOrderQuantities( webOrderQuantitiesDto ) );
        }

        return list1;
    }
}
