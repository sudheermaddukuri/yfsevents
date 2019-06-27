package com.yfs.application.yfseventsserver.controller;


import com.yfs.application.yfseventsserver.entity.Event;
import com.yfs.application.yfseventsserver.repository.EventDataRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;

import java.util.Optional;

@Controller
@RequestMapping("/api")
public class EventController {

    @Autowired
    private EventDataRepository eventDataRepository;

    @ResponseBody
    @GetMapping("/events")
    public Iterable<Event> getEvents() {return eventDataRepository.findAll();}

    @ResponseBody
    @GetMapping("/registered-events")
    public Iterable<Event> getRegisteredEvents() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = ((UserDetails)auth.getPrincipal()). getUsername();
        return eventDataRepository.getRegisteredEvents(username);
    }

    @ResponseBody
    @PostMapping("/event")
    public Event saveEvent(@RequestBody Event event){
        System.out.println(event.toString());
        return eventDataRepository.save(event);
    }

    @ResponseBody
    @GetMapping("/event/{id}")
    public Event getEventById(@PathVariable Long id) {
        return eventDataRepository.findById(id).orElse(null);
    }

    @ResponseBody
    @PostMapping("/event/update")
    public Event updateEvent(@RequestBody Event event) throws NotFoundException {
        Optional<Event> updateEventData = eventDataRepository.findById(event.getId());
        if (!updateEventData.isPresent())
            throw new NotFoundException("No such Event");

        //event.setId(Id);



        return  eventDataRepository.save(event);

    }



}
