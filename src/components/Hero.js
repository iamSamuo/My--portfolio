import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-intro">
        <h1>
          Hello, I'm Sammy Kariuki. <br /> I love to build things for the Web.
        </h1>
      </div>

      <ul className="social-icons">
        <div className="div"></div>
        <li>
          <a href="https://github.com/iamSamuo">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/samuokimkenya?t=ISPNUzh_72jhLQcKiBDDdQ&s=09">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sammy-kariuki-71328215b">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Hero;
