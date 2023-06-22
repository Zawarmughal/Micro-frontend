import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routing from "./components/Routing";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <h1>Routing</h1>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
