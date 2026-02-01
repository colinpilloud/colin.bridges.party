import { Routes } from "@/routes/Routes";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./src/styles/global.css";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </StrictMode>,
);
