import React, { Component } from 'react'
import PatientService from '../services/PatientService.js'
import Header from './Header.js'
import Footer from './Footer.js';


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
        if(this.state.password === this.state.pdc) {
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
            alert("patient registered successfully !!!")
        }
        else {
            alert("Password not same. Check your password and try again.")
        }
    }
    
    changeFullNameHandler = (e) => {
        this.setState({ fullName: e.target.value });
    }

    changeEmailHandler = (e) => {
        this.setState({ emailId: e.target.value });
    }

    changeBgHandler = (e) => {
        this.setState({ bg: e.target.value });
    }

    changephoneNumberHandler = (e) => {
        this.setState({ phoneNumber: e.target.value });
    }

    changePdHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    changePdcHandler = (e) => {
        this.setState({ pdc: e.target.value });
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
                            <input type="text" className="form-control" placeholder="Full name" 
                            value={this.state.fullName} onChange={this.changeFullNameHandler}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" 
                            value={this.state.emailId} onChange={this.changeEmailHandler}
                            />
                        </div>

                        <div className="form-group">
                            <label>Blood group</label>
                            <input type="text" className="form-control" placeholder="A+ A- B+ B- AB+ AB- O+ O-" 
                            value={this.state.bg} onChange={this.changeBgHandler}
                            />
                        </div>


                        <div className="form-group">
                            <label>Phone number</label>
                            <input type="number" className="form-control" placeholder="Phone number" 
                            value={this.state.phoneNumber} onChange={this.changephoneNumberHandler}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" 
                            value={this.state.password} onChange={this.changePdHandler}
                            />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"
                            value={this.state.pdc} onChange={this.changePdcHandler}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block" style= {{ marginLeft:120 }} onClick={ this.save }>Sign Up</button>
                        
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
