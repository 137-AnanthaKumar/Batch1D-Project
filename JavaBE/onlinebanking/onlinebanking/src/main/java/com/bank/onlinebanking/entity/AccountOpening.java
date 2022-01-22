package com.bank.onlinebanking.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="newUserRegister")
public class AccountOpening {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="application_id")
	private Long aplicationId;
    @Column(name="title")
    private String Title;
    @Column(name="name")
    private String Name;
    @Column(name="date_of_birth")
    private Date DateOfBirth;
    @Column(name="email")
    private String Email;
    @Column(name="phone")
    private Long PhoneNo;
    @Column(name="pan_no")
    private String PanNo;
    @Column(name="aadharno")
    private String AadharNo;
   
    @Column(name="aadhar_doc_id")
    private String AadhaDocId;
   
    @Column(name="pan_doc_id")
    private String PanDocId;
	public Long getAplicationId() {
		return aplicationId;
	}
	public void setAplicationId(int aplicationId) {
		this.aplicationId = (long) aplicationId;
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
	public Date getDateOfBirth() {
		return DateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		DateOfBirth = dateOfBirth;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public Long getPhoneNo() {
		return PhoneNo;
	}
	public void setPhoneNo(Long phoneNo) {
		PhoneNo = phoneNo;
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
	public String getAadhaDocId() {
		return AadhaDocId;
	}
	public void setAadhaDocId(String aadhaDocId) {
		AadhaDocId = aadhaDocId;
	}
	public String getPanDocId() {
		return PanDocId;
	}
	public void setPanDocId(String panDocId) {
		PanDocId = panDocId;
	}
    
   
    
	
}
