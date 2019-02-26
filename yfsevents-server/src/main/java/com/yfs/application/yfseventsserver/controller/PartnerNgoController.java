package com.yfs.application.yfseventsserver.controller;


import com.yfs.application.yfseventsserver.entity.AuthorizedPerson;
import com.yfs.application.yfseventsserver.entity.PartnerNgo;
import com.yfs.application.yfseventsserver.repository.AuthorizedPersonRepository;
import com.yfs.application.yfseventsserver.repository.PartnerNgoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
public class PartnerNgoController {

    @Autowired
    PartnerNgoRepository partnerNgoRepository;

    @Autowired
    AuthorizedPersonRepository authorizedPersonRepository;


    @RequestMapping(value ="/partner-ngo", method = RequestMethod.POST)
    public void createPartnerNgo(@RequestBody PartnerNgo partnerNgo)  {


        PartnerNgo partnerNgo1 = partnerNgoRepository.save(partnerNgo);

        partnerNgo1.getAuthorizedPerson().stream().forEach((auth)-> { auth.setPartnerNgo(partnerNgo1);
        authorizedPersonRepository.save(auth);});
    }
}
