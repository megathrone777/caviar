import React from "react";
import Link from "next/link";

import { TProduct } from "~/components/ProductDetails/types";
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
} from "./styled";

import productsList from "./productsList.json";

const Products: React.FC = () => (
  <StyledWrapper>
    {productsList && !!productsList.length && (
      <StyledList>
        {productsList.map(
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

              <button type="button">Add to cart</button>
            </StyledListItem>
          )
        )}
      </StyledList>
    )}
  </StyledWrapper>
);

export { Products };
