import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'; // Make sure this matches your actual filename (index.css or App.css)

import App from "./App";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);