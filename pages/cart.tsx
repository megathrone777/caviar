import React from "react";

import { Layout, Cart, Media, Products } from "~/components";

const IndexPage: React.FC = () => (
  <Layout title="Main page">
    <Cart />
    <Products title="Рекоммендуемые" items={[]} />
    <Media />
  </Layout>
);

export default IndexPage;
