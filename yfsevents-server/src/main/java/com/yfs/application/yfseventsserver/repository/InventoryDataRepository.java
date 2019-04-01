package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.InventoryData;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "inventorydata",path = "inventorydata")
public interface InventoryDataRepository extends PagingAndSortingRepository<InventoryData,Long> {
    @Query("SELECT i.itemName FROM InventoryData i where i.eventCategory = :eventCategory")
    List<Object> findItemsByEventCategory(@Param("eventCategory") String eventCategory);
}
