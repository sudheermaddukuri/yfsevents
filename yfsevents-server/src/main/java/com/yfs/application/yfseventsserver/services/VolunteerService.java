package com.yfs.application.yfseventsserver.services;

import com.yfs.application.yfseventsserver.entity.Volunteer;
import com.yfs.application.yfseventsserver.repository.VolunteerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class VolunteerService {

    @Autowired
    VolunteerRepository volunteerRepository;

    public boolean isPresent(Volunteer volunteer){
//        TODO based on email tentatively.
        if(!volunteerRepository.findVolunteerWithEmail(volunteer.getEmail()).isEmpty())
            return true;
        return false;
    }

    //TODO: Move save logic here from Volunteer Controller
}
