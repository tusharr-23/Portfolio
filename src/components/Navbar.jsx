import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
      <div className="container-fluid">
        <div className="left-nav">
          <a className="navbar-brand" href="#">
            <img src="asset/TusharRana.jpg" alt="" className="nav-user-img" />
            <span className="nav-user">TUSHAR RANA</span>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="right-nav">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PROJECTS
                </a>
              </li>
            </ul>
            <button className="nav-btn">CONTACT</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
