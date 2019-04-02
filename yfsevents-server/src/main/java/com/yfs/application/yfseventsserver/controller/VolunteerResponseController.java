package com.yfs.application.yfseventsserver.controller;

import com.yfs.application.yfseventsserver.entity.Volunteer;
import com.yfs.application.yfseventsserver.entity.VolunteersAccepted;
import com.yfs.application.yfseventsserver.repository.VolunteersAcceptedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class VolunteerResponseController {
  @Autowired
    VolunteersAcceptedRepository volunteersAcceptedRepository;
  @Autowired
  EmailController emailController;

    @RequestMapping(value="/register/{email}/{com}/{eventId}", method= RequestMethod.GET)
   public @ResponseBody String getResponse(@PathVariable("email") String email,@PathVariable("com") String com,@PathVariable("eventId") Long eventid)
   {
       System.out.println(email+com+" "+eventid);
       String emailID=email+"@"+com;
       System.out.println(emailID);
        int exist=volunteersAcceptedRepository.checkEmailIdEventId(emailID,eventid);
        System.out.println(exist);
       if(exist==1)
       {
           volunteersAcceptedRepository.updateAccepted(emailID,eventid);
           return "You are registered successfully";
       }
       return "Sorry. You are not eligible for this event";
   }
   @RequestMapping(value="/set",method = RequestMethod.GET)
    public String set()
   {
       emailController.fun();
       return "Done";
   }

    @RequestMapping(value="/getAccepted/{eventId}",method = RequestMethod.GET)
    public @ResponseBody
    List<String> getAcepted(@PathVariable("eventId") Long eventId)
    {
        List<String> accepted=volunteersAcceptedRepository.getEmailsOfAcceptedVolunteers(eventId);
        return accepted;
    }
    @RequestMapping(value="/getAcceptedCount/{eventId}",method = RequestMethod.GET)
    public @ResponseBody
    Long getAceptedCount(@PathVariable("eventId") Long eventId)
    {
        Long accepted=volunteersAcceptedRepository.getCountOfAccepteVolunteers(eventId);
        return accepted;

    }
    @RequestMapping(value="/getNotAccepted/{eventId}",method = RequestMethod.GET)
    public @ResponseBody
    List<String> getNotAcepted(@PathVariable("eventId") Long eventId)
    {
        List<String> accepted=volunteersAcceptedRepository.getEmailsOfAcceptedVolunteers(eventId);
        return accepted;
    }
    @RequestMapping(value="/getNotAcceptedCount/{eventId}",method = RequestMethod.GET)
    public @ResponseBody
    Long getNotAceptedCount(@PathVariable("eventId") Long eventId)
    {
        Long accepted=volunteersAcceptedRepository.getCountOfNotAccepteVolunteers(eventId);
        return accepted;

    }
    @RequestMapping(value="/get/{eventId}",method = RequestMethod.GET)
    public @ResponseBody
    List<String> getAll(@PathVariable("eventId") Long eventId)
    {
        List<String> accepted=volunteersAcceptedRepository.getEmailsOfVolunteers(eventId);
        return accepted;
    }
    @RequestMapping(value="/getCount/{eventId}",method = RequestMethod.GET)
    public @ResponseBody
    Long getAllCount(@PathVariable("eventId") Long eventId)
    {
        Long accepted=volunteersAcceptedRepository.getCountOfVolunteers(eventId);
        return accepted;
    }
}
