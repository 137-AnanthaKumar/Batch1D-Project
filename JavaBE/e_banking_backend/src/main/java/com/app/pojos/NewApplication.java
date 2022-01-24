package com.app.pojos;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class NewApplication {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="application_id")
	private int applicationId;
	@Column(name="title")
	private String Title;
	@Column(name="name")
	private String Name;
	
	@Column(name="Dob")
	private Date Dob;
	
	@Column(name="email",unique = true)
	private String email;
	
	@Column(name="mobileNo")
	private String mobileNo;

	@Column(name="panNo")
	private String PanNo;
	
	@Column(name="aadharNo")
	private String AadharNo;
	
	

	public int getApplicationId() {
		return applicationId;
	}

	public void setApplicationId(int applicationId) {
		this.applicationId = applicationId;
	}

	public String getTitle() {
		return Title;
	}

	public void setTitle(String title) {
		Title = title;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public Date getDob() {
		return Dob;
	}

	public void setDob(Date dob) {
		Dob = dob;
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

	public String getPanNo() {
		return PanNo;
	}

	public void setPanNo(String panNo) {
		PanNo = panNo;
	}

	public String getAadharNo() {
		return AadharNo;
	}

	public void setAadharNo(String aadharNo) {
		AadharNo = aadharNo;
	}
	
	
}
