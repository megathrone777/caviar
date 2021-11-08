import { css, styled } from "~/theme";
import { includeBreakpoint } from "~/theme/mixins";

export const StyledWrapper = styled.div<{ isFixed: boolean }>`
  background-color: transparent;
  border-radius: 0;
  flex: 0 1 10%;
  min-width: ${({ theme }) => theme.rem(100)};
  position: relative;
  right: inherit;
  text-align: right;
  top: inherit;
  z-index: 2000;

  ${includeBreakpoint.tablet`
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: ${({ theme }) => theme.rem(20)};
    min-width: 0;
    position: fixed;
    right: ${({ theme }) => theme.rem(40)};
    top: ${({ theme }) => theme.rem(150)};
  `};

  ${includeBreakpoint.mobile`
    right: ${({ theme }) => theme.rem(20)};
    top: ${({ theme }) => theme.rem(200)};
  `};

  ${({ isFixed }) =>
    isFixed &&
    css`
      background-color: ${({ theme }) => theme.colors.blue};
      border-radius: ${({ theme }) => theme.rem(20)};
      position: fixed;
      right: ${({ theme }) => theme.rem(40)};
      top: ${({ theme }) => theme.rem(40)};

      ${includeBreakpoint.tablet`
        top: ${({ theme }) => theme.rem(20)};
      `};

      ${includeBreakpoint.mobile`
        top: ${({ theme }) => theme.rem(80)};
      `};
    `}
`;

export const StyledLink = styled.a<{ isFixed: boolean }>`
  align-items: center;
  display: inline-flex;
  padding: ${({ isFixed, theme }) =>
    isFixed ? `${theme.rem(13)} ${theme.rem(13)} ${theme.rem(8)}` : 0};
  justify-content: flex-end;
  text-decoration: none;

  ${includeBreakpoint.tablet`
    padding: ${({ theme }) =>
      `${theme.rem(13)} ${theme.rem(13)} ${theme.rem(8)}`};
  `};

  &:focus {
    outline: none;
  }
`;

export const StyledIcon = styled.i<{ isFixed: boolean }>`
  color: ${({ isFixed, theme }) => (isFixed ? "white" : theme.colors.blue)};
  position: relative;
  width: ${({ theme }) => theme.rem(40)};

  ${includeBreakpoint.tablet`
    color: white;
  `};
`;

export const StyledQuantity = styled.span<{ isFixed: boolean }>`
  color: ${({ isFixed, theme }) => (isFixed ? "white" : theme.colors.orange)};
  display: block;
  font: ${({ theme }) => `${theme.rem(13)} ${theme.fonts.fontBold}`};
  left: ${({ theme }) => theme.rem(6)};
  position: absolute;
  right: 0;
  text-align: center;
  top: ${({ theme }) => theme.rem(5)};

  ${includeBreakpoint.tablet`
    color: white;
  `};
`;

export const StyledPrice = styled.span<{ isFixed: boolean }>`
  color: ${({ isFixed, theme }) => (isFixed ? "white" : theme.colors.orange)};
  display: inline-block;
  font: ${({ theme }) => `${theme.rem(17)} ${theme.fonts.fontBold}`};

  ${includeBreakpoint.tablet`
    color: white;
  `};
`;
