import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactAddress from "./pages/ContactAddress";
import ContactNumber from "./pages/ContactNumber";
import ContactMail from "./pages/ContactMail";
import ContactNumber1 from "./pages/ContactNumber1";
import ContactNumber2 from "./pages/ContactNumber2";
import ContactNumber3 from "./pages/ContactNumber3";
import HomeContact from "./pages/HomeContact";
import OfficeContact from "./pages/OfficeContact";

export default function Routing() {
  return (
    <div>
      <h1>Remote...</h1> <br />
      <br />
      <NavBar />
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="remote-home" element={<Home />} />
        <Route path="remote-about" element={<About />} />
        <Route path="remote-contact" element={<Contact />}>
          <Route path="contact-number/" element={<ContactNumber />}>
            <Route path="contact-number-1/" element={<ContactNumber1 />}>
              <Route path="office-contact" element={<OfficeContact />} />
              <Route path="home-contact" element={<HomeContact />} />
            </Route>
            <Route path="contact-number-2" element={<ContactNumber2 />} />
            <Route path="contact-number-3" element={<ContactNumber3 />} />
          </Route>
          <Route path="contact-address" element={<ContactAddress />} />
          <Route path="contact-mail" element={<ContactMail />} />
        </Route>
      </Routes>
    </div>
  );
}
