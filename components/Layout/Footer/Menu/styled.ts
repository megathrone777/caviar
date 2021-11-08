import { styled } from "~/theme";
import { includeBreakpoint } from "~/theme/mixins";

export const StyledWrapper = styled.div`
  height: 100%;

  ${includeBreakpoint.mobile`
    padding-left: ${({ theme }) => theme.rem(15)};
  `}
`;

export const StyledList = styled.ul`
  align-items: center;
  display: flex;
  height: 100%;

  ${includeBreakpoint.mobile`
    flex-wrap: wrap;
    justify-content: center;
  `}
`;

export const StyledItem = styled.li`
  margin-right: ${({ theme }) => theme.rem(30)};

  ${includeBreakpoint.tablet`
    margin-right: ${({ theme }) => theme.rem(20)};
  `}

  ${includeBreakpoint.mobile`
    margin-bottom: ${({ theme }) => theme.rem(10)};
  `}

  &:last-of-type {
    margin-right: 0;
  }
`;

export const StyledLink = styled.a<{ isActive?: boolean }>`
  color: ${({ isActive, theme }) => (isActive ? theme.colors.orange : "white")};
  font: ${({ theme }) => `${theme.rem(14)} ${theme.fonts.fontBold}`};
  letter-spacing: ${({ theme }) => theme.rem(2)};
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s ease-in;
  white-space: nowrap;

  ${includeBreakpoint.tablet`
    font-size: ${({ theme }) => theme.rem(13)}};
  `}

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
