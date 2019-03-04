package com.yfs.application.yfseventsserver.controller;


import com.yfs.application.yfseventsserver.KeyValuePair;
import com.yfs.application.yfseventsserver.entity.InventoryData;
import com.yfs.application.yfseventsserver.repository.InventoryDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/inventorydata")

public class InventoryDataController {
    @Autowired
    InventoryDataRepository inventoryDataRepository;

    @ResponseBody
    @PostMapping("/list")
    public InventoryData saveInventoryData(@RequestBody InventoryData inventoryData){
        InventoryData savedInventoryData = inventoryDataRepository.save(inventoryData);
        return savedInventoryData;

    }

    @ResponseBody
    @GetMapping("/list")
    public Iterable<InventoryData> getInventoryData(){
        return inventoryDataRepository.findAll();

    }
    @ResponseBody
    @GetMapping("/eventcategory")
    public Iterable<KeyValuePair> getEventCategoryList(){
         InventoryData inventoryData = new InventoryData();
         return inventoryData.getEventCategoryList();

    }



}
