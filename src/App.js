import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter and other necessary components
import "./App.css";
import Button from "./Button";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About"; // Import your About component
import Services from "./Services"; // Import your Services component
import Form from "./form/form";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap your entire app with BrowserRouter */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/* Specify the Home component */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Button />
        <Form />
        <p>Haha</p>
      </div>
    </Router>
  );
}

export default App;
