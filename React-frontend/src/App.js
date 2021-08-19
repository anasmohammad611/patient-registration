import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Landing from './components/Landing.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route  exact path='/' component={Home} />
        <Route  path="/sign-in" component={Login} />
        <Route  path="/sign-up" component={Signup} />
        <Route  path="/Landing" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
