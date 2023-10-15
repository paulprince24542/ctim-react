import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav">
      <div className="container-md">
        <img className="logo-1" src="./assets/images/logo-4.1.png" />
        <img className="d-lg-none logo-3" src="./assets/images/logo-2.1.png" />
        <button
          className="navbar-toggler nav-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Research
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Opportunities
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Publications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/people">
                People
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <img
          className="d-lg-block d-none mt-3 logo-2"
          src="./assets/images/logo-2.1.png"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
