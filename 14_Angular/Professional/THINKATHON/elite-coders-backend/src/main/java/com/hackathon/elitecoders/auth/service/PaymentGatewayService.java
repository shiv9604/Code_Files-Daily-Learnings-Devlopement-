package com.hackathon.elitecoders.auth.service;

import com.hackathon.elitecoders.customResponse.CustomResponse;
import com.hackathon.elitecoders.vo.requestvo.OrderRequest;
import com.hackathon.elitecoders.vo.requestvo.UpdatePaymentRequest;

public interface PaymentGatewayService {
    public CustomResponse<?> createOrder(OrderRequest orderRequest);

    public CustomResponse<?> updatePaymentOrder(UpdatePaymentRequest request);
}
