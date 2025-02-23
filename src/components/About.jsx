import React from "react";

function About() {
  return (
    <div className="about-sec" id="about">
      <div className="main-container">
        <h2 className="heading-sec">
          <span className="heading-sec-main">About Me</span>
          <span className="heading-sec-sub">
            Here you will find more information about me, what I do, and my
            current skills <br /> mostly in terms of programming and technology
          </span>
        </h2>

        <div className="about-content">
          <div className="about-content-main">
            <h3 className="about-content-title">Get to know me!</h3>
            <div className="about-content-details">
              <p className="about-content-details-para">
                I am a MERN Stack Developer with a passion for building modern,
                dynamic, and user-friendly web applications. With expertise in
                MongoDB, Express.js, React.js, and Node.js. I create seamless
                and scalable solutions that enhance user experience.
              </p>
              <p className="about-content-details-para">
                I am also well-versed in Git and GitHub, ensuring smooth
                collaboration and version control in development projects. My
                strong foundation in Java and Data Structures & Algorithms (DSA)
                helps me write optimized and efficient code, making applications
                faster and more reliable.
              </p>
              <p className="about-content-details-para">
                I love solving complex problems, learning new technologies, and
                turning ideas into reality. Whether it's developing full-stack
                applications, optimizing performance, or collaborating on
                innovative projects, I am always eager to push my limits and
                grow as a developer.
              </p>
              <p className="about-content-details-para">
                Let’s build something amazing together!
              </p>
            </div>
            <a href="#contact">
              <button className="nav-btn about-btn">CONTACT</button>
            </a>
          </div>

          <div className="about-content-skills">
            <h3 className="about-content-title">My Skills</h3>
            <div className="skills">
              <div className="skills-skill">HTML</div>
              <div className="skills-skill">CSS</div>
              <div className="skills-skill">JavaScript</div>
              <div className="skills-skill">MongoDB</div>
              <div className="skills-skill">NodeJS</div>
              <div className="skills-skill">ExpressJS</div>
              <div className="skills-skill">ReactJS</div>
              <div className="skills-skill">Java</div>
              <div className="skills-skill">Terminal</div>
              <div className="skills-skill">Git</div>
              <div className="skills-skill">Github</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
