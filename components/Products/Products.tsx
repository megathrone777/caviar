import React from "react";
import Link from "next/link";
import { useNotifications } from "reapop";

import { useStore, addToCart } from "~/store";
import { TProduct } from "~/components/ProductDetails/types";
import { Button, Container } from "~/theme/components";
import {
  StyledWrapper,
  StyledList,
  StyledListItem,
  StyledListItemImageHolder,
  StyledListItemLink,
  StyledListItemImage,
  StyledListItemName,
  StyledListItemNameLink,
  StyledListItemWeight,
  StyledListItemPrices,
  StyledListItemPriceDefault,
  StyledListItemPriceDiscounted,
  StyledButtons,
  StyledTitle,
  StyledTitleImage,
  StyledText,
} from "./styled";

import productsList from "./productsList.json";

interface TProps {
  title: string;
  text?: React.ReactElement;
}

const Products: React.FC<TProps> = ({ title, text }) => {
  const { dispatch } = useStore();
  const { notify } = useNotifications();

  const handleProductAdd = (product: TProduct): void => {
    dispatch(addToCart(product));
    notify({
      dismissAfter: 3000,
      dismissible: true,
      image: "/images/logo_img.png",
      position: "top-center",
      showDismissButton: true,
      status: "success",
      title: `"${product.name}" добавлен в корзину`,
    });
  };

  return (
    <StyledWrapper>
      <Container>
        <StyledTitle>
          <StyledTitleImage alt="Logo" src="/images/logo_img.png" />
          {title}
        </StyledTitle>
        {text && <StyledText>{text}</StyledText>}
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
                weight,
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
                      <StyledListItemNameLink>
                        {name}
                        {" "}
                        <StyledListItemWeight>{weight}</StyledListItemWeight>
                      </StyledListItemNameLink>
                    </Link>
                  </StyledListItemName>

                  <StyledListItemPrices>
                    {priceDiscounted && (
                      <StyledListItemPriceDiscounted>
                        {priceDiscounted}
                      </StyledListItemPriceDiscounted>
                    )}
                    <StyledListItemPriceDefault>
                      {priceDefault} Ft
                    </StyledListItemPriceDefault>
                  </StyledListItemPrices>

                  <StyledButtons>
                    <Button
                      onClick={() =>
                        handleProductAdd({
                          description,
                          id,
                          image,
                          name,
                          priceDefault,
                          priceDiscounted,
                          quantity,
                          weight,
                        })
                      }
                      type="button"
                    >
                      Добавить в корзину
                    </Button>
                  </StyledButtons>
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
