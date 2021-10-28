import React from "react";
import { AppProps } from "next/app";
import { NotificationsProvider } from "reapop";

import { AppProvider } from "~/store/context";
import { ThemeProvider, theme } from "~/theme";
import { GlobalStyle } from "~/theme/global-style";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <AppProvider>
    <NotificationsProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </NotificationsProvider>

    <style jsx global>{`
      @font-face {
        font-family: "Roboto";
        src: url("/fonts/Roboto-Regular.ttf");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "RobotoLight";
        src: url("/fonts/Roboto-Light.ttf");
        font-weight: 300;
        font-style: normal;
      }

      @font-face {
        font-family: "RobotoBold";
        src: url("/fonts/Roboto-Bold.ttf");
        font-weight: bold;
        font-style: normal;
      }

      @font-face {
        font-family: "RobotoMedium";
        src: url("/fonts/Roboto-Medium.ttf");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "QanelasBlack";
        src: url("/fonts/Qanelas-Black.ttf");
        font-weight: normal;
        font-style: normal;
      }
    `}</style>
  </AppProvider>
);

export default App;
