import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import git from '../img/github.png'
import link from '../img/link3.png'
import inst from '../img/inst.png'
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4"  >
          <h2 className="text-black">
            Reach Out to me!
          </h2>
          <p  className="paragraph">
            Discuss a project or just want to say Hi?!!
          </p>
          <p className="paragraph"> Feel free to <span className="white">connect </span> with me
          </p>
           
          <div className="icon">
          <a
            href="https://github.com/soumyajit4419"
            style={{ color: "black" }}
          >
            <img src={git}></img>

          </a>

          <a
            href="https://www.linkedin.com/in/soumyajit4419/"
            style={{ color: "black" }}
          ><img src={link}></img>

          </a>

          <a
            href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
            style={{ color: "black" }}
          >
<img src={inst}></img>
          </a>

</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
