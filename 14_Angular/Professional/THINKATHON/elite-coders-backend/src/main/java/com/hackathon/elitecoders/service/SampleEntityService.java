package com.hackathon.elitecoders.service;

import com.hackathon.elitecoders.auth.repository.CustomResponseWithPage;
import com.hackathon.elitecoders.customResponse.CustomResponse;
import com.hackathon.elitecoders.vo.requestVo.SampleEntityRequestVo;
import com.hackathon.elitecoders.vo.requestVo.UpdateSampleEntityRequestVo;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public interface SampleEntityService {
    CustomResponse<?> addSample(SampleEntityRequestVo sampleEntityRequestVo);

    CustomResponse<?> updateSample(UpdateSampleEntityRequestVo updateSampleEntityRequestVo);

    CustomResponse<?> getSampleEntityById(UUID id);

    CustomResponseWithPage<?> getAllSampleEntity(Integer page, Integer pageSize, String firstName, String search);
}
