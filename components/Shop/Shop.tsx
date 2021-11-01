import React, { useState } from "react";
import Link from "next/link";
import { useNotifications } from "reapop";

import { addToCart, useStore } from "~/store";
import { TProduct, TCartProduct, Categories, TCategory } from "~/components";
import { Button, Container, Loader } from "~/theme/components";
import {
  StyledWrapper,
  StyledLayout,
  StyledProducts,
  StyledProductsButtons,
  StyledProductsImage,
  StyledProductsImageHolder,
  StyledProductsItem,
  StyledProductsLink,
  StyledProductsList,
  StyledProductsName,
  StyledProductsNameLink,
  StyledProductsPriceDefault,
  StyledProductsPriceDiscounted,
  StyledProductsPrices,
  StyledProductsWeight,
} from "./styled";

interface TProps {
  categories: TCategory[];
  products: TProduct[];
  productsLoading: boolean;
}

const Shop: React.FC<TProps> = ({
  products,
  productsLoading = true,
  categories,
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
          <Categories categories={categories} />
          <StyledProducts>
            {productsLoading && <Loader />}
            {products && !!products.length ? (
              <StyledProductsList>
                {products.map(
                  ({
                    id,
                    imageSmall,
                    name,
                    priceDefault,
                    priceDiscounted,
                    quantity,
                    slug,
                    weight,
                  }: TProduct): React.ReactElement => (
                    <StyledProductsItem key={`${id}-${name}`}>
                      <StyledProductsImageHolder>
                        <Link
                          as={`/product/${slug}`}
                          href={`/product/${slug}`}
                          passHref
                        >
                          <StyledProductsLink>
                            <StyledProductsImage
                              alt={name}
                              src={imageSmall.url}
                            />
                          </StyledProductsLink>
                        </Link>
                      </StyledProductsImageHolder>

                      <StyledProductsName>
                        <Link
                          as={`/product/${slug}`}
                          href={`/product/${slug}`}
                          passHref
                        >
                          <StyledProductsNameLink>
                            {name}{" "}
                            <StyledProductsWeight>
                              {weight}
                            </StyledProductsWeight>
                          </StyledProductsNameLink>
                        </Link>
                      </StyledProductsName>

                      <StyledProductsPrices>
                        {priceDiscounted && (
                          <StyledProductsPriceDiscounted>
                            {priceDiscounted} €
                          </StyledProductsPriceDiscounted>
                        )}
                        <StyledProductsPriceDefault>
                          {priceDefault} €
                        </StyledProductsPriceDefault>
                      </StyledProductsPrices>

                      <StyledProductsButtons>
                        <Button
                          onClick={() =>
                            handleProductAdd({
                              id,
                              imageSmall,
                              name,
                              quantity,
                              priceDefault,
                              totalPrice: priceDefault,
                              slug,
                              weight,
                            })
                          }
                        >
                          Добавить в корзину
                        </Button>
                      </StyledProductsButtons>
                    </StyledProductsItem>
                  )
                )}
              </StyledProductsList>
            ) : (
              <div>No products</div>
            )}
          </StyledProducts>
        </StyledLayout>
      </Container>
    </StyledWrapper>
  );
};

export { Shop };
