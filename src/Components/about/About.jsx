import React from "react";
import "./About.css";
import ME from "../../assets/me-sitting.jpeg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>8+ Years Working </small>
            </article>
            <article className="about_card">
              <BiUser className="about_icon" />
              <h5>Skills</h5>
              <small>10+ attained </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>6+ Completed </small>
            </article>
          </div>
          <p>
            My name is Timothy Tyler DeHof. In 2011, I graduated from the
            University of North Florida with a Bachelor of Science degree in
            Mechanical engineering. Even though I have a Mechanical Engineering
            degree and seven years of engineering work experience, Tech has
            always been an interest to me and my new professional career focus.
            This year I took the plunge and attended a rigorous BootCamp and
            made a career change where I developed applications for the web. I
            believe my years of mechanical engineering experience, combined with
            what I have learned about software development, is something I think
            I will be a great benefit to offer to a company.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
