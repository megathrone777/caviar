import React from "react";
import { NextPage } from "next";

import { Banner, Layout } from "~/components";

const ShopPage: NextPage = () => (
  <Layout title="Caviar Express | Магазин">
    <Banner title="Магазин" />
  </Layout>
);

export default ShopPage;
