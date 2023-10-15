import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <div className="container">
          <div className="footer-cta">
            <div className="row">
              <div className="col-md-4">
                <div className="cta-text">
                  <h4>Find Us</h4>
                  <span>1010 Avenue, sw 54321, chandigarh</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cta-text">
                  <h4>Call Us</h4>
                  <span>1010 Avenue, sw 54321, chandigarh</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cta-text">
                  <h4>Mail</h4>
                  <span>1010 Avenue, sw 54321, chandigarh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-content">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-logo">
                  <img src="./assets/images/logo-4.1.png" alt="" />
                </div>
                <div className="footer-text">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem voluptate dignissimos repellat aut consectetur amet
                    non delectus necessitatibus error rerum libero facilis
                    porro, asperiores provident distinctio expedita! Soluta,
                    modi optio.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#">
                    <i className="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter twitter-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-google-plus-g google-bg"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Expert Team</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="d-flex justify-content-center subscribe-form">
                    <input placeholder="Email" type="text" name="" id="" />
                    <button className="subscribe-btn"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
