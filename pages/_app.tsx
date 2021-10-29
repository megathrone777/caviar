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
        font-family: "Qanelas";
        src: url("/fonts/Qanelas-Regular.ttf");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "QanelasLight";
        src: url("/fonts/Qanelas-Light.ttf");
        font-weight: 300;
        font-style: normal;
      }

      @font-face {
        font-family: "QanelasBold";
        src: url("/fonts/Qanelas-Bold.ttf");
        font-weight: bold;
        font-style: normal;
      }

      @font-face {
        font-family: "QanelasMedium";
        src: url("/fonts/Qanelas-Medium.ttf");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "QanelasBlack";
        src: url("/fonts/Qanelas-Black.ttf");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "QanelasSemiBold";
        src: url("/fonts/Qanelas-SemiBold.ttf");
        font-weight: normal;
        font-style: normal;
      }
    `}</style>
  </AppProvider>
);

export default App;
