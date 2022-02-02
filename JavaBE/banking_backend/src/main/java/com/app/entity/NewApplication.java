package com.app.entity;

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
	private Long applicationId;
	@Column(name="title")
	private String title;
	@Column(name="name")
	private String fullname;
	
	@Column(name="Dob")
	private Date date;
	
	@Column(name="email",unique = true)
	private String email;
	
	@Column(name="mobileNo")
	private String mobile;

	@Column(name="panNo")
	private String pan;
	
	
	public NewApplication(){
		
	}
	
	public NewApplication(Long applicationId, String title, String fullname, Date date, String email, String mobile,
			String pan, String aadhar) {
		super();
		this.applicationId = applicationId;
		this.title = title;
		this.fullname = fullname;
		this.date = date;
		this.email = email;
		this.mobile = mobile;
		this.pan = pan;
		this.aadhar = aadhar;
	}

	@Column(name="aadharNo")
	private String aadhar;

	public Long getApplicationId() {
		return applicationId;
	}

	public void setApplicationId(Long applicationId) {
		this.applicationId = applicationId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public String getAadhar() {
		return aadhar;
	}

	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}
	
	

	
}
