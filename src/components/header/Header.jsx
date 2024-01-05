import React from "react";
import "./header.css";
import ME from "../../assets/selfie-whitebackground.png";
import HeaderSocials from "./HeaderSocials";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        {/* <div className="header__image">
          <img src={ME} alt="" />
        </div> */}

        <div className="header__intro">
          <h5>Hello, I'm</h5>

          <h1>Beh Ling Xiu</h1>
        </div>
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <h3 className="text-light chiropractor">A FORMER CHIROPRACTOR </h3>

        <h5 className="text-light turned">
          <span className="chiro emoji">👩‍⚕️</span>turned
          <span className="work emoji">👩‍💻</span>
        </h5>
        <h2 className="text-light developer"> FULL STACK WEB-DEVELOPER</h2>

        {/* <HeaderSocials /> */}

        {/* <div className="header__description">
          <div className="open">
            <FaQuoteLeft />
          </div>
          <h2>
            Chiropractor turned Full Stack Developer, crafting seamless digital
            experiences with a holistic approach.
          </h2>
          <div className="close">
            <FaQuoteRight />
          </div>
        </div> */}

        <a href="#portfolio" className="scroll__down">
          Scroll Down To Portfolio
        </a>
      </div>
    </header>
  );
};

export default Header;
