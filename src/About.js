import React from "react";
import pictureNathan from "./image/pictureNathan.jpg";

const About = () => {
  return (
    <div className="about-container">
      <img src={pictureNathan} alt="" />
      <h1 className="about-header"> About Me </h1>
      <p className="introduction">
        Hello, I`m Nathan. I`ve been studying coding for a long time.
      </p>

      <h2 className="skills-header">Skills:</h2>
      <ul className="skills-list">
        <li>Skills 1</li>
        <li>Skkils 2</li>
        <li>Skills 3</li>
      </ul>

      <h2 className="experience-header">Experience</h2>
      <div className="experience-section">My experience with programming</div>
      <h2 className="contact-header">Contact me</h2>
      <p className="contact-info">
        Email: nathansolfan@hotmail.com Email: nathansolfan@gmail.com
      </p>
    </div>
  );
};

export default About;
