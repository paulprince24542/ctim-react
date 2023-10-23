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
                {/* <div className="cta-text">
                  <i class="fa-solid fa-location-dot fa-2xl"></i>
                  <div>
                    <h4>Find Us</h4>
                    <span>
                      Centre for Tumor Immunology and Microenvironment
                    </span>
                    <br />
                    <span>Dept of Zoology</span>
                    <br />
                    <span>Mar Ivanios College (Autonomous)</span>
                    <br />
                    <span>Bethany Hills, Nalanchira P.O,</span>
                    <br />
                    <span>Thiruvanathapuram - 695015 Kerala, India.</span>
                    <br />
                  </div>
                </div> */}
                <div className="cta-text">
                  <i className="fa-solid fa-location-dot fa-2xl"></i>
                  <div>
                    <h4>Find Us</h4>
                    <span>
                      Centre for Tumor Immunology and Microenvironment
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cta-text">
                  <i className="fa-solid fa-phone fa-2xl"></i>
                  <div>
                    <h4>Call Us</h4>
                    <span>+91-9995068223</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cta-text">
                  <i className="fa-solid fa-paper-plane fa-2xl"></i>
                  <div>
                    <h4>Mail</h4>
                    <span>suboj.babykutty@mic.ac.in</span>
                  </div>
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
                {/* <div className="footer-text">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem voluptate dignissimos repellat aut consectetur amet
                    non delectus necessitatibus error rerum libero facilis
                    porro, asperiores provident distinctio expedita! Soluta,
                    modi optio.
                  </p>
                </div> */}
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="https://business.facebook.com/CTIM-Centre-for-Tumor-Immunology-and-Microenvironment-107954435232014">
                    <i className="fa-brands fa-facebook fa-xl"></i>
                  </a>
                  <a href="https://twitter.com/CTIM12885237">
                    <i className="fa-brands fa-twitter fa-xl"></i>
                  </a>
                  <a href="https://www.instagram.com/ctimmic09/">
                    <i className="fa-brands fa-instagram fa-xl"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/ctim-centre-for-tumor-immunology-0b81ab239/">
                    <i className="fa-brands fa-linkedin fa-xl"></i>
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
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/research">Research</a>
                    </li>
                    <li>
                      <a href="/oppurtunities">Oppurtunities</a>
                    </li>
                    <li>
                      <a href="/publications">Publications</a>
                    </li>
                    <li>
                      <a href="/gallery">Gallery</a>
                    </li>
                    <li>
                      <a href="/people">People</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
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
      <div className="copyright-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="copyright-text">
                <p>Copyright &copy; 2023, All Right Reserved CTIM</p>
                <p>
                  Developed by{" "}
                  <a
                    className="profile-link"
                    href="https://paulprince24542.github.io/portfolio/"
                  >
                    {" "}
                    Paul Prince
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
