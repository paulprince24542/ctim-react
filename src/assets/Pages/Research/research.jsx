import React from "react";

import "./research.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";

const Research = () => {
  return (
    <div>
      <Navbar />
      <div className="research-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="research-images">
                <div className="t1">
                  <div className="box-1 tb">
                    <img src="./assets/images/collage-1/R6.png" alt="" />
                  </div>
                  <div className="box-2 tb">
                    <img src="./assets/images/collage-1/R7.png" alt="" />
                  </div>
                </div>
                <div className="t1">
                  <div className="box-3 tb">
                    <img src="./assets/images/collage-1/R8.png" alt="" />
                  </div>
                  <div className="box-4 tb">
                    <img src="./assets/images/collage-1/R9.png" alt="" />
                  </div>
                </div>
                <div className="t1">
                  <div className="box-3 tb">
                    <img src="./assets/images/collage-1/R10.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="research-contents">
                <h3>
                  Targeting chemokines in tumour microenvironment to enhance
                  immunesurveillance
                </h3>
                <p>
                  Tumor-derived chemokines can affect angiogenesis via binding
                  to chemokine receptors expressed on endothelial cells,
                  resulting in increased migration and in some cases
                  proliferation and therefore the inhibition of apoptosis. We
                  hypothesis that the blockade of tumor-derived pro-angiogenic
                  chemokine can normalize tumor vasculature and tumor
                  microenvironment — enhancing tissue oxygenation — and improves
                  antitumor immunity.
                </p>
                <h3>
                  Role of tumour vasculature and hypoxia in immune cell
                  trafficking.
                </h3>
                <p>
                  Inflammatory molecules expressed by stromal cells or
                  endogenously produced by TNBC cells may influence tumor cell
                  migration, invasion, proliferation, angiogenesis and immune
                  cell infiltration in the tumor mass. We propose to target
                  pro-angiogenic molecule in TNBC to normalise tumour
                  vasculature — alleviate hypoxia there by enhancing
                  immunesurveillance, as it utilizes body’s self-defense system,
                  which exhibits high specificity, memory and fewer side
                  effects.
                </p>
                <h3>
                  Role of Adipokine-Chemokine axis in immunesupression in obese
                  breast cancer
                </h3>
                <p>
                  Obesity, or an excess of adipose tissue, influences a variety
                  of cancer symptoms. Obesity is associated with immune system
                  suppression, increased inflammatory molecules, and macrophage
                  dysregulation. We believe that tumor cells are transactivated
                  by adipocyte-derived proinflammatory molecule, causing them to
                  release pro angiogenic chemokines/cytokines, as a result,
                  immune suppression in the obese breast cancer. Thus we propose
                  to target pro inflammatory molecule in obese BC, thereby
                  retarding the influence on chemokines and enhancing
                  immunesurveillence in obese BC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container accordian-section">
        <h2>
          Research <span style={{ color: "red" }}>Collabrators</span>
        </h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Dan Duda, Ph.D
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Associate Professor, Radiation Oncology, Harvard Medical School
                Director of Translational Research, Investigator, Radiation
                Oncology/Steele Laboratories, Massachusetts General Hospital
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Sabu Thomas, Ph.D
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Professor of Polymer Science & Engineering, School of Chemical
                Sciences and Founder Director, International and Inter
                UniversityCentre for Nanoscience and Nanotechnology, Mahatma
                Gandhi University Priyadarshini Hills P. O. Kottayam, Kerala,
                India-686 560
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                S. Murty Srinivasula, Ph.D.
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Professor School of Biology, BSB2112, BSB Building, Indian
                Institute of Science Education and Research, Thiruvananthapuram,
                Maruthamala PO, Vithura, Thiruvananthapuram - 695551, Kerala,
                INDIA.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Dr. Lakshmi.S
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Additional Professor Regional Cancer Centre Thiruvananthapuram
                Kerala
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Tai Hato, MD, Ph.D
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Dept of General Thoracic Surgery, Saitama Medical Center Saitama
                Medical University, Saitama, Japan
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Dr. Akshath. U. S
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Scientist Grade-II Nitte University Centre for Science Education
                and Research-NUCSER, Mangalore
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Dr. Partha Palit
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Assistant Professor Dept. of Pharmaceutical Sciences Drug
                discovery research laboratory, Assam University (A Central
                University), Silchar-788011, India
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Dr.Priya Suboj
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Assistant Professor, Department of Botany and Biotechnology, St.
                Xaviers College, Thumba, Thiruvananthapuram
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Research;
