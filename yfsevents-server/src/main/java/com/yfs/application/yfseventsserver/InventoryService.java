package com.yfs.application.yfseventsserver;

import com.yfs.application.yfseventsserver.entity.InventoryData;
import com.yfs.application.yfseventsserver.repository.InventoryDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InventoryService {

    @Autowired
    InventoryDataRepository inventoryDataRepository;
    public InventoryData save(InventoryData inventoryData){
        return inventoryDataRepository.save(inventoryData);
    }
}
