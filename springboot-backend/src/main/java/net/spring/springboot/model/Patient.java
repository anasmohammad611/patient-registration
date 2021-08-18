package net.spring.springboot.model;

import javax.persistence.Column;
//import javax.persistence.Column;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "patients")
public class Patient {
	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private long id;
	
	@Column(name = "full_name")
	private String fullName;
	
	@Id
	@Column(name = "emailId")
	private String emailId;
	
	@Column(name = "bg")
	private String bg;
	
	@Column(name = "phoneNumber")
	private String phoneNumber;
	
	@Column(name = "password")
	private String password;
	
	public Patient() {
		
	}
	
	
	
	public Patient(String fullName, String emailId, String bg, String phoneNumber, String password) {
		super();
		this.fullName = fullName;
		this.emailId = emailId;
		this.bg = bg;
		this.phoneNumber = phoneNumber;
		this.password = password;
	}

	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getBg() {
		return bg;
	}
	public void setBg(String bg) {
		this.bg = bg;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
