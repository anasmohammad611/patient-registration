import React from 'react'
import Header from './Header'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="container">
                <div className="home" style={{ textDecorationColor: "lightcoral" }}>
                    Welcome to, <a href="http://healthi.in/">healthi.in</a> 
                    <p>Building A Seamless Healthcare Experience</p>
                </div>
                <div className="para">
                    While health needs and awareness have grown exponentially, navigating our disjointed healthcare system often overwhelms everyone involved. 
                    No wonder it's tough to make smart health decisions. But all that changes with healthi! 
                    With simple and intelligent health & wellness solutions, we connect the dots – so users have the best health outcomes.
                </div>
            </div>
            <div>
                <footer style={{ background: "black", padding: "0.5em", position: "fixed", bottom: "0", color: "white", width: "100%", textAlign: "center"}} >
                    Copyright © 2019. Svasth Life Pvt Ltd. All rights reserved
                </footer>
            </div>
        </div>
    )
}

export default Home
