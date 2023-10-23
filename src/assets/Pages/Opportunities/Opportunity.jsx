import React from "react";
import "./Opportunity.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";

export default function Oppurtunity() {
  return (
    <div>
      <Navbar />
      <hr />
      <center>
        <h5>Currently, there are no opportunities provided by the organization. Be in touch with the organization for latest updates and news. :)</h5>
      </center>
      <hr />
      <Footer />
    </div>
  );
}
