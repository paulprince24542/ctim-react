import React from "react";

import "./Home.css";

//Import Components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";

const Home = () => {
  var cardData = [
    {
      img: "/assets/images/cards/C3.jpg",
      head: "Research Materials from CTIM Lab",
      desc: `CTIM trying to explore pro inflammatory adipokine chemokine axis
      in obese BC, which suppresses immune surveillance in tumor
      microenvironment.`,
      link: "/research",
    },
    {
      img: "/assets/images/cards/C2.png",
      head: "Find latest news from CITM Lab !",
      desc: ` Another achievement for CTIM: The PI, Dr. Suboj Babykutty got
      awarded the Young Investigator's Programme in Biotechnology
      2023.`,
      link: "/news",
    },

    {
      img: "/assets/images/cards/C1.jpg",
      head: "Find CTIM publications here !",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
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
                ABOUT OUR <span style={{ color: "red" }}>LAB</span>
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
              <center style={{ fontWeight: "bold" }}>
                QUICK <span style={{ color: "red" }}>ACCESS</span>
              </center>
            </h1>
          </div>
        </div>
      </div>

      {/* Card Section Start */}

      <div className="container">
        <div className="row card-section">
          {cardData.map((data) => (
            <div className="col-md-4 t-box">
              <div className="card-box-1">
                <img src={data.img} alt="" />
                <h5 class="card-title">{data.head}</h5>
                <p class="card-text">{data.desc}</p>
                <a href={data.link} className="btn btn-primary">
                  Go Somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Section End */}

      <Footer />
    </div>
  );
};

export default Home;
