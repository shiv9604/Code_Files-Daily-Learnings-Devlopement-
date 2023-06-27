package com.hackathon.elitecoders.auth.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;

@Entity(name = "order_table")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentOrder {

    @Id
    @GenericGenerator(name = "UUIDGenerator", strategy = "uuid2")
    @GeneratedValue(generator = "UUIDGenerator")
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    private String razorpayOrderId;

    private String razorpaySignature;

    private String paymentStatus;

    private String recipt;

    private Double amount;

    private String razorpayPaymentId;
}
