import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  background: url('/images/main_bg.png');
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
`;

export const StyledCell = styled.div`
  flex: 0 1 16.66%;
  text-align: center;
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
