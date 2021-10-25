import React, { useState, useEffect } from "react";
import { get as getFromLocalStorage } from "local-storage";
import Link from "next/link";

import { TProduct } from "~/components/ProductDetails/types";
import { useStore, removeFromCart } from "~/store";

import {
  StyledWrapper,
  StyledList,
  StyledListItem,
  StyledListItemImageHolder,
  StyledListItemLink,
  StyledListItemImage,
  StyledListItemName,
  StyledListItemNameLink,
  StyledListItemPrices,
  StyledListItemPriceDefault,
  StyledListItemPriceDiscounted,
} from "~/components/Products/styled";

const Cart: React.FC = () => {
  const { state, dispatch } = useStore();

  const {
    cart: { products },
  } = state;

  return (
    <StyledWrapper>
      {products && !!products.length ? (
        <StyledList>
          {products.map(
            ({
              id,
              image,
              name,
              priceDiscounted,
              priceDefault,
            }: TProduct): React.ReactElement => (
              <StyledListItem key={`${id}-${name}`}>
                <StyledListItemImageHolder>
                  <Link href="#" passHref>
                    <StyledListItemLink>
                      <StyledListItemImage
                        alt={name}
                        src={`/images/${image.url}`}
                      />
                    </StyledListItemLink>
                  </Link>
                </StyledListItemImageHolder>

                <StyledListItemName>
                  <Link href="#" passHref>
                    <StyledListItemNameLink>{name}</StyledListItemNameLink>
                  </Link>
                </StyledListItemName>

                <StyledListItemPrices>
                  {priceDiscounted && (
                    <StyledListItemPriceDiscounted>
                      {priceDiscounted}
                    </StyledListItemPriceDiscounted>
                  )}
                  <StyledListItemPriceDefault>
                    {priceDefault}
                  </StyledListItemPriceDefault>
                </StyledListItemPrices>

                <button
                  type="button"
                  onClick={() => dispatch(removeFromCart(id))}
                >
                  Remove from cart
                </button>
              </StyledListItem>
            )
          )}
        </StyledList>
      ) : (
        <div>It is empty now</div>
      )}
    </StyledWrapper>
  );
};

export { Cart };
