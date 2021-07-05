import React from 'react';
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card';
import './Home.scss'
import { Container, Row, Col } from "react-bootstrap";

function Home2(props) {
  return (
    <Card fluid className="home-card">
      <Card.Img className="img-card" src={props.img} />
      <Card.Body className="bd-card">
        <Card.Title className="tt-card" >{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Home2;