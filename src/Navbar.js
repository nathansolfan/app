import React from "react";
import { Link } from "react-router-dom";
import logo from "./pictures/logo.png";
import portrait from "./pictures/portrait.png";

function Navbar({ isLoggedIn, user }) {
  return (
    <div className="navbar">
      {/* <div className="logo"><img src={logo} alt="Logo" /></div> */}
      {isLoggedIn && <div>Welcome, {user.name}</div>}
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Homere </Link>
          </li>
          <li>
            <Link to="/about">About me </Link>
          </li>
          <li>
            <Link to="/services">Services </Link>
          </li>
          <li>
            <Link to="/register">Register </Link>
          </li>
          <li>
            <Link to="/login">Log in </Link>
          </li>
        </ul>
      </div>

      {/* <div className="portrait">
        <img src={portrait} alt="Portrait" />
      </div> */}
    </div>
  );
}

export default Navbar;
