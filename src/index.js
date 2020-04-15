import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
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
  [<Demo key="1" />, <App key="2" />, <Footer key="5" />],
  rootElement
);
export default App;
