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

@Entity
public class BillPayment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Transaction_id")
	private Long transactionId;
	
	@Column(name="type")
	private String type;
	
	@Column(name="operater")
	private String operater;
	
	@Column(name="plan")
	private int plan;
	
	@Column(name="mobileno")
	private String mobileno;
	
	@Column(name="time")
	private String time;
	
	@Column(name="date")
	private String date;
	@Column(name="senderaccountno")
	private int senderAccountNo;
	
	@Column(name="reciver")
	private int reciverAccountNo;
	
	
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JoinColumn(name="customerId")
	private Customer customer;



	public Long getTransactionId() {
		return transactionId;
	}



	public void setTransactionId(Long transactionId) {
		this.transactionId = transactionId;
	}



	public String getType() {
		return type;
	}



	public void setType(String type) {
		this.type = type;
	}



	public String getOperater() {
		return operater;
	}



	public void setOperater(String operater) {
		this.operater = operater;
	}



	public int getPlan() {
		return plan;
	}



	public void setPlan(int plan) {
		this.plan = plan;
	}



	public String getMobileno() {
		return mobileno;
	}



	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}



	public String getTime() {
		return time;
	}



	public void setTime(String time) {
		this.time = time;
	}



	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}



	public int getSenderAccountNo() {
		return senderAccountNo;
	}



	public void setSenderAccountNo(int senderAccountNo) {
		this.senderAccountNo = senderAccountNo;
	}



	public int getReciverAccountNo() {
		return reciverAccountNo;
	}



	public void setReciverAccountNo(int reciverAccountNo) {
		this.reciverAccountNo = reciverAccountNo;
	}



	public Customer getCustomer() {
		return customer;
	}



	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

}
