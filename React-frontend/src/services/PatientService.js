import axios from 'axios';
import { Component } from 'react';


const Patient_url = "http://localhost:8080/api/v1/patients";


class PatientService extends Component{

    createPatient(patient) {
        return axios.post(Patient_url, patient);
    }

    getPatientByEmail(email) {
        return axios.get("http://localhost:8080/api/v1/patients/"+email);
    }

    getPatientOtp() {
        return axios.get("http://localhost:8080/api/v1/patients/otp");
    }
}


export default new PatientService(); 