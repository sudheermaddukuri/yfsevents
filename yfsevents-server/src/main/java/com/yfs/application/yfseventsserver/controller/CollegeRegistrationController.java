package com.yfs.application.yfseventsserver.controller;


import com.yfs.application.yfseventsserver.entity.CollegeRegistration;
import com.yfs.application.yfseventsserver.entity.Mou;
import com.yfs.application.yfseventsserver.entity.PartnerNgo;
import com.yfs.application.yfseventsserver.repository.CollegeRegistrationRepository;
import com.yfs.application.yfseventsserver.repository.MouRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.*;

@Controller
@RequestMapping("/api")
public class CollegeRegistrationController {


    @Autowired
    private CollegeRegistrationRepository collegeRegistrationRepository;

    @Autowired
    private MouRepository mouRepository;

    @PersistenceContext
    EntityManager entityManager;
    @Transactional
    @ResponseBody
    @PostMapping("/collegeregistration")
    public CollegeRegistration saveCollegeRegistration(@RequestBody CollegeRegistration collegeRegistration)
    {
       if(collegeRegistration.getId()!=0) {
            Optional<CollegeRegistration> oldCollegeRegistration = collegeRegistrationRepository.findById(collegeRegistration.getId());
            if(oldCollegeRegistration.isPresent()){
                CollegeRegistration collegereg = oldCollegeRegistration.get();
                collegereg.getMouDetails().stream().forEach(mou -> {
                    mouRepository.delete(mou.getId());
                    //TODO: update instead of Delete
                });
            }
        }
        mouRepository.flush();

     /*  String muid=collegeRegistration.getMouDetails().get(0).getMouID();
       if(muid.equalsIgnoreCase("mid2"))
       {
           Mou mou = collegeRegistration.getMouDetails().get(0);
           //mou.setId(1);
          // entityManager.merge(mou);
           //collegeRegistration.getMouDetails().get(0).setId(1);
       }*/

        CollegeRegistration collegeRegistration1 = collegeRegistrationRepository.save(collegeRegistration);

        collegeRegistration1.getMouDetails().stream().forEach((mou)-> { mou.setCollegeRegistration(collegeRegistration1);
      //      entityManager.merge(mou);
        mouRepository.save(mou);
        //    entityManager.flush();
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

    @ResponseBody
    @GetMapping("/collegeregistration/list")
    public List<Object> getCollegeMouList(){
        return collegeRegistrationRepository.getCollegeMou();

    }
}
