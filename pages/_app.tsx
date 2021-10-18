import React from "react";
import { AppProps } from "next/app";

import { AppProvider } from "~/store/context";
import { ThemeProvider, theme } from "~/theme";
import { GlobalStyle } from "~/theme/global-style";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <AppProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>

    <style jsx global>{`
      @font-face {
        font-family: "Roboto";
        src: url("/fonts/Roboto-Regular.ttf");
        font-weight: bold;
        font-style: normal;
      }
    `}</style>
  </AppProvider>
);

export default App;
