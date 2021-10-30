import React from "react";
import Link from "next/link";

import { TCartProduct, TProduct } from "~/components";
import { useStore, removeFromCart } from "~/store";
import { Button, Container } from "~/theme/components";
import {
  StyledWrapper,
  StyledContent,
  StyledRow,
  StyledCell,
  StyledImage,
  StyledName,
  StyledPrice,
  StyledImageWrapper,
  StyledTotalPrice,
  StyledTotalPriceAmount,
  StyledWeight,
} from "./styled";

const Cart: React.FC = () => {
  const { state, dispatch } = useStore();
  const {
    cart: { products },
  } = state;

  const addedProductsPrice: number[] = products.map(
    ({ totalPrice }: TCartProduct): number => totalPrice
  );

  const totalProductsPrice = addedProductsPrice.reduce(
    (accumulator, currentPrice) => accumulator + currentPrice,
    0
  );

  const handleProductRemove = (id: string): void => {
    dispatch(removeFromCart(id));
  };

  return (
    <StyledWrapper>
      <Container>
        {products && !!products.length ? (
          <>
            <StyledContent>
              {products.map(
                ({
                  id,
                  imageSmall,
                  name,
                  quantity,
                  slug,
                  totalPrice,
                  weight,
                }: TCartProduct): React.ReactElement => (
                  <StyledRow key={`${id}-${name}`}>
                    <StyledCell>
                      <StyledImageWrapper>
                        <Link
                          as={`/product/${slug}`}
                          href={`/product/${slug}`}
                          passHref
                        >
                          <a>
                            <StyledImage alt={name} src={imageSmall.url} />
                          </a>
                        </Link>
                      </StyledImageWrapper>
                    </StyledCell>

                    <StyledCell>
                      <Link
                        as={`/product/${slug}`}
                        href={`/product/${slug}`}
                        passHref
                      >
                        <StyledName>{name}</StyledName>
                      </Link>
                      <StyledWeight>{weight}</StyledWeight>
                    </StyledCell>

                    <StyledCell>
                      <StyledPrice>{totalPrice} €</StyledPrice>
                    </StyledCell>

                    <StyledCell>
                      <span>{quantity}</span>
                    </StyledCell>

                    <StyledCell>
                      <Button inverted onClick={() => handleProductRemove(id)}>
                        Удалить
                      </Button>
                    </StyledCell>
                  </StyledRow>
                )
              )}
            </StyledContent>

            <StyledTotalPrice>
              Общая цена:{" "}
              <StyledTotalPriceAmount>
                {totalProductsPrice} €
              </StyledTotalPriceAmount>
            </StyledTotalPrice>
          </>
        ) : (
          <div>It is empty now</div>
        )}
      </Container>
    </StyledWrapper>
  );
};

export { Cart };
