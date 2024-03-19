package com.example.internetshop.mappers;

import com.example.internetshop.dto.AllCardInfoDto;
import com.example.internetshop.dto.CardProductDto;
import com.example.internetshop.dto.ColorDto;
import com.example.internetshop.dto.SizeDto;
import com.example.internetshop.model.Color;
import com.example.internetshop.model.Inventory;
import com.example.internetshop.model.Product;
import com.example.internetshop.model.Size;
import java.util.Arrays;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-03-19T17:20:55+0200",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 21.0.2 (Oracle Corporation)"
)
@Component
public class AllCardInfoMapperImpl implements AllCardInfoMapper {

    @Override
    public Inventory toEntity(AllCardInfoDto allCardInfoDto) {
        if ( allCardInfoDto == null ) {
            return null;
        }

        Inventory inventory = new Inventory();

        inventory.setId( allCardInfoDto.getId() );
        inventory.setProduct( cardProductDtoToProduct( allCardInfoDto.getProduct() ) );
        inventory.setColor( colorDtoToColor( allCardInfoDto.getColor() ) );
        inventory.setSize( sizeDtoToSize( allCardInfoDto.getSize() ) );
        inventory.setQuantity( allCardInfoDto.getQuantity() );

        return inventory;
    }

    @Override
    public AllCardInfoDto toDto(Inventory inventory) {
        if ( inventory == null ) {
            return null;
        }

        Long id = null;
        CardProductDto product = null;
        ColorDto color = null;
        SizeDto size = null;
        Integer quantity = null;

        id = inventory.getId();
        product = productToCardProductDto( inventory.getProduct() );
        color = colorToColorDto( inventory.getColor() );
        size = sizeToSizeDto( inventory.getSize() );
        quantity = inventory.getQuantity();

        AllCardInfoDto allCardInfoDto = new AllCardInfoDto( id, product, color, size, quantity );

        return allCardInfoDto;
    }

    @Override
    public Inventory partialUpdate(AllCardInfoDto allCardInfoDto, Inventory inventory) {
        if ( allCardInfoDto == null ) {
            return null;
        }

        if ( allCardInfoDto.getId() != null ) {
            inventory.setId( allCardInfoDto.getId() );
        }
        if ( allCardInfoDto.getProduct() != null ) {
            if ( inventory.getProduct() == null ) {
                inventory.setProduct( new Product() );
            }
            cardProductDtoToProduct1( allCardInfoDto.getProduct(), inventory.getProduct() );
        }
        if ( allCardInfoDto.getColor() != null ) {
            if ( inventory.getColor() == null ) {
                inventory.setColor( new Color() );
            }
            colorDtoToColor1( allCardInfoDto.getColor(), inventory.getColor() );
        }
        if ( allCardInfoDto.getSize() != null ) {
            if ( inventory.getSize() == null ) {
                inventory.setSize( new Size() );
            }
            sizeDtoToSize1( allCardInfoDto.getSize(), inventory.getSize() );
        }
        if ( allCardInfoDto.getQuantity() != null ) {
            inventory.setQuantity( allCardInfoDto.getQuantity() );
        }

        return inventory;
    }

    protected Product cardProductDtoToProduct(CardProductDto cardProductDto) {
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

    protected Color colorDtoToColor(ColorDto colorDto) {
        if ( colorDto == null ) {
            return null;
        }

        Color color = new Color();

        color.setColor( colorDto.getColor() );

        return color;
    }

    protected Size sizeDtoToSize(SizeDto sizeDto) {
        if ( sizeDto == null ) {
            return null;
        }

        Size size = new Size();

        size.setSize( sizeDto.getSize() );

        return size;
    }

    protected CardProductDto productToCardProductDto(Product product) {
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

    protected ColorDto colorToColorDto(Color color) {
        if ( color == null ) {
            return null;
        }

        String color1 = null;

        color1 = color.getColor();

        ColorDto colorDto = new ColorDto( color1 );

        return colorDto;
    }

    protected SizeDto sizeToSizeDto(Size size) {
        if ( size == null ) {
            return null;
        }

        String size1 = null;

        size1 = size.getSize();

        SizeDto sizeDto = new SizeDto( size1 );

        return sizeDto;
    }

    protected void cardProductDtoToProduct1(CardProductDto cardProductDto, Product mappingTarget) {
        if ( cardProductDto == null ) {
            return;
        }

        if ( cardProductDto.getId() != null ) {
            mappingTarget.setId( cardProductDto.getId() );
        }
        if ( cardProductDto.getName() != null ) {
            mappingTarget.setName( cardProductDto.getName() );
        }
        if ( cardProductDto.getPrice() != null ) {
            mappingTarget.setPrice( cardProductDto.getPrice() );
        }
        byte[] image = cardProductDto.getImage();
        if ( image != null ) {
            mappingTarget.setImage( Arrays.copyOf( image, image.length ) );
        }
        if ( cardProductDto.getCategory() != null ) {
            mappingTarget.setCategory( cardProductDto.getCategory() );
        }
    }

    protected void colorDtoToColor1(ColorDto colorDto, Color mappingTarget) {
        if ( colorDto == null ) {
            return;
        }

        if ( colorDto.getColor() != null ) {
            mappingTarget.setColor( colorDto.getColor() );
        }
    }

    protected void sizeDtoToSize1(SizeDto sizeDto, Size mappingTarget) {
        if ( sizeDto == null ) {
            return;
        }

        if ( sizeDto.getSize() != null ) {
            mappingTarget.setSize( sizeDto.getSize() );
        }
    }
}
