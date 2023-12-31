import { Link, Outlet } from "react-router-dom";

function RemoteRoute() {
  return (
    <>
      <Link to="remote-home">Remote Home</Link> &nbsp;
      <Link to="remote-about">Remote About</Link> &nbsp;
      <Link to="remote-contact">Remote Contact</Link>
      <Outlet />
    </>
  );
}

export default RemoteRoute;
