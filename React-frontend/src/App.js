import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Details from './components/Details.js';
import Header from './components/Header.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";




function App() {
  return (
    <div>
    <Header />
    <Router>
    <div className="App">
      
      <nav className="navbar navbar-expand-lg navbar-light">
        
        <div className="container">
        
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
      
      <div className="auth-wrapper">
        <div className="auth-inner">
        
          <Switch>
            <Route  exact path='/' component={Login} />
            <Route  path="/sign-in" component={Login} />
            <Route  path="/sign-up" component={Signup} />
            <Route  path="/details" component={Details} />
          </Switch>
        </div>
      </div>
    </div></Router></div>
  );
}

export default App;
