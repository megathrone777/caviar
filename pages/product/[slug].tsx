import React from "react";
import { NextPage, NextPageContext } from "next";
import { gql } from "@apollo/client";

import client from "~/apollo-client";
import { Banner, Layout, Media, ProductDetails, TProduct } from "~/components";
import ProductPageQuery from "~/queries/productpage.gql";

interface TProps {
  product: TProduct;
}

const ProductPage: NextPage<TProps> = ({ product }) => (
  <Layout title="Product">
    <Banner title={product.name} />
    <ProductDetails {...product} />
    <Media />
  </Layout>
);

export const getServerSideProps = async (context: NextPageContext) => {
  const { slug } = context.query;
  const {
    data: { productBySlug: product },
  } = await client.query({
    query: gql`
      ${ProductPageQuery}
    `,
    variables: {
      slug,
    },
  });

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
