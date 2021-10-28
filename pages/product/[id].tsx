import React from "react";
import { useRouter } from "next/router";

const Product: React.FC = () => {
  const router = useRouter();

  console.log(router);

  return <div>Product</div>;
};

export default Product;
