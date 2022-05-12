import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import "./Header.css";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
