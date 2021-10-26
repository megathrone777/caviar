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
import { useStore, addToCart } from "~/store";

const Products: React.FC = () => {
  const { dispatch } = useStore();

  const handleAddProduct = (product: TProduct) => dispatch(addToCart(product));

  return (
    <StyledWrapper>
      {productsList && !!productsList.length && (
        <StyledList>
          {productsList.map(
            (product: TProduct): React.ReactElement => (
              <StyledListItem key={`${product.id}-${product.name}`}>
                <StyledListItemImageHolder>
                  <Link href="#" passHref>
                    <StyledListItemLink>
                      <StyledListItemImage
                        alt={product.name}
                        src={`/images/${product.image.url}`}
                      />
                    </StyledListItemLink>
                  </Link>
                </StyledListItemImageHolder>

                <StyledListItemName>
                  <Link href="#" passHref>
                    <StyledListItemNameLink>
                      {product.name}
                    </StyledListItemNameLink>
                  </Link>
                </StyledListItemName>

                <StyledListItemPrices>
                  {product.priceDiscounted && (
                    <StyledListItemPriceDiscounted>
                      {product.priceDiscounted}
                    </StyledListItemPriceDiscounted>
                  )}
                  <StyledListItemPriceDefault>
                    {product.priceDefault}
                  </StyledListItemPriceDefault>
                </StyledListItemPrices>

                <button onClick={() => handleAddProduct(product)} type="button">
                  Add to cart
                </button>
              </StyledListItem>
            )
          )}
        </StyledList>
      )}
    </StyledWrapper>
  );
};

export { Products };
