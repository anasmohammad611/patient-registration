import React, { Component } from 'react'
import PatientService from '../services/PatientService.js'
import Header from './Header.js';
import Footer from './Footer.js';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName:"",
            emailId: "",
            bg: "",
            phoneNumber: "",
            password: ""
        }
    }
    
    

    changeEmailHandler = (e) => {
        this.setState({ emailId: e.target.value });
    }

    changePdHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    save = (e) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        e.preventDefault();
        var email = document.getElementById('email');
        var password = document.getElementById('password');
        console.log(email,password);
        PatientService.getPatientByEmail(this.state.emailId).then(res => {
            console.log(res.data);
            if(re.test(this.state.emailId) && res.data.password === password.value) {
                password.value = ""
                email.value = ""
                alert("Login successful");
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
                password.value = ""
                email.value = ""
                alert("email is incorrect or password doesn't match");
            }
        })
        .catch(function (error) {
            alert('incorrect details');
        });
    }

    render() {
        return (<>
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

                        <div className="form-group">
                            <label>Password</label>
                            <input id="password" type="password" className="form-control" placeholder="Enter password" 
                            value={this.state.password} onChange={this.changePdHandler}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block" style= {{ marginLeft:120 }} onClick = {this.save}
                            disabled={this.state.emailId.length<1} disabled={this.state.password.length<1}
                        >Login</button>
                        
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

export default Login
