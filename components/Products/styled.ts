import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  overflow: hidden;
`;

export const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${({ theme }) => theme.rem(-15)};
  margin-right: ${({ theme }) => theme.rem(-15)};
`;

export const StyledListItem = styled.div`
  flex: 0 1 calc(25% - ${({ theme }) => theme.rem(30)});
  margin-left: ${({ theme }) => theme.rem(15)};
  margin-right: ${({ theme }) => theme.rem(15)};
`;

export const StyledListItemLink = styled.a`
  display: block;
  height: 100%;
`;

export const StyledListItemImageHolder = styled.div`
  border: ${({ theme }) => theme.rem(1)} solid rgba(212, 212, 212, 0.5);
  height: ${({ theme }) => theme.rem(270)};
  margin-bottom: ${({ theme }) => theme.rem(8)};
`;

export const StyledListItemImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const StyledListItemName = styled.h3`
  margin-bottom: ${({ theme }) => theme.rem(8)};
  text-align: center;
`;

export const StyledListItemNameLink = styled.a`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  transition: color 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const StyledListItemPrices = styled.div`
  font: ${({ theme }) => `${theme.rem(15)} ${theme.fonts.fontBold}`};
  text-align: center;
`;

export const StyledListItemPriceDefault = styled.span``;

export const StyledListItemPriceDiscounted = styled.span``;
