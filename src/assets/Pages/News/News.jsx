import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./News.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";

export default function News() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-12 images-heading mt-5 mb-5">
            <h1>
              CTIM <span style={{ color: "" }}>NEWS</span>
            </h1>
            {/* <h4>Where Knowledge Meets Headlines.</h4> */}
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
            <h3>
              CTIM's Dr. Suboj Babykutty Honored with Young Investigator's Award
              in Biotechnology 2023
            </h3>
            <p>
              Another achievement for CTIM: The PI, Dr. Suboj Babykutty got
              awarded the Young Investigator's Programme in Biotechnology 2023.
            </p>
          </div>
        </div>
        <hr />
        <div className="row section-2">
          <div className="col-md-6 news-content-2">
            <h3>
              CTIM Secures German Patent for Breakthrough in Anti-Cancer
              Quinoline Derivatives
            </h3>
            <p>
              In a groundbreaking achievement, the Centre for Tumor Immunology and
              Microenvironment (CTIM) has been granted a valuable German patent
              for its pioneering work in detailing the remarkable anti-cancer
              properties of synthetic quinoline derivatives.
            </p>
          </div>
          <div className="col-md-6 image-section">
            <img
              className="news-image-1"
              src="./assets/images/news/4.jpg"
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="row section-1">
          <div className="col-md-6 image-section">
            <img
              className="news-image-1"
              src="./assets/images/news/3.JPG"
              alt=""
            />
          </div>

          <div className="col-md-6 news-content">
            <h3>
              Harvard Medical School Professor Delivers Erudite Lecture at Mar
              Ivanios College
            </h3>
            <p>
              Dr. Dan Gabriel Duda, Associate Professor, Massachusetts General
              Hospital, Harvard MedicalSchool, Boston, USA, delivering Erudite
              Lecture in Mar Ivanios College, Thiruvananthapuram.
            </p>
          </div>
        </div>
        <hr />
        <div className="row section-2">
          <div className="col-md-6 news-content-2">
            <h3>
              Dr. Suboj Babykutty Awarded Prestigious TARE Fellowship for
              Research Excellence
            </h3>

            <p>
              Dr. Suboj Babykutty, an Assistant Professor in the Department of
              Zoology, has been honored with the Teachers Associateship for
              Research Excellence (TARE) by the Department of Science and
              Technology - Science and Engineering Research Board (DST-SERB) of
              the Government of India, with a grant of 18.3 lakhs. Dr. Babykutty
              is currently engaged in collaborative research with the School of
              Biological Science at IISER, Thiruvananthapuram, marking a
              significant milestone in his academic and research career.
            </p>
          </div>
          <div className="col-md-6 image-section">
            <img
              className="news-image-1"
              src="https://pbs.twimg.com/media/FJ4KlrWVIAUD6ox?format=jpg&name=large"
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="row section-1">
          <div className="col-md-6 image-section">
            <img
              className="news-image-1"
              src="./assets/images/news/1.png"
              alt=""
            />
          </div>

          <div className="col-md-6 news-content">
            <h3>
              Dr. Suboj Babykutty Receives Kairali Research Award for
              Outstanding Scientific Achievement
            </h3>
            <p>
              Dr. Suboj Babykutty, Assistant Professor, Department of Zoology,
              has won the Kairali Research Award (Gaveshana Puraskaram)
              instituted by the Government of Kerala, awarded to Faculty members
              of Universities or Colleges of Kerala, in the areas of Chemical
              Science/Physical Science/Biological Science/Social Science/Arts
              and Humanities, excelled in research/pursuing research in cutting
              edge areas. The award carries an amount of Rs. One lakh and a
              Research grant of Rs. Twenty Four lakhs.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
