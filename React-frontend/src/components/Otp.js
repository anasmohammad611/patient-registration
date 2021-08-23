import React, { Component } from 'react'
import PatientService from '../services/PatientService.js'
import Header from './Header.js';
import Footer from './Footer.js';
import axios from 'axios';


class Otp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName:"",
            emailId: "",
            bg: "",
            phoneNumber: "",
            password: "",
            otp: "",
        }
    }
    
    

    changeEmailHandler = (e) => {
        this.setState({ emailId: e.target.value });
    }

    get = (e) => {
        e.preventDefault();
        var otp = document.getElementById("otp");
        axios.get("http://localhost:8080/api/v1/patients/otp").then(res => {
            otp.value = res.data;
            this.setState({ otp: res.data });
        })
        .catch(function (err) {
        });
    }


    save = (e) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        e.preventDefault();
        var email = document.getElementById('email');
        var e1 = document.getElementById("error1");
        
        PatientService.getPatientByEmail(this.state.emailId).then(res => {
            console.log(res.data);
            
            if(re.test(this.state.emailId)) {
                email.value = ""
                this.props.history.push({
                    pathname: '/Landing',
                    state: {
                        fullName: res.data.fullName,
                        emailId: res.data.emailId,
                        bg: res.data.bg,
                        phoneNumber: res.data.phoneNumber
                    }
                });
            }
            else {
                email.value = ""
                e1.textContent = "check your email";
                e1.style.color = "red";
            }
        })
        .catch(function (error) {
            email.value = ""
            e1.textContent = "check your email";
            e1.style.color = "red";
        });
    }

    render() {
        return (
            <>
                <div>
                    <Header />
                </div>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input id="email" type="email" className="form-control" placeholder="Enter email" 
                            value={this.state.emailId} onChange={this.changeEmailHandler}
                            />
                        </div>
                        <span id="error"></span>
                        <div className="form-group">
                            <label>OTP</label>
                            <input id="otp" className="form-control"
                            placeholder="Press get otp to autofill otp" value = {this.state.otp}
                            />
                        </div>
                        
                        <br />
                        <button onClick={this.get} disabled={this.state.emailId.length<1}>get otp</button>
                        <div>
                        <button type="submit" className="btn btn-primary btn-block" style= {{ marginLeft:150 }} onClick = {this.save}
                                disabled={this.state.emailId.length<1} disabled={this.state.otp.length<6}
                            >Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </>
                
        )
    }
}

export default Otp
