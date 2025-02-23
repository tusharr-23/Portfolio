import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid p-3">
        <a className="navbar-brand" href="#">
          TUSHAR RANA
        </a>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item home-link">
              <a className="nav-link link-opt " aria-current="page" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-opt" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link-opt"
                aria-current="page"
                href="#projects"
              >
                PROJECTS
              </a>
            </li>
            <li className="nav-item nav-link-btn">
              <a className="nav-link" href="#contact">
                <button className="nav-btn">CONTACT</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
