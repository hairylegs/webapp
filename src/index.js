import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";
import NavBar from "./NavBar.js";
import Sales from "./Sales";
import Rentals from "./Rentals";
import Agents from "./Agents";
import Press from "./Press";
import About from "./About";
import FAQ from "./FAQ";
import MarketReport from "./MarketReport";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Main1 from "./images/509467.jpg";
import Main2 from "./images/18694126.jpg";
import Main3 from "./images/18717721.jpg";
import Main4 from "./images/18744997.jpg";

function App() {
  const newLocal = false;
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
      <Carousel showThumbs={false} infiniteLoop={true}>
        <div style={{ height: "auto", color: "#fff" }}>
          <img src={Main1} />
        </div>
        <div style={{ height: "auto", color: "#fff" }}>
          <img src={Main2} />
        </div>
        <div style={{ height: "auto", color: "#fff" }}>
          <img src={Main3} />
        </div>
        <div style={{ height: "auto", color: "#fff" }}>
          <img src={Main4} />
        </div>
      </Carousel>
    </div>
  );
}

const Footer = () => (
  <footer className="footer">
    <p>Some footer nonsense!</p>
  </footer>
);
const rootElement = document.getElementById("root");
ReactDOM.render([<App key="1" />, <Footer key="2" />], rootElement);
