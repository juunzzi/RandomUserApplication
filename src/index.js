import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./pages/App";
import theme from "./style/theme";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./components/common/AppLayout";
import { SWRConfig } from "swr";
import { fetcher } from "./api/fetcher";
const SWRoption = {
  fetcher: fetcher,
  revalidateOnFocus: false,
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SWRConfig value={SWRoption}>
          <AppLayout>
            <App />
          </AppLayout>
        </SWRConfig>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
