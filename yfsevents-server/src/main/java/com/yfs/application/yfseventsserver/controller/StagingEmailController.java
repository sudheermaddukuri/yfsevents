package com.yfs.application.yfseventsserver.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.yfs.application.yfseventsserver.entity.Email;
import com.yfs.application.yfseventsserver.entity.StagingEmail;
import com.yfs.application.yfseventsserver.model.EmailStatus;
import com.yfs.application.yfseventsserver.repository.StagingEmailDataRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/staging/email")
public class StagingEmailController {

    @Autowired
    StagingEmailDataRepository stagingEmailDataRepository;

    @Autowired
    ObjectMapper objectMapper;

    private static Logger logger = LoggerFactory.getLogger(StagingEmailController.class);

    @PostMapping("save")
    public ResponseEntity<StagingEmail> saveStagingEmail(@RequestBody Email email){
        ResponseEntity responseEntity = null;
        email.setText(createContent(email.getText(),"NGOName","eventName",
            "startTime","enTime"));
        List<StagingEmail> stagingEmailList = stagingEmailDataRepository.getStagingEmailByEventId(email.getEventId());
       if(!CollectionUtils.isEmpty(stagingEmailList)){
           StagingEmail stagingEmail = new StagingEmail();
           stagingEmail.setReason("Unable to perform Send Email action. Please try again later. Reason: Previous email notifications are in queue for eventId["+email.getEventId()+"]");
           responseEntity=ResponseEntity.status(412).body(null);
       }else{
           try {
               String payload = objectMapper.writeValueAsString(email);
               StagingEmail stagingEmail = new StagingEmail(email.getEventId(), payload, EmailStatus.NOT_STARTED, 0, new Date(), new Date(), "ADMIN", "ADMIN");
               stagingEmailDataRepository.save(stagingEmail);
               stagingEmail.setReason("Email notification is successfully added to backlog/staging database");
               responseEntity = ResponseEntity.ok().body(email);
           }catch (Exception e){
               logger.error("Unable to parse/save input to database. exception[{}]",e);
               StagingEmail stagingEmail = new StagingEmail();
               stagingEmail.setReason("Unable to parse/save input to database. Please try again later");
               responseEntity=ResponseEntity.status(406).body(null);
           }
       }

        return responseEntity;

    }
    public String createContent(String message,
                                String ngoName,
                                String eventName,
                                String eventStartTime,
                                String eventEndTime)
    {
        String s="<!DOCTYPE html>\n" +
            "<html>\n" +
            "<head>\n" +
            "<style>\n" +
            "</style>\n" +
            "</head>\n" +
            "<body>\n" +
            "\n" +
            "<h2>We require your presence</h2>\n" +
            "<p>Here are the event Details</p>\n" +
            "\n" +
            "<table style=\"width:100%;border:1px solid black\">\n" +
            "  <tr style=\"border:1px solid black\">\n" +
            "    <td style=\"border:1px solid black\">NGO Name</td>\n" +
            "    <td style=\"border:1px solid black\">"+ngoName+"</td>\n" +
            "  </tr>\n" +
            "  <tr style=\"border:1px solid black\">\n" +
            "    <td style=\"border:1px solid black\">Event name</td>\n" +
            "    <td style=\"border:1px solid black\">"+eventName+"</td>\n" +
            "  </tr>\n" +
            "  <tr style=\"border:1px solid black\">\n" +
            "    <td style=\"border:1px solid black\">Event Start Time</td>\n" +
            "    <td style=\"border:1px solid black\">"+eventStartTime+"</td>\n" +
            "  </tr>\n" +
            "  <tr style=\"border:1px solid black\">\n" +
            "    <td style=\"border:1px solid black\">Event End Time</td>\n" +
            "    <td style=\"border:1px solid black\">"+eventEndTime+"</td>\n" +
            "  </tr>\n" +
            "</table>\n" +
            "\n" +
            "<h1>Based on our filters we think that this event may be something  of your intrest.</h1>\n" +
            "\n" +
            "\n" +
            "After accepting , if you feel You wont be able to make to the event ,Please tell us.<br><br>\n" +
            "\n" +
            "<b><i>If there are any changes in schedule from our side we will let you know</i></b>.\n" +
            "<br>\n" +
            "<br>\n" +
            "\n" +
            "\n" +
            message;
        return s;
    }
}
