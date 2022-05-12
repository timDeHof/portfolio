import React from "react";
import "./About.css";
import ME from "../../assets/Me.jpeg";
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
            <img src={ME} alt="About Image" />
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eos
            earum nihil fuga maiores distinctio, soluta numquam atque temporibus
            ducimus dicta, quia sapiente et voluptate facilis corporis ratione
            ab quis!
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
