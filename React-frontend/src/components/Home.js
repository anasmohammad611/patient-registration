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
                <div className="home">
                    healthi.in
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
