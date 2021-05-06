import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./pages/App";
import theme from "./style/theme";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./components/common/AppLayout";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppLayout>
          <App />
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
