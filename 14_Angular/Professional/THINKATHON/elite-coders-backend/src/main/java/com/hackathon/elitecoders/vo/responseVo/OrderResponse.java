package com.hackathon.elitecoders.vo.responseVo;

import lombok.Data;

@Data
public class OrderResponse {

    private String amount;
    private String razorpayOrderId;
    private String razorypayKey;
}
