import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import About from "./About Page/About"
import Project from "./Projects/Projects"
import {  BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
      <Router>
       <Navbar/>
        <Route exact path='/'>
           <MiddleText/>
        </Route>
          <Route path='/about'>
              <About/>
          </Route>
          <Route path='/projects'>
              <Project/>
          </Route>

      </Router>
  );
}

const MiddleText = () => {
  return (
      <div style={{display: 'flex', height: '70vh'}} className="justify-content-center align-items-center">
  <div className="text-center">
    <h1 className="display-1">Hi I am Brady</h1>
    <a>
      <Link to='/about'><button className="btn btn-outline-dark" style={{boxShadow: "5px 5px 3px black"}}>Explore</button></Link>
    </a>
  </div>
</div>
  )
}


export default App;
