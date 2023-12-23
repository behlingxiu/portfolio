import React from "react";
import "./header.css";
import ME from "../../assets/selfie-whitebackground.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Beh Ling Xiu</h1>
        <HeaderSocials />

        <h3 className="text-light chiropractor">A FORMER CHIROPRACTOR </h3>

        <h5 className="text-light turned">
          <span className="chiro emoji">👩‍⚕️</span>turned
          <span className="work emoji">👩‍💻</span>
        </h5>
        <h2 className="text-light developer"> FULL STACK WEB-DEVELOPER</h2>

        {/* <HeaderSocials /> */}

        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}

        <a href="#portfolio" className="scroll__down">
          Scroll Down To Portfolio
        </a>
      </div>
    </header>
  );
};

export default Header;
