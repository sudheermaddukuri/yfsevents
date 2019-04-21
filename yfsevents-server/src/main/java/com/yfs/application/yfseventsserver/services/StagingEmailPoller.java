package com.yfs.application.yfseventsserver.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.yfs.application.yfseventsserver.controller.EmailController;
import com.yfs.application.yfseventsserver.entity.Email;
import com.yfs.application.yfseventsserver.entity.StagingEmail;
import com.yfs.application.yfseventsserver.entity.VolunteersAccepted;
import com.yfs.application.yfseventsserver.model.EmailStatus;
import com.yfs.application.yfseventsserver.repository.StagingEmailDataRepository;
import com.yfs.application.yfseventsserver.repository.VolunteerRepository;
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
import java.util.Date;
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

    private static Logger logger = LoggerFactory.getLogger(StagingEmailPoller.class);

    //@Scheduled(fixedDelay = 1000 * 30, initialDelay = 1000*1)
    public void processStagingEmail() {

        //TODO: If this the result set it too huge then leverage pagination
        List<StagingEmail> stagingEmails = stagingEmailDataRepository.getStagingEmailsEligibleToProcess(maxRetryCountAllowed);

        if(CollectionUtils.isEmpty(stagingEmails)){
            logger.info("No pending staging mail to be processed...");
            return;
        }

        stagingEmails.parallelStream().forEach(i -> processEmail(i));


    }

    @Transactional
    private void processEmail(StagingEmail stagingEmail) {
        final List<Email> filedEmailList = new ArrayList<>();
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
                    boolean isEmailSent = EmailController.sendMailController(emailId,email.getCc(),email.getBcc(),email.getSubject(),email.getText());
                    if (isEmailSent) {
                        volunteersAccepted.setStatus(VolunteersAccepted.EmailNotificationStatus.SENT);
                        volunteersAcceptedRepository.save(volunteersAccepted);
                    }else{
                        volunteersAccepted.setStatus(VolunteersAccepted.EmailNotificationStatus.NOT_SENT);
                        volunteersAcceptedRepository.save(volunteersAccepted);
                        filedEmailList.add(email);
                    }
                });

                stagingEmail.setStatus(EmailStatus.IN_PROGRESS);
                stagingEmailDataRepository.save(stagingEmail);

            } else {
               // List<VolunteersAccepted> volunteersAcceptedList = getVolunteersAcceptedList();
                List<VolunteersAccepted> volunteersAcceptedList = volunteersAcceptedRepository.getAllByEmailNotSent();
                Email email = objectMapper.readValue(stagingEmail.getPayload(), Email.class);
                volunteersAcceptedList.stream().forEach(volunteersAccepted -> {
                    String emailId = volunteersAccepted.getMailId();
                    logger.info("processEmail Retry[{}]:: About to send email to[{}] with subject[{}]", retryCount, emailId,email.getSubject());
                    boolean isEmailSent = EmailController.sendMailController(emailId,email.getCc(),email.getBcc(),email.getSubject(),email.getText());

                    if (isEmailSent) {
                        volunteersAccepted.setStatus(VolunteersAccepted.EmailNotificationStatus.SENT);
                        volunteersAcceptedRepository.save(volunteersAccepted);
                    }else{
                        filedEmailList.add(email);

                        if(retryCount == maxRetryCountAllowed){
                            volunteersAccepted.setStatus(VolunteersAccepted.EmailNotificationStatus.FAILED);
                            volunteersAcceptedRepository.save(volunteersAccepted);
                        }
                    }
                });

            }


            stagingEmail.setRetryCount(retryCount);
            if(CollectionUtils.isEmpty(filedEmailList)){
                stagingEmail.setStatus(EmailStatus.COMPLETED);
            }else if(retryCount == maxRetryCountAllowed){
                stagingEmail.setStatus(EmailStatus.FAILED);
            }

            stagingEmailDataRepository.save(stagingEmail);
        }catch(Exception e){
            logger.error("Failed to process stagingEmail[{}] with exception[{}]",stagingEmail,e);
        }
    }
}
