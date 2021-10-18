import React from "react";
import Head from "next/head";

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

    <header>Header</header>
    <div>{children}</div>
    <footer>Footer</footer>
  </>
);

export { Layout };
