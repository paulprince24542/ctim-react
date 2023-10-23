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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/people" element={<People />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/research" element={<Research />} />
        {/* <Route path="/publications" element={<Publications />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
