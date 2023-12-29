package com.example.internetshop.mappers;

import com.example.internetshop.dto.ColorDto;
import com.example.internetshop.dto.InventoryDto;
import com.example.internetshop.dto.SizeDto;
import com.example.internetshop.model.Color;
import com.example.internetshop.model.Inventory;
import com.example.internetshop.model.Size;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-12-29T19:57:26+0200",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 21.0.1 (Oracle Corporation)"
)
@Component
public class InventoryMapperImpl implements InventoryMapper {

    @Override
    public Inventory toEntity(InventoryDto inventoryDto) {
        if ( inventoryDto == null ) {
            return null;
        }

        Inventory inventory = new Inventory();

        inventory.setColor( colorDtoToColor( inventoryDto.getColor() ) );
        inventory.setSize( sizeDtoToSize( inventoryDto.getSize() ) );

        return inventory;
    }

    @Override
    public InventoryDto toDto(Inventory inventory) {
        if ( inventory == null ) {
            return null;
        }

        ColorDto color = null;
        SizeDto size = null;

        color = colorToColorDto( inventory.getColor() );
        size = sizeToSizeDto( inventory.getSize() );

        boolean available = false;

        InventoryDto inventoryDto = new InventoryDto( color, size, available );

        return inventoryDto;
    }

    @Override
    public Inventory partialUpdate(InventoryDto inventoryDto, Inventory inventory) {
        if ( inventoryDto == null ) {
            return null;
        }

        if ( inventoryDto.getColor() != null ) {
            if ( inventory.getColor() == null ) {
                inventory.setColor( new Color() );
            }
            colorDtoToColor1( inventoryDto.getColor(), inventory.getColor() );
        }
        if ( inventoryDto.getSize() != null ) {
            if ( inventory.getSize() == null ) {
                inventory.setSize( new Size() );
            }
            sizeDtoToSize1( inventoryDto.getSize(), inventory.getSize() );
        }

        return inventory;
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
