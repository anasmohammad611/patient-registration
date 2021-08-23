import React, { Component } from 'react'
import PatientService from '../services/PatientService.js'
import Header from './Header.js'
import Footer from './Footer.js'


class Signup extends Component {
    

    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            emailId: '',
            bg: '',
            phoneNumber: '',
            password: '',
            pdc: '',
        }
    }

    save = (e) => {
        e.preventDefault();
        var e1 = document.getElementById("error1");
        var e2 = document.getElementById("error2");
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(re.test(this.state.emailId) && this.state.password === this.state.pdc) {
            let patient = {
                fullName: this.state.fullName,
                emailId: this.state.emailId,
                bg: this.state.bg,
                phoneNumber: this.state.phoneNumber,
                password: this.state.password,
            }
    
            console.log('! ',JSON.stringify(patient));
    
            PatientService.createPatient(patient).then(res => {
                this.props.history.push('/sign-in');
            });
        }
        else {
            e1.textContent = "check your email";
            e1.style.color = "red";
            e2.textContent = "check your password";
            e2.style.color = "red";
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    
    render() {
        return (
            <>
                <div>
                    <Header />
                </div>
                <div className='auth-wrapper'>
                    <div className='auth-inner'>
                    <form>
                        <h3>Register</h3>

                        <div className="form-group">
                            <label>Full name</label>
                            <input type="text" className="form-control" name="fullName" placeholder="Full name" maxLength="10"
                            value={this.state.fullName} onChange={this.changeHandler}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" name="emailId" placeholder="Enter email" id="email"
                            value={this.state.emailId} onChange={this.changeHandler}
                            />
                            <span id="error1"></span>
                        </div>

                        <div className="form-group">
                            <label>Blood group</label>
                            <input type="text" className="form-control" placeholder="A+ A- B+ B- AB+ AB- O+ O-" name="bg"
                            value={this.state.bg} onChange={this.changeHandler}
                            />
                        </div>


                        <div className="form-group">
                            <label>Phone number</label>
                            <input type="number" className="form-control" placeholder="Phone number" name="phoneNumber"
                            value={this.state.phoneNumber} onChange={this.changeHandler}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" name="password" id="pass"
                            value={this.state.password} onChange={this.changeHandler}
                            />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" name="pdc"
                            value={this.state.pdc} onChange={this.changeHandler}
                            />
                            <span id="error2"></span>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary btn-block" name="button"
                            style= {{ marginLeft:120 }} 
                            onClick={ this.save } 
                            disabled={this.state.emailId.length<1} disabled={this.state.password.length<1} >
                                Sign Up
                        </button>
                        
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

export default Signup
