import React from "react";
import ReactDOM from "react-dom";

import App from "./App";


class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

// Find the root of our app
const container = document.getElementsByClassName('app-container')[0];

// Tell React to render our app in the root DOM element
ReactDOM.render(React.createElement(Portfolio), container);