import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./index.css";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <App />
  </StrictMode>
);


// git add .
// git commit -m "Changes"
// git push origin main

//npm run dev