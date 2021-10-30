import React from "react";
import Link from "next/link";

import { TProduct } from "~/components";
import {
  useStore,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "~/store";
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
    ({ totalPrice }: TProduct): number => totalPrice
  );

  const totalProductsPrice = addedProductsPrice.reduce(
    (accumulator, currentPrice) => accumulator + currentPrice,
    0
  );

  const handleRemoveProduct = (id: string): void => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseProduct = (id: string, priceDefault: number): void => {
    dispatch(increaseQuantity(id, priceDefault));
  };

  const handleDecreaseProduct = (id: string, priceDefault: number): void => {
    dispatch(decreaseQuantity(id, priceDefault));
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
                  totalPrice,
                  priceDefault,
                  weight,
                }: TProduct): React.ReactElement => (
                  <StyledRow key={`${id}-${name}`}>
                    <StyledCell>
                      <StyledImageWrapper>
                        <Link href="#" passHref>
                          <a>
                            <StyledImage alt={name} src={imageSmall?.url} />
                          </a>
                        </Link>
                      </StyledImageWrapper>
                    </StyledCell>

                    <StyledCell>
                      <Link href="#" passHref>
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
                      <Button
                        inverted
                        type="button"
                        onClick={() => handleRemoveProduct(id)}
                      >
                        Удалить
                      </Button>
                      <Button
                        type="button"
                        onClick={() => handleIncreaseProduct(id, priceDefault)}
                      >
                        +
                      </Button>
                      <Button
                        type="button"
                        onClick={() => handleDecreaseProduct(id, priceDefault)}
                      >
                        -
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
