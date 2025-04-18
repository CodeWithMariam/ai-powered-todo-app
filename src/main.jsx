import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CopilotKit } from "@copilotkit/react-core";
import './index.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CopilotKit url="/api/copilotkit" publicApiKey="yourPublicKey">
      <App />
    </CopilotKit>
  </React.StrictMode>
);


