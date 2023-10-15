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
              src="./assets/images/gallery/6.jpg"
              class="col-md-12 img-box"
              alt=""
            />
          </div>
          <div class="col-md-3">
            <div class="row">
              <div class="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/8.jpg"
                  class="col-md-12 img-box"
                  alt=""
                />
              </div>
              <div class="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/7.jpg"
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
                  src="./assets/images/gallery/12.jpeg"
                  class="col-md-12 img-box"
                  alt=""
                />
              </div>
              <div class="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/4.jpg"
                  class="col-md-12 img-box"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-md-3 g-box-1">
            <img
              src="./assets/images/gallery/5.jpg"
              class="col-md-12 img-transalate img-box"
              alt=""
            />
          </div>
        </div>
        <div class="row justify-content-between mt-1">
          <div class="col-md-3 g-box-1">
            <img
              src="./assets/images/gallery/10.jpeg"
              class="col-md-12 img-box"
              alt=""
            />
          </div>
          <div class="col-md-3">
            <div class="row">
              <div class="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/1.jpeg"
                  class="col-md-12 img-box"
                  alt=""
                />
              </div>
              <div class="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/2.jpeg"
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
                  src="./assets/images/gallery/3.jpeg"
                  class="col-md-12 img-box"
                  alt=""
                />
              </div>
              <div class="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/9.jpg"
                  class="col-md-12 img-box"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-md-3 g-box-1">
            <img
              src="./assets/images/gallery/11.jpeg"
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
