import React from "react";
import { NextPage, NextPageContext } from "next";
import { gql } from "@apollo/client";

import client from "~/apollo-client";
import { Banner, Layout, Media, Shop, TProduct, TCategory } from "~/components";
import ShopPageQuery from "~/queries/shoppage.gql";

interface TProps {
  categories: TCategory[];
  products: TProduct[];
  productsLoading: boolean;
}

const ShopPage: NextPage<TProps> = ({
  products,
  productsLoading,
  categories,
}) => (
  <Layout title="Caviar Express | Магазин">
    <Banner title="Магазин" />
    <Shop
      categories={categories}
      products={products}
      productsLoading={productsLoading}
    />
    <Media />
  </Layout>
);

export const getServerSideProps = async (context: NextPageContext) => {
  const { slug } = context.query;
  const {
    data: { products, categories },
    loading: productsLoading,
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
    notifyOnNetworkStatusChange: true,
  });

  return {
    props: {
      products,
      categories,
      productsLoading,
    },
  };
};

export default ShopPage;
