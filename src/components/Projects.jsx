import React from "react";

function Projcets() {
  return (
    <div className="projects-sec sec-pad" id="projects">
      <div className="main-container">
        <h2 className="heading-sec">
          <span className="heading-sec-main">Projects</span>
          <span className="heading-sec-sub">
            Here you will find some of the personal projects that I have
            created, showcasing <br /> my creativity and problem-solving skills
          </span>
        </h2>

        <div className="projects-content">
          {/* ----- Project 1 ----- */}
          <div className="project-container">
            <div className="front-face">
              <div className="cover">
                <img src="asset/Wanderlust.png" className="project-img" />
              </div>
              <div className="project-name">WanderLust</div>
              <p className="about">
                Wanderlust is an Airbnb-inspired web app where users can
                discover, and list rental properties with ease, it offers a
                smooth and secure experience.
              </p>
            </div>
            <div className="back-face">
              <h3 className="project-heading project-name">WanderLust</h3>
              <p className="project-desc">
                Wanderlust, where you can find, list properties &, leave ratings
                & reviews for a better booking experience. Built with HTML, CSS,
                JS, Node.js, Express.js, and MongoDB, it ensures a smooth &
                reliable experience for travelers and hosts.
              </p>
              <button className="nav-btn project-visit">
                Visit &nbsp;{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
              <div className="socials">
                <a href="https://github.com/tusharr-23" className="socials-tag">
                  <i className="fa-brands fa-github socials-tag-icon"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ranatushar"
                  className="socials-tag"
                >
                  <i className="fa-brands fa-linkedin socials-tag-icon"></i>
                </a>
                <a href="" className="socials-tag">
                  <i className="fa-brands fa-twitter socials-tag-icon"></i>
                </a>
              </div>
            </div>
          </div>
          {/* ----- Project 2 ----- */}
          <div className="project-container">
            <div className="front-face">
              <div className="cover">
                <img src="asset/HackerRank.png" className="project-img" />
              </div>
              <div className="project-name">HackerRank(Clone)</div>
              <p className="about">
                A simple HackerRank clone, replicating the platform's clean and
                structured UI. It showcases a responsive design with a visually
                appealing layout.
              </p>
            </div>
            <div className="back-face">
              <h3 className="project-heading project-name">
                HackerRank(Clone)
              </h3>
              <p className="project-desc">
                A simple clone of the HackerRank platform, created using only
                HTML & CSS. The goal was to replicate the clean, minimalistic
                design of HackerRank's interface while focusing on the layout,
                styling, & responsiveness.
              </p>
              <button className="nav-btn project-visit">
                Visit &nbsp;{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
              <div className="socials">
                <a href="https://github.com/tusharr-23" className="socials-tag">
                  <i className="fa-brands fa-github socials-tag-icon"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ranatushar"
                  className="socials-tag"
                >
                  <i className="fa-brands fa-linkedin socials-tag-icon"></i>
                </a>
                <a href="" className="socials-tag">
                  <i className="fa-brands fa-twitter socials-tag-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-content">
          {/* ----- Project 3 ----- */}
          <div className="project-container">
            <div className="front-face">
              <div className="cover">
                <img src="asset/Spotify.png" className="project-img" />
              </div>
              <div className="project-name">Spotify(Clone)</div>
              <p className="about">
                This project showcases a responsive design inspired by the
                Spotify interface, allowing users to explore music and
                playlists.
              </p>
            </div>
            <div className="back-face">
              <h3 className="project-heading project-name">Spotify(Clone)</h3>
              <p className="project-desc">
                A stylish and responsive Spotify clone built using HTML, and
                CSS. This project replicates the look and feel of Spotify,
                featuring a dynamic UI, interactive controls, and smooth music
                playback for an engaging user experience.
              </p>
              <button className="nav-btn project-visit">
                Visit &nbsp;{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
              <div className="socials">
                <a href="https://github.com/tusharr-23" className="socials-tag">
                  <i className="fa-brands fa-github socials-tag-icon"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ranatushar"
                  className="socials-tag"
                >
                  <i className="fa-brands fa-linkedin socials-tag-icon"></i>
                </a>
                <a href="" className="socials-tag">
                  <i className="fa-brands fa-twitter socials-tag-icon"></i>
                </a>
              </div>
            </div>
          </div>
          {/* ----- Project 4 ----- */}
          <div className="project-container">
            <div className="front-face">
              <div className="cover">
                <img src="asset/Zerodha.png" className="project-img" />
              </div>
              <div className="project-name">TradeXpert</div>
              <p className="about">
                Developed a full-stack stock trading platform replicating
                Zerodha, Designed an intuitive UI with React.js and optimized
                the backend with Node.js and MongoDB.
              </p>
            </div>

            <div className="back-face">
              <h3 className="project-heading project-name">TradeXpert</h3>
              <p className="project-desc">
                Built a full-stack stock trading platform with real-time market
                data, order execution, portfolio tracking, and interactive
                charts, and authentication for security. Optimized backend for
                scalability using Node.js & MongoDB.
              </p>
              <button className="nav-btn project-visit">
                Visit &nbsp;{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
              <div className="socials">
                <a href="https://github.com/tusharr-23" className="socials-tag">
                  <i className="fa-brands fa-github socials-tag-icon"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ranatushar"
                  className="socials-tag"
                >
                  <i className="fa-brands fa-linkedin socials-tag-icon"></i>
                </a>
                <a href="" className="socials-tag">
                  <i className="fa-brands fa-twitter socials-tag-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projcets;
