package com.example.internetshop.mappers;

import com.example.internetshop.dto.WebOrderDto;
import com.example.internetshop.dto.WebOrderQuantitiesDto;
import com.example.internetshop.model.Address;
import com.example.internetshop.model.User;
import com.example.internetshop.model.WebOrder;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-03-19T17:52:14+0200",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 21.0.2 (Oracle Corporation)"
)
@Component
public class WebOrderMapperImpl implements WebOrderMapper {

    @Override
    public WebOrder toEntity(WebOrderDto webOrderDto) {
        if ( webOrderDto == null ) {
            return null;
        }

        WebOrder webOrder = new WebOrder();

        webOrder.setAddress( webOrderDtoToAddress( webOrderDto ) );
        webOrder.setUser( webOrderDtoToUser( webOrderDto ) );
        webOrder.setComment( webOrderDto.getComment() );

        linkOrderQuantities( webOrder );

        return webOrder;
    }

    @Override
    public WebOrderDto toDto(WebOrder webOrder) {
        if ( webOrder == null ) {
            return null;
        }

        String addressLine2 = null;
        String addressLine1 = null;
        String city = null;
        String country = null;
        String phone = null;
        String firstName = null;
        String email = null;
        String comment = null;

        addressLine2 = webOrderAddressAddressLine2( webOrder );
        addressLine1 = webOrderAddressAddressLine1( webOrder );
        city = webOrderAddressCity( webOrder );
        country = webOrderAddressCountry( webOrder );
        phone = webOrderUserPhone( webOrder );
        firstName = webOrderUserFirstName( webOrder );
        email = webOrderUserEmail( webOrder );
        comment = webOrder.getComment();

        List<WebOrderQuantitiesDto> selectedItems = null;

        WebOrderDto webOrderDto = new WebOrderDto( email, firstName, phone, country, city, addressLine1, addressLine2, selectedItems, comment );

        return webOrderDto;
    }

    @Override
    public WebOrder partialUpdate(WebOrderDto webOrderDto, WebOrder webOrder) {
        if ( webOrderDto == null ) {
            return null;
        }

        if ( webOrder.getAddress() == null ) {
            webOrder.setAddress( new Address() );
        }
        webOrderDtoToAddress1( webOrderDto, webOrder.getAddress() );
        if ( webOrder.getUser() == null ) {
            webOrder.setUser( new User() );
        }
        webOrderDtoToUser1( webOrderDto, webOrder.getUser() );
        if ( webOrderDto.getComment() != null ) {
            webOrder.setComment( webOrderDto.getComment() );
        }

        linkOrderQuantities( webOrder );

        return webOrder;
    }

    protected Address webOrderDtoToAddress(WebOrderDto webOrderDto) {
        if ( webOrderDto == null ) {
            return null;
        }

        Address address = new Address();

        address.setAddressLine2( webOrderDto.getAddressLine2() );
        address.setAddressLine1( webOrderDto.getAddressLine1() );
        address.setCity( webOrderDto.getCity() );
        address.setCountry( webOrderDto.getCountry() );

        return address;
    }

    protected User webOrderDtoToUser(WebOrderDto webOrderDto) {
        if ( webOrderDto == null ) {
            return null;
        }

        User user = new User();

        user.setPhone( webOrderDto.getPhone() );
        user.setFirstName( webOrderDto.getFirstName() );
        user.setEmail( webOrderDto.getEmail() );

        return user;
    }

    private String webOrderAddressAddressLine2(WebOrder webOrder) {
        if ( webOrder == null ) {
            return null;
        }
        Address address = webOrder.getAddress();
        if ( address == null ) {
            return null;
        }
        String addressLine2 = address.getAddressLine2();
        if ( addressLine2 == null ) {
            return null;
        }
        return addressLine2;
    }

    private String webOrderAddressAddressLine1(WebOrder webOrder) {
        if ( webOrder == null ) {
            return null;
        }
        Address address = webOrder.getAddress();
        if ( address == null ) {
            return null;
        }
        String addressLine1 = address.getAddressLine1();
        if ( addressLine1 == null ) {
            return null;
        }
        return addressLine1;
    }

    private String webOrderAddressCity(WebOrder webOrder) {
        if ( webOrder == null ) {
            return null;
        }
        Address address = webOrder.getAddress();
        if ( address == null ) {
            return null;
        }
        String city = address.getCity();
        if ( city == null ) {
            return null;
        }
        return city;
    }

    private String webOrderAddressCountry(WebOrder webOrder) {
        if ( webOrder == null ) {
            return null;
        }
        Address address = webOrder.getAddress();
        if ( address == null ) {
            return null;
        }
        String country = address.getCountry();
        if ( country == null ) {
            return null;
        }
        return country;
    }

    private String webOrderUserPhone(WebOrder webOrder) {
        if ( webOrder == null ) {
            return null;
        }
        User user = webOrder.getUser();
        if ( user == null ) {
            return null;
        }
        String phone = user.getPhone();
        if ( phone == null ) {
            return null;
        }
        return phone;
    }

    private String webOrderUserFirstName(WebOrder webOrder) {
        if ( webOrder == null ) {
            return null;
        }
        User user = webOrder.getUser();
        if ( user == null ) {
            return null;
        }
        String firstName = user.getFirstName();
        if ( firstName == null ) {
            return null;
        }
        return firstName;
    }

    private String webOrderUserEmail(WebOrder webOrder) {
        if ( webOrder == null ) {
            return null;
        }
        User user = webOrder.getUser();
        if ( user == null ) {
            return null;
        }
        String email = user.getEmail();
        if ( email == null ) {
            return null;
        }
        return email;
    }

    protected void webOrderDtoToAddress1(WebOrderDto webOrderDto, Address mappingTarget) {
        if ( webOrderDto == null ) {
            return;
        }

        if ( webOrderDto.getAddressLine2() != null ) {
            mappingTarget.setAddressLine2( webOrderDto.getAddressLine2() );
        }
        if ( webOrderDto.getAddressLine1() != null ) {
            mappingTarget.setAddressLine1( webOrderDto.getAddressLine1() );
        }
        if ( webOrderDto.getCity() != null ) {
            mappingTarget.setCity( webOrderDto.getCity() );
        }
        if ( webOrderDto.getCountry() != null ) {
            mappingTarget.setCountry( webOrderDto.getCountry() );
        }
    }

    protected void webOrderDtoToUser1(WebOrderDto webOrderDto, User mappingTarget) {
        if ( webOrderDto == null ) {
            return;
        }

        if ( webOrderDto.getPhone() != null ) {
            mappingTarget.setPhone( webOrderDto.getPhone() );
        }
        if ( webOrderDto.getFirstName() != null ) {
            mappingTarget.setFirstName( webOrderDto.getFirstName() );
        }
        if ( webOrderDto.getEmail() != null ) {
            mappingTarget.setEmail( webOrderDto.getEmail() );
        }
    }
}
