import React from "react";
import "./footer.css";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        BEHLINGXIU
      </a>
      <div className="footer__socials">
        {/* <a href="https://instagram.com">
          <BsInstagram />
        </a> */}
        <a href="https://www.linkedin.com/in/lingxiubeh/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/behlingxiu">
          <BsGithub />
        </a>
      </div>
      <div className="footer__contacts">
        <h5>behlingxiu@gmail.com</h5>
        <h5>+6011-10050525</h5>
      </div>

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
      </ul>

      <div className="footer__copyright">
        <small>&copy; BEHLINGXIU. All rights reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
