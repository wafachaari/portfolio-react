// import React from "react";
// import ReactDOM from "react-dom";
// import Container from 'react-bootstrap/Container';
 
// import { Provider } from 'react-redux';
// import App from "./App";

// class Portfolio extends React.Component {
//   render() {
//     return (
//       <Provider  >
//       <Container>
//         <App/>
//         </Container>
//       </Provider>
//     );
//   }
// }
// // Find the root of our app
// const container = document.getElementsByClassName('app-container')[0];
// // Tell React to render our app in the root DOM element
// ReactDOM.render(React.createElement(Portfolio), container);
import React from "react";
import ReactDOM from "react-dom";
 
import App from "./App";
 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);