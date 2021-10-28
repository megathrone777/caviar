import React from "react";
import Link from "next/link";

import { Layout, Media, Products, Slider } from "~/components";

const IndexPage: React.FC = () => (
  <Layout title="Caviar | Home page">
    <Slider />
    <Products
      text={
        <>
          Наш икорный завод производит{" "}
          {
            <Link href="/salmon-caviar" passHref>
              <a>красную лососевую икру</a>
            </Link>
          }{" "}
          и{" "}
          {
            <Link href="/surgeon-caviar">
              <a>черную осетровую икру</a>
            </Link>
          }{" "}
          первого и высшего сорта. Мы выпускаем продукцию из отборной икры
          традиционным способом со строжайшим соблюдением гигиенических норм.
          Предлагаем вам{" "}
          {
            <Link href="/surgeon-caviar">
              <a>приобрести икру осетра</a>
            </Link>
          }{" "}
          и{" "}
          {
            <Link href="/surgeon-caviar">
              <a>икру лосося</a>
            </Link>
          }{" "}
          непосредственно на лицензированном заводе по производству икры.
        </>
      }
      title="Лососевая и осетровая икра от производителя"
    />
    <Media />
  </Layout>
);

export default IndexPage;
