package com.example.internetshop.mappers;

import com.example.internetshop.dto.AllCardInfoDto;
import com.example.internetshop.model.Inventory;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface AllCardInfoMapper {
    Inventory toEntity(AllCardInfoDto allCardInfoDto);

    AllCardInfoDto toDto(Inventory inventory);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Inventory partialUpdate(AllCardInfoDto allCardInfoDto, @MappingTarget Inventory inventory);
}