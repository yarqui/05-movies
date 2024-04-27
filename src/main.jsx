import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LoadingProvider } from "./components/LoadingProvider/LoadingProvider.jsx";

import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
