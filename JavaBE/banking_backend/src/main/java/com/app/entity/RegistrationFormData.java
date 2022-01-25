package com.app.entity;

public class RegistrationFormData {
	//From customer pojo 
	private String password;
	private String email;
	private String mobileNo;
	//From savingsAccount pojo 
	private int accountNumber;
	private String branchName;
	private Long ifscCode;
	
	public RegistrationFormData() {
		
	}

	public RegistrationFormData(String password, String email, String mobileNo, int accountNumber, String branchName,
			Long ifscCode) {
		this.password = password;
		this.email = email;
		this.mobileNo = mobileNo;
		this.accountNumber = accountNumber;
		this.branchName = branchName;
		this.ifscCode = ifscCode;
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

	public int getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(int accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getBranchName() {
		return branchName;
	}

	public void setBranchName(String branchName) {
		this.branchName = branchName;
	}

	public Long getIfscCode() {
		return ifscCode;
	}

	public void setIfscCode(Long ifscCode) {
		this.ifscCode = ifscCode;
	}

	@Override
	public String toString() {
		return "RegistrationFormData [email=" + email + ", mobileNo=" + mobileNo + ", accountNumber=" + accountNumber
				+ ", branchName=" + branchName + ", ifscCode=" + ifscCode + "]";
	}
	
}
