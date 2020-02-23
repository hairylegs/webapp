import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";
import Sales from "./Sales";
import Rentals from "./Rentals";
import Agents from "./Agents";
import Press from "./Press";
import About from "./About";
import Services from "./Services";
import Company from "./Company";
import FAQ from "./FAQ";
import MarketReport from "./MarketReport";
import Main from "./Home";
import Example from "./example";
import Demo from "./demo";

function App() {
  return (
    <div className="App">
      <div className="Body">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="./Home" component={Main} />
              <Route path="/Sales" component={Sales} />
              <Route path="/Rentals" component={Rentals} />
              <Route path="/Agents" component={Agents} />
              <Route path="/Press" component={Press} />
              <Route path="/About" component={About} />
              <Route path="/Services" component={Services} />
              <Route path="/Company" component={Company} />
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
