import React, { Component } from 'react'
import { BrowserRouter as Link } from "react-router-dom";

class Landing extends Component { 
    render() {
        return (
            <>
            <div>
                <header className='header'>
                    <h3>
                        Patient Details
                    </h3>
                    
                    <div>
                        <ul >
                            <li >
                                <Link className="nav-link" to={"/"} ><h5>Log Out</h5></Link>
                            </li>
                        </ul>
                    </div>
                    
                </header>
            </div>
            <div className='container'>
                <h2 className="text-center"></h2>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Blood Group</th>
                                    <th>Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                        <tr>
                                                <td>{this.props.location.state.fullName}</td>
                                                <td>{this.props.location.state.emailId}</td>  
                                                <td>{this.props.location.state.bg}</td>
                                                <td>{this.props.location.state.phoneNumber}</td>    
                                        </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
            <div>
                <footer style={{ background: "black", padding: "0.5em", position: "fixed", bottom: "0", color: "white", width: "100%", textAlign: "center"}} >
                    Copyright © 2019. Svasth Life Pvt Ltd. All rights reserved
                </footer>
            </div>
        </>
        )
    }
}

export default Landing
