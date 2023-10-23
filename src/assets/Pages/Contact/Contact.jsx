import React from "react";
import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";
const Contact = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-12"></div>
          <div className="col-12 contact-section mt-5">
            <h3>
              SEND US A <span style={{ color: "red" }}>MESSAGE</span>
            </h3>
            <div className="mb-3">
              {/* <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label> */}
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              {/* <label for="exampleFormControlInput1" className="form-label">
            Full Name
          </label> */}
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              {/* <label for="exampleFormControlTextarea1" className="form-label">
            Message
          </label> */}
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary p-2 send-btn">Send</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="mt-4">
          Google Map<span style={{ color: "red" }}> Directions</span>
        </h3>
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7890.977457012056!2d76.9382415!3d8.5489124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b93fcb82e209%3A0x4f94f3041eab8d6d!2sMar%20Ivanios%20College!5e0!3m2!1sen!2sin!4v1698051035726!5m2!1sen!2sin"
              width="1400"
              height="700"
              style={{ border: "0" }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
