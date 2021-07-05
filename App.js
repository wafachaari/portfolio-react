import React, { useState, useEffect } from "react";

import Navbarclass from "./src/components/Navbarclass";
import Home from "./src/components/Home/Home";
import About from "./src/components/About/About";
import Projects from "./src/components/Projects/Projects";
import Footer from "./src/components/Footer";
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
