import React from "react";
import "./Gallery.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div class="container images-section">
        <div class="row justify-content-between mt-5">
          <div class="col-md-3 g-box-1">
            <img
              src="./assets/images/gallery/6.png"
              class="col-md-12 img-box"
              alt=""
            />
          </div>
          <div class="col-md-3">
            <div class="row">
              <div class="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/8.png"
                  class="col-md-12 img-box"
                  alt=""
                />
              </div>
              <div class="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/7.png"
                  class="col-md-12 img-box"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="row">
              <div class="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/12.png"
                  class="col-md-12 img-box"
                  alt=""
                />
              </div>
              <div class="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/4.png"
                  class="col-md-12 img-box"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-md-3 g-box-1">
            <img
              src="./assets/images/gallery/5.png"
              class="col-md-12 img-transalate img-box"
              alt=""
            />
          </div>
        </div>
        <div class="row justify-content-between mt-1">
          <div class="col-md-3 g-box-1">
            <img
              src="./assets/images/gallery/10.png"
              class="col-md-12 img-box"
              alt=""
            />
          </div>
          <div class="col-md-3">
            <div class="row">
              <div class="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/1.png"
                  class="col-md-12 img-box"
                  alt=""
                />
              </div>
              <div class="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/2.png"
                  class="col-md-12 img-box"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="row">
              <div class="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/3.png"
                  class="col-md-12 img-box"
                  alt=""
                />
              </div>
              <div class="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/9.png"
                  class="col-md-12 img-box"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-md-3 g-box-1">
            <img
              src="./assets/images/gallery/11.png"
              class="col-md-12 img-transalate img-box"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
