import App from "./app";
import React from "react";
import { createRoot } from "react-dom/client";

function mount(rootElement: HTMLElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (process.env.NODE_ENV === "development") {
  const rootElement = document.getElementById("_marketing-dev-root");
  if (rootElement) {
    mount(rootElement);
  }
}

export { mount };
