import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Main1 from "./images/509467.jpg";
import Main2 from "./images/18694126.jpg";
import Main3 from "./images/18717721.jpg";
import Main4 from "./images/18744997.jpg";
import Example from "./example";

const Main = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true}>
      <div style={{ height: "auto", color: "#fff" }}>
        <img src={Main1} alt="215 Chrystie 28W" />
      </div>
      <div style={{ height: "auto", color: "#fff" }}>
        <img src={Main2} alt="137 East 66th Street PH9B" />
      </div>
      <div style={{ height: "auto", color: "#fff" }}>
        <img src={Main3} alt="20 Prospect Park SW" />
      </div>
      <div style={{ height: "auto", color: "#fff" }}>
        <img src={Main4} alt="1111 Park Avenue 4A" />
      </div>
    </Carousel>
  );
};

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const rootElement = document.getElementById("root");

ReactDOM.render([<Main key="1" />, <Example key="2" />], rootElement);

export default Main;
