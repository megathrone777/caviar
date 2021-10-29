import { styled } from "~/theme";

export const StyledWrapper = styled.div``;

export const StyledTitle = styled.h1`
  font: ${({ theme }) => `${theme.rem(32)} ${theme.fonts.fontBlack}`};
  margin-bottom: ${({ theme }) => theme.rem(15)};
  text-transform: uppercase;
`;

export const StyledTitleImage = styled.img`
  max-width: ${({ theme }) => theme.rem(80)};
  margin-right: ${({ theme }) => theme.rem(10)};
`;

export const StyledContent = styled.div``;

export const StyledRow = styled.div`
  border-bottom: ${({ theme }) =>
    `${theme.rem(2)} solid ${theme.colors.black}`};
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const StyledCell = styled.div`
  flex: 0 1 16.66%;
`;

export const StyledName = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontSemiBold}`};
`;

export const StyledPrice = styled.span`
  color: ${({ theme }) => theme.colors.orange};
  font: ${({ theme }) => `${theme.rem(17)} ${theme.fonts.fontBold}`};
`;

export const StyledImageWrapper = styled.div`
  text-align: center;
`;

export const StyledImage = styled.img`
  max-width: ${({ theme }) => theme.rem(120)};
`;
