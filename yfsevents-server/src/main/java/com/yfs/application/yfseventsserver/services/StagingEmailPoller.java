package com.yfs.application.yfseventsserver.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.yfs.application.yfseventsserver.controller.EmailController;
import com.yfs.application.yfseventsserver.entity.Email;
import com.yfs.application.yfseventsserver.entity.Event;
import com.yfs.application.yfseventsserver.entity.StagingEmail;
import com.yfs.application.yfseventsserver.entity.VolunteersAccepted;
import com.yfs.application.yfseventsserver.model.EmailStatus;
import com.yfs.application.yfseventsserver.repository.EventDataRepository;
import com.yfs.application.yfseventsserver.repository.StagingEmailDataRepository;
import com.yfs.application.yfseventsserver.repository.VolunteersAcceptedRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

@Service
public class StagingEmailPoller {

    @Value("${email.maxRetryCount}")
    private int maxRetryCountAllowed;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    StagingEmailDataRepository stagingEmailDataRepository;

    @Autowired
    VolunteersAcceptedRepository volunteersAcceptedRepository;

    @Autowired
    EventDataRepository eventDataRepository;

    @Value("${baseUrl}")
    String baseUrl;

    private static Logger logger = LoggerFactory.getLogger(StagingEmailPoller.class);

    @Scheduled(fixedDelay = 1000 * 30, initialDelay = 1000*1)
    public void processStagingEmail() {

        //TODO: If this the result set it too huge then leverage pagination
        List<StagingEmail> stagingEmails = stagingEmailDataRepository.getStagingEmailsEligibleToProcess(maxRetryCountAllowed);

        if(CollectionUtils.isEmpty(stagingEmails)){
            logger.info("No pending staging mail to be processed...");
            return;
        }
//
//        stagingEmails.parallelStream().forEach(i -> processEmail(i));
        stagingEmails.forEach(StagingEmail->{processEmail(StagingEmail);});


    }

    @Transactional
    private void processEmail(StagingEmail stagingEmail) {
        final List<Email> failedEmailList = new ArrayList<>();
        if (null == stagingEmail) {
            logger.info("stagingEmail is null hence skipping");
        }

        int retryCount = stagingEmail.getRetryCount()+1;
        try {
            if (stagingEmail.getStatus().equals(EmailStatus.NOT_STARTED) && null != stagingEmail.getPayload() && !StringUtils.isEmpty(stagingEmail.getPayload())) {
                Email email = objectMapper.readValue(stagingEmail.getPayload(), Email.class);
                String[] toList = email.getTo().split(",");
                Stream.of(toList).forEach(emailId -> {
                    VolunteersAccepted volunteersAccepted = new VolunteersAccepted(stagingEmail.getEventId(), emailId, false, VolunteersAccepted.EmailNotificationStatus.NOT_SENT);
                    logger.info("About to send email to [{}] with subject[{}]", emailId,email.getSubject());

                   boolean isEmailSent = EmailController.sendMailController(emailId,email.getCc(),email.getBcc(),email.getSubject(),createUrl(email.getText(),emailId,email.getEventId().toString()));
                    if (isEmailSent) {
                        volunteersAccepted.setStatus(VolunteersAccepted.EmailNotificationStatus.SENT);
                        volunteersAcceptedRepository.save(volunteersAccepted);
                    }else{
                        volunteersAccepted.setStatus(VolunteersAccepted.EmailNotificationStatus.NOT_SENT);
                        volunteersAcceptedRepository.save(volunteersAccepted);
                        failedEmailList.add(email);
                    }
                });

                stagingEmail.setStatus(EmailStatus.IN_PROGRESS);

            } else {
               // List<VolunteersAccepted> volunteersAcceptedList = getVolunteersAcceptedList();
                List<VolunteersAccepted> volunteersAcceptedList = volunteersAcceptedRepository.getUnsentVolunteersByEventId(stagingEmail.getEventId());

                if(! CollectionUtils.isEmpty(volunteersAcceptedList)) {
                    Email email = objectMapper.readValue(stagingEmail.getPayload(), Email.class);
                    volunteersAcceptedList.stream().forEach(volunteersAccepted -> {
                        String emailId = volunteersAccepted.getMailId();
                        logger.info("processEmail Retry[{}]:: About to send email to[{}] with subject[{}]", retryCount, emailId, email.getSubject());
                        boolean isEmailSent = EmailController.sendMailController(emailId, email.getCc(), email.getBcc(), email.getSubject(), email.getText());
                        if (isEmailSent) {
                            volunteersAccepted.setStatus(VolunteersAccepted.EmailNotificationStatus.SENT);
                            volunteersAcceptedRepository.save(volunteersAccepted);
                        } else {
                            failedEmailList.add(email);

                            if (retryCount == maxRetryCountAllowed) {
                                volunteersAccepted.setStatus(VolunteersAccepted.EmailNotificationStatus.FAILED);
                                volunteersAcceptedRepository.save(volunteersAccepted);
                            }
                        }
                    });
                }

            }


            stagingEmail.setRetryCount(retryCount);
            if(CollectionUtils.isEmpty(failedEmailList)){
                stagingEmail.setStatus(EmailStatus.COMPLETED);
            }else if(retryCount == maxRetryCountAllowed){
                stagingEmail.setStatus(EmailStatus.FAILED);
            }

            stagingEmailDataRepository.save(stagingEmail);
        }catch(Exception e){
            logger.error("Failed to process stagingEmail[{}] with exception[{}]",stagingEmail,e);
        }
    }


    public String createUrl(String content,String emailId,String eventId)
    {
        String uniqueUrl="";
        uniqueUrl=uniqueUrl+baseUrl+emailId.split("@")[0]+"/"+emailId.split("@")[1]+"/"+eventId;
        System.out.println("Unique Link is "+uniqueUrl);
        content=content+"Please click on the the following link to accept our invitation.<br> \n" +
            "<a href=\""+uniqueUrl+"\">Click here to accept invitation</a><br><br>\n";
        content=content+
            "For More information contact do us at :<br>\n" +
            "Website: https://www.youthforseva.org<br>\n" +
            "Ph Number: 7878787834<br>\n" +
            "email:     abc@gmail.com\n" +

            "</body>\n" +
            "</html>\n";

        return content;
    }
}
