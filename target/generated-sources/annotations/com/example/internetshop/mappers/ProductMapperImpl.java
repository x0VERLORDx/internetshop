package com.example.internetshop.mappers;

import com.example.internetshop.dto.CardProductDto;
import com.example.internetshop.model.Product;
import java.util.Arrays;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-12-29T20:14:39+0200",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 21.0.1 (Oracle Corporation)"
)
@Component
public class ProductMapperImpl implements ProductMapper {

    @Override
    public Product toEntity(CardProductDto cardProductDto) {
        if ( cardProductDto == null ) {
            return null;
        }

        Product product = new Product();

        product.setId( cardProductDto.getId() );
        product.setName( cardProductDto.getName() );
        product.setPrice( cardProductDto.getPrice() );
        byte[] image = cardProductDto.getImage();
        if ( image != null ) {
            product.setImage( Arrays.copyOf( image, image.length ) );
        }
        product.setCategory( cardProductDto.getCategory() );

        return product;
    }

    @Override
    public CardProductDto toDto(Product product) {
        if ( product == null ) {
            return null;
        }

        Integer id = null;
        String name = null;
        Float price = null;
        byte[] image = null;
        String category = null;

        id = product.getId();
        name = product.getName();
        price = product.getPrice();
        byte[] image1 = product.getImage();
        if ( image1 != null ) {
            image = Arrays.copyOf( image1, image1.length );
        }
        category = product.getCategory();

        CardProductDto cardProductDto = new CardProductDto( id, name, price, image, category );

        return cardProductDto;
    }

    @Override
    public Product partialUpdate(CardProductDto inventoryDto, Product inventory) {
        if ( inventoryDto == null ) {
            return null;
        }

        if ( inventoryDto.getId() != null ) {
            inventory.setId( inventoryDto.getId() );
        }
        if ( inventoryDto.getName() != null ) {
            inventory.setName( inventoryDto.getName() );
        }
        if ( inventoryDto.getPrice() != null ) {
            inventory.setPrice( inventoryDto.getPrice() );
        }
        byte[] image = inventoryDto.getImage();
        if ( image != null ) {
            inventory.setImage( Arrays.copyOf( image, image.length ) );
        }
        if ( inventoryDto.getCategory() != null ) {
            inventory.setCategory( inventoryDto.getCategory() );
        }

        return inventory;
    }
}
