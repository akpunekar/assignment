import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Assignment1 from "./pages/Assignment1";
import Assignment2 from "./pages/Assignment2";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/assignment1" element={<Assignment1 />} />
        <Route path="/assignment2" element={<Assignment2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
