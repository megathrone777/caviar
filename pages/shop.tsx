import React from "react";
import { NextPage, NextPageContext } from "next";
import { gql } from "@apollo/client";

import client from "~/apollo-client";
import { Banner, Layout, Media, Shop, TProduct, TCategory } from "~/components";
import ShopPageQuery from "~/queries/shoppage.gql";
import CategoriesQuery from "~/queries/categories.gql";
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

ShopPage.getInitialProps = async (context: NextPageContext) => {
  const { slug } = context.query;
  const {
    data: { products },
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

  const {
    data: { categories },
  } = await client.query({
    query: gql`
      ${CategoriesQuery}
    `,
  });

  return {
    products,
    categories,
  };
};

export default ShopPage;
