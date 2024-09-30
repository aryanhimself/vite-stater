import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Providers from "./providers";
import { QueryClient } from "@tanstack/react-query";

const rootElement = document.getElementById("root");
const queryClient = new QueryClient();
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Providers queryClient={queryClient} />
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}
