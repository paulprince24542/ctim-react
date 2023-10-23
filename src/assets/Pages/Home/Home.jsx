import React from "react";

import "./Home.css";

//Import Components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";

const Home = () => {
  var cardData = [
    {
      img: "https://cdn.discordapp.com/attachments/1164613528922103960/1166088986272481360/R2.jpg?ex=654937ff&is=6536c2ff&hm=3985bd6ef7403ebb5f23aae2c29bc9dc26bbc445b0db82765f3216b630d40ae1&",
      head: "Find CTIM-related publications here !",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "/publications",
    },
    {
      img: "https://cdn.discordapp.com/attachments/1164613528922103960/1166089043528929301/2.png?ex=6549380c&is=6536c30c&hm=232cd34e16796563a31feb9ea632d528a6ec35917b123057411a33ce3323aad2&",
      head: "Find latest news from CITM Lab !",
      desc: "Another achievement for CTIM: The PI, Dr. Suboj Babykutty got awarded the Young Investigator's Programme in Biotechnology 2023.",
      link: "/news",
    },
    {
      img: "https://cdn.discordapp.com/attachments/1164613528922103960/1166088987081977946/R6.png?ex=654937ff&is=6536c2ff&hm=ce099d80429705f700b1e7cb013756e24c790bedb8dc25360612c6479f6b0345&",
      head: "Research Materials from CTIM Lab",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "/research",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Video Section Start */}
      <div className="video-wrapper">
        <video muted loop autoPlay>
          {/* <source src="https://cdn.discordapp.com/attachments/1164613528922103960/1166091403647008879/cells1.mp4?ex=65493a3f&is=6536c53f&hm=33bb03fe301835a46247cb947c7e7a4dbddcbf16d8d79d10c7fecdaa9c6dfab3&" type="video/mp4" /> */}
          <source src="https://cdn.discordapp.com/attachments/1164613528922103960/1166091404154515576/cells2.mp4?ex=65493a3f&is=6536c53f&hm=d47a2d4b8e2530afdd243b6081fd18382e254e3e76a2a024b45691ddf914214f&" type="video/mp4" />
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

      {/* Card Section Start */}

      <section className="card-section">
        <div className="container">
          <div className="row">
            {cardData.map((data) => (
              <div className="col-md-4">
                {/* <div className="card-1 mb-4">
                  <img src={data.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{data.head}</h5>
                    <p className="card-text">{data.desc}</p><br />
                    <center>
                      <a href={data.link} className="card-btn">Go Somewhere</a>
                    </center>
                  </div>
                </div> */}
                <div className="card">
                  <img
                    className="card-img-top"
                    src={data.img}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.head}</h5>
                    <p className="card-text">{data.desc}</p>
                    <center>
                      <a href={data.link} className="btn btn-primary">
                        Go somewhere
                      </a>
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
