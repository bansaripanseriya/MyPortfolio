import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Bansari</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            rel="noreferrer"
            href="https://www.instagram.com/bansari4.8/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/bansari-panseriya-6062501ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
            className="footer__social-link"
            target="_blank"
          >
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/bansaripanseriya"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; BansariPanseriya. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
