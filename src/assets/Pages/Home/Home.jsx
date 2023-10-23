import React from "react";

import "./Home.css";

//Import Components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";

const Home = () => {
  var cardData = [
    {
      img: "./assets/images/R2.jpg",
      head: "Find CTIM-related publications here !",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      img: "./assets/images/N1.jpeg",
      head: "Find latest news from CITM Lab !",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      img: "./assets/images/R6.png",
      head: "Research Materials from CTIM Lab",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Video Section Start */}
      <div className="video-wrapper">
        <video muted loop autoPlay>
          {/* <source src="./assets/videos/hero_frame_1.mp4" type="video/mp4" /> */}
          <source src="./assets/videos/cells2.mp4" type="video/mp4" />
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
                src="./assets/images/cells1.png"
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

      {/* Card Section Start */}

      <section className="card-section">
        <div className="container">
          <div className="row">
            {cardData.map((data) => (
              <div className="col-md-4">
                <div className="card-1 mb-4">
                  <img src={data.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{data.head}</h5>
                    <p className="card-text">{data.desc}</p>
                    <center>
                      <button className="card-btn">Go Somewhere</button>
                    </center>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card Section End */}

      <Footer />
    </div>
  );
};

export default Home;
