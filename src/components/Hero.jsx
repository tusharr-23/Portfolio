import React from "react";

function Hero() {
  return (
    <div className="hero-sec">
      <div className="row">
        <h1 className="hero-heading">
          Transforming Concepts into <br /> Seamless{" "}
          <span style={{ color: "rgb(120, 67, 233)" }}>User Experiences</span>
        </h1>
      </div>

      <div className="row hero-content">
        <h3>Hey I'm Tushar Rana, Aspiring Software Developer</h3>
      </div>

      <div className="row">
        <button className="hero-btn nav-btn">PROJECTS</button>
      </div>

      <div class="scroll">
        <div class="mouse"></div>
        <p class="scroll-text">
          Scroll Down <i class="fa-solid fa-arrow-down"></i>
        </p>
      </div>
    </div>
  );
}

export default Hero;
