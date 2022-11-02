import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "i18n";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { theme } from "theme";
import createEmotionCache from "theme/createEmotionCache";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { QueryClientProvider, QueryClient } from "react-query";

import store from "redux/store";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import "./index.css";

const cache = createEmotionCache();
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <QueryClientProvider client={client}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <GlobalStyles
                styles={{
                  p: {
                    margin: 0,
                  },
                }}
              />
              <App />
            </ThemeProvider>
          </CacheProvider>
        </Provider>
      </I18nextProvider>
    </LocalizationProvider>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
