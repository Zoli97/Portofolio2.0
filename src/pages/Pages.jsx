import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Success from "./Success";

function Pages() {
  const location = useLocation();
  return (
    <div className="">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </div>
  );
}

export default Pages;
