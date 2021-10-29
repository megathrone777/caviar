import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  background: url("/images/main_bg.png");
  overflow: hidden;
  padding-bottom: ${({ theme }) => theme.rem(20)};
  padding-top: ${({ theme }) => theme.rem(40)};
`;

export const StyledTitle = styled.h2`
  font: ${({ theme }) => `${theme.rem(32)} ${theme.fonts.fontBlack}`};
  margin-bottom: ${({ theme }) => theme.rem(15)};
  text-transform: uppercase;
`;

export const StyledTitleImage = styled.img`
  max-width: ${({ theme }) => theme.rem(80)};
  margin-right: ${({ theme }) => theme.rem(10)};
`;

export const StyledText = styled.p`
  font: ${({ theme }) => `${theme.rem(17)} ${theme.fonts.fontMedium}`};
  margin-bottom: ${({ theme }) => theme.rem(15)};
`;

export const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${({ theme }) => theme.rem(-15)};
  margin-right: ${({ theme }) => theme.rem(-15)};
`;

export const StyledListItem = styled.div`
  flex: 0 1 calc(25% - ${({ theme }) => theme.rem(30)});
  margin-bottom: ${({ theme }) => theme.rem(30)};
  margin-left: ${({ theme }) => theme.rem(15)};
  margin-right: ${({ theme }) => theme.rem(15)};
`;

export const StyledListItemLink = styled.a`
  display: block;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

export const StyledListItemWeight = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;

export const StyledListItemImageHolder = styled.div`
  height: ${({ theme }) => theme.rem(270)};
  margin-bottom: ${({ theme }) => theme.rem(10)};
`;

export const StyledListItemImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const StyledListItemName = styled.h3`
  margin-bottom: ${({ theme }) => theme.rem(8)};
  min-height: ${({ theme }) => theme.rem(43)};
  text-align: center;
`;

export const StyledListItemNameLink = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontMedium}`};
  text-decoration: none;
  transition: color 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const StyledListItemPrices = styled.div`
  font: ${({ theme }) => `${theme.rem(15)} ${theme.fonts.fontBold}`};
  margin-bottom: ${({ theme }) => theme.rem(15)};
  text-align: center;
`;

export const StyledListItemPriceDefault = styled.span`
  font-size: ${({ theme }) => theme.rem(18)};
`;

export const StyledListItemPriceDiscounted = styled.span``;

export const StyledButtons = styled.div`
  text-align: center;
`;
