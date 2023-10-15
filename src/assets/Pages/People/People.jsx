import React from "react";

//Import Components
import Navbar from "../../components/Navbar/Navbar";
import "./People.css";
import Footer from "../../components/Footer/footer";

const People = () => {
  return (
    <div>
      <Navbar />
      <hr />
      {/* Hero Section Start */}
      <div class="team-heading-section text-center">
        <h2>
          Our <span>Team</span>
        </h2>
        <h4>Meet our awesome and expert team members</h4>
      </div>
      <hr />
      {/* Hero Section End */}

      {/* Team Section Start */}
      <section>
        <div className="container">
          <div className="row t1">
            <div className="col-xs-12 col-md-6 team-image-box">
              <img src="./assets/images/team/pi/p1.jpeg" alt="" />
              <h4>Dr. Suboj Babykutty</h4>
              <h6>Principal Investigator, PhD</h6>
              <div className="schoolar-images">
                <img src="./assets/images/team/pi/ORCID ID.jpg" alt="" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/14/ORCID_logo.svg"
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xs-12 col-md-6 team-content-box">
              <p>
                My passion for cancer research prompted me to apply for a
                doctoral degree at the Sree Chita Tirunal Institute for Medical
                Science and Technology, which I began in 2006. To pursue my
                long-held dream of being an independent researcher, it is
                unavoidable that I strengthen my scientific, technological, and
                management skills. The Edwin L. Steele Laboratory for Tumor
                Biology at Massachusetts General Hospital, Harvard Medical
                School, provided the ideal environment for those abilities to
                develop. In order to join the Steele Lab, I applied for an
                Indian fellowship and was awarded for it by the Indo-US Science
                and Technology Forum. I subsequently joined the Steele Lab in
                November 2013 and started working on a project that looked into
                the relationship between nitric oxide and vessel normalisation.
                This helped me comprehend angiogenesis and prompted me to
                explore the role of immune suppression in immune cell
                recruitment and phenotype, as well as subsequent angiogenesis.
                As a result, my current objective is to study more about the
                mechanisms underpinning immunosuppression, specifically the role
                of angiogenic/chemokine molecules in the creation of aberrant
                vasculature and therapy resistance in normal and obese patients.
                Following that, we established the Centre For Tumour Immunology
                and Microenvironment Laboratory at Mar Ivanios College, and we
                received funding for two separate projects submitted to the
                Kerala Government's Kairali Gvaeshnapuaskaram in 2021 and the
                Department of Science and Technology's Teachers Associateship
                for Research Excellence in 2022, respectively. My laboratory's
                ultimate goal is to make a difference in the lives of cancer
                patients.
              </p>
              <a>Get My Resume</a>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xs-12 col-md-6 team-image-box">
              <img
                src="./assets/images/team/Students/Athira Gireesh G.M..jpg"
                alt=""
              />
              <h4>Athira Gireesh G M</h4>
              <h6>PhD Student</h6>
            </div>
            <div className="col-xs-12 col-md-6 team-content-box-child">
              <p>
                I joined the CTIM lab in 2020 after obtaining
                Joint-CSIR-UGC-JRF. I have done my graduation and post
                graduation in zoology under Kerala University. My research work
                at CTIM focuses on targeting chemoattractant cytokines in tumour
                thereby improve vasculature and enhance immune surveillance in
                triple negative breast cancer.
              </p>
              <p>Email : athira.gireesh@mic.ac.in </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xs-12 col-md-6 team-image-box">
              <img src="./assets/images/team/Students/Hima Xavier.jpg" alt="" />
              <h4>Athira Gireesh G M</h4>
              <h6>PhD Student</h6>
            </div>
            <div className="col-xs-12 col-md-6 team-content-box-child">
              <p>
                I joined the CTIM lab in 2020 after obtaining
                Joint-CSIR-UGC-JRF. I have done my graduation and post
                graduation in zoology under Kerala University. My research work
                at CTIM focuses on targeting chemoattractant cytokines in tumour
                thereby improve vasculature and enhance immune surveillance in
                triple negative breast cancer.
              </p>
              <p>Email : athira.gireesh@mic.ac.in </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xs-12 col-md-6 team-image-box">
              <img
                src="./assets/images/team/Students/Juvin Ann Thomas.jpg"
                alt=""
              />
              <h4>Juvin Ann Thomas</h4>
              <h6>PhD Student</h6>
            </div>
            <div className="col-xs-12 col-md-6 team-content-box-child">
              <p>
                I joined the CTIM lab in 2020 after obtaining
                Joint-CSIR-UGC-JRF. I have done my graduation and post
                graduation in zoology under Kerala University. My research work
                at CTIM focuses on targeting chemoattractant cytokines in tumour
                thereby improve vasculature and enhance immune surveillance in
                triple negative breast cancer.
              </p>
              <p>Email : athira.gireesh@mic.ac.in </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xs-12 col-md-6 team-image-box">
              <img
                src="./assets/images/team/Students/Subinjit J.V..jpg"
                alt="" 
              />
              <h4>Subinjit J.V.</h4>
              <h6>PhD Student</h6>
            </div>
            <div className="col-xs-12 col-md-6 team-content-box-child">
              <p>
                I joined the CTIM lab in 2020 after obtaining
                Joint-CSIR-UGC-JRF. I have done my graduation and post
                graduation in zoology under Kerala University. My research work
                at CTIM focuses on targeting chemoattractant cytokines in tumour
                thereby improve vasculature and enhance immune surveillance in
                triple negative breast cancer.
              </p>
              <p>Email : athira.gireesh@mic.ac.in </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section End */}
      <Footer />
    </div>
  );
};

export default People;
