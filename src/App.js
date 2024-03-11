import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About/About";
import Login from "./Login";
import Register from "./Register";
import MyCalendar from "./Calendar/Calendar";
import FeedbackForm from "./Calendar/FeedbackForm";
import ChatGPT from "./ChatGPT/ChatGPT";
import Services from "./Services/Services";
import Line from "./Services/Line";

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
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/line" element={<Line />} />
              <Route
                path="/login"
                element={<Login handleLogin={handleLogin} />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/calendar" element={<MyCalendar />} />
              <Route path="/feedback" element={<FeedbackForm />} />
              <Route path="/chatgpt" element={<ChatGPT />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
