package com.yfs.application.yfseventsserver.controller;


import com.yfs.application.yfseventsserver.entity.Event;
import com.yfs.application.yfseventsserver.repository.EventDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping("/event")
    public Event saveEvent(@RequestBody Event event){
        System.out.println(event.toString());
        return eventDataRepository.save(event);
    }

    @ResponseBody
    @GetMapping("/event/{id}")
    public Optional<Event> getEventById(@PathVariable Long id) {
        return eventDataRepository.findById(id);
    }

    @ResponseBody
    @PutMapping("/event/{id}")
    public ResponseEntity<Object> updateEvent(@RequestBody Event event, @PathVariable Long Id){
        Optional<Event> updateEventData = eventDataRepository.findById(Id);
        if (!updateEventData.isPresent())
            return ResponseEntity.notFound().build();

        event.setId(Id);

        eventDataRepository.save(event);

        return ResponseEntity.noContent().build();

    }



}
