import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter and other necessary components
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About"; // Import your About component
import Services from "./Services"; // Import your Services component
import Login from "./Login";
import Register from "./Register";
import UserDetail from "./UserDetail";

function App() {
  const [auth, setAuth] = useState();
  return (
    <Router>
      {" "}
      {/* Wrap your entire app with BrowserRouter */}
      <div className="App">
        <div>
          <Login setAuth={setAuth} />
          {auth.isLoggedIn && <UserDetail user={auth.user} />}
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/* Specify the Home component */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
