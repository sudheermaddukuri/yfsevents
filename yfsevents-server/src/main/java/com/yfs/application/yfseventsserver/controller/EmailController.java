package com.yfs.application.yfseventsserver.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Controller
@RequestMapping("/sendEmail")
public class EmailController {
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
    public static boolean sendMail(Session session,String from, String to,String Subject,final String messageText)
    {
        try {
            // Create a default MimeMessage object.
            Message message = new MimeMessage(session);

            // Set From: header field of the header.
            message.setFrom(new InternetAddress(from));

            // Set To: header field of the header.
            message.setRecipients(Message.RecipientType.TO,
                InternetAddress.parse(to));

            // Set Subject: header field
            message.setSubject(Subject);

            // Now set the actual message
            message.setText(messageText);

            // Send message
            Transport.send(message);

            System.out.println("Sent message successfully....");
            return true;

        } catch (MessagingException e) {

            return false;
        }
    }

    public static Boolean sendMailController(String to,String Subject,String Content)
    {
        boolean result=false;
        String from = "rainatushar221995221995@gmail.com";
        String username = "rainatushar221995221995@gmail.com";
        String password = "youthforseva";
        String host = "smtp.gmail.com";

        Properties props = setProperties();
        Session session=createSession(props,username,password);

        result=sendMail(session,from,to,Subject,Content);
        System.out.println(result);


        return result;
    }

    @ResponseBody
    @PostMapping("/send")
            public String sendmail(@RequestBody String Text) {
       // return "You have successFully Submitte Data : "+text;
        System.out.println(Text);
        String to =Text.split("\"to\":\"")[1];
        to=to.split("\"")[0];
        String subject=Text.split("\"subject\":\"")[1];
        subject=subject.split("\"")[0];
        String text=Text.split("\"text\":\"")[1];
        text=text.split("\"")[0];
        System.out.println(to);
        System.out.println(subject);
        System.out.println(text);
        if(sendMailController(to, subject,text))
        return "{\"status\":\"sentmail\"}";
        else
            return "{\"status\":\"not able to send mail\"}";
    }
}
