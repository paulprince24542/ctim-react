import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import Pages from folder
import Home from "./assets/Pages/Home/Home";
import Contact from "./assets/Pages/Contact/Contact";
import People from "./assets/Pages/People/People";
import Gallery from "./assets/Pages/Gallery/Gallery";
import Research from "./assets/Pages/Research/research";
// import Publications from "./assets/Pages/publications/publications";
import Publication from "./assets/Pages/Publication/Publication";
import Opportunity from "./assets/Pages/Opportunities/Opportunity";
import News from "./assets/Pages/News/News";
import PeopleHome from "./assets/Pages/People/PeopleHome";
import PrincipalHome from "./assets/Pages/People/PrincipalHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/people" element={<PeopleHome />} />
        <Route path="/members" element={<People />} />
        <Route path="/principal" element={<PrincipalHome />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/research" element={<Research />} />
        {/* <Route path="/publications" element={<Publications />} /> */}
        <Route path="/publications" element={<Publication />} />
        <Route path="/opportunity" element={<Opportunity />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
