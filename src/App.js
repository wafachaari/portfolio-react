import React, { useState, useEffect } from "react";

import Navbarclass from "./components/Navbarclass";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {


  return (
    <Router>

      <div className="App" >
        <Navbarclass />
 
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
