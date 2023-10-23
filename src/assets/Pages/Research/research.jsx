import React from "react";

import "./research.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";
import collaboratorData from "../../Utils/data";

const Research = () => {
  return (
    <div>
      <Navbar />
      <div className="research-section">
        <div className="container">
          <hr />
          <div className="row">
            <div className="col-xs-12 research-heading">
              <h3>Research <span style={{color:"red"}}>Materials</span></h3>
              <h4>Read our awesome and expert research papers</h4>
            </div>
          </div>
          <hr />
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
        <div class="accordion accordion-flush" id="accordionFlushExample">
          {collaboratorData.map((data) => (
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#" + data.id}
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  {data.name}
                </button>
              </h2>
              <div
                id={data.id}
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                 {data.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Research;
