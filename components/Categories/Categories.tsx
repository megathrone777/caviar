import React from "react";
import { useRouter } from "next/router";

import { TCategory } from "./types";

import {
  StyledCategories,
  StyledCategoriesItem,
  StyledCategoriesList,
  StyledCategoriesLink,
} from "./styled";

interface TProps {
  categories: TCategory[];
}

export const Categories: React.FC<TProps> = ({ categories }) => {
  const router = useRouter();

  console.log(categories);

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
        {categories.map(
          ({ name, slug }: TCategory, index: number): React.ReactElement => (
            <StyledCategoriesItem key={`${name}-${index}`}>
              <StyledCategoriesLink
                href="#"
                isActive={router.query.slug === slug}
                onClick={(event: React.SyntheticEvent<HTMLAnchorElement>) =>
                  handleCategoryToggle(event, null)
                }
              >
                {name}
              </StyledCategoriesLink>
            </StyledCategoriesItem>
          )
        )}
      </StyledCategoriesList>
    </StyledCategories>
  );
};
