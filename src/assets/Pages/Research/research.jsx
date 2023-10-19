import React from "react";

import "./research.css";

import Navbar from "../../components/Navbar/Navbar";

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
                  <div className="box-1">
                    <img src="./assets/images/collage-1/R6.png" alt="" />
                  </div>
                  <div className="box-2">
                    <img src="./assets/images/collage-1/R7.png" alt="" />
                  </div>
                </div>
                <div className="t1">
                  <div className="box-3">
                    <img src="./assets/images/collage-1/R8.png" alt="" />
                  </div>
                  <div className="box-4">
                    <img src="./assets/images/collage-1/R9.png" alt="" />
                  </div>
                </div>
                <div className="t1">
                  <div className="box-3">
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
                  {" "}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
