package com.yfs.application.yfseventsserver.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class VolunteerResponseController {


    @RequestMapping(value="/{email}/{com}/{eventId}", method= RequestMethod.GET)
   public void getResponse(@PathVariable("email") String email,@PathVariable("com") String com,@PathVariable("eventId") String eventid)
   {
       System.out.println(email+com+" "+eventid);
       EmailController emailController= new EmailController();
       emailController.fun();
   }

}
