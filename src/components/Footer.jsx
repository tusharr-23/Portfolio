import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="main-container">
        <div className="main-footer-upper">
          <div className="main-footer-row-1">
            <h2 className="heading">
              <span>SOCIAL</span>
            </h2>
            <div className="main-footer-socials">
              <a href="https://github.com/tusharr-23" className="footer-social">
                <i className="fa-brands fa-github footer-social-tag"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ranatushar"
                className="footer-social"
              >
                <i className="fa-brands fa-linkedin footer-social-tag"></i>
              </a>
              <a href="" className="footer-social">
                <i className="fa-brands fa-twitter footer-social-tag"></i>
              </a>
              <a href="" className="footer-social">
                <i className="fa-brands fa-instagram footer-social-tag"></i>
              </a>
            </div>
          </div>
          <div className="main-footer-row-2">
            <h2 className="heading">
              <span>TUSHAR RANA</span>
            </h2>
            <p className="main-footer-desc">
              Reliable MERN stack developer delivering scalable solutions with a
              problem-solving mindset and a commitment to quality
            </p>
          </div>
        </div>

        {/*  */}
        <div className="main-footer-lower">
          © Copyright Made with ❤ by <a href=""> TUSHAR RANA</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
