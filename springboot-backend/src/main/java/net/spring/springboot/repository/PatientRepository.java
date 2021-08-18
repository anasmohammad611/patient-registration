package net.spring.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.spring.springboot.model.Patient;



@Repository
public interface PatientRepository extends JpaRepository<Patient, Long>{


//	public Patient findByEmailandPassword(String emailId, String password);
//	
}
