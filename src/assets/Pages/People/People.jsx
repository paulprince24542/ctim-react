import React from "react";

//Import Components
import Navbar from "../../components/Navbar/Navbar";
import "./People.css";
import Footer from "../../components/Footer/footer";

const People = () => {
  var peopleData = [
    {
      name: "Hima Xavier",
      img: "https://cdn.discordapp.com/attachments/1164613528922103960/1164615451905642596/Hima_Xavier.jpg?ex=6543dba9&is=653166a9&hm=27fa59201525c641b77b3e39c405cd61342178f256853f733865089af4484d6f&",
      email: "hima.xavier@mic.ac.in",
      desc: `I joined the CTIM lab in 2019 after obtaining
      Joint-CSIR-UGC-JRF,and upgraded to SRF in 2022.
      I have done my graduation and postgraduation in
      general biotechnology from St. Mary’s college
      Thrissur. My work at CTIM is to investigate the
      immunological role of pro- angiogenic chemokines in
      triple negative breast cancer microenvironment and
      to find potentialdrug targets to improve
      immunotherapy.`,
    },
    {
      name: "Athira Gireesh GM",
      img: "https://media.discordapp.net/attachments/1164613528922103960/1164615451272294482/Athira_Gireesh_G.M..jpg?ex=6543dba9&is=653166a9&hm=17f1d032f0ac85a1ffbc14f024083092798ec0269195782a8231384e7df98142&=&width=441&height=662",
      email: "athira.gireesh@mic.ac.in",
      desc: `I joined the CTIM lab in 2020 after obtaining
      Joint-CSIR-UGC-JRF and upgraded to SRF in 2023.
      I have done my graduation and postgraduation in
      zoology under Kerala University. My research work
      at
      CTIM focuses on targeting chemoattractant
      cytokines in tumor thereby improve
      vasculature and enhance immune surveillance
      in triple negative breast cancer.`,
    },
    {
      name: "Juvin Ann Thomas",
      img: "https://cdn.discordapp.com/attachments/1164613528922103960/1164615453524635839/Juvin_Ann_Thomas.jpg?ex=6543dba9&is=653166a9&hm=d995d84fd11046ce0b2f5c3ad614d7b2bbeea8aaec01fbf8d760cf3db5f08efc&",
      email: "juvin.thomas@mic.ac.in",
      desc: `I joined the CTIM in 2022 after obtaining Joint-CSIR-UGC-JRF. I had my graduation from Mar Thoma College Thiruvalla and post-graduated from Mar Ivanios College, Tvm. My work here at CTIM focusses on the efficacy of Nano-Immuno therapy based blockade of CXCL-3 —CXCR-2 pathway to improve immune surveillance in obese murine breast cancer model.
      `,
    },
    {
      name: "Emmanuel Biju",
      img: "https://cdn.discordapp.com/attachments/1164613528922103960/1164615451595259904/EMMANUEL_BIJU.jpg?ex=6543dba9&is=653166a9&hm=b1d0d48a53631defb2fd2126fbe2edf822180edea2222840525f2ede737b85e1&",
      email: "emmanuel.biju@mic.ac.in",
      desc: `I joined the CTIM in 2023 after obtaining INSPIRE-JRF. I had
      my graduation from Mar Ivanios College, Thiruvananthapuram,
      and post-graduated from the University of Kerala, Kariavattom
      Campus, Thiruvananthapuram. My work here at CTIM focuses on
      the “Nano-Immunotherapy based blockade of iNOS pathway to
      improve immune surveillance in obese murine breast cancer
      model”.`,
    },
    {
      name: "Arya. S",
      img: "https://cdn.discordapp.com/attachments/1164613528922103960/1164615450936758394/ARYA._S.jpg?ex=6543dba9&is=653166a9&hm=c884b7d8d485cadc23426d8a468bda4b4d13cea1e321bf823400f0a9140c032b&",
      email: "aryameera97@gmail.com",
      desc: `I joined the CTIM in 2023 after obtaining JOINT-CSIR-UGC-JRF.
      I had my graduation from NSS College, Cherthala, Alappuzha, and
      post-graduated from SD College, Alappuzha. My work here at
      CTIM focuses on the “Blockade of CCL17-CCR4 axis to improve
      immune surveillance in murine triple negative breast cancer
      model”.
      `,
    },
    {
      name: "Arya. B",
      img: "https://cdn.discordapp.com/attachments/1164613528922103960/1164615454703239269/ARYA_B.jpg?ex=6543dba9&is=653166a9&hm=2039e033aa4449011ea9dcc0d9c03dce34b4e90dd4d9a2b3f8eb6be3521f3399&",
      email: "aryaraj339@gmail.com",
      desc: `I joined the CTIM in 2023 after obtaining JOINT-CSIR-UGC-
      JRF. I had my graduation from MG College,
      Thiruvananthapuram, and post-graduated from SN college,
      Cherthala, Alappuzha. My work here at CTIM focuses on the
      “N-(2,3-Dichloro-phenyl)-2-(2-methyl-quinolin-4-ylamino)-
      acetamide-(PS-9) mediated blockade of CXCL3 - CXCR2 axis to
      normalizes tumor vasculature and enhances immune surveillance
      in triple negative breast cancer”.
      `,
    },
    {
      name: "Gitanjali G",
      img: "/assets/images/team/Students/Gitanjali G.jpg",
      email: "gitanjaligigi@gmail.com",
      desc: `I joined CTIM after obtaining KSCSTE Research Fellowship. I completed my post-graduation from Mar Ivanios College, Thiruvananthapuram. My work at CTIM focuses on “targeting tumour cell metabolism that could improve immune surveillance using murine triple negative breast cancer model”.
      `,
    },
  ];
  console.log(peopleData);

  return (
    <div>
      <Navbar />

      <hr />
      {/* Hero Section Start */}
      <div class="team-heading-section text-center">
        <h2>
          <span>Lab Members</span>
        </h2>
        {/* <h4>Meet our awesome and expert team members</h4> */}
      </div>
      <hr />
      {/* Hero Section End */}

      {/* Team Section Start */}
      <section>
        <div className="container">
          {peopleData.map((data) => (
            <div>
              <div className="row">
                <div className="col-xs-12 col-md-6 team-image-box">
                  <img src={data.img} alt="" />
                  <h4>{data.name}</h4>
                  <h6>PhD Student</h6>
                </div>
                <div className="col-xs-12 col-md-6 team-content-box-child">
                  <p>{data.desc}</p>
                  <p>
                    Email : <a href={"mailto:" + data.email}>{data.email}</a>
                  </p>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </section>
      {/* Team Section End */}
      <Footer />
    </div>
  );
};

export default People;
