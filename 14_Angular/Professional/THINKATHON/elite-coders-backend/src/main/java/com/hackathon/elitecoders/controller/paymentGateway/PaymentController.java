package com.hackathon.elitecoders.controller.paymentGateway;

import com.hackathon.elitecoders.auth.service.PaymentGatewayService;
import com.hackathon.elitecoders.customResponse.CustomResponse;
import com.hackathon.elitecoders.vo.requestvo.OrderRequest;
import com.hackathon.elitecoders.vo.requestvo.UpdatePaymentRequest;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
@AllArgsConstructor
@CrossOrigin("*")
public class PaymentController {

    private final PaymentGatewayService paymentGatewayService;

    @PostMapping("/order")
    public CustomResponse<?> createPaymentOrder(@RequestBody OrderRequest orderRequest) {
        return paymentGatewayService.createOrder(orderRequest);
    }

    @PutMapping("/update_order")
    public CustomResponse<?> updatePaymentOrder(@RequestBody UpdatePaymentRequest request) {
        return paymentGatewayService.updatePaymentOrder(request);
    }


}
