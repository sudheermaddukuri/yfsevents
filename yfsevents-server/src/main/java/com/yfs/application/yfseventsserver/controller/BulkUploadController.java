package com.yfs.application.yfseventsserver.controller;

import com.yfs.application.yfseventsserver.entity.BulkVolunteer;
import com.yfs.application.yfseventsserver.entity.Volunteer;
import com.yfs.application.yfseventsserver.entity.VolunteerInterestedArea;
import com.yfs.application.yfseventsserver.repository.VolunteerInterestedAreaRepository;
import com.yfs.application.yfseventsserver.repository.VolunteerRepository;
import com.yfs.application.yfseventsserver.services.VolunteerService;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

@Controller
@RequestMapping("/api")
public class BulkUploadController {

    @Autowired
    VolunteerRepository volunteerRepository;

    @Autowired
    VolunteerInterestedAreaRepository volunteerInterestedAreaRepository;

    @Autowired
    VolunteerService volunteerService;

    @Autowired
    private static Logger logger = LoggerFactory.getLogger(BulkUploadController.class);

    private final Integer maxInterestedAreas = 5;
    private final Integer baseInterestredAreasIndex = 10;

    @PostMapping("/bulk/upload")
    public ResponseEntity<List<BulkVolunteer>> extractFileData(@RequestParam("file") MultipartFile file) throws InvalidFormatException {
        logger.info("Posting Bulk Data");
        //ToDo: Set Response
        try {

            List<BulkVolunteer> bulkVolunteers = new ArrayList<>();
            if(file.getOriginalFilename().endsWith(".xls") || file.getOriginalFilename().endsWith(".xlsx")) {
                if (!file.isEmpty()) {

//                    Ref: https://www.callicoder.com/java-read-excel-file-apache-poi/
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

                                List<VolunteerInterestedArea> interestedAreas = new ArrayList<>();
                                for(Integer index=0; index<maxInterestedAreas; index++){
                                    VolunteerInterestedArea volunteerInterestedArea = new VolunteerInterestedArea();
                                    String data =dataFormatter.formatCellValue(row.getCell(baseInterestredAreasIndex + index));
                                    if(!data.isEmpty()) {
                                        volunteerInterestedArea.setInterestedArea(data);
                                        interestedAreas.add(volunteerInterestedArea);
                                    }
                                }
                                volunteer.setInterstedAreas(interestedAreas);

                                BulkVolunteer bulkVolunteer = new BulkVolunteer();
                                List<String> errors = new ArrayList<>();
                                bulkVolunteer.setVolunteer(volunteer);

                                //TODO: Move below check to Volunteer Service
                                if(volunteerService.isPresent(volunteer)) {
                                    errors.add("Volunteer Already Present");
                                }

                                bulkVolunteer.setErrors(errors);
                                bulkVolunteers.add(bulkVolunteer);
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
            return new ResponseEntity<List<BulkVolunteer>>(bulkVolunteers, HttpStatus.OK);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }

    @PostMapping("/bulk/save")
    public ResponseEntity<String> saveBulkData(@RequestParam("bulkVolunteer") List<BulkVolunteer> bulkVolunteerList){
        AtomicReference<Long> count= new AtomicReference<>(0L);
        bulkVolunteerList.forEach(bulkVolunteer -> {
            //TODO: CAll Save Service Directly.
            if(bulkVolunteer.getErrors().isEmpty()) {
                Volunteer volunteer1 = volunteerRepository.save(bulkVolunteer.getVolunteer());
                volunteer1.getInterestedAreas().stream().forEach((interestedArea) -> {
                    interestedArea.setVolunteer(volunteer1);
                    volunteerInterestedAreaRepository.save(interestedArea);
                });
                count.getAndSet(count.get() + 1);
            }
        });
        return ResponseEntity.ok(count.toString());
//        return new ResponseEntity<String>(count.toString(), HttpStatus.OK);
    }

}
