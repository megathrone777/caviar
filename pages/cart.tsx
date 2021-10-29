import React from "react";
import { NextPage } from "next";
import { gql } from "@apollo/client";

import client from "~/apollo-client";
import { Layout, Cart, Media, Products, TProduct } from "~/components";
import CartPageQuery from "~/queries/cartpage.gql";

interface TProps {
  products: TProduct[];
}

const CartPage: NextPage<TProps> = ({ products }) => (
  <Layout title="Main page">
    <Cart />
    <Products title="Рекоммендуемая продукция" items={products} />
    <Media />
  </Layout>
);

CartPage.getInitialProps = async () => {
  const {
    data: { products },
  } = await client.query({
    query: gql`
      ${CartPageQuery}
    `,
  });

  return {
    products,
  };
};

export default CartPage;
