import React, { Component } from 'react'

class Details extends Component {
    render() {
        return (
            <div >
                <h2 className="text-center">Your Data</h2>
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
        )
    }
}

export default Details
