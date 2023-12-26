package com.example.internetshop.mappers;

import com.example.internetshop.dto.CardProductDto;
import com.example.internetshop.model.Product;
import org.mapstruct.*;

import java.util.Base64;


@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface ProductMapper {
    Product toEntity(CardProductDto cardProductDto);

    CardProductDto toDto(Product product);
    default String toString(byte[] image) {
        return image != null ? Base64.getEncoder().encodeToString(image) : null;
    }
    default byte[] toBytes(String image) {
        return image != null ? Base64.getDecoder().decode(image) : null;
    }
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Product partialUpdate(CardProductDto inventoryDto, @MappingTarget Product inventory);
}