import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div className="about" id='about-scroll'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
        <div className="about-section">
          <div className="about-left">
            <img src={profile_img} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                
                Highly motivated Full Stack Developer with expertise in the MERN
                stack (MongoDB, Express, React.js, Node.js)
              </p>
              <p>
                
                Passionate about building scalable web applications, enhancing
                user experiences, and leveraging my skills in web development to
                contribute to innovative projects
              </p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                  <p>React Js</p><hr style={{width:"70%"}}/>
                </div>
                <div className="about-skill">
                  <p>Node Js</p><hr style={{width:"60%"}}/>
                </div>
                <div className="about-skill">
                  <p>Express.js</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                  <p>HTML & CSS</p><hr style={{width:"90%"}}/>
                </div>
                <div className="about-skill">
                  <p>Mongodb</p><hr style={{width:"60%"}}/>
                </div>
                <div className="about-skill">
                  <p>Github</p><hr style={{width:"90%"}}/>
                </div>
                <div className="about-skill">
                  <p>MySql</p><hr style={{width:"70%"}}/>
                </div>
                <div className="about-skill">
                  <p>Javascript</p><hr style={{width:"100%"}}/>
                </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2.5+</h1>
                <p>Years of Experience</p>
            </div>
            <hr />
             <div className="about-achievement">
                <h1>5+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
             <div className="about-achievement">
                <h1>6 Months</h1>
                <p>Internship Complted at NITk</p>
            </div>
            
        </div>

      
    </div>
  );
};

export default About;
