import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Navbar, Form, FormControl } from "react-bootstrap";
import Projects from './Projects/projects'
import Home from './Home/Home'
import Button from "react-bootstrap/Button";
import icon from '../img/logo-header.svg'
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import './style.scss'
function Navbarclass() {
  const [expand, updateExpanded] = useState(false);
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" >
      <Navbar.Brand href="#home" > <img src={icon} alt="logo" className="page-header_logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" >
         
          <Nav.Link  className="navlink" as={Link} to="/">    <AiOutlineHome style={{ marginBottom: "2px" }} /> 
            Home
          </Nav.Link>
          <Nav.Link className="navlink" as={Link} to="/About">
          <AiOutlineUser style={{ marginBottom: "2px" } } />
            About
          </Nav.Link>
          <Nav.Link className="navlink"  as={Link} to="/Projects">
        
          <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
            projects
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
    <div className="ligne" ></div>
    </div>

  )
}
export default Navbarclass;