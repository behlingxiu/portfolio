import React from "react";
import "./about.css";
import ME from "../../assets/me-about5.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";
import CV from "../../assets/resume.pdf";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <BsFolderCheck className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div> */}
          <div className="about-content-title">
            <h3> A former Chiropractor 👩‍⚕️</h3>
            <h2> turned Full-Stack Web Developer 👩‍💻</h2>
          </div>
          <p>
            With a background in promoting well-being, I've transitioned my
            dedication to creating impactful digital solutions. From my prior
            professional experience, I excel in applying analytical thinking,
            empathy, and a holistic approach to problem-solving. As a junior
            full stack developer, I possess an impressive skills in HTML, CSS,
            JavaScript, React, NodeJs and Tailwind, leveraging these skills to
            design and maintain responsive websites that provide a smooth user
            experiences. My expertise lies in crafting dynamic and engaging
            interfaces through writting clean and optimized code.
          </p>

          <a href={CV} download className="btn btn-primary">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
