import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";
import CV from "../../assets/Beh-Ling-Xiu-Resume.pdf";
import ME_LAPTOP from "../../assets/laptop_img.jpg";
import ME_CHIRO from "../../assets/chiro_img.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME_LAPTOP} className="img-top" alt="About Image" />
            <img src={ME_CHIRO} className="img" alt="About Image top" />
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
          {/* <div className="about-content-title">
            <h3> A Former Chiropractor 👩‍⚕️</h3>
            <h2> turned Full-Stack Web Developer 👩‍💻</h2>
          </div> */}
          <p>
            I’m a Full Stack Web Developer with a background in healthcare
            services. My interest in building digital products has helped
            transitioned my career into software development. From my prior
            professional experience, I excel in applying analytical thinking and
            a holistic approach to problem-solving. <br /> <br />
            As a junior full stack developer, I possess skills in HTML, CSS,
            JavaScript, React, TailwindCSS, NodeJs, MongoDB and PostgreSQL,
            leveraging these skills to design and maintain responsive websites
            that provide a smooth user experiences. I am excited to contribute
            my skills and enthusiasm to a dynamic tech team in new chapter of my
            career.
            {/* My expertise lies in crafting dynamic and engaging interfaces through
            writting clean and optimized code. */}
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
