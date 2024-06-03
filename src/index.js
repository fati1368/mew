import React from "react";
import ReactDOM from "react-dom/client";
import Routers from "./Components/Router";
import "normalize.css";
import { ConfigProvider } from "antd";
import GlobalStyle from "./Style/GlobelStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider>
    <GlobalStyle />
    <Routers />
  </ConfigProvider>
);
