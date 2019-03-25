package com.yfs.application.yfseventsserver.controller;


import com.yfs.application.yfseventsserver.entity.CollegeRegistration;
import com.yfs.application.yfseventsserver.entity.PartnerNgo;
import com.yfs.application.yfseventsserver.repository.CollegeRegistrationRepository;
import com.yfs.application.yfseventsserver.repository.MouRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Controller
@RequestMapping("/api")
public class CollegeRegistrationController {


    @Autowired
    private CollegeRegistrationRepository collegeRegistrationRepository;

    @Autowired
    private MouRepository mouRepository;

    @ResponseBody
    @PostMapping("/collegeregistration")
    public CollegeRegistration saveCollegeRegistration(@RequestBody CollegeRegistration collegeRegistration)
    {
        CollegeRegistration collegeRegistration1 = collegeRegistrationRepository.save(collegeRegistration);

        collegeRegistration1.getMouDetails().stream().forEach((mou)-> { mou.setCollegeRegistration(collegeRegistration1);
        mouRepository.save(mou);
        });
        return collegeRegistration1;
    }
    @ResponseBody
    @GetMapping("/collgeregistration/{id}")
    public Optional<CollegeRegistration> getCollegeRegistraition(@PathVariable Long id) {

        return  collegeRegistrationRepository.findById(id);
    }
    @ResponseBody
    @GetMapping("/collegeregistration")
    public Iterable<CollegeRegistration> getAllPartnerNgos() {
        return collegeRegistrationRepository.findAll();
    }

    @ResponseBody
    @GetMapping("/collegeregistration/{id}/formatted")
    public Map getCollegeRegistrationFormatted(@PathVariable Long id) {

        Optional<CollegeRegistration> collegeRegistration =  collegeRegistrationRepository.findById(id);
        Map output = new HashMap();

        if(collegeRegistration.isPresent()) {
            CollegeRegistration collreg = collegeRegistration.get();

            Map address = new HashMap();
            address.put("addressLine1", collreg.getAddressLine1());
            address.put("addressLine2", collreg.getAddressLine2());
            address.put("city", collreg.getCity());
            address.put("pincode", collreg.getPincode());
            address.put("state", collreg.getState());

            Map collegeDetails = new HashMap();
            collegeDetails.put("name", collreg.getName());
            collegeDetails.put("registrationId", collreg.getRegistrationId());


            List<Map> Mou = new ArrayList();

            collreg.getMouDetails().stream().forEach(moudetail -> {

                Map mou = new HashMap();
                mou.put("mouID", moudetail.getMouID());
                mou.put("mouStatus", moudetail.getMouStatus());
                mou.put("mouName", moudetail.getMouName());
                mou.put("noOfEvents", moudetail.getNoOfEvents());
                mou.put("fromDate", moudetail.getFromDate());
                mou.put("toDate", moudetail.getToDate());
                mou.put("comments", moudetail.getComments());

                Mou.add(mou);

            });

            output.put("collegeDetails", collegeDetails);
            output.put("address", address);
            output.put("mouDetails", Mou);

        }

        return  output;
    }
}
