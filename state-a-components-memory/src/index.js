import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Form from "./Form";
import FormMessage from "./FormMessage";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Form />
    <hr />
    <hr />
    <App />
    <FormMessage />
  </StrictMode>
);
