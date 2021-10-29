import React from "react";
import Link from "next/link";
import { NextPage } from "next";
import { gql } from "@apollo/client";

import client from "~/apollo-client";
import {
  Layout,
  Media,
  Products,
  Slider,
  TProduct,
  TSlide,
} from "~/components";
import HomePageQuery from "~/queries/homepage.gql";

interface TProps {
  products: TProduct[];
}

const IndexPage: NextPage<TProps> = ({ products }) => (
  <Layout title="Caviar | Home page">
    <Slider />
    <Products
      items={products}
      text={
        <>
          Наш икорный завод производит{" "}
          {
            <Link href="/salmon-caviar" passHref>
              <a>красную лососевую икру</a>
            </Link>
          }{" "}
          и{" "}
          {
            <Link href="/surgeon-caviar">
              <a>черную осетровую икру</a>
            </Link>
          }{" "}
          первого и высшего сорта. Мы выпускаем продукцию из отборной икры
          традиционным способом со строжайшим соблюдением гигиенических норм.
          Предлагаем вам{" "}
          {
            <Link href="/surgeon-caviar">
              <a>приобрести икру осетра</a>
            </Link>
          }{" "}
          и{" "}
          {
            <Link href="/surgeon-caviar">
              <a>икру лосося</a>
            </Link>
          }{" "}
          непосредственно на лицензированном заводе по производству икры.
        </>
      }
      title="Лососевая и осетровая икра от производителя"
    />
    <Media />
  </Layout>
);

IndexPage.getInitialProps = async () => {
  const {
    data: { products },
  } = await client.query({
    query: gql`
      ${HomePageQuery}
    `,
  });

  return {
    products,
  };
};

export default IndexPage;
