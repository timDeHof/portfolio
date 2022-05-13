import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram, FiTwitter } from "react-icons/fi";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <a href="#" className="footer_logo">
        Tim DeHof
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <FiTwitter />
        </a>
      </div>
      <a href="https://lovepik.com/images/png-background.html">
        Background Png vectors by Lovepik.com
      </a>
      <div className="footer_copyright">
        <small>Copyright ⓒ {year} Tim DeHof. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
