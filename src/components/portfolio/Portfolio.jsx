import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/sociopedia.png";
import IMG2 from "../../assets/fashion-ecomm.png";
import { BsGithub } from "react-icons/bs";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { useMediaQuery } from "@mui/material";

const Portfolio = () => {
  const mediumScreen = useMediaQuery("(max-width: 1024px)");

  return (
    <section id="portfolio">
      <h5>PORTFOLIO</h5>
      <h2>Each project is a unique piece of development</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio image" />
          </div>
          <div className="portfolio__item-content">
            <h3>Sociopedia</h3>
            <h5>
              A social networking website that allow user to post stories with
              image, manage your social circle by adding or removing friends,
              and stay connected with a dynamic homepage showcasing friends'
              stories. Sociopedia also feature a responsive design, and provide
              a option to switch between dark and light modes to ensure a
              seamless user experience.
            </h5>
            <div portfolio__item-tech>
              <h4> HTML | CSS | MongoDB | Express | React | NodeJs | Redux </h4>
            </div>

            <div className="portfolio__item-cta">
              <a
                href="https://github.com/behlingxiu/sociopedia-frontend"
                className="btn"
              >
                {mediumScreen ? (
                  <BsGithub />
                ) : (
                  <>
                    Github <BsGithub />
                  </>
                )}
              </a>
              <a
                href="https://sociopedia-htvr.onrender.com"
                className="btn btn-primary"
                target="_blank"
              >
                {mediumScreen ? (
                  <FaRegShareFromSquare />
                ) : (
                  <>
                    Live Demo <FaRegShareFromSquare />
                  </>
                )}
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfolio image" />
          </div>
          <div className="portfolio__item-content">
            <h3>Fashion Eccommerce Website</h3>
            <h5>
              Explore a responsive fashion ecommerce site that let users
              seamlessly browse products on the homepage, view details on
              dedicated product pages, and easily add or remove items to the
              cart.
            </h5>
            <div portfolio__item-tech>
              <h4>HTML | JavaScript | TailwindCSS | React </h4>
            </div>

            <div className="portfolio__item-cta">
              <a
                href="https://github.com/behlingxiu/fashion-ecomm"
                className="btn"
              >
                {mediumScreen ? (
                  <BsGithub />
                ) : (
                  <>
                    Github <BsGithub />
                  </>
                )}
              </a>
              <a
                href="https://fashion-ecomm-x0ne.onrender.com/"
                className="btn btn-primary"
                target="_blank"
              >
                {mediumScreen ? (
                  <FaRegShareFromSquare />
                ) : (
                  <>
                    Live Demo <FaRegShareFromSquare />
                  </>
                )}
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="portfolio image" />
          </div>
          <div className="portfolio__item-content">
            <h3>Portfolio item title</h3>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              odio, aspernatur ipsam eaque consequuntur facere? Ratione
              quisquam, excepturi dolores voluptatum aperiam laborum dolorum,
              tenetur, iste quam ullam vel reprehenderit debitis?
            </h5>
            <div portfolio__item-tech>
              <h4>React | CSS | JavaScript</h4>
            </div>

            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn">
                {mediumScreen ? (
                  <BsGithub />
                ) : (
                  <>
                    Github <BsGithub />
                  </>
                )}
              </a>
              <a
                href="https://dribble.com/Alien_pixels"
                className="btn btn-primary"
                target="_blank"
              >
                {mediumScreen ? (
                  <FaRegShareFromSquare />
                ) : (
                  <>
                    Live Demo <FaRegShareFromSquare />
                  </>
                )}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
