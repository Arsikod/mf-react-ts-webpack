import { Root, createRoot } from "react-dom/client";

import App from "./app";
import React from "react";

let existingRoot: Root | null = null;

function mount(rootElement: HTMLElement) {
  if (!existingRoot) {
    existingRoot = createRoot(rootElement);
  }

  existingRoot.render(
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
