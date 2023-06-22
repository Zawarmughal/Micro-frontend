import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h2>Contact from Remote</h2>
      <br />
      <Link to="contact-number">Contact Number</Link> &nbsp;
      <Link to="contact-address">Contact Address</Link> &nbsp;
      <Link to="contact-mail">Contact Mail</Link>
      <Outlet />
    </div>
  );
}
