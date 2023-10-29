import React from "react";

//Import Components
import Navbar from "../../components/Navbar/Navbar";
import "./People.css";
import Footer from "../../components/Footer/footer";

const PrincipalHome = () => {
  return (
    <div>
      <Navbar />
      <hr />
      {/* Hero Section Start */}
      <div class="team-heading-section text-center">
        <h2>
          Principal <span>Investigator</span>
        </h2>
        {/* <h4>Meet our awesome and expert team members</h4> */}
      </div>
      <hr />
      {/* Hero Section End */}

      {/* Team Section Start */}
      <section>
        <div className="container">
          <div className="row t1">
            <div className="col-xs-12 col-md-6 team-image-box">
              <img
                src="https://cdn.discordapp.com/attachments/1164613528922103960/1166090978311024640/p1.jpeg?ex=654939da&is=6536c4da&hm=a121249b1942d3ddfc2e779f8af429220e7f604c9f3b3539872bd6ca5f6730c7&"
                alt=""
              />
              <h4>Dr. Suboj Babykutty</h4>
              <h6>Principal Investigator, PhD</h6>
              <div className="schoolar-images">
                <img
                  src="https://cdn.discordapp.com/attachments/1164613528922103960/1166091211409465385/ORCID_ID.jpg?ex=65493a11&is=6536c511&hm=0e342f2fa719e30019f61ce83b96dcd41f5715159435a15188a39a77ddc68a70&"
                  alt=""
                />
                <a href="https://orcid.org/0000-0002-1376-6959">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/14/ORCID_logo.svg"
                    alt=""
                  />
                </a>
                <a href="https://scholar.google.com/citations?user=9uHz9X0AAAAJ&hl=en">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg"
                    alt=""
                  />
                </a>
                <a href="https://marivanioscollege.irins.org/profile/280958">
                  <img
                    src="https://library.mnit.ac.in/images/irins1.png"
                    alt=""
                  />
                </a>
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
              <a
                className="resume"
                href="https://cdn.discordapp.com/attachments/1164613528922103960/1164627847361601676/Suboj_CV.pdf?ex=6543e734&is=65317234&hm=87d273391032b7db40146b16420f6fd46a13d20094eaeda3d381965c3cc66270&"
              >
                Get My Resume
              </a>
              <br />
              <p>
                Email :{" "}
                <a href="mailto:suboj.babykutty@mic.ac.in">
                  {" "}
                  suboj.babykutty@mic.ac.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section End */}
      <Footer />
    </div>
  );
};

export default PrincipalHome;
