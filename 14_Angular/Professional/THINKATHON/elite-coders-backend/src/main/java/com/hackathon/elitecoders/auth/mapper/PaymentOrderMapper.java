package com.hackathon.elitecoders.auth.mapper;

import com.hackathon.elitecoders.auth.entities.PaymentOrder;
import com.razorpay.Order;


public class PaymentOrderMapper {


    public PaymentOrder mapPaymentOrder(Order order) {
        PaymentOrder paymentOrder = new PaymentOrder();
        paymentOrder.setRazorpayOrderId((String) order.get("id"));
        paymentOrder.setRecipt(order.get("receipt"));
        paymentOrder.setPaymentStatus(order.get("status"));
        Integer paymentAmount = order.get("amount");
        double amount = Double.valueOf(paymentAmount / 100.0);
        paymentOrder.setAmount(amount);
        return paymentOrder;
    }

}
