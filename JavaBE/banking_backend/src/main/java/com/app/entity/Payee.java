package com.app.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity(name="payee")
public class Payee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="payee_id")
	private Long payeeId;
@Column(name="payee")
private int payee;

@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
@JoinColumn(name="customerId")
private Customer customer;

//@Column(name="payee2")
//private int payee2;
//
//@Column(name="payee3")
//private int payee3;
//
//@Column(name="payee4")
//private int payee4;



}
