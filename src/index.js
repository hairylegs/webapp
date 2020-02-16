import React from "react";
import { ReactDOM, render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";
import NavBar from "./navBar.js";
import Sales from "./Sales";
import Rentals from "./Rentals";
import Agents from "./Agents";
import Press from "./Press";
import About from "./About";
import FAQ from "./FAQ";
import MarketReport from "./MarketReport";

function App() {
  return (
    <div className="App">
      <div className="Body">
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              <Route path="/Sales" component={Sales} />
              <Route path="/Rentals" component={Rentals} />
              <Route path="/Agents" component={Agents} />
              <Route path="/Press" component={Press} />
              <Route path="/About" component={About} />
              <Route path="/FAQ" component={FAQ} />
              <Route path="/MarketReport" component={MarketReport} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

const Footer = () => (
  <footer className="footer">
    <p>Some footer nonsense!</p>
  </footer>
);
const rootElement = document.getElementById("root");
render([<App key="1" />, <Footer key="2" />], rootElement);
