import React from "react";

import "./Home.css";

import Marquee from "react-fast-marquee";

//Import Components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";
import Card from "../../components/Cards/Card";

const Home = () => {
  var cardData = [
    {
      img: "/assets/images/cards/C7.png",
      head: "Research",
      desc: `CTIM trying to explore pro inflammatory adipokine chemokine axis
      in obese BC.`,
      link: "/research",
    },
    {
      img: "/assets/images/cards/C2.png",
      head: "CTIM Lab News",
      desc: ` Dr. Suboj Babykutty received YIPB grant from KSCSTE-KBC`,
      link: "/news",
    },

    {
      img: "/assets/images/cards/C5.jpg",
      head: "Publications",
      desc: "Find CTIM related publications and stay tuned with our scientific inputs.",
      link: "/publications",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Video Section Start */}
      <div className="video-wrapper">
        <video muted loop autoPlay>
          {/* <source src="https://cdn.discordapp.com/attachments/1164613528922103960/1166091403647008879/cells1.mp4?ex=65493a3f&is=6536c53f&hm=33bb03fe301835a46247cb947c7e7a4dbddcbf16d8d79d10c7fecdaa9c6dfab3&" type="video/mp4" /> */}
          <source src="/assets/videos/cells2.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <h1>Welcome To CTIM</h1>
          <p>Unlocking Hope, Defeating Cancer</p>
        </div>
      </div>
      {/* Video Section End */}

      <Marquee
        style={{
          background: "#FCF5ED",
          padding: "20px",
          color: "#CE5A67",
          fontWeight: "bold",
        }}
      >
        , CTIM's Dr. Suboj Babykutty Honored with Young Investigator's Award in
        Biotechnology 2023, CTIM Secures German Patent for Breakthrough in
        Anti-Cancer Quinoline Derivatives, Harvard Medical School Professor
        Delivers Erudite Lecture at Mar Ivanios College
      </Marquee>

      {/* About Content Start */}
      <div className="about-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 about-image">
              <img
                className=" img-fluid"
                src="https://cdn.discordapp.com/attachments/1164613528922103960/1166091700947665038/cells1.png?ex=65493a86&is=6536c586&hm=9d9ad906e3d351fbb3cea96e04b50e2a177a1a9423f83dbc71e0f2a32a088f4d&"
                alt=""
              />
            </div>
            <div className="col-xs-12 col-md-6 about-content">
              <h2>
                About Our <span style={{ color: "" }}>Lab</span>
              </h2>
              <p>
                Our group studies how numerous mechanisms in the tumour
                microenvironment cause immune suppression in tumours. In the
                cancer microenvironment, we're focusing on chemokines/cytokines
                and endothelial cells, as well as their impact on immune cell
                recruitment. In addition, our research team looks at the impact
                of obesity on immune modulation and immunotherapy resistance.
                Our group's main translational focus is on developing strategies
                to combat obesity/chemokine-mediated immune suppression and drug
                resistance, which can then be translated into therapeutically
                viable treatments for patients.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About Content End */}

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>
              <center
                style={{
                  fontWeight: "bold",
                  fontFamily: "Playfair Display",
                  color: "#800000",
                }}
              >
                Quick <span style={{ color: "" }}>Access</span>
              </center>
            </h1>
          </div>
        </div>
      </div>

      {/* Card Section Start */}

      <div className="container">
        <div className="row ">
          <Card cardData={cardData} />
        </div>
      </div>

      {/* Card Section End */}

      <Footer />
    </div>
  );
};

export default Home;
