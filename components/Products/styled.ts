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
  background-color: ${({ theme }) => theme.colors.black};
  height: ${({ theme }) => theme.rem(270)};
`;

export const StyledListItemImage = styled.img`
  height: 100%;
  mix-blend-mode: difference;
  object-fit: cover;
  width: 100%;
`;

export const StyledListItemName = styled.h3``;

export const StyledListItemNameLink = styled.a``;

export const StyledListItemPrices = styled.div``;

export const StyledListItemPriceDefault = styled.span``;

export const StyledListItemPriceDiscounted = styled.span``;
