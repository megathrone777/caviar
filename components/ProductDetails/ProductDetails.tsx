import React from "react";
import { useNotifications } from "reapop";

import { useStore, addToCart } from "~/store";
import { TCartProduct } from "~/components";
import { TProduct } from "./types";
import { Button, Container } from "~/theme/components";
import {
  StyledWrapper,
  StyledLayout,
  StyledColumn,
  StyledImage,
  StyledPrice,
  StyledInfo,
  StyledWeight,
  StyledDescription,
} from "./styled";

interface TProps extends TProduct {}

const ProductDetails: React.FC<TProps> = ({
  description,
  id,
  imageMain,
  imageSmall,
  name,
  priceDefault,
  slug,
  weight,
}) => {
  const { dispatch } = useStore();
  const { notify } = useNotifications();

  const handleProductAdd = (product: TCartProduct): void => {
    dispatch(addToCart(product));
    notify({
      dismissAfter: 3000,
      dismissible: true,
      image: "/images/logo_img.png",
      position: "top-center",
      showDismissButton: true,
      status: "success",
      title: `"${product.name}" добавлено в корзину`,
    });
  };

  return (
    <StyledWrapper>
      <Container>
        <StyledLayout>
          <StyledColumn>
            {imageMain && imageMain.url ? (
              <StyledImage alt={name} src={imageMain.url} />
            ) : (
              <p>No image.</p>
            )}
          </StyledColumn>

          <StyledColumn>
            <StyledDescription>{description}</StyledDescription>
            <StyledInfo>
              <StyledPrice>{priceDefault} €</StyledPrice>
              <StyledWeight>Цена за {weight}</StyledWeight>
            </StyledInfo>

            <Button
              onClick={() =>
                handleProductAdd({
                  id,
                  imageSmall,
                  name,
                  quantity: 1,
                  slug,
                  totalPrice: priceDefault,
                  weight,
                })
              }
            >
              Добавить в корзину
            </Button>
          </StyledColumn>
        </StyledLayout>
      </Container>
    </StyledWrapper>
  );
};

export { ProductDetails };
