package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.InventoryData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "",path = "inventorydata")
public interface InventoryDataRepository extends CrudRepository<InventoryData,Long> {
}
