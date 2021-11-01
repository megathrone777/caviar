import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  background: url("/images/main_bg.png");
  padding-bottom: ${({ theme }) => theme.rem(25)};
  padding-top: ${({ theme }) => theme.rem(25)};
`;

export const StyledLayout = styled.div``;

export const StyledProducts = styled.div`
  position: relative;
`;

export const StyledProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${({ theme }) => theme.rem(-15)};
  margin-right: ${({ theme }) => theme.rem(-15)};
`;

export const StyledProductsItem = styled.div`
  flex: 0 1 calc(25% - ${({ theme }) => theme.rem(30)});
  margin-bottom: ${({ theme }) => theme.rem(30)};
  margin-left: ${({ theme }) => theme.rem(15)};
  margin-right: ${({ theme }) => theme.rem(15)};
`;

export const StyledProductsLink = styled.a`
  display: block;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

export const StyledProductsWeight = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;

export const StyledProductsImageHolder = styled.div`
  height: ${({ theme }) => theme.rem(270)};
  margin-bottom: ${({ theme }) => theme.rem(10)};
`;

export const StyledProductsImage = styled.img`
  height: 100%;
  mix-blend-mode: darken;
  object-fit: cover;
  width: 100%;
`;

export const StyledProductsName = styled.h3`
  margin-bottom: ${({ theme }) => theme.rem(8)};
  min-height: ${({ theme }) => theme.rem(43)};
  text-align: center;
`;

export const StyledProductsNameLink = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontMedium}`};
  text-decoration: none;
  transition: color 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const StyledProductsPrices = styled.div`
  font: ${({ theme }) => `${theme.rem(15)} ${theme.fonts.fontBold}`};
  margin-bottom: ${({ theme }) => theme.rem(15)};
  text-align: center;
`;

export const StyledProductsPriceDefault = styled.span`
  font-size: ${({ theme }) => theme.rem(18)};
`;

export const StyledProductsPriceDiscounted = styled.span``;

export const StyledProductsButtons = styled.div`
  text-align: center;
`;
