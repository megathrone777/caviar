import React from "react";
import Head from "next/head";

import { Header } from "./Header";

interface TProps {
  title: string;
}

const Layout: React.FC<TProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header />
    <div>{children}</div>
    <footer>Footer</footer>
  </>
);

export { Layout };
