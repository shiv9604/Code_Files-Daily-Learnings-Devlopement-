package com.hackathon.elitecoders.vo.requestvo;

import lombok.Data;

@Data
public class UpdatePaymentRequest {

    private String razorpayPaymentId;

    private String paymentStatus;

    private String razorpaySignature;

    private String razorpayOrderId;

}
