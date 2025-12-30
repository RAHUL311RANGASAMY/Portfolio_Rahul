import React, { useState } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import { Link as ScrollLink } from "react-scroll";
import Resume from "../../../public/Resume.pdf";

const Hero = () => {
  //scroll
  const [menu, setMenu] = useState("connect");

  const akka=10
  return (
    <div className="hero" id="hero-scroll">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Rahul,</span>MERN Stack Developer based in India
      </h1>
      <p>
        {" "}
        Passionate about building scalable web applications,Enhancing user
        experiences, and leveraging my skills in web development to contribute
        to innovative projects.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <ScrollLink
            to="connect-scroll"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <ul onClick={() => setMenu("connect")}>Connect With Me</ul>
          </ScrollLink>
        </div>
        <div className="hero-resume">
          <a href="/public/Resume.pdf" download="Rahul.R(Resume).pdf">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
