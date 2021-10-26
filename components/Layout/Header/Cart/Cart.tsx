import React from "react";
import Link from "next/link";

import { StyledWrapper, StyledLink, StyledIcon } from "./styled";

const Cart: React.FC = () => (
  <StyledWrapper>
    <Link href="/cart" passHref>
      <StyledLink>
        <StyledIcon>Cart</StyledIcon>
      </StyledLink>
    </Link>
  </StyledWrapper>
);

export { Cart };
