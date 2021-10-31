import React from "react";
import Link from "next/link";

import { TCartProduct } from "~/components";
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
  StyledQuantity,
  StyledQuantityButton,
  StyledQuantityWrapper,
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

  const handleRemoveProduct = (id: string): void => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseProduct = (id: string): void => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseProduct = (id: string, quantity: number): void => {
    if (quantity === 1) return;
    dispatch(decreaseQuantity(id));
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
                  weight,
                }: TCartProduct): React.ReactElement => (
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
                      <StyledQuantityWrapper>
                        <StyledQuantityButton
                          type="button"
                          onClick={() => handleDecreaseProduct(id, quantity)}
                        >
                          -
                        </StyledQuantityButton>
                        <StyledQuantity>{quantity}</StyledQuantity>

                        <StyledQuantityButton
                          type="button"
                          onClick={() => handleIncreaseProduct(id)}
                        >
                          +
                        </StyledQuantityButton>
                      </StyledQuantityWrapper>
                    </StyledCell>

                    <StyledCell>
                      <Button
                        inverted
                        type="button"
                        onClick={() => handleRemoveProduct(id)}
                      >
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
