import React from "react";
import { NextPage } from "next";

import { Banner, Layout } from "~/components";

const ContactsPage: NextPage = () => (
  <Layout title="Caviar Express | Контакты">
    <Banner title="Контакты" />
  </Layout>
);

export default ContactsPage;
