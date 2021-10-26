import React from "react";

import { Layout, Products, Slider } from "~/components";

const IndexPage: React.FC = () => (
  <Layout title="Caviar | Home page">
    <Slider />
    <Products />
  </Layout>
);

export default IndexPage;
