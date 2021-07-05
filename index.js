import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
 
class Portfolio extends React.Component {
  render() {
    return (
      
        <App />
      
    );
  }
}


const container = document.getElementsByClassName('app-container')[0];
 
ReactDOM.render(React.createElement(Portfolio), container);