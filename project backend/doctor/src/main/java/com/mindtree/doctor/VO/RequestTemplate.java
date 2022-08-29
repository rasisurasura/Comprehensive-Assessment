package com.mindtree.doctor.VO;


import com.mindtree.doctor.entity.Doctor;

public class RequestTemplate {

	
	private Patient patient;
	private Doctor[] doctor;
	
	
	public Patient getPatient() {
		return patient;
	}
	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	public Doctor[] getDoctor() {
		return doctor;
	}
	public void setDoctor(Doctor[] doctor) {
		this.doctor = doctor;
	}
	
	
}
