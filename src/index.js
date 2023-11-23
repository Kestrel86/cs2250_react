import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./pages/TicTacToe";
import Home from "./pages/Home";
import API from "./pages/API";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <API />
  </StrictMode>
);
