import { css, styled } from "~/theme";
import { includeBreakpoint } from "~/theme/mixins";

export const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 0 1 25%;

  ${includeBreakpoint.tablet`
    flex: 0 1 ${({ theme }) => theme.rem(100)};
    max-width: ${({ theme }) => theme.rem(100)};
  `};

  ${includeBreakpoint.mobile`
    position: relative;
    z-index: 2002;
  `};

  &:focus {
    outline: none;
  }
`;

export const StyledLink = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: ${({ theme }) => theme.rem(140)};
`;

export const StyledImage = styled.img`
  max-width: 100%;
  margin-bottom: ${({ theme }) => theme.rem(4)};
`;

export const StyledText = styled.span<{ menuIsOpened: boolean }>`
  color: ${({ theme }) => theme.colors.blue};
  display: block;
  font: ${({ theme }) => `${theme.rem(15)} ${theme.fonts.fontBlack}`};
  text-transform: uppercase;
  white-space: nowrap;

  ${includeBreakpoint.mobile`
    ${({ menuIsOpened }) => menuIsOpened && css`
      color: white;
    `}
  `};
`;
