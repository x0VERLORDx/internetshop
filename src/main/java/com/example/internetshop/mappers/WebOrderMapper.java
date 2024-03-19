package com.example.internetshop.mappers;

import com.example.internetshop.dto.WebOrderDto;
import com.example.internetshop.model.WebOrder;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface WebOrderMapper {
    @Mapping(source = "addressLine2", target = "address.addressLine2")
    @Mapping(source = "addressLine1", target = "address.addressLine1")
    @Mapping(source = "city", target = "address.city")
    @Mapping(source = "country", target = "address.country")
    @Mapping(source = "phone", target = "user.phone")
    @Mapping(source = "firstName", target = "user.firstName")
    @Mapping(source = "email", target = "user.email")
    WebOrder toEntity(WebOrderDto webOrderDto);

    @AfterMapping
    default void linkOrderQuantities(@MappingTarget WebOrder webOrder) {
        webOrder.getOrderQuantities().forEach(orderQuantity -> orderQuantity.setWebOrder(webOrder));
    }

    @InheritInverseConfiguration(name = "toEntity")
    WebOrderDto toDto(WebOrder webOrder);

    @InheritConfiguration(name = "toEntity")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    WebOrder partialUpdate(WebOrderDto webOrderDto, @MappingTarget WebOrder webOrder);
}