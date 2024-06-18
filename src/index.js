import React from "react";
import ReactDOM from "react-dom/client";
import Routers from "./Components/Router";
import "normalize.css";
import { ConfigProvider } from "antd";
import GlobalStyle from "./Style/GlobelStyle";
import { palette } from "./Style/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider
    theme={{
      token: {
        // colorPrimary: `${palette.secondaryColor}`,
        // colorBgBase: `${palette.secondaryColor}`,

         colorFillSecondary: `${palette.thirdColor}`,
        // color: `${palette.primaryColor}`,
         colorText: `${palette.primaryColor}`,
         itemInputBg: `${palette.primaryColor}`,
      },
    }}
  >
    <GlobalStyle />
    <Routers />
  </ConfigProvider>
);
