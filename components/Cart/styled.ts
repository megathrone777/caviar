import { styled } from "~/theme";
import { includeBreakpoint } from '~/theme/mixins'

export const StyledWrapper = styled.div`
  background: url("/images/main_bg.png");
  padding-bottom: ${({ theme }) => theme.rem(25)};
  padding-top: ${({ theme }) => theme.rem(25)};
`;

export const StyledContent = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(25)};
`;

export const StyledRow = styled.div`
  border-bottom: ${({ theme }) =>
    `${theme.rem(2)} solid ${theme.colors.black}`};
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${includeBreakpoint.mobile`
    flex-wrap: wrap;
  `};
`;

export const StyledCell = styled.div`
  flex: 0 1 16.66%;
  text-align: center;

  ${includeBreakpoint.mobile`
    flex: 0 1 100%;
    margin-bottom: ${({ theme }) => theme.rem(20)};
  `};
`;

export const StyledName = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontMedium}`};
  text-decoration: none;
`;

export const StyledWeight = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.blue};
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontMedium}`};
`;

export const StyledPrice = styled.span`
  color: ${({ theme }) => theme.colors.orange};
  font: ${({ theme }) => `${theme.rem(17)} ${theme.fonts.fontBold}`};
`;

export const StyledImageWrapper = styled.div``;

export const StyledImage = styled.img`
  max-width: ${({ theme }) => theme.rem(120)};
`;

export const StyledTotalPrice = styled.p`
  font: ${({ theme }) => `${theme.rem(22)} ${theme.fonts.fontBold}`};
  text-align: right;
`;

export const StyledTotalPriceAmount = styled.span`
  color: ${({ theme }) => theme.colors.orange};
`;

export const StyledQuantity = styled.span`
  display: inline-block;
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontBold}`};
  margin: 0 ${({ theme }) => theme.rem(15)};
`;

export const StyledQuantityWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const StyledQuantityButton = styled.button`
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  color: white;
  cursor: pointer;
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontBold}`};
  height: ${({ theme }) => theme.rem(45)};
  transition: background-color 0.2s ease-in;
  width: ${({ theme }) => theme.rem(45)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;
