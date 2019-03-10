package com.yfs.application.yfseventsserver.controller;


import com.yfs.application.yfseventsserver.entity.Event;
import com.yfs.application.yfseventsserver.repository.EventDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api")
public class EventController {

    @Autowired
    private EventDataRepository eventDataRepository;

    @ResponseBody
    @GetMapping("/events")
    public Iterable<Event> getEvents() {return eventDataRepository.findAll();}

    @ResponseBody
    @PostMapping("/event")
    public Event saveEvent(@RequestBody Event event){
        System.out.println(event.toString());
        return eventDataRepository.save(event);
    }



}
