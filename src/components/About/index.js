import React from "react";
import "./About.scss";

import Me from "../../assets/yashpal.jpg";

const About = () => {
  return (
    <div className="details__section">
      <div className="about">
        <h1>About Me</h1>
        <div className="about__container">
          <div className="about__info">
            <p>
              I'm a self-taught Full Stack Web Developer and a Competitive Programmer.
               I'm pursuing my Bachelor's Degree in
              Computer Science and Engineering from National Institute of Technology Agartala,
              graduation in 2025.
            </p>
          
            <p>
           I do problem solving on online platform like 
           Codeforces, CodeChef and Leetcode and have solved more than
           1000+ problem combined.
           I am rated Pupil(max 1313) on Codeforces and 3 star (max 1703) on CodeChef.
          </p>
          <p>
            I like to pariticipate in hackathons and coding competitions.
            My team Lifetime Terror secured 2nd rank in Tripura Police Hackathon which was a National 
            level competition.
            I have achieved the postman student expert badge too. 
          </p>
            <p>
             I have worked as a Web Development intern at Viand Reseach Private Limited 
             where I enhanced my Development skills.
             I am also in the Web Development team of Google Developer Student Club (GDSC) at NIT Agartala.
            </p>
            <p></p>
          </div>
          

          <div className="about__image">
            <img src={Me} alt="" />
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="skills__container">
          <h1>Skills</h1>
          <div className="skill__cards">
            <div className="skill__card" style={{ backgroundColor: "#cf92fb" }}>
              <h2>Expertise</h2>
              <p>Problem Solving</p>
              <p>UI UX Design</p>
              <p>Database</p>
              <p> Management</p>

              <p>Web Development</p>
            </div>
            <div className="skill__card" style={{ backgroundColor: "#b44bff" }}>
              <h2>Tech Stack</h2>
              <p>C/C++</p>
              <p>Javascript</p>
              <p>React Js</p>
              
              <p>Node Js</p>
              <p>Postman</p>
              
              <p>MongoDB</p>
              <p>MySql</p>
              <p>Firebase</p>
            </div>

            <div className="skill__card" style={{ backgroundColor: "#911ae5" }}>
              <h2>Design Tools</h2>
              <p>Figma</p>
              <p>Photoshop</p>
              <p>Illustrator</p>
             <p>HTML</p>
             <p>CSS</p>
              <p>Material UI</p>
              <p>Bootstrap</p>
              <p>Tailwind Css</p>
            </div>
           
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
