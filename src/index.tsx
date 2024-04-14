import React from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import Rout from "./routes/route";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Rout />
  </React.StrictMode>
);
