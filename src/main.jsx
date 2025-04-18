import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CopilotKit } from "@copilotkit/react-core";
import './index.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CopilotKit url="/api/copilotkit" publicApiKey="ck_pub_24bb02ce43f52ff5a780810f7caabd95">
      <App />
    </CopilotKit>
  </React.StrictMode>
);


