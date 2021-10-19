import React from "react";

import { Layout } from "~/components";
import { Cart } from "~/components";

const IndexPage: React.FC = () => (
  <Layout title="Main page">
    <Cart />
  </Layout>
);

export default IndexPage;
