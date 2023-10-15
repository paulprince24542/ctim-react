import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import Pages
import Home from "./assets/Pages/Home/Home";
import Contact from "./assets/Pages/Contact/Contact";
import People from "./assets/Pages/People/People";
import Gallery from "./assets/Pages/Gallery/Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/people" element={<People />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
