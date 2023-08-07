import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import App from "../components/App";
import { BrowserRouter as Router } from "react-router-dom";


document.addEventListener("DOMContentLoaded", () => {

  const domNode = document.body.appendChild(document.createElement("div"));
  const root = createRoot(domNode);
  root.render(
    <Router>
      <App />
    </Router>
  );
});
