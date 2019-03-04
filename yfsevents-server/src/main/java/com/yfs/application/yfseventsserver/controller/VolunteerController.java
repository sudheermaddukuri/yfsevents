package com.yfs.application.yfseventsserver.controller;


import com.yfs.application.yfseventsserver.entity.PartnerNgo;
import com.yfs.application.yfseventsserver.entity.Volunteer;
import com.yfs.application.yfseventsserver.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class VolunteerController {

    @Autowired
    VolunteerRepository volunteerRepository;

    @Autowired
    VolunteerInterestedAreaRepository volunteerInterestedAreaRepository;

    @Autowired
    VolunteerPreferredTimeRepository volunteerPreferredTimeRepository;


    @RequestMapping(value ="/volunteer-create", method = RequestMethod.POST)
    public void createVolunteer(@RequestBody Volunteer volunteer)  {

        Volunteer volunteer1 = volunteerRepository.save(volunteer);
/*
        volunteer1.getInterstedAreas().stream().forEach((interestedArea)-> {
            interestedArea.setVolunteer(volunteer1);
            volunteerInterestedAreaRepository.save(interestedArea);
        });

        volunteer1.getPreferredTimes().stream().forEach((preferredTime)-> {
            preferredTime.setVolunteer(volunteer1);
        volunteerPreferredTimeRepository.save(preferredTime);
        });*/
    }
}
