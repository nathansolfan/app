import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter and other necessary components
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About"; // Import your About component
import Services from "./Services"; // Import your Services component
import Login from "./Login";
import Register from "./Register";
import MyCalendar from "./Calendar/calendar";

function App() {
  const [auth, setAuth] = useState({ isLoggedIn: false, user: null });
  const handleLogin = (user) => {
    setAuth({ isLoggedIn: true, user: user });
  };

  const handleLogout = () => {
    setAuth({ isLoggedIn: false, user: null });
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          isLoggedIn={auth.isLoggedIn}
          user={auth.user}
          handleLogout={handleLogout}
        />
        <div className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />{" "}
              {/* Specify the Home component */}
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route
                path="/login"
                element={<Login handleLogin={handleLogin} />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/calendar" element={<MyCalendar />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
