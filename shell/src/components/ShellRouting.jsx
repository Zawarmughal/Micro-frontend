import React from "react";
import { Suspense } from "react";
import NavBar from "../NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import About from "./pages/About";
const RemoteComponent = React.lazy(() => import("remote/Routing"));

export default function ShellRouting() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/remote/*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RemoteComponent />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
