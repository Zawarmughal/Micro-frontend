import React from "react";
import NavBar from "../NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Remote from "./Remote";
import Home from "./pages/Home";
import About from "./pages/About";

export default function ShellRouting() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/remote/*" element={<Remote/>} /> */}
        </Routes>
      </Router>
      <Remote />
    </div>
  );
}
