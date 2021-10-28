import React from "react";
import Link from "next/link";

import { useStore, addToCart } from "~/store";
import { TProduct } from "~/components/ProductDetails/types";
import { Container } from "~/theme/components";
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

const Products: React.FC = () => {
  const { dispatch } = useStore();

  return (
    <StyledWrapper>
      <Container>
        {productsList && !!productsList.length && (
          <StyledList>
            {productsList.map(
              ({
                description,
                id,
                image,
                name,
                priceDefault,
                priceDiscounted,
                quantity,
              }: TProduct): React.ReactElement => (
                <StyledListItem key={`${id}-${name}`}>
                  <StyledListItemImageHolder>
                    <Link href={`/product/${id}`} passHref>
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
                      {priceDefault}{" "}Ft
                    </StyledListItemPriceDefault>
                  </StyledListItemPrices>

                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          description,
                          id,
                          image,
                          name,
                          priceDefault,
                          priceDiscounted,
                          quantity,
                        })
                      )
                    }
                    type="button"
                  >
                    Добавить в корзину
                  </button>
                </StyledListItem>
              )
            )}
          </StyledList>
        )}
      </Container>
    </StyledWrapper>
  );
};

export { Products };
