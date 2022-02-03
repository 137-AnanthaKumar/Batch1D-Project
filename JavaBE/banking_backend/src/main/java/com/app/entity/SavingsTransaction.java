package com.app.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class SavingsTransaction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private LocalDate date;
	private LocalTime time;
	private String description;
	private String type; // credit or debit
	private Double amount;
	private Double availableBalance;
	
	@OneToOne(mappedBy="transaction",cascade=CascadeType.PERSIST,orphanRemoval = true)
	private BillPayment billpay;
	

	

	public BillPayment getBillpay() {
		return billpay;
	}

	public void setBillpay(BillPayment billpay) {
		this.billpay = billpay;
	}

	public SavingsTransaction() {

	}

	public SavingsTransaction(LocalDate date, LocalTime time, String description, String type, Double amount,
			Double availableBalance) {
		this.date = date;
		this.time = time;
		this.description = description;
		this.type = type;
		this.amount = amount;
		this.availableBalance = availableBalance;
	}

	public SavingsTransaction(LocalDate date, LocalTime time, String description, String type, Double amount,
			Double availableBalance, SavingsAccount savingsAccount) {
		super();
		this.date = date;
		this.time = time;
		this.description = description;
		this.type = type;
		this.amount = amount;
		this.availableBalance = availableBalance;
		//this.savingsAccount = savingsAccount;
	}

	public SavingsTransaction(int id, LocalDate date, LocalTime time, String description, String type, Double amount,
			Double availableBalance, SavingsAccount savingsAccount) {
		super();
		this.id = id;
		this.date = date;
		this.time = time;
		this.description = description;
		this.type = type;
		this.amount = amount;
		this.availableBalance = availableBalance;
	//	this.savingsAccount = savingsAccount;
	}


	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public Double getAvailableBalance() {
		return availableBalance;
	}

	public void setAvailableBalance(Double availableBalance) {
		this.availableBalance = availableBalance;
	}

//	@Override
//	public String toString() {
//		return "SavingsTransaction [id=" + id + ", date=" + date + ", time=" + time + ", description=" + description
//				+ ", type=" + type + ", amount=" + amount + ", availableBalance=" + availableBalance + "]";
//	}

}
