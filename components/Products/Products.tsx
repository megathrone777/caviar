import React from "react";
import Link from "next/link";
import { useNotifications } from "reapop";

import { useStore, addToCart } from "~/store";
import { TProduct, TCartProduct } from "~/components";
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

interface TProps {
  items: TProduct[];
  title: string;
  text?: React.ReactElement;
}

const Products: React.FC<TProps> = ({ items, title, text }) => {
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
        <StyledTitle>
          <StyledTitleImage alt="Logo" src="/images/logo_img.png" />
          {title}
        </StyledTitle>
        {text && <StyledText>{text}</StyledText>}
        {items && !!items.length && (
          <StyledList>
            {items.map(
              ({
                id,
                imageSmall,
                name,
                priceDefault,
                priceDiscounted,
                slug,
                quantity,
                weight,
              }: TProduct): React.ReactElement => (
                <StyledListItem key={`${id}-${name}`}>
                  <StyledListItemImageHolder>
                    <Link
                      as={`/product/${slug}`}
                      href={`/product/${slug}`}
                      passHref
                    >
                      <StyledListItemLink>
                        <StyledListItemImage alt={name} src={imageSmall.url} />
                      </StyledListItemLink>
                    </Link>
                  </StyledListItemImageHolder>

                  <StyledListItemName>
                    <Link
                      as={`/product/${slug}`}
                      href={`/product/${slug}`}
                      passHref
                    >
                      <StyledListItemNameLink>
                        {name}{" "}
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
                      {priceDefault} €
                    </StyledListItemPriceDefault>
                  </StyledListItemPrices>

                  <StyledButtons>
                    <Button
                      onClick={() =>
                        handleProductAdd({
                          id,
                          imageSmall,
                          name,
                          quantity,
                          totalPrice: priceDefault,
                          slug,
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
