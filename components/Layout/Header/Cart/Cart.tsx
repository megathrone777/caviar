import React from "react";
import Link from "next/link";

import { useStore } from "~/store";
import { SvgCartIcon } from "~/icons";
import {
  StyledWrapper,
  StyledLink,
  StyledIcon,
  StyledQuantity,
} from "./styled";

const Cart: React.FC = () => {
  const { state } = useStore();

  return (
    <StyledWrapper>
      <Link href="/cart" passHref>
        <StyledLink>
          <StyledIcon>
            <SvgCartIcon />
          </StyledIcon>
          <StyledQuantity>{state.cart.products.length}</StyledQuantity>
        </StyledLink>
      </Link>
    </StyledWrapper>
  );
};

export { Cart };
