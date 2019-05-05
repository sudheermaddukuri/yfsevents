package com.yfs.application.yfseventsserver.controller;

import com.yfs.application.yfseventsserver.entity.Volunteer;
import com.yfs.application.yfseventsserver.repository.VolunteerInterestedAreaRepository;
import com.yfs.application.yfseventsserver.repository.VolunteerRepository;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;

@Controller
@RequestMapping("/api")
public class BulkUploadController {

    @Autowired
    VolunteerRepository volunteerRepository;

    @Autowired
    VolunteerInterestedAreaRepository volunteerInterestedAreaRepository;

    @Autowired
    private static Logger logger = LoggerFactory.getLogger(BulkUploadController.class);

    @PostMapping("/bulk-upload")
    public ResponseEntity< String > handleFileUpload(@RequestParam("file") MultipartFile file) throws InvalidFormatException {
        logger.info("Posting Bulk Data");
        //ToDo: Set Response
        try {
            if(file.getOriginalFilename().endsWith(".xls") || file.getOriginalFilename().endsWith(".xlsx")) {
                if (!file.isEmpty()) {
                    Workbook workbook = new HSSFWorkbook(file.getInputStream());

                    Sheet sheet = workbook.getSheetAt(0);
                    if(sheet.getSheetName().equals("Volunteer")) {
                        DataFormatter dataFormatter = new DataFormatter();
                        for(Row row: sheet){
                            if(row.getRowNum()>2) {
                                Volunteer volunteer = new Volunteer();
                                volunteer.setFirstName(dataFormatter.formatCellValue(row.getCell(0)));
                                volunteer.setLastName(dataFormatter.formatCellValue(row.getCell(1)));
                                volunteer.setPhoneNumber(dataFormatter.formatCellValue(row.getCell(2)));
                                volunteer.setAlternatePhoneNumber(dataFormatter.formatCellValue(row.getCell(3)));
                                volunteer.setEmail(dataFormatter.formatCellValue(row.getCell(4)));
                                volunteer.setAlternateEmail(dataFormatter.formatCellValue(row.getCell(5)));
                                volunteer.setLocality(dataFormatter.formatCellValue(row.getCell(6)));
                                volunteer.setCity(dataFormatter.formatCellValue(row.getCell(7)));
                                volunteer.setState(dataFormatter.formatCellValue(row.getCell(8)));
                                volunteer.setPincode(dataFormatter.formatCellValue(row.getCell(9)));
                                //TODO:Save intrested Areas
//                                List<VolunteerInterestedArea> interestedAreas = new ArrayList<>();
//                                interestedAreas.add(dataFormatter.formatCellValue(row.getCell(10)));
//                                volunteer.setInterstedAreas();
//                                row.forEach(cell -> {
//                                  dataFormatter.formatCellValue(cell);
//                                });
                                Volunteer volunteer1 = volunteerRepository.save(volunteer);

                                //TODO: Handle null values for intrested areas
//                                volunteer1.getInterestedAreas().stream().forEach((interestedArea) -> {
//                                    interestedArea.setVolunteer(volunteer1);
//                                    volunteerInterestedAreaRepository.save(interestedArea);
//                                });
                            }
                        }

                    }else{
                        logger.error("Sheet Volunteer not found");
                    }
                }else{
                    //Http: 204
                    logger.error("Empty File");
                }
            }else{
                logger.error("Error in filename");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }

}
