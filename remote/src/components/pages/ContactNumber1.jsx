import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function ContactNumber1() {
  return (
    <div>
      <h2>Contact Number 1</h2> <br />
      <Link to="office-contact">Office Contact</Link> &nbsp;
      <Link to="home-contact">Home Contact</Link> &nbsp;
      <Outlet />
    </div>
  );
}
