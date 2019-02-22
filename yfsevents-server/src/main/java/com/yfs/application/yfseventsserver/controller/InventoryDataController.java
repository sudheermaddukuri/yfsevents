package com.yfs.application.yfseventsserver.controller;


import com.yfs.application.yfseventsserver.InventoryService;
import com.yfs.application.yfseventsserver.entity.InventoryData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.awt.*;

@Controller
@RequestMapping("/inventorydata")

public class InventoryDataController {
    @Autowired
    InventoryService inventoryService;

    @RequestMapping(value="/",method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<InventoryData> saveInventoryData(@RequestBody InventoryData inventoryData){
        InventoryData savedInventoryData = inventoryService.save(inventoryData);
        if(savedInventoryData != null){
            return new ResponseEntity<InventoryData>(savedInventoryData, HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<InventoryData>(savedInventoryData,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
