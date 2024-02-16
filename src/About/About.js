import React from "react";
import "./About.css";
import pictureNathan from "../image/pictureNathan.jpg";

const About = () => {
  return (
    <div className="about-container">
      <img className="about-image" src={pictureNathan} alt="Nathan" />
      <h1 className="about-header">About Me</h1>
      <p className="introduction">
        Hello, I'm Nathan. I've been passionately studying coding for over X
        years, focusing on [Your Main Focus, e.g., Front-end Development,
        JavaScript, etc.]. My journey started with [Brief Starting Point],
        leading me to where I am today.
      </p>

      <h2 className="skills-header">Skills</h2>
      <ul className="skills-list">
        <li>HTML & CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        {/* Add more skills as needed */}
      </ul>

      <h2 className="experience-header">Experience</h2>
      <p className="experience-section">
        Share a brief overview of your most impactful projects, roles, or
        contributions in programming.
      </p>

      <h2 className="contact-header">Contact Me</h2>
      <p className="contact-info">
        Feel free to reach out via email:{" "}
        <a href="mailto:nathansolfan@hotmail.com">nathansolfan@hotmail.com</a>{" "}
        or <a href="mailto:nathansolfan@gmail.com">nathansolfan@gmail.com</a>.
      </p>
    </div>
  );
};

export default About;
