import React, { useState, useEffect } from "react";
import { get as getFromLocalStorage } from "local-storage";
import Link from "next/link";

import { TProduct } from "~/components/ProductDetails/types";
import { TState } from "~/store/initialState";

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
  const [cartProducts, setCartProducts] = useState<TProduct[] | null>(null);

  useEffect(() => {
    const {
      cart: { products },
    }: TState = getFromLocalStorage("state");
    products && setCartProducts(products);
  }, []);

  return (
    <StyledWrapper>
      {cartProducts && !!cartProducts.length ? (
        <StyledList>
          {cartProducts.map(
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

                <button type="button">Remove from cart</button>
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
