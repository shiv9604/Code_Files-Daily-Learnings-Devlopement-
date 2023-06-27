package com.hackathon.elitecoders.controller;


import com.hackathon.elitecoders.entities.ProfessionalSummary;
import com.hackathon.elitecoders.service.ProfessionalSummeryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("professional")
@CrossOrigin("*")
public class ProfessionalSummaryController {

    @Autowired
    private ProfessionalSummeryService professionalSummeryService;


    @GetMapping("summary")
    public ResponseEntity<List<ProfessionalSummary>> getAllProfessionalSummary(){
       return ResponseEntity.ok().body(professionalSummeryService.findAll());
    }

    @GetMapping("summary/{id}")
    public ResponseEntity<ProfessionalSummary> getById(@PathVariable Long id) {
        return ResponseEntity.ok().body(professionalSummeryService.getById(id));
    }

    @PostMapping("summary")
    public ResponseEntity<ProfessionalSummary> createProfessionalSummary(@RequestBody ProfessionalSummary professionalSummary) {
        return ResponseEntity.ok().body(professionalSummeryService.createSummary(professionalSummary));
    }

    @PutMapping("summary/{id}")
    public ResponseEntity<ProfessionalSummary> updateProfessionalSummary(@PathVariable Long id,@RequestBody ProfessionalSummary professionalSummary) {
        return ResponseEntity.ok().body(professionalSummeryService.updateSummary(id,professionalSummary));
    }

    @DeleteMapping("summary/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProfessionalSummary(@PathVariable Long id){
        return ResponseEntity.ok().body(professionalSummeryService.deleteProfessionalSummary(id));
    }

}
