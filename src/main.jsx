import React from "react";
import GlobalStyles from "./styles/global";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { PageProvider } from "./hook/pages";
import { AuthProvider } from "./hook/auth";

import { Routes } from "./routes/index";

import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <PageProvider>
          <Routes />
        </PageProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
