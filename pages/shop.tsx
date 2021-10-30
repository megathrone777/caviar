import React from "react";
import { NextPage, NextPageContext } from "next";
import { gql } from "@apollo/client";

import client from "~/apollo-client";
import { Banner, Layout, Media, Shop, TProduct } from "~/components";
import ShopPageQuery from "~/queries/shoppage.gql";

interface TProps {
  products: TProduct[];
}

const ShopPage: NextPage<TProps> = ({ products }) => (
  <Layout title="Caviar Express | Магазин">
    <Banner title="Магазин" />
    <Shop categories={[]} products={products} />
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

  return {
    products,
  };
};

export default ShopPage;
