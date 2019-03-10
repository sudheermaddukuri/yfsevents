package com.yfs.application.yfseventsserver.controller;


import com.yfs.application.yfseventsserver.entity.CollegeRegistration;
import com.yfs.application.yfseventsserver.repository.CollegeRegistrationRepository;
import com.yfs.application.yfseventsserver.repository.MouRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
}
