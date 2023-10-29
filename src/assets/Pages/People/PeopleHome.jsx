import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";

import "./PeopleHome.css";

export default function PeopleHome() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <center className="mb-5 mt-5">
            <h3
              style={{
                fontFamily: "Playfair Display",
                fontWeight: "bold",
                color: "#800000",
              }}
            >
              OUR
              <span style={{ color: "" }}> PEOPLE</span>
            </h3>
          </center>
        </div>
        <hr />
        <div className="mb-5 home-section">
          <div className="section-19">
            <a href="/principal">
              <img src="./assets/images/p1.png" alt="" />
            </a>
            <h4>Principal Investigator</h4>
          </div>
          <div className="section-19">
            <a href="/members">
              <img src="./assets/images/gallery/13.jpg" alt="" />
            </a>
            <h4>Lab Members</h4>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
