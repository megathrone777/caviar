import React from "react";
import Head from "next/head";
import NotificationsSystem, { useNotifications } from "reapop";

import { Footer } from "./Footer";
import { Header } from "./Header";

interface TProps {
  title: string;
}

const Layout: React.FC<TProps> = ({ children, title }) => {
  const { notifications, dismissNotification } = useNotifications();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />

      <NotificationsSystem
        dismissNotification={(id: string) => dismissNotification(id)}
        notifications={notifications}
      />
    </>
  );
};

export { Layout };
