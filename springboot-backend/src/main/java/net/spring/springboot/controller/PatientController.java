package net.spring.springboot.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.spring.springboot.model.Patient;
import net.spring.springboot.repository.PatientRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PatientController {
	
	@Autowired
	private PatientRepository patientRepository;
	
	@GetMapping("/patients")
	public List<Patient> getAllPatient() {
		return patientRepository.findAll();
	}
	
	@PostMapping("/patients") 
	public Patient createPatient(@RequestBody Patient patient) {
		return patientRepository.save(patient);
	}
	
	@GetMapping("/patients/{emailId}")
	public Patient getPatient(@PathVariable String emailId) {
		return patientRepository.findAll().stream().filter(t -> t.getEmailId().equals(emailId)).findFirst().get();
	}

	@GetMapping("/patients/otp")
	public String getOTP() {
		Random rnd = new Random();
	    int number = rnd.nextInt(999999);

	    return String.format("%06d", number); 
	}

}
