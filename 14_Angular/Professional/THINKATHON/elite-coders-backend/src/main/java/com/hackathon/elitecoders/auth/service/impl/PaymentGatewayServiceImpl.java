package com.hackathon.elitecoders.auth.service.impl;

import com.hackathon.elitecoders.auth.repository.PaymentOrderRepository;
import com.hackathon.elitecoders.auth.service.PaymentGatewayService;
import com.hackathon.elitecoders.auth.entities.PaymentOrder;
import com.hackathon.elitecoders.auth.mapper.PaymentOrderMapper;
import com.hackathon.elitecoders.auth.repository.PaymentOrderRepository;
import com.hackathon.elitecoders.auth.service.PaymentGatewayService;
import com.hackathon.elitecoders.customResponse.CustomResponse;
import com.hackathon.elitecoders.vo.requestvo.OrderRequest;
import com.hackathon.elitecoders.vo.requestvo.UpdatePaymentRequest;
import com.hackathon.elitecoders.vo.responseVo.OrderResponse;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
public class PaymentGatewayServiceImpl implements PaymentGatewayService {


    @Value("${razorpay.key}")
    public String RAZORPAY_KEY;
    @Value("${razorpay.secret}")
    public String RAZORPAY_SECRET;
    @Autowired
    private PaymentOrderRepository paymentOrderRepository;

    @Override
    public CustomResponse<?> createOrder(OrderRequest orderRequest) {
        OrderResponse resp = new OrderResponse();
        CustomResponse<OrderResponse> customResponse = new CustomResponse<>();
        try {
            String amountInPaise = convertRupeeToPaise(orderRequest.getAmount());
            Order order = createRazorPayOrder(amountInPaise);
            resp.setAmount(orderRequest.getAmount());
            resp.setRazorpayOrderId((String) order.get("id"));
            resp.setRazorypayKey(RAZORPAY_KEY);
            customResponse.setStatus(HttpStatus.OK);
            customResponse.setData(resp);
            customResponse.setMessage("Order create successfully!");
            PaymentOrder paymentOrder = new PaymentOrderMapper().mapPaymentOrder(order);
            paymentOrderRepository.save(paymentOrder);
            return customResponse;
        } catch (Exception e) {
            customResponse.setStatus(HttpStatus.BAD_REQUEST);
            customResponse.setMessage("Getting exception while create order: " + e.getLocalizedMessage());
            return customResponse;
        }
    }

    @Override
    public CustomResponse<?> updatePaymentOrder(UpdatePaymentRequest request) {
        PaymentOrder paymentOrder = paymentOrderRepository.findByRazorpayOrderId(request.getRazorpayOrderId());
        paymentOrder.setPaymentStatus(request.getPaymentStatus());
        paymentOrder.setRazorpayPaymentId(request.getRazorpayPaymentId());
        paymentOrder.setRazorpaySignature(request.getRazorpaySignature());
        paymentOrderRepository.save(paymentOrder);
        return new CustomResponse<>(HttpStatus.OK, "Payment successfull! ");
    }


    private String convertRupeeToPaise(String paise) {
        BigDecimal b = new BigDecimal(paise);
        BigDecimal value = b.multiply(new BigDecimal("100"));
        return value.setScale(0, RoundingMode.UP).toString();
    }

    private Order createRazorPayOrder(String amount) throws RazorpayException {
        RazorpayClient razorpayClient = new RazorpayClient(RAZORPAY_KEY, RAZORPAY_SECRET);
        JSONObject options = new JSONObject();
        options.put("amount", amount);
        options.put("currency", "INR");
        options.put("receipt", "txn_123456");
        return razorpayClient.Orders.create(options);

    }
}
