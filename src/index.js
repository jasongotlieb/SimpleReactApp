import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { ControllerPage } from "./controllerPage";

function App() {
  return (
    <div className="App">
      <ControllerPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
