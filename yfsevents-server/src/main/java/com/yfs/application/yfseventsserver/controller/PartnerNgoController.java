package com.yfs.application.yfseventsserver.controller;

import com.yfs.application.yfseventsserver.entity.PartnerNgo;
import com.yfs.application.yfseventsserver.repository.AuthorizedPersonRepository;
import com.yfs.application.yfseventsserver.repository.PartnerNgoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Controller
@RequestMapping("/api")
public class PartnerNgoController {

    @Autowired
    private static Logger logger = LoggerFactory.getLogger(PartnerNgoController.class);

    @Autowired
    private PartnerNgoRepository partnerNgoRepository;

    @Autowired
    private AuthorizedPersonRepository authorizedPersonRepository;

    @ResponseBody
    @GetMapping("/partnerngo")
    public Iterable<PartnerNgo> getAllPartnerNgos() {
        return partnerNgoRepository.findAll();
    }

    @ResponseBody
    @GetMapping("/partnerngo/{id}")
    public Optional<PartnerNgo> getPartnerNgo(@PathVariable Long id) {

        return  partnerNgoRepository.findById(id);
    }

    @ResponseBody
    @GetMapping("/partnerngo-list")
    public List<Map> getPartnerNgoList() {

        List<PartnerNgo> partnerNgos = (List<PartnerNgo>) partnerNgoRepository.findAll();

        List output = new ArrayList();

        partnerNgos.stream().forEach(partnerNgo -> {
            Map ngo = new HashMap();
            ngo.put("id", partnerNgo.getId());
            ngo.put("name", partnerNgo.getName());

            output.add(ngo);
        });


        return output;
    }

    @ResponseBody
    @GetMapping("/partnerngo/{id}/formatted")
    public Map getPartnerNgoFormatted(@PathVariable Long id) {

        Optional<PartnerNgo> partnerNgo =  partnerNgoRepository.findById(id);
        Map output = new HashMap();

        if(partnerNgo.isPresent()) {
            PartnerNgo ngo = partnerNgo.get();

            Map address = new HashMap();
            address.put("addressLine1", ngo.getAddressLine1());
            address.put("addressLine2", ngo.getAddressLine2());
            address.put("city", ngo.getCity());
            address.put("pincode", ngo.getPincode());
            address.put("state", ngo.getState());

            Map basicInfo = new HashMap();
            basicInfo.put("branch", ngo.getBranch());
            basicInfo.put("description", ngo.getDescription());
            basicInfo.put("name", ngo.getName());
            basicInfo.put("registrationNumber", ngo.getRegistrationNumber());

            List<Map> authorizedPersons = new ArrayList();

            ngo.getAuthorizedPerson().stream().forEach(authorizedPerson -> {

                Map authPerson = new HashMap();
                authPerson.put("contact1", authorizedPerson.getContact1());
                authPerson.put("contact2", authorizedPerson.getContact2());
                authPerson.put("email1", authorizedPerson.getEmail1());
                authPerson.put("email2", authorizedPerson.getEmail2());
                authPerson.put("name", authorizedPerson.getName());

                authorizedPersons.add(authPerson);

            });

            output.put("address", address);
            output.put("basicInfo", basicInfo);
            output.put("authorizedPersons", authorizedPersons);

        }

        return  output;
    }

    @ResponseBody
    @PostMapping("/partnerngo")
    @Transactional
    public PartnerNgo savePartnerNgo(@RequestBody PartnerNgo partnerNgo){
        logger.info(partnerNgo.toString());
        if (partnerNgo.getId() != 0) {
            Optional<PartnerNgo> oldPartnerNgo = partnerNgoRepository.findById(partnerNgo.getId());
            if (oldPartnerNgo.isPresent()) {
                PartnerNgo ngo = oldPartnerNgo.get();
//                authorizedPersonRepository.deleteAll(ngo.getAuthorizedPerson());
                ngo.getAuthorizedPerson().stream().forEach(authorizedPerson -> {
                    authorizedPersonRepository.delete(authorizedPerson.getId());
                    //TODO: update instead of Delete
                });
            }
        }
        authorizedPersonRepository.flush();

        PartnerNgo partnerNgo1 = partnerNgoRepository.save(partnerNgo);

        partnerNgo1.getAuthorizedPerson().stream().forEach((auth)-> { auth.setPartnerNgo(partnerNgo1);
        authorizedPersonRepository.save(auth);

        });
        return partnerNgo1;
    }

    @ResponseBody
    @PutMapping("/partnerngo")
    public PartnerNgo updatePartnerNgo(@RequestBody PartnerNgo partnerNgo){
        return partnerNgoRepository.save(partnerNgo);
    }

    @DeleteMapping("partnerngo/{id}")
    public boolean deletePartnerNgo(@PathVariable Long id) {
        partnerNgoRepository.deleteById(id);
        return true;

    }

//    @RequestMapping(value ="/partner-ngo", method = RequestMethod.POST)
//    public void createPartnerNgo(@RequestBody PartnerNgo partnerNgo)  {
//
//
//        PartnerNgo partnerNgo1 = partnerNgoRepository.save(partnerNgo);
//
//        partnerNgo1.getAuthorizedPerson().stream().forEach((auth)-> { auth.setPartnerNgo(partnerNgo1);
//        authorizedPersonRepository.save(auth);
//
//        });
//    }
}
