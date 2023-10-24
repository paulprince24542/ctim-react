import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./News.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";

export default function News() {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-12 images-heading">
            <h1>
              CTIM <span style={{ color: "red" }}>NEWS</span>
            </h1>
            <h4>Where Knowledge Meets Headlines.</h4>
          </div>
        </div>
        <hr />
        <div className="row section-1">
          <div className="col-md-6 image-section">
            <img
              className="news-image-1"
              src="./assets/images/news/2.png"
              alt=""
            />
          </div>
          <div className="col-md-6 news-content">
            <p>
              <p>
                Another achievement for CTIM: The PI, Dr. Suboj Babykutty got
                awarded the Young Investigator's Programme in
                Biotechnology 2023.
              </p>
            </p>
          </div>
        </div>
        <div className="row section-2">
          <div className="col-md-6 news-content-2">
            <p>
              <p>
                Dr. Dan Gabriel Duda, Associate Professor, Massachusetts General
                Hospital, Harvard MedicalSchool, Boston, USA, delivering Erudite
                Lecture in Mar Ivanios College, Thiruvananthapuram
              </p>
            </p>
          </div>
          <div className="col-md-6 image-section">
            <img
              className="news-image-1"
              src="./assets/images/news/3.png"
              alt=""
            />
          </div>
        </div>
        <div className="row section-1">
          <div className="col-md-6 image-section">
            <img
              className="news-image-1"
              src="https://pbs.twimg.com/media/FJ4KlrWVIAUD6ox?format=jpg&name=large"
              alt=""
            />
          </div>
          <div className="col-md-6 news-content">
            <p>
              <p>
                Dr Suboj Babykutty, Assistant Professor, Department of Zoology,
                has been awarded Teachers Associateship for Research Excellence
                (TARE) from DST-SERB, Govt of India (18.3 lakhs). He is working
                in collaboration with School of Biological Science, IISER,
                Thiruvananthapuram.
              </p>
            </p>
          </div>
        </div>
        <div className="row section-2">
          <div className="col-md-6 news-content-2">
            <p>
              <p>
                Dr. Suboj Babykutty, Assistant Professor, Department of Zoology,
                has won the Kairali Research Award (Gaveshana Puraskaram)
                instituted by the Government of Kerala, awarded to Faculty
                members of Universities or Colleges of Kerala, in the areas of
                Chemical Science/Physical Science/Biological Science/Social
                Science/Arts and Humanities, excelled in research/pursuing
                research in cutting edge areas. The award carries an amount of
                Rs. One lakh and a Research grant of Rs. Twenty Four lakhs.
              </p>
            </p>
          </div>
          <div className="col-md-6 image-section">
            <img
              className="news-image-1"
              src="./assets/images/news/1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
