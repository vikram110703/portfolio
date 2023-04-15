import React from "react";
/* import TypeRoles from "./TypeRoles"; */
import "./HeroSection.scss";
import { Link } from "react-scroll";
import Dev from "../../components/Dev";

const HeroSection = () => {
  return (
    <div className="hero-section" id="hero-section">
      <div className="hero__container">
        <div className="hero__intro">
          <p>Hi! my name is Yashpal, I love</p>
          <h1>
            building <span className="hero__color">products</span> and{" "}
            <span className="hero__color">experiences</span>.
          </h1>
          <div className="hero__intro-type">{/* <TypeRoles /> */}</div>
          <div className="hero__short-intro">
            <p>
              Second Year Computer Science and Engineering student from Ambikapur, working as a
              Full Stack Web developer and currently learning Data Structures and Algorithms
              building cool stuff with ReactJS and ExpressJS.
            </p>
          </div>
        </div>
        <div className="hero__CTA">
          <a href="https://github.com/yashpal-97" className="hero__CTA-button-link" target="blank">
            <button>Check out my works!</button>
          </a>
          <a
            href="https://drive.google.com/file/d/1Wk7ku1Td3cvriHnGaNF3ec6dd6ce-KH8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume"
          >
            View my Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
