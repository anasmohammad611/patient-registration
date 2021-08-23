import React from 'react'
import './css/Header.css'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className='header'>
            <h3>
            Patient Registration form
            </h3>
            
            <div>
                <ul >
                    <li >
                        <Link className="nav-link" to={"/sign-in"}><h5>Login</h5></Link>
                    </li>
                    <li >
                        <Link className="nav-link" to={"/sign-up"}><h5>Register</h5></Link>
                    </li>
                </ul>
            </div>
            
        </header>
    )
}

export default Header
