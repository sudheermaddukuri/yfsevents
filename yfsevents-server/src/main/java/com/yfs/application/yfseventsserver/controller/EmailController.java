package com.yfs.application.yfseventsserver.controller;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.yfs.application.yfseventsserver.entity.*;
import com.yfs.application.yfseventsserver.repository.EventDataRepository;
import com.yfs.application.yfseventsserver.repository.VolunteerRepository;
import com.yfs.application.yfseventsserver.repository.VolunteersAcceptedRepository;
//import netscape.javascript.JSObject;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.lang.reflect.Array;
import java.util.*;
import java.util.stream.Stream;

@Controller
@RequestMapping("/sendEmail")
public class EmailController {

    @Autowired
    Email email;

    @Autowired
    VolunteersAcceptedRepository  volunteersAcceptedRepository;

    @Autowired
    StagingEmailController stagingEmailController;


    static String host;

    static String userName;


    static String password;


    static String emailSender;

    @Value("${email.password1}")
    public void setpassword(String un) {
        password = un;
    }
    @Value("${email.host1}")
    public void sethost(String un) {
        host = un;
    }
    @Value("${email.userName}")
    public void setUserName(String un) {
        userName = un;
    }
    @Value("${email.sender1}")
    public void setSener(String un) {
        emailSender = un;
    }


    private static Logger logger = LoggerFactory.getLogger(EmailController.class);
    public static Properties setProperties()
    {
        String host = "smtp.gmail.com";
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", "587");
        return props;
    }
    public static Session createSession(Properties props, final String username, final String password)
    {
        Session session = Session.getInstance(props,
            new javax.mail.Authenticator() {
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(username, password);
                }
            });
        return session;
    }

    public static boolean sendMail(Session session,String from, String to,String cc, String bcc,String Subject,final String messageText)
    {
        try {
            // Create a default MimeMessage object.
            Message message = new MimeMessage(session);
            // Set From: header field of the header.
            message.setFrom(new InternetAddress(from));
            // Set To: header field of the header.
            message.setRecipients(Message.RecipientType.TO,
                InternetAddress.parse(to));
            message.setRecipients(Message.RecipientType.CC,
                InternetAddress.parse(cc));
            message.setRecipients(Message.RecipientType.BCC,
                InternetAddress.parse(bcc));
            // Set Subject: header field
            message.setSubject(Subject);
            message.setContent(messageText,"text/html");

            // Send message
            Transport.send(message);

            logger.info("Sent message successfully....");
            return true;

        } catch (MessagingException e) {

            logger.error("Failed to send mail[{}] with exception[{}]",to, e);
            return false;
        }
    }

    public static Boolean sendMailController(String to,String cc,String bcc,String Subject,String Content)
    {
        System.out.println(to);
        boolean result=false;

        String from = emailSender;
        String username = userName;
        String password1 = password;
        String host1 = host;
        Properties props = setProperties();
        System.out.println(from);
        System.out.println(username);
        System.out.println(password1);
        Session session=createSession(props,username,password1);

        result=sendMail(session,from,to,cc,bcc,Subject,Content);
        System.out.println(result);


        return result;
    }
    public String createUrl(String emailId,String eventId)
    {
        String uniqueUrl="";
        uniqueUrl=uniqueUrl+"http://localhost:8080/register/"+emailId.split("@")[0]+"/"+emailId.split("@")[1]+"/"+eventId;
        System.out.println("Unique Link is "+uniqueUrl);
        return uniqueUrl;
    }
    public  boolean sendMailToall(Email email)
    {
        System.out.println("Sending mail to all");
        ResponseEntity<StagingEmail> emailResponseEntity = stagingEmailController.saveStagingEmail(email);
        try{
            return emailResponseEntity.getStatusCode().equals(HttpStatus.OK);}
        catch(Exception e)
        {
            return emailResponseEntity.getStatusCode().equals(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    public List<String> parseString(String to)
    {
        List<String> toMultiple;
        String[] toMultipleString=to.split(",");
        toMultiple= Arrays.asList(toMultipleString);
        return toMultiple;
    }

    public void insertVolunteerValuesToDB(String email,Long eventId ,Boolean response)
    {
        if(response==false)
            return;
        //System.out.println(email+" "+eventId+" "+response);
        VolunteersAccepted volunteersAccepted= new VolunteersAccepted();
        volunteersAccepted.setAccepted(false);
        volunteersAccepted.setMailId(email);
        volunteersAccepted.setEventId(eventId);
        System.out.println("mail is :"+volunteersAccepted.getMailId());
        System.out.println("Try");

        //System.out.println(volunteersAcceptedRepository.getAccepteVolunteersCount(123L));
//        VolunteersAccepted v=volunteersAcceptedRepository.save(volunteersAccepted);
    }


    @PostMapping("/send")
            public @ResponseBody HashMap<String,Boolean> sendmail(@RequestBody Email em) {
        System.out.println("here");
        System.out.println(em.toString());
        System.out.println(em.getTo());
        System.out.println(em.getSubject());
        em.setToMultiple(parseString(em.getTo()));
        Boolean result=sendMailToall(em);
        HashMap<String ,Boolean> hm= new HashMap<>();
        hm.put("result",result);
        return hm;
    }


}
