import { css, styled } from "~/theme";

export const StyledWrapper = styled.div<{ isFixed: boolean }>`
  background-color: transparent;
  border-radius: 0;
  flex: 0 1 25%;

  position: relative;
  right: inherit;
  text-align: right;
  top: inherit;
  z-index: 2000;

  ${({ isFixed }) =>
    isFixed &&
    css`
      background-color: ${({ theme }) => theme.colors.black};
      border-radius: ${({ theme }) => theme.rem(20)};

      position: fixed;
      right: ${({ theme }) => theme.rem(40)};
      top: ${({ theme }) => theme.rem(40)};
    `}
`;

export const StyledLink = styled.a<{ isFixed: boolean }>`
  align-items: center;
  display: inline-flex;
  padding: ${({ isFixed, theme }) =>
    isFixed ? `${theme.rem(13)} ${theme.rem(10)} ${theme.rem(8)}` : 0};
  justify-content: flex-end;
  text-decoration: none;

  &:focus {
    outline: none;
  }
`;

export const StyledIcon = styled.i<{ isFixed: boolean }>`
  color: ${({ isFixed, theme }) => (isFixed ? "white" : theme.colors.blue)};
  position: relative;
  width: ${({ theme }) => theme.rem(40)};
`;

export const StyledQuantity = styled.span`
  color: ${({ theme }) => theme.colors.orange};
  display: block;
  font: ${({ theme }) => `${theme.rem(13)} ${theme.fonts.fontBold}`};
  left: ${({ theme }) => theme.rem(6)};
  position: absolute;
  right: 0;
  text-align: center;
  top: ${({ theme }) => theme.rem(5)};
`;

export const StyledPrice = styled.span<{ isFixed: boolean }>`
  color: ${({ isFixed, theme }) => (isFixed ? "white" : theme.colors.orange)};
  display: inline-block;
  font: ${({ theme }) => `${theme.rem(17)} ${theme.fonts.fontBold}`};
`;
