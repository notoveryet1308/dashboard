import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./app.css";
import App from "./App.tsx";
import { GlobalStyle } from "./style";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
