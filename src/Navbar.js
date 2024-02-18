import React from "react";
import { Link } from "react-router-dom";
// import footballImage from "./image/football.png"; // Importing the image

export default function Navbar({ isLoggedIn, user, handleLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* <img className="navbar-img" src={footballImage} alt="Football" /> */}
      </div>
      {isLoggedIn && (
        <div className="navbar-user-info">
          <span>Welcome, {user.name}</span>
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/api/matches">Matches</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
