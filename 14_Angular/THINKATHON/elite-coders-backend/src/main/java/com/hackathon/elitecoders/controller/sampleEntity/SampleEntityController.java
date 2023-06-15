package com.hackathon.elitecoders.controller.sampleEntity;

import com.hackathon.elitecoders.auth.repository.CustomResponseWithPage;
import com.hackathon.elitecoders.customResponse.CustomResponse;
import com.hackathon.elitecoders.service.SampleEntityService;
import com.hackathon.elitecoders.vo.requestVo.SampleEntityRequestVo;
import com.hackathon.elitecoders.vo.requestVo.UpdateSampleEntityRequestVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;

import static com.hackathon.elitecoders.auth.constants.ApiConstants.*;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping(ROOT_URL_AUTH + ROOT_URL_SAMPLE)
@CrossOrigin("*")
public class SampleEntityController {

    @Autowired
    SampleEntityService sampleEntityService;

    @PostMapping
    @ResponseStatus(CREATED)
    public CustomResponse<?> addSample(@RequestBody @Valid SampleEntityRequestVo sampleEntityRequestVo) {
        return sampleEntityService.addSample(sampleEntityRequestVo);
    }

    @PutMapping
    @ResponseStatus(OK)
    public CustomResponse<?> updateSample(@RequestBody @Valid UpdateSampleEntityRequestVo updateSampleEntityRequestVo) {
        return sampleEntityService.updateSample(updateSampleEntityRequestVo);
    }

    @GetMapping(METHOD_BY_ID)
    @ResponseStatus(OK)
    public CustomResponse<?> getSampleEntityById(@PathVariable("id") UUID id) {
        return sampleEntityService.getSampleEntityById(id);
    }

    @GetMapping
    @ResponseStatus(OK)
    public CustomResponseWithPage<?> getAllSampleEntity(@RequestParam(required = false) String search,
                                                        @RequestParam(required = false) String firstName,
                                                        @RequestParam(required = false) Integer page,
                                                        @RequestParam(required = false) Integer pageSize) {
        return sampleEntityService.getAllSampleEntity(page, pageSize, firstName, search);
    }
}
