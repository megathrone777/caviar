import { styled } from "~/theme";
import { includeBreakpoint } from "~/theme/mixins";

export const StyledWrapper = styled.section`
  height: ${({ theme }) => theme.rem(550)};
  position: relative;

  ${includeBreakpoint.tablet`
    height: ${({ theme }) => theme.rem(450)};
  `}

  ${includeBreakpoint.mobile`
    height: ${({ theme }) => theme.rem(350)};
  `}
`;

export const StyledLayout = styled.div<{ alignRight?: boolean }>`
  height: auto;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  text-align: ${({ alignRight }) => (alignRight ? "right" : "center")};
  top: 50%;
  transform: translateY(-50%);
  z-index: 200;

  ${includeBreakpoint.tablet`
    right: ${({ alignRight, theme }) => (alignRight ? theme.rem(100) : 0)};
  `}

  ${includeBreakpoint.mobile`
    right: 0;
    text-align: ${({ alignRight }) => alignRight && "center"};
  `}
`;

export const StyledTitle = styled.h2`
  color: white;
  font: ${({ theme }) => `${theme.rem(64)} ${theme.fonts.fontBlack}`};
  margin-bottom: ${({ theme }) => theme.rem(15)};
  text-transform: uppercase;

  ${includeBreakpoint.tablet`
    font-size: ${({ theme }) => theme.rem(36)};
  `}

  ${includeBreakpoint.mobile`
    font-size: ${({ theme }) => theme.rem(28)};
  `}
`;

const StyledArrow = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.orange};
  cursor: pointer;
  height: ${({ theme }) => theme.rem(100)};
  padding: 0;
  top: 50%;
  width: ${({ theme }) => theme.rem(40)};
  z-index: 200;

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledArrowLeft = styled(StyledArrow)`
  left: ${({ theme }) => theme.rem(70)};
  transform: translateY(-50%) rotate(180deg);

  ${includeBreakpoint.tablet`
    left: ${({ theme }) => theme.rem(30)};
  `}

  ${includeBreakpoint.mobile`
    left: ${({ theme }) => theme.rem(15)};
  `}
`;

export const StyledArrowRight = styled(StyledArrow)`
  right: ${({ theme }) => theme.rem(70)};
  transform: translateY(-50%);

  ${includeBreakpoint.tablet`
    right: ${({ theme }) => theme.rem(30)};
  `}

  ${includeBreakpoint.mobile`
    right: ${({ theme }) => theme.rem(15)};
  `}
`;
