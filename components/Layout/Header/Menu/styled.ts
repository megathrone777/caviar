import { css, styled } from "~/theme";
import { includeBreakpoint } from "~/theme/mixins";

export const StyledWrapper = styled.div<{ isOpened: boolean }>`
  height: 100%;

  ${includeBreakpoint.mobile`
    background-color: ${({ theme }) => theme.colors.blue};
    bottom: 0;
    left: 0;
    opacity: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: opacity .2s ease-in, visibility .2s ease-in;
    visibility: hidden;
    width: 100%;
    z-index: 2001;

    ${({ isOpened }) => isOpened && css`
      opacity: 1;
      visibility: visible;
    `};
  `}
`;

export const StyledList = styled.ul`
  align-items: center;
  display: flex;
  height: 100%;

  ${includeBreakpoint.mobile`
    flex-direction: column;
    justify-content: center;
  `}
`;

export const StyledItem = styled.li`
  margin-right: ${({ theme }) => theme.rem(30)};

  ${includeBreakpoint.tablet`
    margin-right: ${({ theme }) => theme.rem(20)};
  `}

  ${includeBreakpoint.mobile`
    margin-bottom: ${({ theme }) => theme.rem(25)};
    margin-right: 0;
  `}

  &:last-of-type {
    margin-right: 0;

    ${includeBreakpoint.mobile`
      margin-bottom: 0;
    `}
  }
`;

export const StyledLink = styled.a<{ isActive?: boolean }>`
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.orange : theme.colors.black};
  font: ${({ theme }) => `${theme.rem(14)} ${theme.fonts.fontBold}`};
  letter-spacing: ${({ theme }) => theme.rem(2)};
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s ease-in;
  white-space: nowrap;

  ${includeBreakpoint.tablet`
    font-size: ${({ theme }) => theme.rem(13)}};
  `}

  ${includeBreakpoint.mobile`
    color: white;
    font-size: ${({ theme }) => theme.rem(19)};
  `}

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
