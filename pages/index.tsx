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
  slides: TSlide[];
}

const IndexPage: NextPage<TProps> = ({ products, slides }) => (
  <Layout title="Caviar | Home page">
    <Slider slides={slides} />
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

export const getServerSideProps = async () => {
  const {
    data: { products, slides },
  } = await client.query({
    query: gql`
      ${HomePageQuery}
    `,
  });

  return {
    props: {
      products,
      slides,
    },
  };
};

export default IndexPage;
