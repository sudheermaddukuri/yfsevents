package com.yfs.application.yfseventsserver.controller;


import com.yfs.application.yfseventsserver.KeyValuePair;
import com.yfs.application.yfseventsserver.entity.InventoryData;
import com.yfs.application.yfseventsserver.repository.InventoryDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @ResponseBody
    @GetMapping("/list/{id}")
    public Optional<InventoryData> getInventoryDataById(@PathVariable Long id) {
        return inventoryDataRepository.findById(id);
    }

    @ResponseBody
    @GetMapping("/items/{eventCategory}")
    public List<Object> getItemsByEventCategory(@PathVariable String eventCategory) {
        return inventoryDataRepository.findItemsByEventCategory(eventCategory);
    }
    @ResponseBody
    @PutMapping("/list/{id}")
    public ResponseEntity<Object> updateInventoryData(@RequestBody InventoryData inventoryData, @PathVariable Long id){
        Optional<InventoryData> updateInventoryData = inventoryDataRepository.findById(id);
        if (!updateInventoryData.isPresent())
            return ResponseEntity.notFound().build();

        inventoryData.setId(id);

       inventoryDataRepository.save(inventoryData);

        return ResponseEntity.noContent().build();

    }



}
