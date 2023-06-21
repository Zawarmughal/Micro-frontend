import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routing from "./components/Routing";

const App = () => (
  <div className="container">
    <h1>Routing</h1>
    <Routing/>
  </div>
);

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
