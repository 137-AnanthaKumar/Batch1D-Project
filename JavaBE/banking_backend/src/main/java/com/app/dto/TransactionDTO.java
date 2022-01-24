package com.app.dto;

public class TransactionDTO {
	private int senderAccountNo;
	private int reciverAccountNo;
	private double amount;
	public TransactionDTO() {
		
	}
	public TransactionDTO(int senderAccountNo, int reciverAccountNo, double amount) {
		this.senderAccountNo = senderAccountNo;
		this.reciverAccountNo = reciverAccountNo;
		this.amount = amount;
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
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	@Override
	public String toString() {
		return "TransactionDTO [senderAccountNo=" + senderAccountNo + ", reciverAccountNo=" + reciverAccountNo
				+ ", amount=" + amount + "]";
	}
	
	
}
