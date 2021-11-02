import React from "react";
import { NextPage, NextPageContext } from "next";
import { gql } from "@apollo/client";

import client from "~/apollo-client";
import { Banner, Layout, Media, Shop, TProduct, TCategory } from "~/components";
import ShopPageQuery from "~/queries/shoppage.gql";

interface TProps {
  categories: TCategory[];
  products: TProduct[];
}

const ShopPage: NextPage<TProps> = ({ products, categories }) => (
  <Layout title="Caviar Express | Магазин">
    <Banner title="Магазин" />
    <Shop categories={categories} products={products} />
    <Media />
  </Layout>
);

export const getServerSideProps = async ({ query }: NextPageContext) => {
  const { slug } = query;
  const {
    data: { products, categories },
  } = await client.query({
    query: gql`
      ${ShopPageQuery}
    `,
    variables: {
      where: {
        category: {
          slug,
        },
      },
    },
  });

  return {
    props: {
      products,
      categories,
    },
  };
};

export default ShopPage;
