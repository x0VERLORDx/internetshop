package com.example.internetshop.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "web_order")
public class WebOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(optional = false)
    @JoinColumn(name = "address_id", nullable = false)
    private Address address;

    @Column(name = "order_condition", length = 30)
    private String orderCondition = "Pending";

//    @OneToMany(cascade = CascadeType.REMOVE, orphanRemoval = true)
//    @JoinColumn(name = "web_order_id")
//    private List<WebOrderQuantities> webOrderQuantities = new ArrayList<>();

    @OneToMany(mappedBy = "webOrder", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<WebOrderQuantities> orderQuantities = new ArrayList<>();

    @Column(name = "comment")
    private String comment;

}