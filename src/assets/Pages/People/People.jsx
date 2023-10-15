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
      <Footer/>
    </div>
  );
};

export default People;
