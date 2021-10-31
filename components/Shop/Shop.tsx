import React from "react";
import Link from "next/link";
import { useNotifications } from "reapop";
import { useRouter } from "next/router";

import { addToCart, useStore } from "~/store";
import { TCategory } from "./types";
import { TProduct, TCartProduct } from "~/components";
import { Button, Container } from "~/theme/components";
import {
  StyledWrapper,
  StyledLayout,
  StyledCategories,
  StyledCategoriesItem,
  StyledCategoriesList,
  StyledCategoriesLink,
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
}

const Shop: React.FC<TProps> = ({ categories, products }) => {
  const { dispatch } = useStore();
  const router = useRouter();
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

  const handleCategoryToggle = (
    event: React.SyntheticEvent<HTMLAnchorElement>,
    slug: string
  ): void => {
    event.preventDefault();

    if (slug) {
      router.push(
        {
          pathname: router.pathname,
          query: { slug },
        },
        undefined,
        {
          scroll: false,
        }
      );
      return;
    }

    router.push(
      {
        pathname: router.pathname,
        query: {},
      },
      undefined,
      {
        scroll: false,
      }
    );
  };

  return (
    <StyledWrapper>
      <Container>
        <StyledLayout>
          <StyledCategories>
            <StyledCategoriesList>
              <StyledCategoriesItem>
                <StyledCategoriesLink
                  href="#"
                  isActive={router.query.slug === undefined}
                  onClick={(event: React.SyntheticEvent<HTMLAnchorElement>) =>
                    handleCategoryToggle(event, null)
                  }
                >
                  Все
                </StyledCategoriesLink>
              </StyledCategoriesItem>

              <StyledCategoriesItem>
                <StyledCategoriesLink
                  href="#"
                  isActive={router.query.slug === "rybnye-delikatesy"}
                  onClick={(event: React.SyntheticEvent<HTMLAnchorElement>) =>
                    handleCategoryToggle(event, "rybnye-delikatesy")
                  }
                >
                  Рыбные деликатесы
                </StyledCategoriesLink>
              </StyledCategoriesItem>

              <StyledCategoriesItem>
                <StyledCategoriesLink
                  href="#"
                  isActive={router.query.slug === "chernaya-ikra-osetrovaya"}
                  onClick={(event: React.SyntheticEvent<HTMLAnchorElement>) =>
                    handleCategoryToggle(event, "chernaya-ikra-osetrovaya")
                  }
                >
                  Чёрная икра
                </StyledCategoriesLink>
              </StyledCategoriesItem>

              <StyledCategoriesItem>
                <StyledCategoriesLink
                  href="#"
                  isActive={router.query.slug === "krasnaya-ikra-lososevaya"}
                  onClick={(event: React.SyntheticEvent<HTMLAnchorElement>) =>
                    handleCategoryToggle(event, "krasnaya-ikra-lososevaya")
                  }
                >
                  Красная икра
                </StyledCategoriesLink>
              </StyledCategoriesItem>
            </StyledCategoriesList>
          </StyledCategories>

          <StyledProducts>
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
