import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiSolidBookContent, BiSolidMessageAltDetail } from "react-icons/bi";
import { BsCardChecklist } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => {
          setActiveNav("#");
        }}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => {
          setActiveNav("#about");
        }}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => {
          setActiveNav("#experience");
        }}
      >
        <BsCardChecklist />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => {
          setActiveNav("#portfolio");
        }}
      >
        <BiSolidBookContent />
      </a>
      {/* <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => {
          setActiveNav("#contact");
        }}
      >
        <BiSolidMessageAltDetail />
      </a> */}
    </nav>
  );
};

export default Nav;
