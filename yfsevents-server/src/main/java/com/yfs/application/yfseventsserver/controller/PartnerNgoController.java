package com.yfs.application.yfseventsserver.controller;


import com.yfs.application.yfseventsserver.entity.PartnerNgo;
import com.yfs.application.yfseventsserver.repository.PartnerNgoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping("/api")
public class PartnerNgoController {

    @Autowired
    private static Logger logger = LoggerFactory.getLogger(PartnerNgoController.class);

    @Autowired
    private PartnerNgoRepository partnerNgoRepository;

    @ResponseBody
    @GetMapping("/partnerngo")
    public Iterable<PartnerNgo> getPartnerNgos() {
        return partnerNgoRepository.findAll();
    }

    @ResponseBody
    @GetMapping("/partnerngo/{id}")
    public Optional<PartnerNgo> getPartnerNgo(@PathVariable Long id) {
        return partnerNgoRepository.findById(id);
    }

    @ResponseBody
    @PostMapping("/partnerngo")
    public PartnerNgo savePartnerNgo(@RequestBody PartnerNgo partnerNgo){
        logger.info(partnerNgo.toString());
        return partnerNgoRepository.save(partnerNgo);
    }

    @ResponseBody
    @PutMapping("/partnerngo")
    public PartnerNgo updatePartnerNgo(@RequestBody PartnerNgo partnerNgo){
        return partnerNgoRepository.save(partnerNgo);
    }

    @DeleteMapping("partnerngo/{id}")
    public boolean deletePartnerNgo(@PathVariable Long id){
        partnerNgoRepository.deleteById(id);
        return true;
    }
}
