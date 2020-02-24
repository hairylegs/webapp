import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Main from "./Home";
import Example from "./example";
import Demo from "./demo";

function App() {
  return (
    <div className="App">
      <div className="Body" />
    </div>
  );
}

const Footer = () => (
  <footer className="footer">
    <p>Some footer nonsense!</p>
  </footer>
);
const rootElement = document.getElementById("root");
ReactDOM.render(
  [
    <Demo key="1" />,
    <App key="2" />,
    <Main key="3" />,
    <Example key="4" />,
    <Footer key="5" />
  ],
  rootElement
);
