import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./main/container/App";
import Layout from "./main/container/Layout/Layout";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
