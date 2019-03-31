package com.yfs.application.yfseventsserver.controller;


import com.yfs.application.yfseventsserver.KeyValuePair;
import com.yfs.application.yfseventsserver.entity.PartnerNgo;
import com.yfs.application.yfseventsserver.entity.Volunteer;
import com.yfs.application.yfseventsserver.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping("/api")
public class VolunteerController {

    @Autowired
    VolunteerRepository volunteerRepository;

    @Autowired
    VolunteerInterestedAreaRepository volunteerInterestedAreaRepository;
    @Autowired
    VolunteerPreferredTimeRepository volunteerPreferredTimeRepository;



    @ResponseBody
    @GetMapping("/interestedAreasCategory")
    public Iterable<KeyValuePair> getInterestedAreasCategoryList(){
        Volunteer volunteer = new Volunteer();
        return volunteer.getInterestedAreasCategoryList();

    }
    @ResponseBody
    @GetMapping("/volunteer")
    public Iterable<Volunteer> getAllVolunteers() {
        return volunteerRepository.findAll();
    }

    @ResponseBody
    @GetMapping("/volunteer/{id}")
    public Optional<Volunteer> getVolunteer(@PathVariable Long id) {

        return  volunteerRepository.findById(id);
    }

    @ResponseBody
    @GetMapping("/volunteer/email")
    public ArrayList<String> getVolunteerEmails() {

        Iterable<Volunteer> volunteerData=volunteerRepository.findAll(Sort.by("email"));
        ArrayList<String> emailsVolunteers =new ArrayList<>();
        StreamSupport.stream(volunteerData.spliterator(), false).forEach(volunteer -> emailsVolunteers.add(volunteer.getEmail()));
        System.out.println(emailsVolunteers.toString());
        return emailsVolunteers;
    }

    @ResponseBody
    @GetMapping("/volunteer/{id}/formatted")
    public Map getVolunteerFormatted(@PathVariable Long id) {
        Optional<Volunteer> volunteer =  volunteerRepository.findById(id);
        Map output = new HashMap();

        if(volunteer.isPresent()) {
            Volunteer volunteerData = volunteer.get();

            Map address = new HashMap();
            address.put("locality", volunteerData.getLocality());
            address.put("city", volunteerData.getCity());
            address.put("pincode", volunteerData.getPincode());
            address.put("state", volunteerData.getState());

            Map personalInfo = new HashMap();
            personalInfo.put("firstName", volunteerData.getFirstName());
            personalInfo.put("lastName", volunteerData.getLastName());
            personalInfo.put("phonePrefix", volunteerData.getPhonePrefix());
            personalInfo.put("phoneNumber", volunteerData.getPhoneNumber());
            personalInfo.put("alternatePhonePrefix", volunteerData.getAlternatePhonePrefix());
            personalInfo.put("alternatePhoneNumber", volunteerData.getAlternatePhoneNumber());
            personalInfo.put("email", volunteerData.getEmail());
            personalInfo.put("alternateEmail", volunteerData.getAlternateEmail());
            Map interestedlist= new HashMap();
            List<Map> interestedAreasList=new ArrayList<>();
            volunteerData.getInterestedAreas().stream().forEach((interestedArea)-> {
                Map interested= new HashMap();
                interested.put("interestedArea",interestedArea.getInterestedArea());
                interested.put("id",interestedArea.getId());
                interestedAreasList.add(interested);
            });
            interestedlist.put("interestedAreas",interestedAreasList);
            output.put("address", address);
            output.put("personalInfo", personalInfo);
            output.put("additionalInfo",interestedlist);
        }

        return  output;
    }

    @ResponseBody
    @PostMapping("/volunteer")
    @Transactional
    public Volunteer saveVolunteer(@RequestBody Volunteer volunteer){

        if(volunteer.getId()!=0) {
            Optional<Volunteer> oldVolunteer = volunteerRepository.findById(volunteer.getId());
            if(oldVolunteer.isPresent()){
                Volunteer oldVolunteer1 = oldVolunteer.get();

                oldVolunteer1.getInterestedAreas().stream().forEach(interestedArea -> {
                    volunteerInterestedAreaRepository.delete(interestedArea.getId());
                    //TODO: update instead of Delete
                });
            }
        }
        volunteerInterestedAreaRepository.flush();

        Volunteer volunteer1 = volunteerRepository.save(volunteer);

        volunteer1.getInterestedAreas().stream().forEach((interestedArea)-> {
            interestedArea.setVolunteer(volunteer1);
            volunteerInterestedAreaRepository.save(interestedArea);
        });

     /*   volunteer1.getPreferredTimes().stream().forEach((preferredTime)-> {
            preferredTime.setVolunteer(volunteer1);
        volunteerPreferredTimeRepository.save(preferredTime);
        });*/
     return volunteer1;
    }


    @ResponseBody
    @PutMapping("/volunteer")
    public Volunteer updateVolunteer(@RequestBody Volunteer volunteer){
        return volunteerRepository.save(volunteer);
    }

    @DeleteMapping("volunteer/{id}")
    public boolean deleteVolunteer(@PathVariable Long id) {
        volunteerRepository.deleteById(id);
        return true;
    }
}
