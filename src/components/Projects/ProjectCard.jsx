
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import './Projects.scss';

import meetup from '../../img/meet.png';
import pok from '../../img/pok.png';
import Button from "react-bootstrap/Button";
// Main component (will eventually use all the others)

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Header className="header">{props.header}</Card.Header>
      <Card.Body  >
      <Card.Img   src={props.imgPath} className="image-card" />  
       <Card.Title class="card-title">{props.title}</Card.Title>
          <Card.Text className="text" style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Button  className="button-class" href={props.github}>Code</Button>
          <Button className="button-class" href={props.application}>Application</Button>
          <Button className="button-class">Demo</Button>
      </Card.Body>
         </Card>
  
      );
}
      export default ProjectCard;