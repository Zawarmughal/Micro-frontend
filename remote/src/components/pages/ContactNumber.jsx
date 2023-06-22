import React from "react";
import { Link ,Outlet} from "react-router-dom";

export default function ContactNumber() {
  return (
    <div>
      <h2>Contact Number</h2> <br />
      <Link to="contact-number-1">Contact Number 1</Link> &nbsp;
      <Link to="contact-number-2">Contact Number 2</Link> &nbsp;
      <Link to="contact-number-3">Contact Number 3</Link>
      <Outlet />
    </div>
  );
}
