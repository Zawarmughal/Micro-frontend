import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Link to="/remote-home">Remote Home</Link> &nbsp;
      <Link to="/remote-about">Remote About</Link> &nbsp;
      <Link to="/remote-contact">Remote Contact123</Link>
      <Outlet />
    </>
  );
}

export default NavBar;
