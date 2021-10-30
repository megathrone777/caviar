import React from "react";
import { NextPage } from "next";

import { Banner, Layout } from "~/components";

const AboutPage: NextPage = () => (
  <Layout title="Caviar Express | О нас">
    <Banner title="О нас" />
  </Layout>
);

export default AboutPage;
