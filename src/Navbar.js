import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ isLoggedIn, user, handleLogout }) {
  return (
    <nav className="navbar">
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
          </>
        )}
      </ul>
    </nav>
  );
}
