package com.app.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="customer_id")
	private int customerId;
	private String firstName;
	private String lastName;
	@Column(length=100)
	private String password;
	@Column(name="intpass")
	private String intpass;
	@Column(name="email",unique = true)
	private String email;
	private String mobileNo;
	@JsonIgnoreProperties("customer")
	@OneToOne(mappedBy="customer",cascade=CascadeType.PERSIST,orphanRemoval = true)
	private SavingsAccount savingsAccount;
	public Customer() {
		
	}
	public Customer(String password, String email, String mobileNo) {
		this.password = password;
		this.email = email;
		this.mobileNo = mobileNo;
	}
	
	public String getIntpass() {
		return intpass;
	}
	public void setIntpass(String intpass) {
		this.intpass = intpass;
	}
	public Customer(String firstName, String lastName, String password, String email) {
			super();
			this.firstName = firstName;
			this.lastName = lastName;
			this.password = password;
			this.email = email;
		
	}
	public Customer(String firstName, String lastName, String password,String intpass, String email, String mobileNo) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.intpass=intpass;
		this.email = email;
		this.mobileNo = mobileNo;
		
	}
		
		public Customer(String firstName, String lastName, String password, String email, String mobileNo,String intpass,
				SavingsAccount savingsAccount) {
			
			this.firstName = firstName;
			this.lastName = lastName;
			this.password = password;
			this.email = email;
			this.mobileNo = mobileNo;
			this.intpass=intpass;
			this.savingsAccount.setAccountBalance(savingsAccount.getAccountBalance());
			this.savingsAccount.setAccountNumber(savingsAccount.getAccountNumber());
			this.savingsAccount.setBranchName(savingsAccount.getBranchName());
			this.savingsAccount.setCifNo(savingsAccount.getCifNo());
			this.savingsAccount.setIfscCode(savingsAccount.getIfscCode());
			
		}	
	
	public int getCustomerId() {
		return customerId;
	}
	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public SavingsAccount getSavingsAccount() {
		return savingsAccount;
	}
	public void setSavingsAccount(SavingsAccount savingsAccount) {
		this.savingsAccount = savingsAccount;
	}
	@Override
	public String toString() {
		return "Customer [customerId=" + customerId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", password=" + password + ", email=" + email + ", mobileNo=" + mobileNo + "]";
	}
	
}
