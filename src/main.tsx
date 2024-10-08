import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { EmployeeProvider } from "./store/EmployeeProvider.tsx";

createRoot(document.getElementById("root")!).render(
   <BrowserRouter>
      <StrictMode>
         <EmployeeProvider>
            <App />
         </EmployeeProvider>
      </StrictMode>
   </BrowserRouter>
);
