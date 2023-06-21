import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
      <h1>Remote...</h1> <br /><br />
        <NavBar />
        <Routes>
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/remote-home" element={<Home />} />
          <Route path="/remote-contact" element={<Contact />} />
          <Route path="/remote-about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
