import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ShellRouting from "./components/ShellRouting";

const App = () => {
  return (
    <>
      <ShellRouting />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
