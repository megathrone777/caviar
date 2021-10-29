import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import { TProduct } from "~/components";
import { useStore } from "~/store";
import { SvgCartIcon } from "~/icons";
import {
  StyledWrapper,
  StyledLink,
  StyledIcon,
  StyledQuantity,
  StyledPrice,
} from "./styled";

const Cart: React.FC = () => {
  const [cartIsFixed, toggleCartFixed] = useState<boolean>(false);
  const { state } = useStore();

  const checkCartPosition = useCallback(() => {
    if (window.scrollY > 100) {
      toggleCartFixed(true);
    } else if (window.scrollY < 100) {
      toggleCartFixed(false);
    }
  }, [cartIsFixed, toggleCartFixed]);

  const addedProductsPrice: number[] = state.cart.products.map(
    ({ totalPrice }: TProduct): number => totalPrice
  );

  const totalProductsPrice = addedProductsPrice.reduce(
    (accumulator, currentPrice) => accumulator + currentPrice,
    0
  );

  useEffect(() => {
    checkCartPosition();
    window.addEventListener("scroll", checkCartPosition);

    return (): void => {
      window.removeEventListener("scroll", checkCartPosition);
    };
  }, []);

  return (
    <StyledWrapper isFixed={cartIsFixed}>
      <Link href="/cart" passHref>
        <StyledLink isFixed={cartIsFixed}>
          {totalProductsPrice > 0 && (
            <StyledPrice isFixed={cartIsFixed}>
              {totalProductsPrice} €
            </StyledPrice>
          )}

          <StyledIcon isFixed={cartIsFixed}>
            <SvgCartIcon />
            <StyledQuantity>{state.cart.products.length}</StyledQuantity>
          </StyledIcon>
        </StyledLink>
      </Link>
    </StyledWrapper>
  );
};

export { Cart };
