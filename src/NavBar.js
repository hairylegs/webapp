import React from "react";
import { Link } from "react-router-dom";
import Logo from "./images/OlshanRealtylogo.png";

const NavBar = () => {
  return (
    <div className="NavBar">
      <navbar />
      <ul>
        <Link exact to="/">
          <li>
            <a href>
              <img border="0" alt="logo" src={Logo} width="280" height="50" />
            </a>
          </li>
        </Link>

        <Link to="Sales">
          <li>SALES</li>
        </Link>

        <Link to="Rentals">
          <li>RENTALS</li>
        </Link>

        <Link to="Agents">
          <li>AGENTS</li>
        </Link>

        <Link to="Press">
          <li>PRESS</li>
        </Link>

        <Link to="About">
          <li>ABOUT</li>
        </Link>

        <Link to="FAQ">
          <li>FAQ</li>
        </Link>

        <Link to="MarketReport">
          <li>MARKET REPORT</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
