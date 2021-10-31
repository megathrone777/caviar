import { styled } from "~/theme";

export const StyledCategories = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(25)};
`;

export const StyledCategoriesList = styled.ul`
  display: flex;
`;

export const StyledCategoriesItem = styled.li`
  height: ${({ theme }) => theme.rem(35)};
  margin-right: ${({ theme }) => theme.rem(10)};

  &:last-of-type {
    margin-right: 0;
  }
`;

export const StyledCategoriesLink = styled.a<{ isActive?: boolean }>`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.orange : theme.colors.black};
  color: white;
  display: block;
  height: 100%;
  line-height: ${({ theme }) => theme.rem(35)};
  padding-left: ${({ theme }) => theme.rem(10)};
  padding-right: ${({ theme }) => theme.rem(10)};
  text-decoration: none;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;
