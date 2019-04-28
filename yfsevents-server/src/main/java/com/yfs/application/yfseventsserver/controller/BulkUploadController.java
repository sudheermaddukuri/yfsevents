package com.yfs.application.yfseventsserver.controller;

import java.util.*;

@Controller
@RequestMapping("/api/bulk")
public class BulkUploadController {

    @Autowired
    private static Logger logger = LoggerFactory.getLogger(PartnerNgoController.class);

    @PostMapping
    public ResponseEntity < String > handleFileUpload(@RequestParam("file") MultipartFile file) {
        return null;
    }

}