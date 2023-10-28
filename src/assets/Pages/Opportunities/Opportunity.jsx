import React from "react";
import "./Opportunity.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";

export default function Oppurtunity() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row opporunities-section">
          <div className="col-xs-12 col-md-6">
            <div className="collage">
              <img src="./assets/images/college.jpg" alt="" />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="details">
              <h4>Opportunities</h4>
              <p>
                Thank you for your interest in CTIM, currently we have no
                opportunities in our laboratory. Be in touch with us or write us
                for specific enquiries
              </p>
              <p>
                For inquiries and applications, please contact us via e-mail:
                ctimmic09@gmail.com
              </p>
              <div className="d-flex justify-content-center explore">
                <a href="/research">Explore our research</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
