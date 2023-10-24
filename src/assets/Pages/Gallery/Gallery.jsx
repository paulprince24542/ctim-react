import React from "react";
import "./Gallery.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-xs-12 research-heading">
            <h3>
              Our <span style={{ color: "red" }}>Gallery</span>
            </h3>
            <h4>Capturing Moments And Creating Memories</h4>
          </div>
        </div>
        <hr />
      </div>
      <div className="container images-section">
        <div className="row justify-content-between mt-5">
          <div className="col-md-3 g-box-1">
            <img
              src="./assets/images/gallery/6.png"
              className="col-md-12 img-box"
              alt=""
            />
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/13.jpg"
                  className="col-md-12 img-box"
                  alt=""
                />
              </div>
              <div className="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/7.png"
                  className="col-md-12 img-box"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/8.png"
                  className="col-md-12 img-box"
                  alt=""
                />
              </div>
              <div className="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/9.png"
                  className="col-md-12 img-box"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-3 g-box-1">
            <img
              src="./assets/images/gallery/5.png"
              className="col-md-12 img-transalate img-box"
              alt=""
            />
          </div>
        </div>
        <div className="row justify-content-between mt-1">
          <div className="col-md-3 g-box-1">
            <img
              src="./assets/images/gallery/10.png"
              className="col-md-12 img-box"
              alt=""
            />
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/1.png"
                  className="col-md-12 img-box"
                  alt=""
                />
              </div>
              <div className="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/2.png"
                  className="col-md-12 img-box"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/3.png"
                  className="col-md-12 img-box"
                  alt=""
                />
              </div>
              <div className="col-md-12 g-box-2">
                <img
                  src="./assets/images/gallery/12.png"
                  className="col-md-12 img-box"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-3 g-box-1">
            <img
              src="./assets/images/gallery/11.png"
              className="col-md-12 img-transalate img-box"
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
