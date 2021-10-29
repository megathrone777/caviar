import React from "react";
import Link from "next/link";

import { TProduct } from "~/components";
import { useStore, removeFromCart } from "~/store";
import { Button, Container } from "~/theme/components";
import {
  StyledWrapper,
  StyledContent,
  StyledRow,
  StyledCell,
  StyledTitle,
  StyledImage,
  StyledTitleImage,
  StyledName,
  StyledPrice,
  StyledImageWrapper,
} from "./styled";

const Cart: React.FC = () => {
  const { state, dispatch } = useStore();
  const {
    cart: { products },
  } = state;

  const handleProductRemove = (id: string): void => {
    dispatch(removeFromCart(id));
  };

  return (
    <StyledWrapper>
      <Container>
        <StyledTitle>
          <StyledTitleImage alt="Logo" src="/images/logo_img.png" />
          Ваш заказ
        </StyledTitle>

        {products && !!products.length ? (
          <StyledContent>
            {products.map(
              ({
                id,
                imageSmall,
                name,
                priceDefault,
                priceDiscounted,
                quantity,
                weight,
              }: TProduct): React.ReactElement => (
                <StyledRow key={`${id}-${name}`}>
                  <StyledCell>
                    <StyledImageWrapper>
                      <Link href="#" passHref>
                        <a>
                          <StyledImage alt={name} src={imageSmall.url} />
                        </a>
                      </Link>
                    </StyledImageWrapper>
                  </StyledCell>

                  <StyledCell>
                    <Link href="#" passHref>
                      <StyledName>
                        {name}
                        {weight}
                      </StyledName>
                    </Link>
                  </StyledCell>

                  <StyledCell>
                    {priceDiscounted && (
                      <StyledPrice>{priceDiscounted}</StyledPrice>
                    )}
                    <StyledPrice>{priceDefault} €</StyledPrice>
                  </StyledCell>

                  <StyledCell>
                    <span>{quantity}</span>
                  </StyledCell>

                  <StyledCell>
                    <Button
                      inverted
                      type="button"
                      onClick={() => handleProductRemove(id)}
                    >
                      Удалить
                    </Button>
                  </StyledCell>
                </StyledRow>
              )
            )}
          </StyledContent>
        ) : (
          <div>It is empty now</div>
        )}
      </Container>
    </StyledWrapper>
  );
};

export { Cart };
