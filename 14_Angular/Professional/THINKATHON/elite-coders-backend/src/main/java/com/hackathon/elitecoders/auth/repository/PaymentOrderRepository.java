package com.hackathon.elitecoders.auth.repository;

import com.hackathon.elitecoders.auth.entities.PaymentOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface PaymentOrderRepository extends JpaRepository<PaymentOrder, UUID> {

    PaymentOrder findByRazorpayOrderId(String razorpayOrderId);
}
